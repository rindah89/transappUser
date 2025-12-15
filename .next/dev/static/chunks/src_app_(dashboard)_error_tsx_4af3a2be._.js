(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(dashboard)/error.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Error
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Error(t0) {
    _s();
    var $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "ea29ecf306292587ba1a632c6f7bd29877f105d8f109803eba63fca2fafa12a0") {
        for(var $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol["for"]("react.memo_cache_sentinel");
        }
        $[0] = "ea29ecf306292587ba1a632c6f7bd29877f105d8f109803eba63fca2fafa12a0";
    }
    var error = t0.error, reset = t0.reset;
    var t1;
    var t2;
    if ($[1] !== error) {
        t1 = function() {
            console.error(error);
        };
        t2 = [
            error
        ];
        $[1] = error;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    var t3;
    var t4;
    if ($[4] === Symbol["for"]("react.memo_cache_sentinel")) {
        t3 = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
            padding: "2rem"
        };
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: "Something went wrong!"
        }, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/error.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    var t5 = error.message || "An unexpected error occurred";
    var t6;
    if ($[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/error.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    var t7;
    if ($[8] === Symbol["for"]("react.memo_cache_sentinel")) {
        t7 = {
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
        };
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    var t8;
    if ($[9] !== reset) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: reset,
            style: t7,
            children: "Try again"
        }, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/error.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[9] = reset;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    var t9;
    if ($[11] !== t6 || $[12] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t3,
            children: [
                t4,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(dashboard)/error.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    return t9;
}
_s(Error, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Error;
var _c;
__turbopack_context__.k.register(_c, "Error");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28dashboard%29_error_tsx_4af3a2be._.js.map