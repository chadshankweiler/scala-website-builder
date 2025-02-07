import { createRouteMatcher, clerkMiddleware } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
    "/agency/sign-in(.*)",
    "/agency/sign-up(.*)",
    "/site(.*)",
    "/api/uploadthings(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
    const { has, redirectToSignIn } = await auth()
    if (!isPublicRoute(req)) {
        await auth.protect();
    }

    // Rewrite for domains

}, { debug: true });

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};
