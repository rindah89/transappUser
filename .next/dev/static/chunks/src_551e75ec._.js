(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Common/Search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$fr$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/fr.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$GB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/en-GB.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$pt$2d$BR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/pt-BR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$little$2d$state$2d$machine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/little-state-machine.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$updateActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/updateActions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$react$2d$datepicker$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-datepicker/dist/react-datepicker.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
;
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
;
;
;
;
;
;
;
;
;
var towns = [
    {
        label: 'Bafoussam',
        value: 'Bafoussam'
    },
    {
        label: 'Bamenda',
        value: 'Bamenda'
    },
    {
        label: 'Buea',
        value: 'Buea'
    },
    {
        label: 'Douala',
        value: 'Douala'
    },
    {
        label: 'Dschang',
        value: 'Dschang'
    },
    {
        label: 'Edea',
        value: 'Edea'
    },
    {
        label: 'Garoua',
        value: 'Garoua'
    },
    {
        label: 'Kribi',
        value: 'kribi'
    },
    {
        label: 'Kumba',
        value: 'Kumba'
    },
    {
        label: 'Limbe',
        value: 'Limbe'
    },
    {
        label: 'Maroua',
        value: 'Maroua'
    },
    {
        label: 'Nkongsamba',
        value: 'Nkongsamba'
    },
    {
        label: 'Yaounde',
        value: 'Yaounde'
    }
];
var Search = function(param) {
    var from = param.from, initialFrom = param.initialFrom, initialTo = param.initialTo, initialJourneyDate = param.initialJourneyDate, initialDepartureTime = param.initialDepartureTime, text = param.text, setData = param.setData;
    _s();
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])().t;
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialJourneyDate !== null && initialJourneyDate !== void 0 ? initialJourneyDate : new Date()), 2), startDate = _useState[0], setStartDate = _useState[1];
    // Default to the top of the current hour so it matches our seeded trip times (HH:mm with :00).
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialDepartureTime !== null && initialDepartureTime !== void 0 ? initialDepartureTime : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().startOf('hour').toDate()), 2), depDate = _useState1[0], setDepDate = _useState1[1];
    var initialFromValue = initialFrom !== null && initialFrom !== void 0 ? initialFrom : from;
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(towns.find({
        "Search._useState.useState": function(t_0) {
            return t_0.value === (initialTo !== null && initialTo !== void 0 ? initialTo : 'Douala');
        }
    }["Search._useState.useState"]) || null), 2), toCity = _useState2[0], setToCity = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(towns.find({
        "Search._useState.useState": function(t_1) {
            return t_1.value === (initialFromValue !== null && initialFromValue !== void 0 ? initialFromValue : 'Yaounde');
        }
    }["Search._useState.useState"]) || null), 2), selectedOption = _useState3[0], setSelectedOption = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('eng'), 2), language = _useState4[0], setLanguage = _useState4[1];
    var _useForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])(), getValues = _useForm.getValues, handleSubmit = _useForm.handleSubmit;
    var actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$little$2d$state$2d$machine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachine"])({
        updateSearch: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$updateActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSearch"]
    }).actions;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Search.useEffect": function() {
            if ("TURBOPACK compile-time truthy", 1) {
                var key = localStorage.getItem('i18nextLng');
                setLanguage(key || 'eng');
            }
        }
    }["Search.useEffect"], []);
    var formData = {
        from: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value,
        to: toCity === null || toCity === void 0 ? void 0 : toCity.value,
        journeyDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(startDate).format('YYYY-MM-DD'),
        departureTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(depDate).format('HH:mm')
    };
    var searchTrip = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                actions.updateSearch(formData);
                if (!formData.from || !formData.to || !formData.journeyDate || !formData.departureTime) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('All fields are required');
                    return [
                        2
                    ];
                }
                router.push("/trip-search");
                return [
                    2
                ];
            });
        })();
    };
    var searchAnotherTrip = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var fromValue, toValue, dateValue, data, err;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        actions.updateSearch(formData);
                        fromValue = getValues("from");
                        toValue = getValues("to");
                        dateValue = getValues("journeyDate");
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
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("api/v1/trips/trip-search", {
                                params: {
                                    from: fromValue,
                                    to: toValue,
                                    journeyDate: dateValue
                                }
                            })
                        ];
                    case 2:
                        data = _state.sent().data;
                        if (data === null || data === void 0 ? void 0 : data.error) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(data.message);
                        } else if (data.data && setData) {
                            setData(data.data);
                        }
                        return [
                            3,
                            4
                        ];
                    case 3:
                        err = _state.sent();
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(err)) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || 'Search failed');
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('An unexpected error occurred');
                        }
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
    // Keep react-select styles minimal; the visual design is handled in CSS via classNamePrefix.
    var customStyles = {
        option: function(defaultStyles) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, defaultStyles);
        },
        control: function(defaultStyles_0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, defaultStyles_0);
        },
        singleValue: function(defaultStyles_1) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, defaultStyles_1);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "ta-search-form",
        onSubmit: text === 'book' ? handleSubmit(searchTrip) : handleSubmit(searchAnotherTrip),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ta-search-form__header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ta-search-form__title",
                        children: t('search') || 'Search'
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/Search.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ta-search-form__hint",
                        children: t('find_trip_hint') || 'Pick your route, date, and time.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/Common/Search.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Common/Search.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ta-search-form__grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ta-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "ta-field__label",
                                children: t('from')
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/Search.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ta-field__control",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ta-field__icon",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/Search.tsx",
                                            lineNumber: 182,
                                            columnNumber: 65
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/Search.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                        className: "ta-select",
                                        classNamePrefix: "ta-select",
                                        options: towns,
                                        onChange: function(option) {
                                            return setSelectedOption(option);
                                        },
                                        placeholder: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label,
                                        styles: customStyles,
                                        isSearchable: true,
                                        defaultValue: initialFromValue ? towns.find(function(t_2) {
                                            return t_2.value === initialFromValue;
                                        }) : selectedOption,
                                        value: selectedOption
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/Search.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Common/Search.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Common/Search.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ta-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "ta-field__label",
                                children: t('to')
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/Search.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ta-field__control",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ta-field__icon",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/Search.tsx",
                                            lineNumber: 190,
                                            columnNumber: 65
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/Search.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                        className: "ta-select",
                                        classNamePrefix: "ta-select",
                                        options: towns,
                                        onChange: function(option_0) {
                                            return setToCity(option_0);
                                        },
                                        placeholder: toCity === null || toCity === void 0 ? void 0 : toCity.label,
                                        styles: customStyles,
                                        isSearchable: true,
                                        defaultValue: toCity,
                                        value: toCity
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/Search.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Common/Search.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Common/Search.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ta-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "ta-field__label",
                                children: t('journey_date')
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/Search.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ta-field__control",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ta-field__icon",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/Search.tsx",
                                            lineNumber: 198,
                                            columnNumber: 65
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/Search.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$react$2d$datepicker$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        selected: startDate,
                                        onChange: function(date) {
                                            return date && setStartDate(date);
                                        },
                                        minDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().toDate(),
                                        locale: language === 'fr' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$fr$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fr"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$GB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enGB"],
                                        placeholderText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(startDate).format('MM-DD-YYYY'),
                                        className: "form-control ta-input"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/Search.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Common/Search.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Common/Search.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ta-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "ta-field__label",
                                children: t('time')
                            }, void 0, false, {
                                fileName: "[project]/src/components/Common/Search.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ta-field__control",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ta-field__icon",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/Search.tsx",
                                            lineNumber: 206,
                                            columnNumber: 65
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/Search.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$react$2d$datepicker$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        selected: depDate,
                                        onChange: function(date_0) {
                                            return date_0 && setDepDate(date_0);
                                        },
                                        minDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().toDate(),
                                        placeholderText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(depDate).format('HH:mm'),
                                        showTimeSelect: true,
                                        showTimeSelectOnly: true,
                                        timeIntervals: 60,
                                        timeCaption: "Time",
                                        locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$pt$2d$BR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ptBR"],
                                        dateFormat: "p",
                                        timeFormat: "p",
                                        className: "form-control ta-input"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/Search.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Common/Search.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Common/Search.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Common/Search.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ta-search-form__actions",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    type: "submit",
                    color: "primary",
                    className: "w-100 ta-search-btn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/Search.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: text === 'book' ? t('search') || 'Search' : t('modify_search') || 'Modify search'
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/Search.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Common/Search.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/components/Common/Search.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Common/Search.tsx",
        lineNumber: 172,
        columnNumber: 10
    }, _this);
};
_s(Search, "Dk+5UiOBAbZdqjCXP2XCf6WVN/Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$little$2d$state$2d$machine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachine"]
    ];
});
_c = Search;
const __TURBOPACK__default__export__ = Search;
var _c;
__turbopack_context__.k.register(_c, "Search");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Common/PopularRoutes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable react/no-unescaped-entities */ __turbopack_context__.s([
    "default",
    ()=>PopularRoutes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$little$2d$state$2d$machine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/little-state-machine.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$updateActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/updateActions.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
var DEFAULT_ROUTES = [
    {
        from: 'Yaounde',
        to: 'Douala'
    },
    {
        from: 'Douala',
        to: 'Yaounde'
    },
    {
        from: 'Bafoussam',
        to: 'Douala'
    },
    {
        from: 'Douala',
        to: 'Bafoussam'
    },
    {
        from: 'Buea',
        to: 'Douala'
    },
    {
        from: 'Douala',
        to: 'Buea'
    },
    {
        from: 'Bamenda',
        to: 'Douala'
    },
    {
        from: 'Douala',
        to: 'Bamenda'
    }
];
function PopularRoutes(t0) {
    var _this = this;
    _s();
    var $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "145a00ba602f175fbf4866111407cf78989ad33af9e33770b158b41b16342cd4") {
        for(var $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol["for"]("react.memo_cache_sentinel");
        }
        $[0] = "145a00ba602f175fbf4866111407cf78989ad33af9e33770b158b41b16342cd4";
    }
    var routes = t0.routes, title = t0.title, onSelect = t0.onSelect;
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])().t;
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var t1;
    if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
        t1 = {
            updateSearch: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$updateActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSearch"]
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    var actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$little$2d$state$2d$machine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachine"])(t1).actions;
    var t2;
    t2 = routes !== null && routes !== void 0 ? routes : DEFAULT_ROUTES;
    var items = t2;
    var t3;
    if ($[2] !== actions || $[3] !== onSelect || $[4] !== router) {
        t3 = function(route) {
            var payload = {
                from: route.from,
                to: route.to,
                journeyDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().format("YYYY-MM-DD"),
                departureTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().add(1, "hour").startOf("hour").format("HH:mm")
            };
            actions.updateSearch(payload);
            onSelect === null || onSelect === void 0 ? void 0 : onSelect(route);
            router.push("/trip-search");
        };
        $[2] = actions;
        $[3] = onSelect;
        $[4] = router;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    var handleSelect = t3;
    var t4;
    if ($[6] !== t || $[7] !== title) {
        t4 = title || t("popular_routes") || "Popular routes";
        $[6] = t;
        $[7] = title;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    var t5;
    if ($[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ta-popular-routes__header",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                className: "ta-popular-routes__title",
                children: t4
            }, void 0, false, {
                fileName: "[project]/src/components/Common/PopularRoutes.tsx",
                lineNumber: 105,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Common/PopularRoutes.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    var t6;
    if ($[11] !== handleSelect || $[12] !== items) {
        var t7;
        if ($[14] !== handleSelect) {
            t7 = function(r) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "ta-chip",
                    onClick: function() {
                        return handleSelect(r);
                    },
                    role: "listitem",
                    children: r.label || "".concat(r.from, " → ").concat(r.to)
                }, "".concat(r.from, "-").concat(r.to), false, {
                    fileName: "[project]/src/components/Common/PopularRoutes.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, _this);
            };
            $[14] = handleSelect;
            $[15] = t7;
        } else {
            t7 = $[15];
        }
        t6 = items.map(t7);
        $[11] = handleSelect;
        $[12] = items;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    var t71;
    if ($[16] !== t6) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ta-popular-routes__chips",
            role: "list",
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/Common/PopularRoutes.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[16] = t6;
        $[17] = t71;
    } else {
        t71 = $[17];
    }
    var t8;
    if ($[18] !== t5 || $[19] !== t71) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ta-popular-routes",
            children: [
                t5,
                t71
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Common/PopularRoutes.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[18] = t5;
        $[19] = t71;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    return t8;
}
_s(PopularRoutes, "qdBSHYL1RIM1+BmtoCHgOw9w6sM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$little$2d$state$2d$machine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachine"]
    ];
});
_c = PopularRoutes;
var _c;
__turbopack_context__.k.register(_c, "PopularRoutes");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/Users/book.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Row.js [app-client] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Col.js [app-client] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$CardBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardBody$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/CardBody.js [app-client] (ecmascript) <export default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Common/Search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$PopularRoutes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Common/PopularRoutes.tsx [app-client] (ecmascript)");
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
var BookTicket = function() {
    _s();
    var $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "cbeb9ac72ea543a53b5d01979103ef690a7bd563a9ff30bd9c4ac864b713ead2") {
        for(var $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol["for"]("react.memo_cache_sentinel");
        }
        $[0] = "cbeb9ac72ea543a53b5d01979103ef690a7bd563a9ff30bd9c4ac864b713ead2";
    }
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])().t;
    var t0;
    if ($[1] === Symbol["for"]("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_temp, t0);
    var t1;
    if ($[2] !== t) {
        t1 = t("booking_1");
        $[2] = t;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    var t2;
    if ($[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "booking_1",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/pages/Users/book.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, _this);
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    var t3;
    if ($[6] !== t) {
        t3 = t("booking_text");
        $[6] = t;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    var t4;
    if ($[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
            lg: 6,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "booking-h2",
                    children: [
                        t2,
                        " ",
                        t3
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/Users/book.tsx",
                    lineNumber: 54,
                    columnNumber: 40
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/pages/Users/book.tsx",
                lineNumber: 54,
                columnNumber: 22
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/pages/Users/book.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, _this);
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    var t5;
    if ($[11] === Symbol["for"]("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            text: "book"
        }, void 0, false, {
            fileName: "[project]/src/pages/Users/book.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, _this);
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    var t6;
    if ($[12] === Symbol["for"]("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
            lg: 6,
            className: "mb-lg-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                className: "booking-card ta-search-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$CardBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardBody$3e$__["CardBody"], {
                    children: [
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$PopularRoutes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/pages/Users/book.tsx",
                                lineNumber: 70,
                                columnNumber: 124
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Users/book.tsx",
                            lineNumber: 70,
                            columnNumber: 102
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/Users/book.tsx",
                    lineNumber: 70,
                    columnNumber: 88
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/pages/Users/book.tsx",
                lineNumber: 70,
                columnNumber: 42
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/pages/Users/book.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, _this);
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    var t7;
    if ($[13] !== t4) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "booking",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                    className: "mt-lg-5 pt-lg-5 mb-lg-5",
                    children: [
                        t4,
                        t6
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/Users/book.tsx",
                    lineNumber: 77,
                    columnNumber: 46
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/pages/Users/book.tsx",
                lineNumber: 77,
                columnNumber: 35
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/pages/Users/book.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, _this);
        $[13] = t4;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    return t7;
};
_s(BookTicket, "1Oj7ZUDrApaLHl4hJxr5epwfwyI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = BookTicket;
const __TURBOPACK__default__export__ = BookTicket;
function _temp() {
    if (typeof document !== "undefined") {
        document.body.setAttribute("style", "background: #162f26!important;");
    }
}
var _c;
__turbopack_context__.k.register(_c, "BookTicket");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_551e75ec._.js.map