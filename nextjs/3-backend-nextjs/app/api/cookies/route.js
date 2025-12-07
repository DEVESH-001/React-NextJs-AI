import { NextResponse } from "next/server";

export async function GET(request) {
  const cookieStore = await cookies();
  cookieStore.set("score", "100");
  return NextResponse.json({ message: "cookie set" });
}
