import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)',"/guest","/"])

export default clerkMiddleware(async (auth, request) => {
  const url = new URL(request.url);
  
  // Allow unauthenticated access for public routes or if the user is in guest mode
  if (isPublicRoute(request) || url.searchParams.get("guest") === "true") {
    return;
  }

  // Protect all other routes
  await auth.protect();
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}