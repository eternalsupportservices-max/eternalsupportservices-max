import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  console.log("=== REFERRAL API CALLED ===");
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("All env keys:", Object.keys(process.env).filter(k => k.includes('EMAIL')));
  console.log("process.env.EMAIL_USER exists:", !!process.env.EMAIL_USER);
  console.log("process.env.EMAIL_PASSWORD exists:", !!process.env.EMAIL_PASSWORD);

  try {
    // Parse request body
    const body = await request.json();
    console.log("Request body received:", body.fullName, body.email);

    // Get env variables with fallback check
    const emailUser = process.env.EMAIL_USER?.trim();
    const emailPassword = process.env.EMAIL_PASSWORD?.trim();

    console.log("emailUser:", emailUser ? "SET (" + emailUser.length + " chars)" : "NOT SET");
    console.log("emailPassword:", emailPassword ? "SET (" + emailPassword.length + " chars)" : "NOT SET");

    if (!emailUser || !emailPassword) {
      console.error("❌ Missing email credentials!");
      console.error("Check that .env.local exists at project root with:");
      console.error("EMAIL_USER=eternalsupportservices@gmail.com");
      console.error("EMAIL_PASSWORD=fmgx owbd qyks scvg");
      
      return NextResponse.json(
        { 
          success: false, 
          message: "Server error: Email credentials not configured. Contact administrator." 
        },
        { status: 500 }
      );
    }

    console.log("✅ Email credentials loaded successfully");

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // Test connection
    console.log("Testing email connection...");
    await transporter.verify();
    console.log("✅ Email connection verified");

    // Build email HTML
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
        <h2 style="color: #6b21a8;">New NDIS Referral Received</h2>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
        
        <h3 style="color: #1e293b;">Participant Details</h3>
        <p><strong>Full Name:</strong> ${body.fullName || "Not provided"}</p>
        <p><strong>Gender:</strong> ${body.gender || "Not provided"}</p>
        <p><strong>Date of Birth:</strong> ${body.dob || "Not provided"}</p>
        <p><strong>Phone:</strong> ${body.phoneCountryCode || ""} ${body.phone || "Not provided"}</p>
        <p><strong>Email:</strong> ${body.email || "Not provided"}</p>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
        
        <h3 style="color: #1e293b;">Address Information</h3>
        <p><strong>Street Address:</strong> ${body.address || "Not provided"}</p>
        <p><strong>Suburb:</strong> ${body.suburb || "Not provided"}</p>
        <p><strong>State:</strong> ${body.state || "Not provided"}</p>
        <p><strong>Postcode:</strong> ${body.postcode || "Not provided"}</p>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
        
        <h3 style="color: #1e293b;">Support Information</h3>
        <p><strong>Disability:</strong> ${body.disability || "Not provided"}</p>
        <p><strong>Funding Type:</strong> ${body.fundingType || "Not provided"}</p>
        <p><strong>Support Frequency:</strong> ${body.supportFrequency || "Not provided"}</p>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
        
        <h3 style="color: #1e293b;">Additional Details</h3>
        <p>${body.additionalDetails || "None"}</p>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
        
        <h3 style="color: #1e293b;">Enquirer Information</h3>
        <p><strong>Referral For:</strong> ${body.referralFor || "Myself"}</p>
        ${body.referralFor === "Someone Else" ? `
          <p><strong>Enquirer Name:</strong> ${body.enquirerName || "Not provided"}</p>
          <p><strong>Relationship:</strong> ${body.relationship || "Not provided"}</p>
          <p><strong>Enquirer Phone:</strong> ${body.enquirerCountryCode || ""} ${body.enquirerPhone || "Not provided"}</p>
          <p><strong>Enquirer Email:</strong> ${body.enquirerEmail || "Not provided"}</p>
        ` : ""}
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
        <p style="color: #64748b; font-size: 12px;">This email was automatically generated from the NDIS Referral Intake Portal.</p>
      </div>
    `;

    console.log("Sending email to:", emailUser);

    // Send email
    const info = await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      replyTo: body.email || emailUser,
      subject: `New NDIS Referral - ${body.fullName || "New Submission"}`,
      html: emailHTML,
    });

    console.log("✅ Email sent successfully!");
    console.log("Message ID:", info.messageId);

    return NextResponse.json(
      {
        success: true,
        message: "Referral submitted successfully! We will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("=== API ERROR ===");
    console.error("Error type:", error instanceof Error ? error.constructor.name : typeof error);
    console.error("Error message:", error instanceof Error ? error.message : String(error));
    if (error instanceof Error) {
      console.error("Error stack:", error.stack);
    }

    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json(
      {
        success: false,
        message: `Failed to submit referral: ${errorMessage}`,
      },
      { status: 500 }
    );
  }
}