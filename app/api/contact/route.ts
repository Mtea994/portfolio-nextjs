import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const values = await req.json();
  const { email, subject, message } = values;

  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    service: "yahoo",
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
    debug: false,
    logger: true,
  });

  try {
    const mail = await transporter.sendMail({
      from: `"portfolio" <${process.env.NODEMAILER_USER}>`,
      to: "engg_imtinan@yahoo.com",
      subject: subject,
      replyTo: email,
      html: `
          <h2>Details</h2>
          <ul>
              <li>Email: ${email}</li>
          </ul>
          <h2>Message</h2>
        <p>${message}</p>
        `,
    });
    return NextResponse.json(
      { message: "Form sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error, try it again." },
      { status: 500 }
    );
  }
}
