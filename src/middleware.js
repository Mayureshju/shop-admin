// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// export async function middleware(req) {
//   // Retrieve the token using your NEXTAUTH_SECRET from environment variables
//   const token = await getToken({ req, secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET });

//   // If no valid token is found, redirect to the login page
//   if (!token) {
//     const loginUrl = new URL("/login", req.url);
//     loginUrl.searchParams.set("callbackUrl", req.url);
//     return NextResponse.redirect(loginUrl);
//   }

//   return NextResponse.next();
// }

// // Apply this middleware only on specific paths
// export const config = {
//   matcher: ["/vendor/:path*", "/admin/:path*"] // Adjust these routes as needed
// };
