import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, business, email, phone, message } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"TouseTech" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `[TouseTech] Free Consultation Request — ${name}${business ? ` (${business})` : ''}`,
    html: `
      <h2>New Free Consultation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Business:</strong> ${business || 'Not provided'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message ? message.replace(/\n/g, '<br />') : 'No message provided.'}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
