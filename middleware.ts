import { type NextRequest, NextResponse } from "next/server"

// This is a simple middleware to protect the admin route
// In a production app, you would use a more robust authentication system
export function middleware(request: NextRequest) {
  // Check if the request is for the admin route
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // In a real app, you would check for authentication here
    // For now, we'll use a simple query parameter for demonstration
    const authToken = request.nextUrl.searchParams.get("token")

    // This is NOT secure for production - just for demonstration
    if (authToken !== "globana-admin-secret") {
      // Redirect to a login page or show an error
      return NextResponse.redirect(new URL("/?error=unauthorized", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
