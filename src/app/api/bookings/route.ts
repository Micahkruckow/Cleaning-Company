import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { bookingSchema } from "@/lib/validations/booking";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const data = bookingSchema.parse(body);

    const { error } = await supabase.from("bookings").insert({
      user_id: user.id,
      service_id: data.service_id,
      scheduled_at: data.scheduled_at,
      address: data.address,
      notes: data.notes ?? null,
      status: "pending",
    });

    if (error) throw error;

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("Booking API error:", err);
    return NextResponse.json({ error: "Failed to create booking" }, { status: 400 });
  }
}
