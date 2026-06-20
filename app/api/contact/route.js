import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    console.log("=== Contact Mailer Received (API Route) ===");
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Subject:", data.subject);
    console.log("Message:", data.message);
    console.log("==========================================");
    
    // This logs on the server node console. 
    // In production, configure nodemailer/SendGrid/Resend integrations here.
    
    return NextResponse.json({ success: true, message: "Email logged successfully on server" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
