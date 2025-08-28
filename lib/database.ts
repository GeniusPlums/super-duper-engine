import { Pool } from 'pg'

// Create a connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
})

// Test the connection
export async function testConnection() {
  try {
    const client = await pool.connect()
    await client.query('SELECT NOW()')
    client.release()
    console.log('Database connected successfully')
    return true
  } catch (error) {
    console.error('Database connection failed:', error)
    return false
  }
}

// Create the contact_submissions table
export async function createContactSubmissionsTable() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      email VARCHAR(255),
      message TEXT,
      submission_type VARCHAR(50) DEFAULT 'partnership',
      ip_address INET,
      user_agent TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    
    -- Create an index on created_at for better query performance
    CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
    ON contact_submissions(created_at);
    
    -- Create an index on submission_type for filtering
    CREATE INDEX IF NOT EXISTS idx_contact_submissions_type 
    ON contact_submissions(submission_type);
  `

  try {
    const client = await pool.connect()
    await client.query(createTableQuery)
    client.release()
    console.log('Contact submissions table created successfully')
    return true
  } catch (error) {
    console.error('Error creating contact submissions table:', error)
    return false
  }
}

// Interface for contact submission data
export interface ContactSubmission {
  id?: number
  name: string
  phone: string
  email?: string
  message?: string
  submission_type?: string
  ip_address?: string
  user_agent?: string
  created_at?: Date
  updated_at?: Date
}

// Insert a new contact submission
export async function insertContactSubmission(data: Omit<ContactSubmission, 'id' | 'created_at' | 'updated_at'>) {
  const insertQuery = `
    INSERT INTO contact_submissions (name, phone, email, message, submission_type, ip_address, user_agent)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `

  try {
    const client = await pool.connect()
    const result = await client.query(insertQuery, [
      data.name,
      data.phone,
      data.email || null,
      data.message || null,
      data.submission_type || 'partnership',
      data.ip_address || null,
      data.user_agent || null,
    ])
    client.release()
    return result.rows[0] as ContactSubmission
  } catch (error) {
    console.error('Error inserting contact submission:', error)
    throw error
  }
}

// Get all contact submissions with pagination
export async function getContactSubmissions(page = 1, limit = 10) {
  const offset = (page - 1) * limit
  const selectQuery = `
    SELECT * FROM contact_submissions
    ORDER BY created_at DESC
    LIMIT $1 OFFSET $2;
  `

  const countQuery = `
    SELECT COUNT(*) as total FROM contact_submissions;
  `

  try {
    const client = await pool.connect()
    const [dataResult, countResult] = await Promise.all([
      client.query(selectQuery, [limit, offset]),
      client.query(countQuery),
    ])
    client.release()

    return {
      data: dataResult.rows as ContactSubmission[],
      total: parseInt(countResult.rows[0].total),
      page,
      limit,
      totalPages: Math.ceil(parseInt(countResult.rows[0].total) / limit),
    }
  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    throw error
  }
}

// Close the pool (useful for cleanup)
export async function closePool() {
  await pool.end()
}

export default pool
