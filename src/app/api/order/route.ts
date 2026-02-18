import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req:Request) {
    const data = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: process.env.ORDER_TO_EMAIL,
    subject: "Нове замовлення",
    text: JSON.stringify(data, null, 2),
  });

  return NextResponse.json({ ok: true });
}