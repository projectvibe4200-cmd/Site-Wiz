import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      business,
      email,
      phone,
      preferredContact,
      need,
      businessType,
      goal,
      style,
      assets,
    } = body;

    if (!name || !business || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required contact information." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Site-Wiz <onboarding@resend.dev>",
      to: ["sitewizbase@gmail.com"],
      replyTo: email,
      subject: `New Site-Wiz Lead — ${business}`,
      text: `
NEW SITE-WIZ LEAD

CONTACT
Name: ${name}
Business: ${business}
Email: ${email}
Phone: ${phone}
Preferred contact: ${preferredContact}

PROJECT
What they need: ${need}
Business type: ${businessType}
Website goal: ${goal}
Website style: ${style}
Existing assets: ${assets}

---
Submitted through the Site-Wiz website.
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Failed to send lead notification." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);

    return NextResponse.json(
      { error: "Something went wrong while submitting the form." },
      { status: 500 }
    );
  }
}