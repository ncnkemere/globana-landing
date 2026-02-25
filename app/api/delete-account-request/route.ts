import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

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
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "RESEND_API_KEY is missing in environment variables" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const formData = await req.formData();
    const email = String(formData.get("email") || "").trim();
    const details = String(formData.get("details") || "").trim();

    if (!email) {
      return NextResponse.json({ ok: false, error: "Email required" }, { status: 400 });
    }

    const to = "nathannkemere@gmail.com";

    // IMPORTANT: Do NOT set this to a Gmail address. Use a Resend-managed sender or a verified domain sender.
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

    const result = await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo: email, // so you can reply directly to the user
    });

    if (result.error) {
      console.error("Resend send error:", result.error);

      // Surface the real reason to you (during debugging)
      return NextResponse.json(
        {
          ok: false,
          error: result.error.message || "Failed to send email",
          from,
          to,
        },
        { status: 500 }
      );
    }

    return NextResponse.redirect(
      new URL("/delete-account?submitted=1", req.url),
      { status: 303 }
    );
  } catch (err: any) {
    console.error("Delete account route error:", err);
    return NextResponse.json(
      { ok: false, error: err?.message || "Unexpected server error" },
      { status: 500 }
    );
  }
}