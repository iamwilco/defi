import { NextRequest, NextResponse } from "next/server";

function toBase64(value: string) {
  return btoa(value);
}

export function maybeRequireAdminBasicAuth(request: NextRequest) {
  const enabled = process.env.ADMIN_BASIC_AUTH_ENABLED === "true";

  if (!enabled) {
    return null;
  }

  const username = process.env.ADMIN_BASIC_AUTH_USERNAME;
  const password = process.env.ADMIN_BASIC_AUTH_PASSWORD;

  if (!username || !password) {
    return NextResponse.json(
      {
        error: "ADMIN_AUTH_CONFIG_MISSING",
        message: "Admin auth is enabled but credentials are not configured.",
      },
      { status: 500 },
    );
  }

  const expected = `Basic ${toBase64(`${username}:${password}`)}`;
  const provided = request.headers.get("authorization");

  if (provided !== expected) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="admin"',
      },
    });
  }

  return null;
}
