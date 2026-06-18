import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function sanitizeHTML(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields: name, email, message",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email format",
        },
        { status: 400 }
      );
    }

    // Create transporter (HARDCODED - NOT SECURE)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "eternalsupportservices@gmail.com",
        pass: "bawt ancw wygb hxxu", // App password
      },
    });

    // Sanitize inputs
    const sanitizedName = sanitizeHTML(body.name);
    const sanitizedEmail = sanitizeHTML(body.email);
    const sanitizedMessage = sanitizeHTML(body.message);
    const rating = body.rating || "Not provided";

    // Send email
    await transporter.sendMail({
      from: "eternalsupportservices@gmail.com",
      to: "eternalsupportservices@gmail.com",
      replyTo: sanitizedEmail,
      subject: "New Website Feedback",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 20px; border-radius: 8px;">
            <h2 style="color: #333;">New Feedback Received</h2>
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Rating:</strong> ${rating}/5</p>
            <h3 style="color: #333; margin-top: 20px;">Feedback</h3>
            <p style="white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for your feedback!",
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send feedback. Please try again later.",
      },
      { status: 500 }
    );
  }
}