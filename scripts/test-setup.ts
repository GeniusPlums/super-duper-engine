#!/usr/bin/env tsx

import { testConnection, insertContactSubmission, getContactSubmissions, closePool } from '../lib/database'

async function testDatabaseSetup() {
  console.log('🧪 Testing database setup...')

  try {
    // Test connection
    console.log('📡 Testing database connection...')
    const connectionSuccess = await testConnection()
    
    if (!connectionSuccess) {
      console.error('❌ Database connection failed')
      return false
    }
    console.log('✅ Database connection successful')

    // Test inserting a sample contact submission
    console.log('📝 Testing contact submission insertion...')
    const testSubmission = {
      name: 'Test User',
      phone: '1234567890',
      email: 'test@example.com',
      message: 'This is a test submission',
      submission_type: 'partnership',
      ip_address: '127.0.0.1',
      user_agent: 'Test Script',
    }

    const insertedSubmission = await insertContactSubmission(testSubmission)
    console.log('✅ Test submission inserted:', insertedSubmission.id)

    // Test retrieving submissions
    console.log('📋 Testing contact submissions retrieval...')
    const submissions = await getContactSubmissions(1, 5)
    console.log(`✅ Retrieved ${submissions.data.length} submissions (Total: ${submissions.total})`)

    // Display the test submission
    const testRecord = submissions.data.find(s => s.id === insertedSubmission.id)
    if (testRecord) {
      console.log('✅ Test submission found in database:')
      console.log(`   - ID: ${testRecord.id}`)
      console.log(`   - Name: ${testRecord.name}`)
      console.log(`   - Phone: ${testRecord.phone}`)
      console.log(`   - Email: ${testRecord.email}`)
      console.log(`   - Created: ${testRecord.created_at}`)
    }

    return true

  } catch (error) {
    console.error('❌ Database test failed:', error)
    return false
  } finally {
    await closePool()
  }
}

async function testEnvironmentVariables() {
  console.log('🔧 Testing environment variables...')

  // Check Google Analytics ID
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  if (!gaId) {
    console.warn('⚠️  NEXT_PUBLIC_GA_ID not set - Google Analytics will not work')
  } else if (!gaId.startsWith('G-')) {
    console.warn('⚠️  NEXT_PUBLIC_GA_ID format may be incorrect (should start with G-)')
  } else {
    console.log('✅ Google Analytics ID configured')
  }

  // Check Database URL
  const dbUrl = process.env.DATABASE_URL
  if (!dbUrl) {
    console.error('❌ DATABASE_URL not set - Database will not work')
    return false
  } else if (!dbUrl.startsWith('postgresql://')) {
    console.warn('⚠️  DATABASE_URL format may be incorrect (should start with postgresql://)')
  } else {
    console.log('✅ Database URL configured')
  }

  return true
}

async function runTests() {
  console.log('🚀 Running setup tests...\n')

  // Test environment variables
  const envSuccess = await testEnvironmentVariables()
  console.log('')

  if (!envSuccess) {
    console.error('💥 Environment variable tests failed. Please check your .env.local file.')
    process.exit(1)
  }

  // Test database setup
  const dbSuccess = await testDatabaseSetup()
  console.log('')

  if (!dbSuccess) {
    console.error('💥 Database tests failed. Please check your database configuration.')
    process.exit(1)
  }

  console.log('🎉 All tests passed! Your setup is ready.')
  console.log('\nNext steps:')
  console.log('1. Start the development server: npm run dev')
  console.log('2. Visit http://localhost:3000/contact to test the form')
  console.log('3. Check Google Analytics Real-time reports for tracking')
}

// Run the tests
runTests().catch((error) => {
  console.error('💥 Test execution failed:', error)
  process.exit(1)
})
