import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const getString = (key: string) => {
      const value = formData.get(key)
      return typeof value === 'string' ? value.trim() : ''
    }

    const getOptionalString = (key: string) => {
      const value = formData.get(key)
      return typeof value === 'string' ? value.trim() : ''
    }

    const getFile = (key: string) => {
      const value = formData.get(key)
      return value && typeof value !== 'string' ? value : null
    }

    // Personal Information
    const firstName = getString('firstName')
    const lastName = getString('lastName')
    const dateOfBirth = getString('dateOfBirth')
    const gender = getString('gender')
    const maritalStatus = getString('maritalStatus')
    const nationality = getString('nationality')
    const email = getString('email')
    const phone = getString('phone')
    const profession = getString('profession')
    const currentWork = getString('currentWork')
    const postalAddress = getString('postalAddress')
    const residentialAddress = getString('residentialAddress')
    const settlement = getString('settlement')
    const nextOfKin = getString('nextOfKin')
    const nextOfKinContact = getString('nextOfKinContact')
    const fatherFullName = getString('fatherFullName')
    const fatherProfession = getString('fatherProfession')
    const motherFullName = getString('motherFullName')
    const motherProfession = getString('motherProfession')
    const guardianFullName = getString('guardianFullName')
    const guardianProfession = getString('guardianProfession')
    const parentGuardianOwnHouse = getString('parentGuardianOwnHouse')
    const parentGuardianRentHouse = getString('parentGuardianRentHouse')
    const parentGuardianOwnBusiness = getString('parentGuardianOwnBusiness')
    const parentGuardianOwnCar = getString('parentGuardianOwnCar')
    const financialSupport = getString('financialSupport')

    const educationalCertificateFile = getFile('educationalCertificate')

    // Spiritual Background
    const testimony = getString('testimony')
    const salvationDate = getOptionalString('salvationDate')
    const churchName = getString('churchName')
    const pastorName = getString('pastorName')
    const pastorEmail = getString('pastorEmail')
    const ministryExperience = getOptionalString('ministryExperience')

    // Program Selection
    const program = getString('program')
    const startDate = getString('startDate')
    const housingNeeded = getOptionalString('housingNeeded')
    const dietaryRestrictions = getOptionalString('dietaryRestrictions')

    // References
    const reference1Name = getString('reference1Name')
    const reference1Email = getString('reference1Email')
    const reference1Phone = getString('reference1Phone')
    const reference2Name = getString('reference2Name')
    const reference2Email = getString('reference2Email')
    const reference2Phone = getString('reference2Phone')

    // Validate required fields (guardianFullName and guardianProfession are now optional)
    const requiredPersonalFields = [
      firstName, lastName, dateOfBirth, gender, maritalStatus, nationality,
      email, phone, profession, currentWork, postalAddress, residentialAddress,
      settlement, nextOfKin, nextOfKinContact, fatherFullName, fatherProfession,
      motherFullName, motherProfession,
      parentGuardianOwnHouse, parentGuardianRentHouse, parentGuardianOwnBusiness,
      parentGuardianOwnCar, financialSupport
    ]

    if (requiredPersonalFields.some(field => !field)) {
      return NextResponse.json(
        { error: 'Missing required personal information fields' },
        { status: 400 }
      )
    }

    if (!educationalCertificateFile || educationalCertificateFile.size === 0) {
      return NextResponse.json(
        { error: 'Educational certificate PDF is required' },
        { status: 400 }
      )
    }

    if (educationalCertificateFile.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Educational certificate must be a PDF file' },
        { status: 400 }
      )
    }

    // testimony and pastorEmail are now optional, ministryExperience was already optional
    if (!churchName || !pastorName) {
      return NextResponse.json(
        { error: 'Missing required spiritual background fields (Church Name and Pastor Name)' },
        { status: 400 }
      )
    }

    if (!program || !startDate) {
      return NextResponse.json(
        { error: 'Missing required program selection fields' },
        { status: 400 }
      )
    }

    // Reference 2 is now optional
    if (!reference1Name || !reference1Email || !reference1Phone) {
      return NextResponse.json(
        { error: 'Missing required reference fields (Reference 1 is required)' },
        { status: 400 }
      )
    }

    const attachments = [] as { filename: string; content: Buffer; contentType: string }[]

    if (educationalCertificateFile) {
      const certificateBuffer = Buffer.from(await educationalCertificateFile.arrayBuffer())
      attachments.push({
        filename: educationalCertificateFile.name || 'educational-certificate.pdf',
        content: certificateBuffer,
        contentType: educationalCertificateFile.type || 'application/pdf',
      })
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
      subject: `ABMTC Application Submission - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; font-size: 16px; line-height: 1.6;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; font-size: 28px;">
            ABMTC Application Submission
          </h2>
          
          <!-- Personal Information -->
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0; font-size: 22px;">Personal Information</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <p style="font-size: 16px; margin: 10px 0;"><strong>First Name:</strong> ${firstName}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Last Name:</strong> ${lastName}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Date of Birth:</strong> ${dateOfBirth}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Gender:</strong> ${gender}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Marital Status:</strong> ${maritalStatus}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Nationality:</strong> ${nationality}</p>
            </div>
            
            <h4 style="color: #007bff; margin-top: 20px; font-size: 18px;">Contact Information</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <p style="font-size: 16px; margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
            </div>
            
            <h4 style="color: #007bff; margin-top: 20px; font-size: 18px;">Professional Information</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <p style="font-size: 16px; margin: 10px 0;"><strong>Profession:</strong> ${profession}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Current Work:</strong> ${currentWork}</p>
            </div>
            
            <h4 style="color: #007bff; margin-top: 20px; font-size: 18px;">Address Information</h4>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Postal Address:</strong> ${postalAddress}</p>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Residential Address:</strong> ${residentialAddress}</p>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Settlement:</strong> ${settlement}</p>
            
            <h4 style="color: #007bff; margin-top: 20px; font-size: 18px;">Next of Kin</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <p style="font-size: 16px; margin: 10px 0;"><strong>Next of Kin:</strong> ${nextOfKin}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Contact:</strong> ${nextOfKinContact}</p>
            </div>
            
            <h4 style="color: #007bff; margin-top: 20px; font-size: 18px;">Family Information</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <p style="font-size: 16px; margin: 10px 0;"><strong>Father's Name:</strong> ${fatherFullName}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Father's Profession:</strong> ${fatherProfession}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Mother's Name:</strong> ${motherFullName}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Mother's Profession:</strong> ${motherProfession}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Guardian's Name:</strong> ${guardianFullName}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Guardian's Profession:</strong> ${guardianProfession}</p>
            </div>
            
            <h4 style="color: #007bff; margin-top: 20px; font-size: 18px;">Family Financial Information</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <p style="font-size: 16px; margin: 10px 0;"><strong>Parent/Guardian Own House:</strong> ${parentGuardianOwnHouse}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Parent/Guardian Rent House:</strong> ${parentGuardianRentHouse}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Parent/Guardian Own Business:</strong> ${parentGuardianOwnBusiness}</p>
              <p style="font-size: 16px; margin: 10px 0;"><strong>Parent/Guardian Own Car:</strong> ${parentGuardianOwnCar}</p>
            </div>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Financial Support:</strong> ${financialSupport}</p>
            
            <h4 style="color: #007bff; margin-top: 20px; font-size: 18px;">Educational Information</h4>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Educational Certificate:</strong> ${educationalCertificateFile?.name || 'See attached PDF'}</p>
          </div>
          
          <!-- Spiritual Background -->
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0; font-size: 22px;">Spiritual Background</h3>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Church Name:</strong> ${churchName}</p>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Pastor's Name:</strong> ${pastorName}</p>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Pastor's Email:</strong> ${pastorEmail}</p>
            ${salvationDate ? `<p style="font-size: 16px; margin: 10px 0;"><strong>Salvation Date:</strong> ${salvationDate}</p>` : ''}
            
            <h4 style="color: #007bff; margin-top: 20px; font-size: 18px;">Personal Testimony</h4>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 3px;">
              <p style="line-height: 1.6; white-space: pre-wrap; font-size: 16px;">${testimony}</p>
            </div>
            
            ${ministryExperience ? `
              <h4 style="color: #007bff; margin-top: 20px; font-size: 18px;">Ministry Experience</h4>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 3px;">
                <p style="line-height: 1.6; white-space: pre-wrap; font-size: 16px;">${ministryExperience}</p>
              </div>
            ` : ''}
          </div>
          
          <!-- Program Selection -->
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0; font-size: 22px;">Program Details</h3>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Program:</strong> ${program}</p>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Start Date:</strong> ${startDate}</p>
            ${housingNeeded ? `<p style="font-size: 16px; margin: 10px 0;"><strong>Housing Needed:</strong> ${housingNeeded}</p>` : ''}
            ${dietaryRestrictions ? `<p style="font-size: 16px; margin: 10px 0;"><strong>Dietary Restrictions:</strong> ${dietaryRestrictions}</p>` : ''}
          </div>
          
          <!-- References -->
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0; font-size: 22px;">References</h3>
            
            <h4 style="color: #007bff; font-size: 18px;">Reference 1 (Primary Pastor)</h4>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Name:</strong> ${reference1Name}</p>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Email:</strong> ${reference1Email}</p>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Phone:</strong> ${reference1Phone}</p>
            
            <h4 style="color: #007bff; margin-top: 20px; font-size: 18px;">Reference 2 (Ministry Leader)</h4>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Name:</strong> ${reference2Name}</p>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Email:</strong> ${reference2Email}</p>
            <p style="font-size: 16px; margin: 10px 0;"><strong>Phone:</strong> ${reference2Phone}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 14px; color: #6c757d;">
            <p style="margin: 8px 0;">This application was submitted through the ABMTC website.</p>
            <p style="margin: 8px 0;">Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      attachments,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending application email:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}
