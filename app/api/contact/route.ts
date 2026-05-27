import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // Configure your SMTP transport via environment variables
  // Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL in Vercel settings
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'basherbd24@gmail.com',
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 12px;">
          <h2 style="color: #1a1a1a; margin-bottom: 16px;">New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 80px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; color: #1a1a1a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #1a1a1a;">${email}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border-left: 3px solid #6ee7b7;">
            <p style="color: #666; margin-bottom: 8px;"><strong>Message:</strong></p>
            <p style="color: #1a1a1a; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
