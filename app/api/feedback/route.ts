import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Input validation
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitize HTML to prevent injection
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
    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("❌ Missing email credentials in .env");
      return NextResponse.json(
        {
          success: false,
          message: "Email configuration error",
        },
        { status: 500 }
      );
    }

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

    // Validate email format
    if (!validateEmail(body.email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email format",
        },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Sanitize inputs
    const sanitizedName = sanitizeHTML(body.name);
    const sanitizedEmail = sanitizeHTML(body.email);
    const sanitizedMessage = sanitizeHTML(body.message);
    const rating = body.rating || "Not provided";

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
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

            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #999; font-size: 12px;">
              This email was sent from your website feedback form.
            </p>
          </div>
        </div>
      `,
    });

    console.log("✅ Feedback email sent successfully");

    return NextResponse.json({
      success: true,
      message: "Thank you for your feedback!",
    });
  } catch (error) {
    console.error("❌ Feedback Error:", error);

    // Better error messages for debugging
    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send feedback. Please try again later.",
        error: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      {
        status: 500,
      }
    );
  }
}