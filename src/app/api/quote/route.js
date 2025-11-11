import { NextResponse } from "next/server"
import { Resend } from "resend"

// 👉 force Node runtime (Resend SDK needs Node, not Edge)
export const runtime = "nodejs"

// Quick GET so you can sanity-check env vars in the browser
export async function GET() {
  return NextResponse.json({
    ok: true,
    hasKey: !!process.env.RESEND_API_KEY,
    toSet: !!process.env.TO_EMAIL,
  })
}

export async function POST(req) {
  try {
    const key = process.env.RESEND_API_KEY
    const to = process.env.TO_EMAIL

    if (!key) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY (.env.local) — restart dev server after adding it." },
        { status: 500 }
      )
    }
    if (!to) {
      return NextResponse.json(
        { ok: false, error: "Missing TO_EMAIL (.env.local) — restart dev server after adding it." },
        { status: 500 }
      )
    }

    // Accept FormData or JSON
    const ct = req.headers.get("content-type") || ""
    let data
    if (ct.includes("multipart/form-data")) {
      const fd = await req.formData()
      data = Object.fromEntries(fd.entries())
    } else {
      data = await req.json().catch(() => ({}))
    }

    const { name = "", email = "", phone = "", service = "", message = "" } = data

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields (name, email, phone, service, message are required)" },
        { status: 400 }
      )
    }

    const resend = new Resend(key)
    const { data: sent, error } = await resend.emails.send({
      from: "HMR Group <onboarding@resend.dev>", // works on localhost without a domain
      to,
      reply_to: email || undefined,
      subject: `New Quote Request — ${name}`,
      text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}`,
    })

    if (error) {
      return NextResponse.json(
        { ok: false, error: `Resend error: ${error.message || "Unknown"}` },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true, id: sent?.id || null })
  } catch (err) {
    console.error("API /api/quote error:", err)
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 })
  }
}
