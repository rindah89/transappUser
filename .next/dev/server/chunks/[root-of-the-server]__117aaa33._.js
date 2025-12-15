module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [middleware] (ecmascript)");
;
;
async function proxy(request) {
    const { pathname } = request.nextUrl;
    // Initialize Supabase client for proxy
    const supabaseUrl = ("TURBOPACK compile-time value", "https://nqajrzfpfoaflcyuslqm.supabase.co") || process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ("TURBOPACK compile-time value", "sb_publishable_Qu3M6ZoPYjXkbTQj0sCdCQ__7W8Xih0");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["createClient"])(supabaseUrl, supabaseAnonKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false
        }
    });
    // Get access token from cookies or headers
    // - Prefer raw JWT in `sb-access-token`
    // - Support legacy `auth-token` cookie which stores JSON { user, token }
    const authTokenCookie = request.cookies.get('auth-token')?.value;
    let accessToken = request.cookies.get('sb-access-token')?.value || request.headers.get('authorization')?.replace('Bearer ', '') || undefined;
    if (!accessToken && authTokenCookie) {
        try {
            const parsed = JSON.parse(authTokenCookie);
            if (parsed?.token) accessToken = parsed.token;
        } catch  {
            // If it's not JSON, treat it as a raw token
            accessToken = authTokenCookie;
        }
    }
    let user = null;
    // Verify token with Supabase Auth
    if (accessToken) {
        try {
            const { data: { user: authUser }, error } = await supabase.auth.getUser(accessToken);
            if (!error && authUser) {
                user = authUser;
            }
        } catch  {
        // Invalid token, continue without auth
        }
    }
    // Protected routes that require authentication (dashboard routes)
    const protectedRoutes = [
        '/user-bookings',
        '/ticket-form',
        '/ticket-summary',
        '/book',
        '/trip-search',
        '/search-results',
        '/about-transapp',
        '/privacy-policy',
        '/terms'
    ];
    // Auth routes (public routes)
    const authRoutes = [
        '/login',
        '/register',
        '/user-forgot',
        '/user-reset',
        '/trip-login',
        '/transapp-delete-my-account',
        '/pay',
        '/payunit-return'
    ];
    // Check if the route is protected
    const isProtectedRoute = protectedRoutes.some((route)=>pathname.startsWith(route));
    // Keep authRoutes list for future checks/redirects if needed.
    authRoutes.some((route)=>pathname.startsWith(route));
    // If accessing a protected route without valid session, redirect to login
    if (isProtectedRoute && !user) {
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        url.searchParams.set('redirect', pathname);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
    }
    // Note: we intentionally do NOT redirect authenticated users away from auth routes.
    // This avoids trapping users in cases where cookies exist but client state/localStorage is out of sync.
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__117aaa33._.js.map