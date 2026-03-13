import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // In production, send email via Resend or Nodemailer
    // For now, log and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
      to: process.env.CONTACT_EMAIL || 'reservations.elevatesuites@gmail.com',
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will respond within 24 hours.',
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
}
