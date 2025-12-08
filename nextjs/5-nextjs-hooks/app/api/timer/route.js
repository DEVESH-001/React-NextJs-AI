//fetch (https://nextjs.org/docs/15/app/api-reference/functions/fetch)

import { NextResponse } from "next/server";

export async function GET() {
  const currentTime = new Date();

  return NextResponse.json({
    timestamp: currentTime.toISOString(),
    readable: currentTime.toLocaleTimeString(),
    unix: currentTime.getTime(),
    message: "Timer api called ",
    requestId: Math.random().toString(36).substring(2, 15),
  });
}
