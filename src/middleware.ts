import { NextRequest, NextResponse } from 'next/server'
import * as cookie from 'cookie';
import { NextApiRequest } from 'next';


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === '/login' || path === '/signup' || path === '/';
  const cookies = cookie.parse(request.cookies.toString() );
  console.log(cookies);
  const token = cookies.token || "";
  console.log("token",token);

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/games', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/profile/:path*',
    '/',
    '/login',
    '/signup',
    '/games/:path*',
  ],
}