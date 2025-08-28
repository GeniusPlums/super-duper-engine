import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { insertContactSubmission } from '@/lib/database'

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name is too long'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(20, 'Phone number is too long'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  message: z.string().max(2000, 'Message is too long').optional(),
  submissionType: z.string().default('partnership'),
})

// Rate limiting (simple in-memory store - in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // Max 5 requests per 15 minutes

  const record = rateLimitMap.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return false
  }
  
  if (record.count >= maxRequests) {
    return true
  }
  
  record.count++
  return false
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP
  }
  
  return 'unknown'
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request)
    
    // Check rate limiting
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          code: 'RATE_LIMITED'
        },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Get additional request metadata
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Prepare data for database insertion
    const submissionData = {
      name: validatedData.name.trim(),
      phone: validatedData.phone.trim(),
      email: validatedData.email?.trim() || null,
      message: validatedData.message?.trim() || null,
      submission_type: validatedData.submissionType,
      ip_address: clientIP,
      user_agent: userAgent,
    }

    // Insert into database
    const result = await insertContactSubmission(submissionData)

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        submissionId: result.id,
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Contact form submission error:', error)

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          })),
          code: 'VALIDATION_ERROR'
        },
        { status: 400 }
      )
    }

    // Handle database errors
    if (error instanceof Error) {
      // Don't expose internal database errors to client
      return NextResponse.json(
        {
          error: 'Internal server error. Please try again later.',
          code: 'INTERNAL_ERROR'
        },
        { status: 500 }
      )
    }

    // Generic error fallback
    return NextResponse.json(
      {
        error: 'An unexpected error occurred',
        code: 'UNKNOWN_ERROR'
      },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
