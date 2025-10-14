import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `ABMTC Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; font-size: 16px; line-height: 1.6;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; font-size: 24px;">
            ABMTC Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0; font-size: 20px;">Contact Details</h3>
            <p style="font-size: 16px; margin: 12px 0;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; margin: 12px 0;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px; margin: 12px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p style="font-size: 16px; margin: 12px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
            <h3 style="color: #007bff; margin-top: 0; font-size: 20px;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap; font-size: 16px; margin: 12px 0;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 14px; color: #6c757d;">
            <p style="margin: 8px 0;">This email was sent from the ABMTC website contact form.</p>
            <p style="margin: 8px 0;">Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
