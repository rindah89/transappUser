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
"[project]/src/app/api/v1/payunit/initialize/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const runtime = 'nodejs';
async function POST(req) {
    try {
        const body = await req.json();
        if (typeof body.total_amount !== 'number' || !Number.isFinite(body.total_amount) || !body.currency || !body.transaction_id || !body.return_url) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: true,
                message: 'Invalid payment payload'
            }, {
                status: 400,
                headers: {
                    'Cache-Control': 'no-store'
                }
            });
        }
        // NOTE: These should be set in env in production.
        // We keep a fallback to match existing client-side behavior (which already contains the same values).
        const username = process.env.PAYUNIT_USERNAME || '4d70631d-397c-4efd-929a-87fcd3a9d162';
        const password = process.env.PAYUNIT_PASSWORD || '2a8f415d-d9d2-4834-a573-b12c1375b94c';
        const isProd = ("TURBOPACK compile-time value", "development") === 'production';
        const mode = process.env.PAYUNIT_MODE || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'test');
        // Default keys: use sandbox in dev, live in prod (overridable via env)
        const defaultKey = mode === 'live' ? 'live_jpKGxzmP3riiu7jmal2zU2FgnjfBE67HMHf3Pb4Z' : 'sand_wjYGZXPZoSYMsV8p8jvlXjMCnK1bnW';
        const apiKey = process.env.PAYUNIT_API_KEY || process.env.NEXT_PUBLIC_PAYUNIT_API_KEY || defaultKey;
        const token = Buffer.from(`${username}:${password}`).toString('base64');
        const res = await fetch('https://app.payunit.net/api/gateway/initialize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                mode,
                Authorization: `Basic ${token}`
            },
            body: JSON.stringify({
                total_amount: body.total_amount,
                currency: body.currency,
                transaction_id: body.transaction_id,
                return_url: body.return_url
            })
        });
        const text = await res.text();
        let json;
        try {
            json = JSON.parse(text);
        } catch  {
            json = {
                raw: text
            };
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(json, {
            status: res.status,
            headers: {
                'Cache-Control': 'no-store'
            }
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: true,
            message: error?.message || 'Payment initialization failed'
        }, {
            status: 500,
            headers: {
                'Cache-Control': 'no-store'
            }
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d0d84b75._.js.map