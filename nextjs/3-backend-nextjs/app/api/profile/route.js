//headers in nextjs

import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  //   const requestHeaders = new Headers(request.headers);
  //   const authHeaders = requestHeaders.get("Authorization"); // Accessing Authorization header
  //   console.log(authHeaders);

  // 2nd Way via nextHeaders
  const headerList = await headers();
  const authHeaders = headerList.get("Authorization");
  //   console.log(authHeaders);

  console.log("Auth Header", authHeaders);
//   return new Response("<h2>Proflie api data</h2>", {
//     headers: {
//       "Content-Type": "text/html",
//     },
//   });

  const response = NextResponse.json({ message: "Hello with headers" });
  response.headers.set("X-Powered-By", "SHER DEVESH");
  response.headers.set("Cache-Control", "no-store");
  return response
  //return NextResponse.json({ success: true, data: "Profile GET endpoint" });
}
