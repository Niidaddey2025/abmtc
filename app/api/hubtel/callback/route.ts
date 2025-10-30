import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Log the callback data for monitoring
    console.log('Hubtel callback received:', body)

    // Here you would typically:
    // 1. Verify the callback signature
    // 2. Update your database with the payment status
    // 3. Send confirmation emails
    // 4. Update any subscription records for recurring payments

    const { Status, Data } = body

    if (Status === 'Success' && Data) {
      // Payment was successful
      // Store payment details in your database
      console.log('Payment successful:', {
        transactionId: Data.TransactionId,
        clientReference: Data.ClientReference,
        amount: Data.Amount,
        customerName: Data.CustomerName,
        customerEmail: Data.CustomerEmail,
      })

      // TODO: Add database logic here to save the donation
      // Example:
      // await db.donations.create({
      //   transactionId: Data.TransactionId,
      //   amount: Data.Amount,
      //   customerName: Data.CustomerName,
      //   customerEmail: Data.CustomerEmail,
      //   status: 'completed',
      //   createdAt: new Date(),
      // })

      // TODO: Send thank you email
      // await sendThankYouEmail(Data.CustomerEmail, Data.Amount)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Callback processing error:', error)
    return NextResponse.json(
      { success: false, error: 'Callback processing failed' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  // Handle GET requests if Hubtel sends them
  const searchParams = request.nextUrl.searchParams
  console.log('Hubtel callback GET:', Object.fromEntries(searchParams))
  
  return NextResponse.json({ success: true })
}
