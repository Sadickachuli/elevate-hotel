import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, checkIn, checkOut, room, guests, specialRequests } = body

    if (!name || !email || !phone || !checkIn || !checkOut || !room) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      )
    }

    // In production, send email via Resend or Nodemailer + forward to hotel PMS
    console.log('Booking request:', {
      name,
      email,
      phone,
      checkIn,
      checkOut,
      room,
      guests,
      specialRequests,
      timestamp: new Date().toISOString(),
      to: process.env.CONTACT_EMAIL || 'reservations.elevatesuites@gmail.com',
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you. We will confirm your reservation within 2 hours.',
      bookingRef: `ELV-${Date.now().toString(36).toUpperCase()}`,
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to process your booking request' },
      { status: 500 }
    )
  }
}
