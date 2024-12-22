import { clerkMiddleware, ClerkMiddlewareAuth, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isProtectRoutes = createRouteMatcher(["/home"]);
const isRootRoute = createRouteMatcher(["/"]);
// const isPublicRoutes = createRouteMatcher([]);

const middleware = clerkMiddleware(async (auth: ClerkMiddlewareAuth, req: NextRequest) => {
  const user = await auth();
  const isAuthenticated = !!user.userId;

  if (isAuthenticated && isRootRoute(req)) {
    const homePath = new URL("/home", req.url).toString();
    return NextResponse.redirect(homePath);
  }

  if (!isAuthenticated && isProtectRoutes(req)) {
    const notFoundPath = new URL("/not-found", req.url).toString();

    await auth.protect(undefined, {
      unauthenticatedUrl: notFoundPath,
      unauthorizedUrl: notFoundPath
    });
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    // Always run for API routes
    "/(api|trpc)(.*)"
  ]
};

export default middleware;
