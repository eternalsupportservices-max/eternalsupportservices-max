import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function sanitizeHTML(text: string): string {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // =========================================================
    // VALIDATE REQUIRED FIELDS
    // =========================================================

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields: name, email, message",
        },
        { status: 400 }
      );
    }

    // =========================================================
    // VALIDATE EMAIL
    // =========================================================

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

    // =========================================================
    // GET EMAIL SETTINGS FROM ENVIRONMENT VARIABLES
    // =========================================================

    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    if (!emailUser || !emailPassword) {
      console.error("EMAIL_USER or EMAIL_PASSWORD is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    // =========================================================
    // CREATE GMAIL TRANSPORTER
    // =========================================================

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // =========================================================
    // SANITIZE USER INPUT
    // =========================================================

    const sanitizedName = sanitizeHTML(body.name);
    const sanitizedEmail = sanitizeHTML(body.email);
    const sanitizedMessage = sanitizeHTML(body.message);

    const ratingValue = Number(body.rating);

    const rating =
      Number.isFinite(ratingValue) &&
      ratingValue >= 1 &&
      ratingValue <= 5
        ? ratingValue
        : null;

    // =========================================================
    // ADMIN EMAIL
    // =========================================================

    await transporter.sendMail({
      from: `"Eternal Support Services" <${emailUser}>`,
      to: "admin@eternalsupportservice.com.au",
      replyTo: body.email,
      subject: "New Website Feedback - Eternal Support Services",

      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8" />
          <title>New Website Feedback</title>
        </head>

        <body style="
          margin: 0;
          padding: 0;
          background-color: #f4f7f9;
          font-family: Arial, Helvetica, sans-serif;
        ">

          <div style="
            max-width: 650px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          ">

            <div style="
              background: #0f766e;
              padding: 25px;
              text-align: center;
            ">
              <h1 style="
                color: #ffffff;
                margin: 0;
                font-size: 24px;
              ">
                Eternal Support Services
              </h1>

              <p style="
                color: #ffffff;
                margin: 8px 0 0;
                font-size: 14px;
              ">
                New Website Feedback
              </p>
            </div>

            <div style="padding: 30px;">

              <h2 style="
                color: #222222;
                margin-top: 0;
              ">
                New Feedback Received
              </h2>

              <div style="
                background: #f8fafc;
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 20px;
              ">

                <p style="margin: 8px 0;">
                  <strong>Name:</strong><br />
                  ${sanitizedName}
                </p>

                <p style="margin: 8px 0;">
                  <strong>Email:</strong><br />
                  ${sanitizedEmail}
                </p>

                <p style="margin: 8px 0;">
                  <strong>Rating:</strong><br />
                  ${
                    rating
                      ? `${"★".repeat(rating)}${"☆".repeat(5 - rating)} (${rating}/5)`
                      : "Not provided"
                  }
                </p>

              </div>

              <h3 style="color: #222222;">
                Feedback
              </h3>

              <div style="
                background: #f8fafc;
                padding: 20px;
                border-radius: 8px;
                line-height: 1.6;
                white-space: pre-wrap;
                color: #444444;
              ">
                ${sanitizedMessage}
              </div>

              <p style="
                margin-top: 25px;
                color: #777777;
                font-size: 13px;
              ">
                This message was automatically generated from the
                Eternal Support Services website feedback form.
              </p>

            </div>

            <div style="
              background: #f8fafc;
              padding: 20px;
              text-align: center;
              color: #777777;
              font-size: 12px;
            ">
              © ${new Date().getFullYear()} Eternal Support Services
            </div>

          </div>

        </body>
        </html>
      `,
    });

    // =========================================================
    // CUSTOMER THANK-YOU EMAIL
    // =========================================================

    await transporter.sendMail({
      from: `"Eternal Support Services" <${emailUser}>`,
      to: body.email,
      replyTo: "admin@eternalsupportservice.com.au",
      subject: "Thank You for Your Feedback - Eternal Support Services",

      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8" />
          <title>Thank You</title>
        </head>

        <body style="
          margin: 0;
          padding: 0;
          background-color: #f4f7f9;
          font-family: Arial, Helvetica, sans-serif;
        ">

          <div style="
            max-width: 650px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          ">

            <div style="
              background: #0f766e;
              padding: 30px;
              text-align: center;
            ">

              <h1 style="
                color: #ffffff;
                margin: 0;
                font-size: 25px;
              ">
                Eternal Support Services
              </h1>

            </div>

            <div style="padding: 35px;">

              <h2 style="
                color: #222222;
                margin-top: 0;
              ">
                Thank You, ${sanitizedName}!
              </h2>

              <p style="
                color: #444444;
                font-size: 16px;
                line-height: 1.7;
              ">
                Thank you for taking the time to send your feedback
                to Eternal Support Services.
              </p>

              <p style="
                color: #444444;
                font-size: 16px;
                line-height: 1.7;
              ">
                We have successfully received your feedback and
                appreciate your comments. Your feedback helps us
                improve our services and provide better support.
              </p>

              ${
                rating
                  ? `
                    <div style="
                      margin: 25px 0;
                      padding: 20px;
                      background: #f8fafc;
                      border-radius: 8px;
                      text-align: center;
                    ">
                      <p style="
                        margin: 0 0 8px;
                        color: #555555;
                        font-weight: bold;
                      ">
                        Your Rating
                      </p>

                      <p style="
                        margin: 0;
                        font-size: 28px;
                        color: #f59e0b;
                      ">
                        ${"★".repeat(rating)}${"☆".repeat(5 - rating)}
                      </p>

                      <p style="
                        margin: 8px 0 0;
                        color: #555555;
                      ">
                        ${rating} out of 5
                      </p>
                    </div>
                  `
                  : ""
              }

              <p style="
                color: #444444;
                font-size: 16px;
                line-height: 1.7;
              ">
                If you need any further assistance, please contact
                our team.
              </p>

              <div style="
                margin-top: 30px;
                padding: 20px;
                background: #f8fafc;
                border-radius: 8px;
              ">

                <p style="
                  margin: 5px 0;
                  color: #333333;
                ">
                  <strong>Eternal Support Services</strong>
                </p>

                <p style="
                  margin: 5px 0;
                  color: #555555;
                ">
                  Email:
                  admin@eternalsupportservice.com.au
                </p>

                <p style="
                  margin: 5px 0;
                  color: #555555;
                ">
                  Website:
                  www.eternalsupportservice.com.au
                </p>

              </div>

            </div>

            <div style="
              background: #f8fafc;
              padding: 20px;
              text-align: center;
              color: #777777;
              font-size: 12px;
            ">
              © ${new Date().getFullYear()} Eternal Support Services
              <br />
              This is an automated confirmation email.
            </div>

          </div>

        </body>
        </html>
      `,
    });

    // =========================================================
    // SUCCESS
    // =========================================================

    return NextResponse.json({
      success: true,
      message:
        "Thank you for your feedback! A confirmation email has been sent to your email address.",
    });

  } catch (error) {
    console.error("Feedback email error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to send feedback. Please try again later.",
      },
      { status: 500 }
    );
  }
}