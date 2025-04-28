import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import sanitizeHtml from "sanitize-html";

const resend = new Resend(process.env.RESEND_API_KEY);
const resendFrom = process.env.RESEND_FROM_EMAIL || '';
const resendTo = process.env.RESEND_TO_EMAIL || '';

export async function POST(req: NextRequest) {
  try {
    const { email, name, message } = await req.json();

    const cleanName = sanitizeHtml(name, {
      allowedTags: [],
      allowedAttributes: {},
    });
    const cleanEmail = sanitizeHtml(email, {
      allowedTags: [],
      allowedAttributes: {},
    });
    const cleanMessage = sanitizeHtml(message, {
      allowedTags: [],
      allowedAttributes: {},
    });

    if (cleanMessage.length > 5000) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: resendFrom,
      to: resendTo,
      subject: `New Contact Form Submission from ${cleanName}`,
      html: `
        <div>
          <h2>New message from ${cleanName}</h2>
          <p><strong>Email:</strong> ${cleanEmail}</p>
          <p><strong>Message:</strong><br/>${cleanMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
