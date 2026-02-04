import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    const transporter = nodemailer.createTransporter({
      host: 'mail.spacinfotech.co.uk',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.verify();
    return NextResponse.json({ message: 'Email connection successful!' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}