"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // SSL bağlantısı için true olmalı
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error("Something Went Wrong", error);
    return;
  }
  const info = await transporter.sendMail({
    from: email,
    to: sendTo || process.env.NEXT_PUBLIC_EMAIL_TO,
    subject: subject,
    text: text,
    html: html ? html : "",
  });
  return info;
}
