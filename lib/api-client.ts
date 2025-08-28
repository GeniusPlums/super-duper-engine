// API client utility for handling form submissions and errors

export interface ApiError {
  error: string
  code?: string
  details?: Array<{
    field: string
    message: string
  }>
}

export interface ApiResponse<T = any> {
  success?: boolean
  message?: string
  data?: T
  submissionId?: number
}

export class ApiClientError extends Error {
  public code?: string
  public details?: Array<{ field: string; message: string }>
  public status: number

  constructor(message: string, status: number, code?: string, details?: Array<{ field: string; message: string }>) {
    super(message)
    this.name = 'ApiClientError'
    this.status = status
    this.code = code
    this.details = details
  }
}

export async function submitContactForm(data: {
  name: string
  phone: string
  email?: string
  message?: string
  submissionType?: string
}): Promise<ApiResponse> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new ApiClientError(
        result.error || 'Failed to submit form',
        response.status,
        result.code,
        result.details
      )
    }

    return result
  } catch (error) {
    if (error instanceof ApiClientError) {
      throw error
    }

    // Handle network errors or other unexpected errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new ApiClientError(
        'Network error. Please check your internet connection and try again.',
        0,
        'NETWORK_ERROR'
      )
    }

    throw new ApiClientError(
      'An unexpected error occurred. Please try again.',
      500,
      'UNKNOWN_ERROR'
    )
  }
}

// Utility function to get user-friendly error messages
export function getErrorMessage(error: ApiClientError): string {
  switch (error.code) {
    case 'RATE_LIMITED':
      return 'You have submitted too many requests. Please wait a few minutes before trying again.'
    case 'VALIDATION_ERROR':
      if (error.details && error.details.length > 0) {
        return `Please fix the following errors: ${error.details.map(d => d.message).join(', ')}`
      }
      return 'Please check your input and try again.'
    case 'NETWORK_ERROR':
      return 'Unable to connect to the server. Please check your internet connection and try again.'
    case 'INTERNAL_ERROR':
      return 'Our servers are experiencing issues. Please try again in a few minutes.'
    default:
      return error.message || 'An unexpected error occurred. Please try again.'
  }
}

// Utility function to check if error is retryable
export function isRetryableError(error: ApiClientError): boolean {
  return ['NETWORK_ERROR', 'INTERNAL_ERROR'].includes(error.code || '')
}

// Utility function to get retry delay based on error type
export function getRetryDelay(error: ApiClientError, attempt: number): number {
  if (error.code === 'RATE_LIMITED') {
    return 15 * 60 * 1000 // 15 minutes for rate limiting
  }
  
  // Exponential backoff for other retryable errors
  return Math.min(1000 * Math.pow(2, attempt), 30000) // Max 30 seconds
}
