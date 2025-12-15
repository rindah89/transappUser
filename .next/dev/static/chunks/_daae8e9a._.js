(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/pages/Users/TicketPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$SpinnerCircular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/spinners-react/lib/esm/SpinnerCircular.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
var TicketPage = function() {
    _s();
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])().t;
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    var searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    var bookingId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TicketPage.useMemo[bookingId]": function() {
            return Number(params === null || params === void 0 ? void 0 : params.id);
        }
    }["TicketPage.useMemo[bookingId]"], [
        params === null || params === void 0 ? void 0 : params.id
    ]);
    var shouldPrint = (searchParams === null || searchParams === void 0 ? void 0 : searchParams.get('print')) === '1';
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), loading = _useState[0], setLoading = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), booking = _useState1[0], setBooking = _useState1[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TicketPage.useEffect": function() {
            var fetchBooking = {
                "TicketPage.useEffect.fetchBooking": function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        "TicketPage.useEffect.fetchBooking": function() {
                            var data, err, _this, _err_response;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                                "TicketPage.useEffect.fetchBooking": function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            if (!Number.isFinite(bookingId)) {
                                                setLoading(false);
                                                return [
                                                    2
                                                ];
                                            }
                                            _state.label = 1;
                                        case 1:
                                            _state.trys.push([
                                                1,
                                                3,
                                                4,
                                                5
                                            ]);
                                            return [
                                                4,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/v1/bookings/booking/".concat(bookingId))
                                            ];
                                        case 2:
                                            data = _state.sent().data;
                                            if (data === null || data === void 0 ? void 0 : data.error) {
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(data.message || 'Failed to load ticket');
                                                setBooking(null);
                                            } else {
                                                setBooking(data.data || null);
                                            }
                                            return [
                                                3,
                                                5
                                            ];
                                        case 3:
                                            err = _state.sent();
                                            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(err)) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_this = (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) === null || _this === void 0 ? void 0 : _this.message) || err.message || 'Failed to load ticket');
                                            else __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('An unexpected error occurred');
                                            setBooking(null);
                                            return [
                                                3,
                                                5
                                            ];
                                        case 4:
                                            setLoading(false);
                                            return [
                                                7
                                            ];
                                        case 5:
                                            return [
                                                2
                                            ];
                                    }
                                }
                            }["TicketPage.useEffect.fetchBooking"]);
                        }
                    }["TicketPage.useEffect.fetchBooking"])();
                }
            }["TicketPage.useEffect.fetchBooking"];
            fetchBooking();
        }
    }["TicketPage.useEffect"], [
        bookingId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TicketPage.useEffect": function() {
            if (shouldPrint && !loading && booking) {
                // allow paint
                setTimeout({
                    "TicketPage.useEffect": function() {
                        return window.print();
                    }
                }["TicketPage.useEffect"], 200);
            }
        }
    }["TicketPage.useEffect"], [
        shouldPrint,
        loading,
        booking
    ]);
    var cancel = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var ok, _this, _this1, _ref, data_0, _this2, err_0, _this3, _err_0_response;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!booking) return [
                            2
                        ];
                        ok = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.confirm(t('confirm_cancel_booking') || 'Cancel this booking?');
                        if (!ok) return [
                            2
                        ];
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/v1/bookings/cancel/".concat(booking.id))
                        ];
                    case 2:
                        _ref = _state.sent(), data_0 = _ref.data;
                        if ((_this = data_0) === null || _this === void 0 ? void 0 : _this.error) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_this1 = data_0) === null || _this1 === void 0 ? void 0 : _this1.message) || 'Failed to cancel');
                        else {
                            ;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(((_this2 = data_0) === null || _this2 === void 0 ? void 0 : _this2.message) || 'Cancelled');
                            router.refresh();
                        }
                        return [
                            3,
                            4
                        ];
                    case 3:
                        err_0 = _state.sent();
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(err_0)) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_this3 = (_err_0_response = err_0.response) === null || _err_0_response === void 0 ? void 0 : _err_0_response.data) === null || _this3 === void 0 ? void 0 : _this3.message) || err_0.message || 'Failed to cancel');
                        else __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('An unexpected error occurred');
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page-content",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                fluid: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loader-outer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "loader-inner",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$SpinnerCircular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpinnerCircular"], {
                            color: "#bcc014",
                            size: 30
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Users/TicketPage.tsx",
                            lineNumber: 84,
                            columnNumber: 15
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Users/TicketPage.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/pages/Users/TicketPage.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/pages/Users/TicketPage.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/pages/Users/TicketPage.tsx",
            lineNumber: 80,
            columnNumber: 12
        }, _this);
    }
    if (!booking) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page-content",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                fluid: false,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-md-9 col-lg-6 col-xl-5 mx-auto my-4 box",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: t('no_booking_data') || 'No ticket found.'
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Users/TicketPage.tsx",
                            lineNumber: 95,
                            columnNumber: 15
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Users/TicketPage.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/pages/Users/TicketPage.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/pages/Users/TicketPage.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/pages/Users/TicketPage.tsx",
            lineNumber: 91,
            columnNumber: 12
        }, _this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-content",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
            fluid: false,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-md-9 col-lg-6 col-xl-5 mx-auto my-4 box",
                    id: "ticket-info",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: t('ticket_summary') || 'Ticket'
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Users/TicketPage.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        t('ticket_number') || 'Ticket number',
                                        ": ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: booking.ticket_number
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                            lineNumber: 107,
                                            columnNumber: 60
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        t('from') || 'From',
                                        ": ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: booking.departure_city
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                            lineNumber: 108,
                                            columnNumber: 42
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        t('to') || 'To',
                                        ": ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: booking.arrival_city
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                            lineNumber: 109,
                                            columnNumber: 38
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        t('journey_date') || 'Journey date',
                                        ": ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: booking.journey_date
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                            lineNumber: 110,
                                            columnNumber: 58
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        t('time') || 'Time',
                                        ": ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: booking.departure_time
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                            lineNumber: 111,
                                            columnNumber: 42
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        t('seat') || 'Seat',
                                        ": ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: booking.seat || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                            lineNumber: 112,
                                            columnNumber: 42
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        t('status') || 'Status',
                                        ": ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: booking.status || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                            lineNumber: 113,
                                            columnNumber: 46
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        t('price') || 'Price',
                                        ": ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                booking.price,
                                                " XAF"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                            lineNumber: 114,
                                            columnNumber: 44
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Users/TicketPage.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex gap-2 flex-wrap mt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "btn btn-primary",
                                    onClick: function() {
                                        return window.print();
                                    },
                                    children: t('print') || 'Print'
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "btn btn-outline-danger",
                                    onClick: cancel,
                                    children: t('Cancel') || 'Cancel'
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Users/TicketPage.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Users/TicketPage.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/Users/TicketPage.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/pages/Users/TicketPage.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/pages/Users/TicketPage.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/pages/Users/TicketPage.tsx",
        lineNumber: 101,
        columnNumber: 10
    }, _this);
};
_s(TicketPage, "8x6Ubn7dUl3oVaNipvhlwP+OcaA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = TicketPage;
const __TURBOPACK__default__export__ = TicketPage;
var _c;
__turbopack_context__.k.register(_c, "TicketPage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/reactstrap/esm/Container.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/utils.js [app-client] (ecmascript)");
var _excluded = [
    "className",
    "cssModule",
    "fluid",
    "tag"
];
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
;
;
;
;
var propTypes = {
    tag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tagPropType"],
    fluid: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string
    ]),
    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
    cssModule: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
};
function Container(props) {
    var className = props.className, cssModule = props.cssModule, fluid = props.fluid, _props$tag = props.tag, Tag = _props$tag === void 0 ? 'div' : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
    var containerClass = 'container';
    if (fluid === true) {
        containerClass = 'container-fluid';
    } else if (fluid) {
        containerClass = "container-".concat(fluid);
    }
    var classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapToCssModules"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, containerClass), cssModule);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Tag, _extends({}, attributes, {
        className: classes
    }));
}
Container.propTypes = propTypes;
const __TURBOPACK__default__export__ = Container;
}),
"[project]/node_modules/reactstrap/esm/Container.js [app-client] (ecmascript) <export default as Container>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Container.js [app-client] (ecmascript)");
}),
"[project]/node_modules/spinners-react/lib/esm/withSharedProps-a1728349.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>__rest,
    "a",
    ()=>__assign,
    "w",
    ()=>withSharedProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var __assign = function __assign1() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
var defaultProps = {
    color: '#38ad48',
    enabled: true,
    size: 50,
    style: {}
};
var normalizeSize = function normalizeSize(size) {
    return parseFloat(size.toString()).toString() === size.toString() ? size + "px" : size.toString();
};
var withSharedProps = function withSharedProps(Component) {
    var Wrapper = function Wrapper(props) {
        var color = props.color, enabled = props.enabled, size = props.size, style = props.style, otherProps = __rest(props, [
            "color",
            "enabled",
            "size",
            "style"
        ]);
        var componentProps = __assign(__assign({}, otherProps), {
            style: __assign({
                color: color,
                overflow: 'visible',
                width: normalizeSize(size)
            }, style)
        });
        if (!enabled) return null;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, __assign({}, componentProps));
    };
    Wrapper.defaultProps = defaultProps;
    return Wrapper;
};
;
 //# sourceMappingURL=withSharedProps-a1728349.js.map
}),
"[project]/node_modules/spinners-react/lib/esm/style-inject.es-fc9e633e.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>secondaryColorDefaultProps,
    "d",
    ()=>defaultProps,
    "s",
    ()=>styleInject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$withSharedProps$2d$a1728349$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/spinners-react/lib/esm/withSharedProps-a1728349.js [app-client] (ecmascript)");
;
var defaultProps = {
    speed: 100,
    still: false,
    thickness: 100
};
var secondaryColorDefaultProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$withSharedProps$2d$a1728349$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$withSharedProps$2d$a1728349$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({}, defaultProps), {
    secondaryColor: 'rgba(0,0,0,0.44)'
});
function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;
    if (!css || typeof document === 'undefined') {
        return;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (insertAt === 'top') {
        if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
        } else {
            head.appendChild(style);
        }
    } else {
        head.appendChild(style);
    }
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}
;
 //# sourceMappingURL=style-inject.es-fc9e633e.js.map
}),
"[project]/node_modules/spinners-react/lib/esm/SpinnerCircular.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpinnerCircular",
    ()=>SpinnerCircular
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$withSharedProps$2d$a1728349$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/spinners-react/lib/esm/withSharedProps-a1728349.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$style$2d$inject$2e$es$2d$fc9e633e$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/spinners-react/lib/esm/style-inject.es-fc9e633e.js [app-client] (ecmascript)");
;
;
;
var css_248z = "@keyframes spinners-react-circular{0%{stroke-dashoffset:306}50%{stroke-dasharray:40,134}to{stroke-dasharray:1,174;stroke-dashoffset:132}}";
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$style$2d$inject$2e$es$2d$fc9e633e$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["s"])(css_248z);
var Component = function Component(_a) {
    var secondaryColor = _a.secondaryColor, speed = _a.speed, still = _a.still, thickness = _a.thickness, svgProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$withSharedProps$2d$a1728349$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_a, [
        "secondaryColor",
        "speed",
        "still",
        "thickness"
    ]);
    var strokeWidth = 4 * (thickness / 100);
    var circleStyle = !still ? {
        animation: "spinners-react-circular " + 140 / speed + "s linear infinite"
    } : {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$withSharedProps$2d$a1728349$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])({
        fill: "none"
    }, svgProps, {
        viewBox: "0 0 66 66"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "33",
        cy: "33",
        fill: "none",
        r: "28",
        stroke: secondaryColor,
        strokeWidth: strokeWidth
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
        cx: "33",
        cy: "33",
        fill: "none",
        r: "28",
        stroke: "currentColor",
        strokeDasharray: "1, 174",
        strokeDashoffset: "306",
        strokeLinecap: "round",
        strokeWidth: strokeWidth,
        style: circleStyle
    }));
};
Component.defaultProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$style$2d$inject$2e$es$2d$fc9e633e$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"];
var SpinnerCircular = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$withSharedProps$2d$a1728349$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(Component);
;
 //# sourceMappingURL=SpinnerCircular.js.map
}),
]);

//# sourceMappingURL=_daae8e9a._.js.map