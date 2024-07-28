import { withAuth } from "next-auth/middleware"
import { redirect } from "next/navigation"
import { NextResponse } from "next/server"

export default withAuth(
  
  function middleware(req){
    const path = req.nextUrl.pathname
    // @ts-ignore
    const isAdmin = req.nextauth.token.role === "admin" ? true : false
    
    if(!isAdmin && !path.includes('pegawai')){
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/pegawai/galery`)
    }
    
  }
)

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|auth/signin|auth/signup).*)',
    ],
  }