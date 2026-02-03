import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Validate form data
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email transporter using cPanel email credentials
    // Replace these with your actual cPanel email settings
    const transporter = nodemailer.createTransporter({
      host: 'mail.spacinfotech.co.uk', // Your mail server
      port: 465, // SSL port (or 587 for TLS)
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your cPanel email (e.g., info@spacinfotech.co.uk)
        pass: process.env.EMAIL_PASSWORD, // Your email password
      },
    });

    // Prepare email content for the applicant
    const applicantEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #6425FE 0%, #8B5CF6 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
          }
          .content {
            background: #ffffff;
            padding: 30px;
            border: 1px solid #e0e0e0;
            border-top: none;
          }
          .welcome-text {
            font-size: 18px;
            color: #6425FE;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .info-box {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #6425FE;
          }
          .info-row {
            margin: 10px 0;
          }
          .info-label {
            font-weight: bold;
            color: #6425FE;
          }
          .footer {
            background: #f8f9fa;
            padding: 20px 30px;
            text-align: center;
            border-radius: 0 0 10px 10px;
            border: 1px solid #e0e0e0;
            border-top: none;
            font-size: 14px;
            color: #666;
          }
          .button {
            display: inline-block;
            background: #6425FE;
            color: white !important;
            padding: 14px 32px;
            text-decoration: none;
            border-radius: 8px;
            margin: 20px 0;
            font-weight: bold;
          }
          .highlight {
            color: #6425FE;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🎓 Welcome to SPAC Infotech!</h1>
        </div>
        
        <div class="content">
          <p class="welcome-text">Dear ${formData.firstName} ${formData.lastName},</p>
          
          <p>Congratulations and welcome aboard! 🎉</p>
          
          <p>We're thrilled to have you join our <span class="highlight">${formData.courseOfStudy}</span> training program. Your journey to mastering <span class="highlight">${formData.fieldOfExpertise}</span> starts here, and we couldn't be more excited to be part of your learning experience!</p>
          
          <div class="info-box">
            <h3 style="margin-top: 0; color: #6425FE;">📋 Your Registration Details</h3>
            <div class="info-row">
              <span class="info-label">Name:</span> ${formData.firstName} ${formData.lastName}
            </div>
            <div class="info-row">
              <span class="info-label">Email:</span> ${formData.email}
            </div>
            <div class="info-row">
              <span class="info-label">Phone:</span> ${formData.phoneNumber}
            </div>
            <div class="info-row">
              <span class="info-label">Course:</span> ${formData.courseOfStudy}
            </div>
            <div class="info-row">
              <span class="info-label">Field of Expertise:</span> ${formData.fieldOfExpertise}
            </div>
            <div class="info-row">
              <span class="info-label">Available Days:</span> ${formData.daysAvailable.join(', ')}
            </div>
          </div>
          
          <h3 style="color: #6425FE;">🚀 What Happens Next?</h3>
          <ul>
            <li>Our admissions team will review your application within 24-48 hours</li>
            <li>You'll receive detailed information about your cohort start date</li>
            <li>Course materials and joining instructions will be sent to your email</li>
            <li>You'll get access to our student portal and learning resources</li>
          </ul>
          
          <h3 style="color: #6425FE;">💡 Why You Made the Right Choice</h3>
          <p>At SPAC Infotech, we don't just teach - we transform careers. With industry-expert instructors, hands-on projects, and a supportive learning community, you're setting yourself up for success in the tech industry.</p>
          
          <center>
            <a href="https://www.spacinfotech.co.uk" class="button">Visit Our Website</a>
          </center>
          
          <p style="margin-top: 30px;">If you have any questions, don't hesitate to reach out to us. We're here to help you succeed!</p>
          
          <p>Best regards,<br>
          <strong>The SPAC Infotech Team</strong></p>
        </div>
        
        <div class="footer">
          <p><strong>SPAC Infotech</strong><br>
          Email: info@spacinfotech.co.uk<br>
          Website: www.spacinfotech.co.uk</p>
          <p style="font-size: 12px; color: #999; margin-top: 15px;">
            You're receiving this email because you registered for a training program at SPAC Infotech.
          </p>
        </div>
      </body>
      </html>
    `;

    // Admin notification email
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #6425FE; color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; }
          .field { margin: 10px 0; padding: 10px; background: white; border-radius: 5px; }
          .label { font-weight: bold; color: #6425FE; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Training Registration</h2>
          </div>
          <div class="content">
            <div class="field"><span class="label">Name:</span> ${formData.firstName} ${formData.lastName}</div>
            <div class="field"><span class="label">Email:</span> ${formData.email}</div>
            <div class="field"><span class="label">Phone:</span> ${formData.phoneNumber}</div>
            <div class="field"><span class="label">Address:</span> ${formData.homeAddress}</div>
            <div class="field"><span class="label">Course:</span> ${formData.courseOfStudy}</div>
            <div class="field"><span class="label">Expertise:</span> ${formData.fieldOfExpertise}</div>
            <div class="field"><span class="label">Available Days:</span> ${formData.daysAvailable.join(', ')}</div>
            <div class="field"><span class="label">Submitted:</span> ${new Date().toLocaleString()}</div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to applicant
    await transporter.sendMail({
      from: `"SPAC Infotech" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: `Welcome to ${formData.courseOfStudy} Training Program - SPAC Infotech`,
      html: applicantEmailHtml,
    });

    // Send notification to admin
    await transporter.sendMail({
      from: `"SPAC Infotech Registration" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Registration: ${formData.firstName} ${formData.lastName} - ${formData.courseOfStudy}`,
      html: adminEmailHtml,
    });

    return NextResponse.json(
      { message: 'Registration successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing registration:', error);
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    );
  }
}