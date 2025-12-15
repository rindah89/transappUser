module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase,
    "supabaseAdmin",
    ()=>supabaseAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-route] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://nqajrzfpfoaflcyuslqm.supabase.co") || process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ("TURBOPACK compile-time value", "sb_publishable_Qu3M6ZoPYjXkbTQj0sCdCQ__7W8Xih0");
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
    }
}) : "TURBOPACK unreachable";
// Client for server-side admin operations (uses service role key - REQUIRED for API routes)
// WARNING: Only use this in API routes or getServerSideProps. NEVER expose to client.
// Only check for service key on server side (not during client-side module evaluation)
const isServer = ("TURBOPACK compile-time value", "undefined") === 'undefined';
if (isServer && !supabaseServiceKey) {
    console.error('⚠️  SUPABASE_SERVICE_ROLE_KEY is missing! Server-side API routes will not work.');
    console.error('   Get it from: Supabase Dashboard → Settings → API → service_role key');
    console.error('   Make sure it\'s in your .env.local file (not .env, as .env.local is not committed to git)');
}
const supabaseAdmin = supabaseServiceKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
    },
    db: {
        schema: 'public'
    }
}) : (()=>{
    // Only throw error on server side when actually trying to use it
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error('SUPABASE_SERVICE_ROLE_KEY is required for server-side operations.\n' + 'Please add it to your .env.local file:\n' + 'SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here\n' + 'Get it from: Supabase Dashboard → Settings → API → service_role key');
    }
    // On client side, return a dummy object that will throw if used
    return null;
})();
}),
"[project]/src/exceptions/HttpException.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HttpException",
    ()=>HttpException
]);
class HttpException extends Error {
    status;
    message;
    constructor(status, message){
        super(message);
        this.status = status;
        this.message = message;
    }
}
}),
"[project]/src/services/trips.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/exceptions/HttpException.ts [app-route] (ecmascript)");
;
;
class TripService {
    async searchTrips(params) {
        let query = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('trips').select('*');
        if (params.from) {
            query = query.eq('from_location', params.from);
        }
        if (params.to) {
            query = query.eq('to_location', params.to);
        }
        if (params.journeyDate) {
            query = query.eq('journey_date', params.journeyDate);
        }
        if (params.departureTime) {
            query = query.gte('departure', params.departureTime);
        }
        query = query.order('departure', {
            ascending: true
        });
        const { data, error } = await query;
        if (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$exceptions$2f$HttpException$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpException"](500, error.message);
        }
        return data || [];
    }
}
const __TURBOPACK__default__export__ = TripService;
}),
"[project]/src/app/api/v1/trips/trip-search/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$trips$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/trips.service.ts [app-route] (ecmascript)");
;
;
const tripService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$trips$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]();
async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const params = {
            from: searchParams.get('from') || undefined,
            to: searchParams.get('to') || undefined,
            journeyDate: searchParams.get('journeyDate') || undefined,
            departureTime: searchParams.get('departureTime') || undefined
        };
        const trips = await tripService.searchTrips(params);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: false,
            message: 'Trips retrieved successfully',
            data: trips
        }, {
            headers: {
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120'
            }
        });
    } catch (error) {
        const httpError = error;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: true,
            message: httpError.message || 'Failed to search trips'
        }, {
            status: httpError.status || 500,
            headers: {
                'Cache-Control': 'no-store'
            }
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d555af1a._.js.map