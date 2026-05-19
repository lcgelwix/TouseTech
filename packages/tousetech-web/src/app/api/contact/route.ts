import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, comments } = await req.json();

  if (!name || !email || !comments) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
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
    from: `"TouseTech Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `[TouseTech] Question / Comment from ${name}`,
    html: `
      <h2>New question / comment from ${name}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr />
      <p>${comments.replace(/\n/g, '<br />')}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
