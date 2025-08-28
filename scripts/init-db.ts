#!/usr/bin/env tsx

import { testConnection, createContactSubmissionsTable, closePool } from '../lib/database'

async function initializeDatabase() {
  console.log('🚀 Initializing database...')

  // Test connection
  console.log('📡 Testing database connection...')
  const connectionSuccess = await testConnection()
  
  if (!connectionSuccess) {
    console.error('❌ Database connection failed. Please check your DATABASE_URL environment variable.')
    process.exit(1)
  }

  console.log('✅ Database connection successful!')

  // Create tables
  console.log('📋 Creating contact_submissions table...')
  const tableCreated = await createContactSubmissionsTable()
  
  if (!tableCreated) {
    console.error('❌ Failed to create contact_submissions table.')
    process.exit(1)
  }

  console.log('✅ Contact submissions table created successfully!')

  // Close the connection
  await closePool()
  console.log('🎉 Database initialization completed!')
}

// Run the initialization
initializeDatabase().catch((error) => {
  console.error('💥 Database initialization failed:', error)
  process.exit(1)
})
