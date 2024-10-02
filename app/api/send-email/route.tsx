import WelcomeTemplates from "@/emails/WelcomeTemplates";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  resend.emails.send({
    from: "important.companies.com",
    to: "matemkamelot@hotmail.com",
    subject: "...",
    react: <WelcomeTemplates name="Mateo" />,
  });

  return NextResponse.json({});
}
