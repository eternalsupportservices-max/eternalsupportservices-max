import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

/* =========================================================
   TYPES
========================================================= */

interface ReferralBody {
  fullName?: string;
  email?: string;
  phone?: string;
  phoneCountryCode?: string;
  dob?: string;
  gender?: string;

  address?: string;
  suburb?: string;
  state?: string;
  postcode?: string;

  disability?: string;
  fundingType?: string;
  supportFrequency?: string;
  additionalDetails?: string;

  referralFor?: string;

  enquirerName?: string;
  relationship?: string;
  enquirerPhone?: string;
  enquirerCountryCode?: string;
  enquirerEmail?: string;
}

/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function clean(value: unknown, fallback = "Not provided"): string {
  const text = String(value ?? "").trim();

  return text ? escapeHtml(text) : fallback;
}

function emailValid(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* =========================================================
   POST
========================================================= */

export async function POST(request: NextRequest) {
  try {
    /* =======================================================
       GET FORM DATA
    ======================================================= */

    const body = (await request.json()) as ReferralBody;

    /* =======================================================
       EMAIL CONFIGURATION
    ======================================================= */

    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    const adminEmail = "admin@eternalsupportservice.com.au";

    /* =======================================================
       CHECK EMAIL CONFIGURATION
    ======================================================= */

    if (!emailUser || !emailPassword) {
      console.error("EMAIL_USER or EMAIL_PASSWORD is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    /* =======================================================
       LOGO PATHS
    ======================================================= */

    const eternalLogoPath = path.join(
      process.cwd(),
      "public",
      "Eternal support.png"
    );

    const ndisLogoPath = path.join(
      process.cwd(),
      "public",
      "NDIS.png"
    );

    /* =======================================================
       CHECK LOGO FILES
    ======================================================= */

    if (!fs.existsSync(eternalLogoPath)) {
      console.error(
        "Eternal support.png not found:",
        eternalLogoPath
      );

      return NextResponse.json(
        {
          success: false,
          message: "Eternal Support logo was not found.",
        },
        {
          status: 500,
        }
      );
    }

    if (!fs.existsSync(ndisLogoPath)) {
      console.error(
        "NDIS.png not found:",
        ndisLogoPath
      );

      return NextResponse.json(
        {
          success: false,
          message: "NDIS logo was not found.",
        },
        {
          status: 500,
        }
      );
    }

    /* =======================================================
       CREATE TRANSPORTER
    ======================================================= */

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    /* =======================================================
       VERIFY SMTP
    ======================================================= */

    await transporter.verify();

    console.log("SMTP connection successful.");

    /* =======================================================
       FORM DATA
    ======================================================= */

    const fullName = clean(body.fullName);

    const userEmailRaw = String(body.email || "").trim();

    const userEmail = userEmailRaw
      ? escapeHtml(userEmailRaw)
      : "Not provided";

    const phone = clean(body.phone);

    const phoneCountryCode = clean(
      body.phoneCountryCode,
      ""
    );

    const dob = clean(body.dob);

    const gender = clean(body.gender);

    const address = clean(body.address);

    const suburb = clean(body.suburb);

    const state = clean(body.state);

    const postcode = clean(body.postcode);

    const disability = clean(body.disability);

    const fundingType = clean(body.fundingType);

    const supportFrequency = clean(
      body.supportFrequency
    );

    const additionalDetails = clean(
      body.additionalDetails,
      "None"
    );

    const referralFor = clean(body.referralFor);

    const enquirerName = clean(body.enquirerName);

    const relationship = clean(body.relationship);

    const enquirerPhone = clean(body.enquirerPhone);

    const enquirerCountryCode = clean(
      body.enquirerCountryCode,
      ""
    );

    const enquirerEmail = clean(body.enquirerEmail);

    /* =======================================================
       VALIDATE CUSTOMER EMAIL
    ======================================================= */

    const validUserEmail = emailValid(userEmailRaw);

    /* =======================================================
       DATE
    ======================================================= */

    const submittedDate = new Date().toLocaleString(
      "en-AU",
      {
        dateStyle: "full",
        timeStyle: "short",
        timeZone: "Australia/Sydney",
      }
    );

    /* =======================================================
       PHONE DISPLAY
    ======================================================= */

    const customerPhoneDisplay =
      `${phoneCountryCode} ${phone}`.trim();

    const enquirerPhoneDisplay =
      `${enquirerCountryCode} ${enquirerPhone}`.trim();

    /* =======================================================
       ADMIN EMAIL
    ======================================================= */

    const adminEmailHTML = `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
>

<title>New NDIS Referral</title>
</head>

<body
style="
margin:0;
padding:0;
background:#f1f5f9;
font-family:Arial,Helvetica,sans-serif;
color:#1e293b;
"
>

<table
width="100%"
cellspacing="0"
cellpadding="0"
border="0"
style="
background:#f1f5f9;
padding:30px 10px;
"
>

<tr>
<td align="center">

<table
width="720"
cellspacing="0"
cellpadding="0"
border="0"
style="
width:100%;
max-width:720px;
background:#ffffff;
border-radius:22px;
overflow:hidden;
box-shadow:0 8px 35px rgba(15,23,42,0.12);
"
>

<!-- =====================================================
     HEADER
====================================================== -->

<tr>

<td
style="
background:linear-gradient(
135deg,
#581c87,
#7e22ce,
#c026d3
);
padding:35px 35px 30px;
"
>

<table
width="100%"
cellspacing="0"
cellpadding="0"
border="0"
>

<tr>

<td
width="50%"
valign="middle"
>

<img
src="cid:eternal-logo"
alt="Eternal Support Services"
width="105"
height="105"
style="
display:block;
width:105px;
height:105px;
object-fit:contain;
background:#ffffff;
padding:7px;
border-radius:18px;
"
/>

</td>

<td
width="50%"
align="right"
valign="middle"
>

<img
src="cid:ndis-logo"
alt="NDIS"
width="145"
style="
display:block;
width:145px;
height:auto;
background:#ffffff;
padding:9px;
border-radius:12px;
"
/>

</td>

</tr>

</table>

<h1
style="
margin:28px 0 6px;
font-size:29px;
line-height:1.2;
color:#ffffff;
"
>
New Referral Received
</h1>

<p
style="
margin:0;
font-size:15px;
line-height:1.5;
color:#f3e8ff;
"
>
Eternal Support Services
</p>

</td>

</tr>

<!-- =====================================================
     STATUS BAR
====================================================== -->

<tr>

<td
style="
padding:0;
"
>

<div
style="
background:#faf5ff;
padding:18px 30px;
border-bottom:1px solid #e9d5ff;
"
>

<table
width="100%"
cellspacing="0"
cellpadding="0"
border="0"
>

<tr>

<td
style="
font-size:13px;
color:#64748b;
"
>

<strong style="color:#7e22ce;">
REFERRAL STATUS
</strong>

<br>

New referral submitted through website

</td>

<td
align="right"
style="
font-size:12px;
color:#64748b;
"
>

${escapeHtml(submittedDate)}

</td>

</tr>

</table>

</div>

</td>

</tr>

<!-- =====================================================
     MAIN CONTENT
====================================================== -->

<tr>

<td
style="
padding:35px;
"
>

<!-- PARTICIPANT -->

<h2
style="
margin:0 0 18px;
font-size:21px;
color:#581c87;
"
>
👤 Participant Details
</h2>

<table
width="100%"
cellspacing="0"
cellpadding="0"
border="0"
style="
border:1px solid #e2e8f0;
border-radius:14px;
overflow:hidden;
"
>

<tr>
<td
style="
padding:14px 16px;
background:#fafafa;
width:38%;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Full Name
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${fullName}
</td>
</tr>

<tr>
<td
style="
padding:14px 16px;
background:#fafafa;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Email
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${userEmail}
</td>
</tr>

<tr>
<td
style="
padding:14px 16px;
background:#fafafa;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Phone
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${escapeHtml(customerPhoneDisplay)}
</td>
</tr>

<tr>
<td
style="
padding:14px 16px;
background:#fafafa;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Date of Birth
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${dob}
</td>
</tr>

<tr>
<td
style="
padding:14px 16px;
background:#fafafa;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Gender
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${gender}
</td>
</tr>

</table>

<!-- ADDRESS -->

<h2
style="
margin:32px 0 18px;
font-size:21px;
color:#581c87;
"
>
📍 Address
</h2>

<table
width="100%"
cellspacing="0"
cellpadding="0"
border="0"
style="
border:1px solid #e2e8f0;
border-radius:14px;
overflow:hidden;
"
>

<tr>
<td
style="
padding:14px 16px;
background:#fafafa;
width:38%;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Address
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${address}
</td>
</tr>

<tr>
<td
style="
padding:14px 16px;
background:#fafafa;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Suburb
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${suburb}
</td>
</tr>

<tr>
<td
style="
padding:14px 16px;
background:#fafafa;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
State
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${state}
</td>
</tr>

<tr>
<td
style="
padding:14px 16px;
background:#fafafa;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Postcode
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${postcode}
</td>
</tr>

</table>

<!-- SUPPORT -->

<h2
style="
margin:32px 0 18px;
font-size:21px;
color:#581c87;
"
>
💜 Support Information
</h2>

<table
width="100%"
cellspacing="0"
cellpadding="0"
border="0"
style="
border:1px solid #e2e8f0;
border-radius:14px;
overflow:hidden;
"
>

<tr>
<td
style="
padding:14px 16px;
background:#fafafa;
width:38%;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Disability / Support Needs
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${disability}
</td>
</tr>

<tr>
<td
style="
padding:14px 16px;
background:#fafafa;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Funding Type
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${fundingType}
</td>
</tr>

<tr>
<td
style="
padding:14px 16px;
background:#fafafa;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Support Frequency
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${supportFrequency}
</td>
</tr>

</table>

<!-- ADDITIONAL DETAILS -->

<div
style="
margin-top:18px;
padding:20px;
background:#faf5ff;
border-left:5px solid #7e22ce;
border-radius:12px;
"
>

<p
style="
margin:0 0 8px;
font-size:14px;
font-weight:bold;
color:#581c87;
"
>
Additional Details
</p>

<p
style="
margin:0;
font-size:14px;
line-height:1.7;
color:#475569;
white-space:pre-line;
"
>
${additionalDetails}
</p>

</div>

<!-- REFERRAL -->

<h2
style="
margin:32px 0 18px;
font-size:21px;
color:#581c87;
"
>
📋 Referral Information
</h2>

<table
width="100%"
cellspacing="0"
cellpadding="0"
border="0"
style="
border:1px solid #e2e8f0;
border-radius:14px;
overflow:hidden;
"
>

<tr>
<td
style="
padding:14px 16px;
background:#fafafa;
width:38%;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Referral For
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${referralFor}
</td>
</tr>

${
  body.referralFor === "Someone Else"
    ? `

<tr>

<td
style="
padding:14px 16px;
background:#fafafa;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Enquirer Name
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${enquirerName}
</td>

</tr>

<tr>

<td
style="
padding:14px 16px;
background:#fafafa;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Relationship
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${relationship}
</td>

</tr>

<tr>

<td
style="
padding:14px 16px;
background:#fafafa;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Enquirer Phone
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${escapeHtml(enquirerPhoneDisplay)}
</td>

</tr>

<tr>

<td
style="
padding:14px 16px;
background:#fafafa;
font-size:14px;
font-weight:bold;
color:#475569;
"
>
Enquirer Email
</td>

<td
style="
padding:14px 16px;
font-size:14px;
"
>
${enquirerEmail}
</td>

</tr>

`
    : ""
}

</table>

<!-- QUICK ACTION -->

<div
style="
margin-top:32px;
padding:22px;
background:#f8fafc;
border-radius:15px;
text-align:center;
"
>

<p
style="
margin:0 0 15px;
font-size:14px;
font-weight:bold;
color:#334155;
"
>
Quick Action
</p>

${
  validUserEmail
    ? `
<a
href="mailto:${escapeHtml(userEmailRaw)}"
style="
display:inline-block;
background:#7e22ce;
color:#ffffff;
text-decoration:none;
padding:13px 24px;
border-radius:10px;
font-size:14px;
font-weight:bold;
"
>
✉ Email Customer
</a>
`
    : ""
}

</div>

</td>

</tr>

<!-- FOOTER -->

<tr>

<td
style="
background:#0f172a;
padding:28px;
text-align:center;
"
>

<img
src="cid:eternal-logo"
alt="Eternal Support Services"
width="65"
height="65"
style="
width:65px;
height:65px;
object-fit:contain;
background:#ffffff;
padding:4px;
border-radius:12px;
"
/>

<p
style="
margin:15px 0 5px;
font-size:15px;
font-weight:bold;
color:#ffffff;
"
>
Eternal Support Services
</p>

<p
style="
margin:0;
font-size:12px;
line-height:1.6;
color:#94a3b8;
"
>
NDIS Registered Provider
<br>
admin@eternalsupportservice.com.au
</p>

<p
style="
margin:18px 0 0;
font-size:10px;
color:#64748b;
"
>
© 2026 Eternal Support Services. All Rights Reserved.
</p>

</td>

</tr>

</table>

</td>
</tr>

</table>

</body>
</html>
`;

    /* =======================================================
       SEND ADMIN EMAIL
    ======================================================= */

    const adminInfo = await transporter.sendMail({
      from: `"Eternal Support Services" <${emailUser}>`,

      to: adminEmail,

      replyTo: validUserEmail
        ? userEmailRaw
        : adminEmail,

      subject:
        `New NDIS Referral - ${body.fullName || "New Customer"}`,

      html: adminEmailHTML,

      attachments: [
        {
          filename: "Eternal support.png",
          path: eternalLogoPath,
          cid: "eternal-logo",
        },
        {
          filename: "NDIS.png",
          path: ndisLogoPath,
          cid: "ndis-logo",
        },
      ],
    });

    console.log(
      "Admin email sent:",
      adminInfo.messageId
    );

    /* =======================================================
       CUSTOMER CONFIRMATION EMAIL
    ======================================================= */

    let userInfo = null;

    if (validUserEmail) {
      const userEmailHTML = `
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta
name="viewport"
content="width=device-width, initial-scale=1.0"
>

<title>
Thank You - Eternal Support Services
</title>

</head>

<body
style="
margin:0;
padding:0;
background:#f1f5f9;
font-family:Arial,Helvetica,sans-serif;
color:#1e293b;
"
>

<table
width="100%"
cellspacing="0"
cellpadding="0"
border="0"
style="
background:#f1f5f9;
padding:30px 10px;
"
>

<tr>

<td align="center">

<table
width="650"
cellspacing="0"
cellpadding="0"
border="0"
style="
width:100%;
max-width:650px;
background:#ffffff;
border-radius:22px;
overflow:hidden;
box-shadow:0 8px 35px rgba(15,23,42,0.12);
"
>

<!-- HEADER -->

<tr>

<td
style="
background:linear-gradient(
135deg,
#581c87,
#7e22ce,
#c026d3
);
padding:40px 30px;
text-align:center;
"
>

<img
src="cid:eternal-logo"
alt="Eternal Support Services"
width="110"
height="110"
style="
display:inline-block;
width:110px;
height:110px;
object-fit:contain;
background:#ffffff;
padding:7px;
border-radius:20px;
"
/>

<h1
style="
margin:22px 0 8px;
font-size:30px;
color:#ffffff;
"
>
Thank You
</h1>

<p
style="
margin:0;
font-size:15px;
color:#f3e8ff;
"
>
Eternal Support Services
</p>

</td>

</tr>

<!-- MESSAGE -->

<tr>

<td
style="
padding:40px 35px;
"
>

<h2
style="
margin:0 0 18px;
font-size:24px;
color:#581c87;
"
>
Hello ${fullName},
</h2>

<p
style="
font-size:16px;
line-height:1.8;
color:#475569;
margin:0 0 18px;
"
>
Thank you for contacting
<strong>Eternal Support Services</strong>
and submitting your referral.
</p>

<p
style="
font-size:16px;
line-height:1.8;
color:#475569;
margin:0 0 25px;
"
>
We have successfully received your information.
Our team will carefully review your referral and
contact you regarding the next steps.
</p>

<!-- SUCCESS BOX -->

<div
style="
background:#faf5ff;
border-left:5px solid #7e22ce;
padding:22px;
border-radius:14px;
margin:25px 0;
"
>

<p
style="
margin:0;
font-size:15px;
line-height:1.7;
color:#475569;
"
>

<strong style="color:#581c87;">
✓ Referral received successfully
</strong>

<br><br>

Your information has been securely received by
our team. We will contact you using the details
provided in your referral.

</p>

</div>

<!-- NDIS -->

<div
style="
text-align:center;
margin:35px 0;
"
>

<img
src="cid:ndis-logo"
alt="NDIS"
width="190"
style="
display:inline-block;
width:190px;
height:auto;
"
/>

<p
style="
font-size:13px;
color:#64748b;
margin-top:12px;
"
>
NDIS Registered Provider
</p>

</div>

<!-- CONTACT -->

<div
style="
border-top:1px solid #e2e8f0;
padding-top:25px;
"
>

<h3
style="
margin:0 0 12px;
font-size:19px;
color:#581c87;
"
>
Need to contact us?
</h3>

<p
style="
font-size:15px;
line-height:1.8;
color:#475569;
margin:0;
"
>

<strong>Phone:</strong>
0482 911 697

<br>

<strong>Email:</strong>

<a
href="mailto:admin@eternalsupportservice.com.au"
style="
color:#7e22ce;
font-weight:bold;
text-decoration:none;
"
>
admin@eternalsupportservice.com.au
</a>

</p>

</div>

<!-- WEBSITE -->

<div
style="
text-align:center;
margin-top:30px;
"
>

<a
href="https://www.eternalsupportservice.com.au"
style="
display:inline-block;
background:#7e22ce;
color:#ffffff;
text-decoration:none;
padding:15px 30px;
border-radius:11px;
font-size:14px;
font-weight:bold;
"
>
Visit Our Website
</a>

</div>

</td>

</tr>

<!-- FOOTER -->

<tr>

<td
style="
background:#0f172a;
padding:28px;
text-align:center;
"
>

<p
style="
margin:0;
font-size:15px;
font-weight:bold;
color:#ffffff;
"
>
Eternal Support Services
</p>

<p
style="
margin:9px 0 0;
font-size:12px;
line-height:1.7;
color:#94a3b8;
"
>
Personalised support focused on
<br>
independence, participation and
individual needs.
</p>

<p
style="
margin:18px 0 0;
font-size:10px;
color:#64748b;
"
>
© 2026 Eternal Support Services.
All Rights Reserved.
</p>

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`;

      /* =====================================================
         SEND CUSTOMER EMAIL
      ===================================================== */

      userInfo = await transporter.sendMail({
        from:
          `"Eternal Support Services" <${emailUser}>`,

        to: userEmailRaw,

        replyTo: adminEmail,

        subject:
          "Thank You for Your Referral - Eternal Support Services",

        html: userEmailHTML,

        attachments: [
          {
            filename: "Eternal support.png",
            path: eternalLogoPath,
            cid: "eternal-logo",
          },

          {
            filename: "NDIS.png",
            path: ndisLogoPath,
            cid: "ndis-logo",
          },
        ],
      });

      console.log(
        "Customer confirmation email sent:",
        userInfo.messageId
      );
    }

    /* =======================================================
       SUCCESS RESPONSE
    ======================================================= */

    return NextResponse.json(
      {
        success: true,

        message: validUserEmail
          ? "Referral submitted successfully. Confirmation email sent."
          : "Referral submitted successfully.",

        adminEmail: adminEmail,

        adminMessageId:
          adminInfo.messageId,

        userMessageId:
          userInfo?.messageId || null,

        confirmationEmailSent:
          validUserEmail,
      },

      {
        status: 200,
      }
    );

  } catch (error) {

    /* =======================================================
       ERROR
    ======================================================= */

    console.error(
      "========================================"
    );

    console.error(
      "REFERRAL EMAIL ERROR"
    );

    console.error(
      "========================================"
    );

    console.error(error);

    console.error(
      "========================================"
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to submit referral.",

        error:
          error instanceof Error
            ? error.message
            : "Unknown email error",
      },

      {
        status: 500,
      }
    );
  }
}