import { NextResponse } from "next/server";

const ALLOWED_ORIGIN = process.env.NEXT_PUBLIC_APP_URL ?? "*";

export function withApiHeaders(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  response.headers.set("Access-Control-Allow-Methods", "GET,OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
}

export function optionsResponse() {
  return withApiHeaders(new NextResponse(null, { status: 204 }));
}
