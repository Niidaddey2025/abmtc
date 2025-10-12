# Email Setup Instructions for ABMTC Frontend

This document explains how to set up email functionality for the contact and application forms.

## Overview

The project now includes email functionality that sends form submissions to `sdadzie1221@gmail.com` from `quantumflairetechnologies@gmail.com`.

## Setup Instructions

### 1. Install Dependencies

First, install the required packages:

```bash
npm install nodemailer @types/nodemailer
```

### 2. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
EMAIL_FROM=quantumflairetechnologies@gmail.com
EMAIL_TO=sdadzie1221@gmail.com
EMAIL_PASSWORD=your_app_password_here
```

### 3. Gmail App Password Setup

For Gmail to work with nodemailer, you need to create an App Password:

1. **Enable 2-Factor Authentication** on the Gmail account (`quantumflairetechnologies@gmail.com`)
2. Go to Google Account settings → Security → 2-Step Verification
3. Scroll down to "App passwords" and click on it
4. Select "Mail" as the app and "Other" as the device
5. Enter "ABMTC Website" as the device name
6. Copy the generated 16-character password
7. Use this password as the `EMAIL_PASSWORD` in your `.env.local` file

### 4. API Routes

The following API routes have been created:

- `/api/contact` - Handles contact form submissions
- `/api/apply` - Handles application form submissions

### 5. Form Updates

Both forms have been updated to:
- Submit data to their respective API endpoints
- Show loading states during submission
- Display success/error messages
- Reset forms after successful submission

## Email Templates

### Contact Form Email
- **Subject**: `ABMTC Contact Form: [Subject]`
- **Content**: Formatted HTML with contact details and message

### Application Form Email
- **Subject**: `ABMTC Application Submission - [First Name] [Last Name]`
- **Content**: Comprehensive HTML template with all application details organized by sections

## Testing

To test the email functionality:

1. Start the development server: `npm run dev`
2. Navigate to the contact page (`/contact`) or apply page (`/apply`)
3. Fill out and submit the forms
4. Check the recipient email (`sdadzie1221@gmail.com`) for the submissions

## Troubleshooting

### Common Issues

1. **"Invalid login" error**: Make sure you're using an App Password, not the regular Gmail password
2. **"Less secure app access" error**: This shouldn't occur with App Passwords, but ensure 2FA is enabled
3. **Network errors**: Check your internet connection and firewall settings

### Error Handling

The forms include comprehensive error handling:
- Network errors are caught and displayed to users
- Server errors return appropriate HTTP status codes
- Validation errors for missing required fields

## Security Notes

- Never commit the `.env.local` file to version control
- Use App Passwords instead of regular passwords
- The email credentials are stored securely in environment variables
- Form data is validated on both client and server sides

## File Structure

```
app/
├── api/
│   ├── contact/
│   │   └── route.ts
│   └── apply/
│       └── route.ts
├── contact/
│   └── page.tsx (updated)
└── apply/
    └── page.tsx (updated)
```
