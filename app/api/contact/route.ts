import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  ContactInquiryEmail,
  type ContactInquiryEmailValues,
} from "@/app/emails/contact-inquiry-email";

export const runtime = "nodejs";

type ContactPayload = ContactInquiryEmailValues;

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

  const apiKey = firstNonEmpty(process.env.RESEND_API_KEY);
  const fromEmail =
    firstNonEmpty(process.env.CONTACT_FROM_EMAIL) ??
    "AstvileLabs <onboarding@resend.dev>";
  const toEmail = firstNonEmpty(process.env.CONTACT_TO_EMAIL);

  if (!apiKey || !toEmail) {
    const missingEmailConfig = [
      ["RESEND_API_KEY", apiKey],
      ["CONTACT_TO_EMAIL", toEmail],
    ]
      .filter(([, value]) => !value)
      .map(([key]) => key);

    console.warn("Contact email delivery is not configured.", {
      missing: missingEmailConfig,
    });

    return NextResponse.json(
      {
        error: `Email delivery is not configured yet. Missing: ${missingEmailConfig.join(", ")}. Add RESEND_API_KEY and CONTACT_TO_EMAIL to your deployment environment, or .env.local for local development.`,
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      react: ContactInquiryEmail({ values }),
      replyTo: values.email,
      subject: `AstvileLabs project inquiry from ${values.name}`,
      text: buildTextEmail(values),
      to: toEmail,
    });

    if (error) {
      console.error("Resend email failed:", error);

      return NextResponse.json(
        { error: "Email delivery failed. Please try again in a moment." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Contact email delivery failed:", error);

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

function firstNonEmpty(...values: Array<string | undefined>) {
  return values.map((value) => value?.trim()).find(Boolean);
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

