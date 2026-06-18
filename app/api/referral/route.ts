import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Hardcoded email configuration
    const emailUser = "eternalsupportservices@gmail.com";
    const emailPassword = "bawt ancw wygb hxxu";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    await transporter.verify();

    const emailHTML = `
      <div style="font-family: Arial, sans-serif;">
        <h2>New NDIS Referral Received</h2>

        <p><strong>Full Name:</strong> ${body.fullName || "Not provided"}</p>
        <p><strong>Email:</strong> ${body.email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
        <p><strong>Address:</strong> ${body.address || "Not provided"}</p>
        <p><strong>Disability:</strong> ${body.disability || "Not provided"}</p>
        <p><strong>Funding Type:</strong> ${body.fundingType || "Not provided"}</p>
        <p><strong>Additional Details:</strong> ${body.additionalDetails || "None"}</p>
      </div>
    `;

    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      replyTo: body.email || emailUser,
      subject: `New NDIS Referral - ${body.fullName || "New Submission"}`,
      html: emailHTML,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Referral submitted successfully! We will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit referral.",
      },
      { status: 500 }
    );
  }
}