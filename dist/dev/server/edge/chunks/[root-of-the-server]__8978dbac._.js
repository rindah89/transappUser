(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__8978dbac._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [middleware-edge] (ecmascript)");
;
;
async function middleware(request) {
    const { pathname } = request.nextUrl;
    // Initialize Supabase client for middleware
    const supabaseUrl = ("TURBOPACK compile-time value", "https://nqajrzfpfoaflcyuslqm.supabase.co") || process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ("TURBOPACK compile-time value", "sb_publishable_Qu3M6ZoPYjXkbTQj0sCdCQ__7W8Xih0");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createClient"])(supabaseUrl, supabaseAnonKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false
        }
    });
    // Get access token from cookies or headers
    const accessToken = request.cookies.get('sb-access-token')?.value || request.cookies.get('auth-token')?.value || request.headers.get('authorization')?.replace('Bearer ', '');
    let session = null;
    let user = null;
    // Verify session with Supabase Auth
    if (accessToken) {
        try {
            const { data: { user: authUser }, error } = await supabase.auth.getUser(accessToken);
            if (!error && authUser) {
                user = authUser;
                // Get session
                const { data: sessionData } = await supabase.auth.getSession();
                session = sessionData?.session;
            }
        } catch  {
        // Invalid token, continue without auth
        }
    }
    // Protected routes that require authentication
    const protectedRoutes = [
        '/user-bookings',
        '/ticket-form',
        '/ticket-summary'
    ];
    // Check if the route is protected
    const isProtectedRoute = protectedRoutes.some((route)=>pathname.startsWith(route));
    // If accessing a protected route without valid session, redirect to login
    if (isProtectedRoute && (!session || !user)) {
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        url.searchParams.set('redirect', pathname);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
    }
    // If accessing login/register with valid session, redirect to home
    if ((pathname === '/login' || pathname === '/register') && session && user) {
        const url = request.nextUrl.clone();
        url.pathname = '/';
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */ '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__8978dbac._.js.map