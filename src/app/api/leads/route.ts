import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, zip, vehicle, damage } = body;

    if (!name || !phone || !zip) {
      return NextResponse.json(
        { error: "Name, phone, and ZIP are required." },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { error } = await supabase.from("leads").insert([
      {
        name: name.trim(),
        phone: phone.trim(),
        zip: zip.trim(),
        vehicle: vehicle?.trim() || null,
        damage_type: damage || "chip",
        source: "website",
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save your request. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
