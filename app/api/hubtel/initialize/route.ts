import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { amount, customerName, customerEmail, customerPhone, donationType, description } = body

    // Validate required fields
    if (!amount || !customerName || !customerEmail || !customerPhone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Hubtel API credentials - these should be in environment variables
    const HUBTEL_CLIENT_ID = process.env.HUBTEL_CLIENT_ID
    const HUBTEL_CLIENT_SECRET = process.env.HUBTEL_CLIENT_SECRET
    const HUBTEL_MERCHANT_ACCOUNT = process.env.HUBTEL_MERCHANT_ACCOUNT

    if (!HUBTEL_CLIENT_ID || !HUBTEL_CLIENT_SECRET || !HUBTEL_MERCHANT_ACCOUNT) {
      console.error('Missing Hubtel credentials in environment variables')
      return NextResponse.json(
        { success: false, error: 'Payment service configuration error' },
        { status: 500 }
      )
    }

    // Create authorization header
    const auth = Buffer.from(`${HUBTEL_CLIENT_ID}:${HUBTEL_CLIENT_SECRET}`).toString('base64')

    // Generate unique invoice number
    const invoiceNumber = `ABMTC-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Prepare Hubtel payment request
    const hubtelPayload = {
      totalAmount: amount,
      description: description || 'Donation to ABMTC',
      callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/hubtel/callback`,
      returnUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/donate/success`,
      cancellationUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/donate/cancelled`,
      merchantAccountNumber: HUBTEL_MERCHANT_ACCOUNT,
      clientReference: invoiceNumber,
      customerName: customerName,
      customerEmail: customerEmail,
      customerMobileNumber: customerPhone,
      metadata: {
        donationType: donationType,
        timestamp: new Date().toISOString(),
      },
    }

    // Make request to Hubtel API
    const hubtelResponse = await fetch('https://payproxyapi.hubtel.com/items/initiate', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hubtelPayload),
    })

    const hubtelData = await hubtelResponse.json()

    if (hubtelResponse.ok && hubtelData.status === 'Success') {
      return NextResponse.json({
        success: true,
        checkoutUrl: hubtelData.data.checkoutUrl,
        invoiceNumber: invoiceNumber,
      })
    } else {
      console.error('Hubtel API error:', hubtelData)
      return NextResponse.json(
        { success: false, error: 'Payment initialization failed' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Payment initialization error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
