import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: Partial<ContactPayload>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, service, message } = body;

  // Validate required fields
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json(
      { error: "Please provide your full name." },
      { status: 400 }
    );
  }

  if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (!service || typeof service !== "string" || service.trim().length === 0) {
    return NextResponse.json(
      { error: "Please select a service." },
      { status: 400 }
    );
  }

  if (!message || typeof message !== "string" || message.trim().length < 10) {
    return NextResponse.json(
      { error: "Please describe your project in a bit more detail." },
      { status: 400 }
    );
  }

  // Send via Resend if API key is present
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      const phone = body.phone?.trim() || "Not provided";
      const sanitisedName = name.trim();
      const sanitisedEmail = email.trim();
      const sanitisedService = service.trim();
      const sanitisedMessage = message.trim();

      await resend.emails.send({
        from: "Brushwork Contact Form <noreply@brushworkpainting.ca>",
        to: ["hello@brushworkpainting.ca"],
        replyTo: sanitisedEmail,
        subject: `New Estimate Request — ${sanitisedService} from ${sanitisedName}`,
        html: `
          <h2 style="margin-bottom:16px;">New Estimate Request</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:15px;">
            <tr>
              <td style="padding:8px 12px;font-weight:600;background:#f4f4f4;width:140px;">Name</td>
              <td style="padding:8px 12px;">${sanitisedName}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:600;background:#f4f4f4;">Email</td>
              <td style="padding:8px 12px;"><a href="mailto:${sanitisedEmail}">${sanitisedEmail}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:600;background:#f4f4f4;">Phone</td>
              <td style="padding:8px 12px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:600;background:#f4f4f4;">Service</td>
              <td style="padding:8px 12px;">${sanitisedService}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:600;background:#f4f4f4;vertical-align:top;">Message</td>
              <td style="padding:8px 12px;white-space:pre-wrap;">${sanitisedMessage}</td>
            </tr>
          </table>
        `,
      });
    } catch (err) {
      console.error("[contact/route] Resend error:", err);
      return NextResponse.json(
        { error: "Failed to send your message. Please try calling us directly." },
        { status: 500 }
      );
    }
  } else {
    // No API key — log locally in development, succeed silently in other envs
    console.info("[contact/route] RESEND_API_KEY not set. Submission received:", {
      name: name.trim(),
      email: email.trim(),
      service: service.trim(),
    });
  }

  return NextResponse.json(
    { success: true, message: "Your request has been received." },
    { status: 200 }
  );
}
