import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  
  
  // Get current path
  const { pathname: currentPath } = request.nextUrl
  console.log('pathname::', currentPath);

  // Get token from cookie or header
  const token = request.cookies.get('accessToken')?.value || request.headers.get('Authorization')?.split(' ')[1]

  // List of routes that require authentication
  const authRoutes = ['/dashboard', '/me']

  // Check if the current path requires authentication
  const isAuthRoute = authRoutes.some((route) => currentPath.startsWith(route))

  // If it's an auth route and there's no token
  if (isAuthRoute && !token) {
    // Redirect to login page
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If user is logged in and tries to access login or register page
  if (token && (currentPath === '/login' || currentPath === '/register')) {
    // Redirect to dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Allow access if there are no issues
  return NextResponse.next()
}

// Specify which routes the middleware should be applied to
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
