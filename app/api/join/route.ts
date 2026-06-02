import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate inputs
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required fields." },
        { status: 400 }
      );
    }

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "eternalsupportservices@gmail.com",
    pass: "fmgx owbd qyks scvg",
  },
});
    // Email structure layout
    const mailOptions = {
      from: `"Support Registry" <${process.env.EMAIL_USER}>`, 
      to: "your-receiving-email@gmail.com", // 👈 Set your actual inbox email here
      replyTo: email, 
      subject: `🚨 New Support Registration: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
            New Registration Details
          </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong> ${message || "No message left."}</p>
        </div>
      `,
    };

    // Await email delivery execution
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Form submitted and email sent successfully!" });

  } catch (error) {
    console.error("Backend Route Error Log:", error);
    return NextResponse.json(
      { success: false, message: "Server processed form, but failed to send email." },
      { status: 500 }
    );
  }
}