import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RESEND_API_URL = "https://api.resend.com/emails";

type ContactPayload = {
  brandProduct: string;
  budgetRange: string;
  email: string;
  message: string;
  name: string;
  timeline: string;
  videoLength: string;
};

const fieldLabels: Record<keyof ContactPayload, string> = {
  brandProduct: "Brand / Product",
  budgetRange: "Budget Range",
  email: "Email",
  message: "Message",
  name: "Name",
  timeline: "Timeline",
  videoLength: "Video Length",
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | Partial<ContactPayload>
    | null;

  if (!body) {
    return NextResponse.json(
      { error: "Invalid form submission." },
      { status: 400 },
    );
  }

  const values = normalizePayload(body);
  const missingField = findMissingField(values);

  if (missingField) {
    return NextResponse.json(
      { error: `${fieldLabels[missingField]} is required.` },
      { status: 400 },
    );
  }

  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = readEnv("RESEND_API_KEY");
  const fromEmail =
    readEnv("CONTACT_FROM_EMAIL") ?? "AstvileLabs <onboarding@resend.dev>";
  const toEmail = readEnv("CONTACT_TO_EMAIL");

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured yet. Add RESEND_API_KEY and CONTACT_TO_EMAIL to your deployment environment, or .env.local for local development.",
      },
      { status: 503 },
    );
  }

  const emailResponse = await fetch(RESEND_API_URL, {
    body: JSON.stringify({
      from: fromEmail,
      html: buildHtmlEmail(values),
      reply_to: values.email,
      subject: `AstvileLabs project inquiry from ${values.name}`,
      text: buildTextEmail(values),
      to: toEmail,
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!emailResponse.ok) {
    const resendError = await emailResponse.text();
    console.error("Resend email failed:", resendError);

    return NextResponse.json(
      { error: "Email delivery failed. Please try again in a moment." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function normalizePayload(payload: Partial<ContactPayload>): ContactPayload {
  return {
    brandProduct: toCleanString(payload.brandProduct),
    budgetRange: toCleanString(payload.budgetRange),
    email: toCleanString(payload.email).toLowerCase(),
    message: toCleanString(payload.message),
    name: toCleanString(payload.name),
    timeline: toCleanString(payload.timeline),
    videoLength: toCleanString(payload.videoLength),
  };
}

function findMissingField(values: ContactPayload): keyof ContactPayload | null {
  for (const key of Object.keys(fieldLabels) as Array<keyof ContactPayload>) {
    if (!values[key]) {
      return key;
    }
  }

  return null;
}

function toCleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function readEnv(key: string) {
  const value = process.env[key]?.trim();
  return value ? value : undefined;
}

function buildTextEmail(values: ContactPayload) {
  return [
    "New AstvileLabs project inquiry",
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Brand / Product: ${values.brandProduct}`,
    `Video Length: ${values.videoLength}`,
    `Budget Range: ${values.budgetRange}`,
    `Timeline: ${values.timeline}`,
    "",
    "Message:",
    values.message,
  ].join("\n");
}

function buildHtmlEmail(values: ContactPayload) {
  const rows = [
    ["Name", values.name],
    ["Email", values.email],
    ["Brand / Product", values.brandProduct],
    ["Video Length", values.videoLength],
    ["Budget Range", values.budgetRange],
    ["Timeline", values.timeline],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
      <p style="font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #666;">
        AstvileLabs Contact Form
      </p>
      <h1 style="font-size: 24px; margin: 0 0 20px;">New project inquiry</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 620px;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border: 1px solid #ddd; padding: 10px; width: 180px; color: #555;">
                  ${escapeHtml(label)}
                </td>
                <td style="border: 1px solid #ddd; padding: 10px;">
                  ${escapeHtml(value)}
                </td>
              </tr>
            `,
          )
          .join("")}
      </table>
      <h2 style="font-size: 16px; margin: 24px 0 8px;">Message</h2>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(values.message)}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
