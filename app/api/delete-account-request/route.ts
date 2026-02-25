import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const email = String(formData.get("email") || "");
  const details = String(formData.get("details") || "");

  if (!email) {
    return NextResponse.json({ ok: false, error: "Email required" }, { status: 400 });
  }

  // TODO: send to your support inbox / ticketing system
  // e.g. Resend, Postmark, Zapier webhook, etc.
  console.log("Delete account request:", { email, details });

  return NextResponse.redirect(new URL("/delete-account?submitted=1", req.url));
}
