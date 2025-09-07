# mudrape Landing Page Setup Guide

This guide will help you set up Google Analytics and the contact form database integration for the mudrape landing page.

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database (Neon DB provided)
- Google Analytics account

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   # Google Analytics
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

   # Database
   DATABASE_URL=postgresql://neondb_owner:npg_isgv5qmM8zWy@ep-restless-paper-a8l4jvvf-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require
   ```

3. **Initialize the database:**
   ```bash
   npm run init-db
   ```

## Google Analytics Setup

1. **Get your Google Analytics tracking ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property for your website
   - Copy the tracking ID (format: G-XXXXXXXXXX)

2. **Add the tracking ID to your environment:**
   - Update `.env.local` with your actual Google Analytics tracking ID
   - Replace `G-XXXXXXXXXX` with your real tracking ID

3. **Verify tracking:**
   - Start the development server: `npm run dev`
   - Visit your site and check Google Analytics Real-time reports
   - You should see page views being tracked

## Database Setup

The database is already configured to use the provided Neon PostgreSQL instance. The setup includes:

### Database Schema

The `contact_submissions` table includes:
- `id` - Primary key (auto-increment)
- `name` - Contact's full name (required)
- `phone` - Contact's phone number (required)
- `email` - Contact's email address (optional)
- `message` - Contact's message (optional)
- `submission_type` - Type of submission (default: 'partnership')
- `ip_address` - Client IP address for security
- `user_agent` - Client browser information
- `created_at` - Timestamp of submission
- `updated_at` - Last update timestamp

### API Endpoints

- `POST /api/contact` - Submit contact form data

### Rate Limiting

The API includes basic rate limiting:
- Maximum 5 requests per 15 minutes per IP address
- Returns 429 status code when limit exceeded

## Features Implemented

### Google Analytics Integration
- ✅ Page view tracking
- ✅ Event tracking for form submissions
- ✅ Error tracking for failed submissions
- ✅ Configurable via environment variables

### Contact Form Database Integration
- ✅ Form validation using Zod
- ✅ PostgreSQL database storage
- ✅ Rate limiting protection
- ✅ Error handling and user feedback
- ✅ Loading states and success messages
- ✅ Retry functionality for failed submissions
- ✅ IP address and user agent logging

## Development

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Test the contact form:**
   - Navigate to `/contact`
   - Fill out the partnership form
   - Submit and verify data is stored in the database

3. **Monitor Google Analytics:**
   - Check Real-time reports in Google Analytics
   - Verify page views and events are being tracked

## Production Deployment

1. **Environment Variables:**
   Ensure all environment variables are set in your production environment:
   - `NEXT_PUBLIC_GA_ID`
   - `DATABASE_URL`

2. **Database Migration:**
   Run the database initialization script in production:
   ```bash
   npm run init-db
   ```

3. **Build and Deploy:**
   ```bash
   npm run build
   npm start
   ```

## Troubleshooting

### Google Analytics Not Working
- Verify `NEXT_PUBLIC_GA_ID` is set correctly
- Check browser console for JavaScript errors
- Ensure the tracking ID format is correct (G-XXXXXXXXXX)

### Database Connection Issues
- Verify `DATABASE_URL` is correct
- Check if the database server is accessible
- Ensure SSL settings are properly configured

### Form Submission Errors
- Check browser console for error messages
- Verify API endpoint is accessible
- Check database connection and table existence

## Security Considerations

- Rate limiting is implemented to prevent spam
- Input validation using Zod schemas
- SQL injection protection using parameterized queries
- IP address logging for security monitoring
- Environment variables for sensitive configuration

## Monitoring

- Google Analytics provides user behavior insights
- Database logs contact form submissions
- Error tracking for failed submissions
- Rate limiting logs for security monitoring
