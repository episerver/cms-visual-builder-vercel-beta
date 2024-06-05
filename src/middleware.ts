import { NextResponse, type NextRequest } from "next/server"

export function middleware(request: NextRequest)
{
    /*
    // We're in dev mode when the environment is not production or the host includes localhost
    const isDev = process.env.NODE_ENV != "production" || request.nextUrl.host.includes("localhost")

    // Make sure we're always in English - multi langauge is not supported yet
    if (!request.nextUrl.pathname.startsWith("/en")) {
        const newUrl = request.nextUrl.clone()
        newUrl.pathname = "/en" + newUrl.pathname
        return NextResponse.redirect(newUrl, {
            status: isDev ? 307 : 308
        })
    }*/

    /**
     * Assign a Visitor ID cookie, so we can identify and track individual
     * visitors
     */
    /*const visitorId = Session.getOrCreateVisitorId(request)
    const response = NextResponse.next()
    Session.addVisitorId(response, visitorId)
    return response*/
    return NextResponse.next()
}

export const config = {
    matcher: [
      // Skip all internal paths and paths with a '.'
      // Internal paths are:
      // - /ui => Optimizely CMS generated routes for On Page Edit
      // - /api => Services specific for the frontend
      // - /assets => Specific static files
      // - /_next => Next.JS specific files
      // - /_vercel => Vercel infrastructure routes
      // - /mobile.app => SPA for "installed usage"
      '/((?!.*\\.|ui|api|assets|_next\\/static|_next\\/image|_vercel|mobile\\.app).*)',
    ],
  }