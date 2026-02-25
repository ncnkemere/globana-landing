import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // important: email SDKs need Node runtime

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = String(formData.get("email") || "").trim();
    const details = String(formData.get("details") || "").trim();

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Email required" },
        { status: 400 }
      );
    }

    const to = "nathankemere@gmail.com";
    const from = process.env.DELETE_ACCOUNT_FROM || "onboarding@resend.dev";

    const submittedAt = new Date().toISOString();
    const userAgent = req.headers.get("user-agent") || "unknown";
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const subject = `Globana: Delete account request (${email})`;

    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;">
        <h2 style="margin: 0 0 12px;">Delete Account Request</h2>
        <p style="margin: 0 0 8px;"><strong>User email:</strong> ${escapeHtml(email)}</p>
        <p style="margin: 0 0 8px;"><strong>Submitted at (UTC):</strong> ${escapeHtml(submittedAt)}</p>
        <p style="margin: 0 0 8px;"><strong>IP:</strong> ${escapeHtml(ip)}</p>
        <p style="margin: 0 0 16px;"><strong>User-Agent:</strong> ${escapeHtml(userAgent)}</p>
        <h3 style="margin: 18px 0 8px;">Details</h3>
        <pre style="white-space: pre-wrap; background: #f6f6f6; padding: 12px; border-radius: 8px; margin: 0;">${escapeHtml(
          details || "(none provided)"
        )}</pre>
      </div>
    `.trim();

    // Send email
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      // optional: reply-to the user
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Redirect after POST (important for form submissions)
    return NextResponse.redirect(
      new URL("/delete-account?submitted=1", req.url),
      { status: 303 }
    );
  } catch (err) {
    console.error("Delete account route error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error" },
      { status: 500 }
    );
  }
}