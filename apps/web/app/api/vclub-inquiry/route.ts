import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, title, company, tier, source, message } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      )
    }

    // In production, send email via Resend or Nodemailer
    console.log('V-Club membership inquiry:', {
      name,
      email,
      phone,
      title,
      company,
      tier,
      source,
      message,
      timestamp: new Date().toISOString(),
      to: process.env.CONTACT_EMAIL || 'reservations.elevatesuites@gmail.com',
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you. A member of our team will be in contact within 24 hours.',
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to process your inquiry' },
      { status: 500 }
    )
  }
}
