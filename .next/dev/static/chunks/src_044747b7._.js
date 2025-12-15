(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/assets/images/client-2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/client-2.9b8cfb13.png");}),
"[project]/src/assets/images/client-2.png.mjs { IMAGE => \"[project]/src/assets/images/client-2.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$client$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/client-2.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$client$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 90,
    height: 90,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAMElEQVR42qXNuwkAIBRD0bf/WkHywaEUOxEbPe0NpPpFvQZJtkkm2UJbAMzF58dpAJnnmIYPWUN+AAAAAElFTkSuQmCC"
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Modals/UserBookingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Row.js [app-client] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Col.js [app-client] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalHeader$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/ModalHeader.js [app-client] (ecmascript) <export default as ModalHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalBody$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/ModalBody.js [app-client] (ecmascript) <export default as ModalBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalFooter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalFooter$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/ModalFooter.js [app-client] (ecmascript) <export default as ModalFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$little$2d$state$2d$machine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/little-state-machine.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$updateActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/updateActions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$short$2d$unique$2d$id$2f$dist$2f$short$2d$unique$2d$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/short-unique-id/dist/short-unique-id.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$SpinnerCircular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/spinners-react/lib/esm/SpinnerCircular.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
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
var UserBookingModal = function(param) {
    var modal = param.modal, getModal = param.getModal, booking = param.booking, _param_buttonText = param.buttonText, buttonText = _param_buttonText === void 0 ? "Pay Now" : _param_buttonText;
    var _stateAny_trip;
    _s();
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])().t;
    var router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    var _useForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])(), register = _useForm.register, reset = _useForm.reset, getValues = _useForm.getValues, setValue = _useForm.setValue, watch = _useForm.watch, handleSubmit = _useForm.handleSubmit, errors = _useForm.formState.errors;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), loading = _useState[0], setLoading = _useState[1];
    var state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$little$2d$state$2d$machine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachine"])({
        updateBooking: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$updateActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateBooking"],
        updateAction: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$updateActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAction"],
        updateUser: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$updateActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUser"]
    }).state;
    var stateAny = state;
    var _stateAny_trip_trip;
    // `updateAction({ trip: tripObj })` stores the Trip directly at `state.trip` (not `state.trip.trip`)
    var selectedTrip = (_stateAny_trip_trip = stateAny === null || stateAny === void 0 ? void 0 : (_stateAny_trip = stateAny.trip) === null || _stateAny_trip === void 0 ? void 0 : _stateAny_trip.trip) !== null && _stateAny_trip_trip !== void 0 ? _stateAny_trip_trip : stateAny === null || stateAny === void 0 ? void 0 : stateAny.trip;
    var uid = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$short$2d$unique$2d$id$2f$dist$2f$short$2d$unique$2d$id$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
        length: 10,
        dictionary: "alphanum_upper"
    });
    var transaction_id = uid.rnd();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserBookingModal.useEffect": function() {
            if (booking) {
                reset({
                    data: booking
                });
            }
        }
    }["UserBookingModal.useEffect"], [
        booking,
        reset
    ]);
    var makePaymentOnPayunit = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var phone, name, idCard, payerEmail, seat, tripForPayment, booked, createBookingFallback, _ref, data_0, error, _this, _error_response, msg, e, _this1;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setLoading(true);
                        phone = getValues("phoneNumber");
                        name = getValues('name');
                        idCard = getValues('idCardNo');
                        payerEmail = getValues('payerEmail');
                        seat = getValues('seat');
                        if (!seat) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(t('seat_required') || 'Please select a seat');
                            setLoading(false);
                            return [
                                2
                            ];
                        }
                        if ("TURBOPACK compile-time truthy", 1) {
                            localStorage.setItem("phone", phone);
                            localStorage.setItem("phoneNumber", phone);
                            localStorage.setItem("name", name);
                            localStorage.setItem("idCard", idCard);
                            localStorage.setItem("email", payerEmail);
                            localStorage.setItem("seat", seat);
                            localStorage.setItem("transactionID", transaction_id);
                        }
                        tripForPayment = selectedTrip;
                        booked = {
                            total_amount: (tripForPayment === null || tripForPayment === void 0 ? void 0 : tripForPayment.price) || 100,
                            currency: "XAF",
                            transaction_id: transaction_id,
                            return_url: "".concat(("TURBOPACK compile-time value", "http://localhost:3000") || 'https://transapp-user.herokuapp.com', "/payunit-return/:transaction_id/:transaction_amount/:transaction_gateway/:transaction_status/:purchaseRef/:currency")
                        };
                        createBookingFallback = function() {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                                var _this, _this1, _data, _this2, bookingPayload, data, _this3, bookingId;
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            if (!(tripForPayment === null || tripForPayment === void 0 ? void 0 : tripForPayment.id)) {
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('No trip selected');
                                                return [
                                                    2
                                                ];
                                            }
                                            bookingPayload = {
                                                phone_number: phone ? Number(phone) : null,
                                                number_of_seats: "1",
                                                ticket_type: "One-way",
                                                name: name || '',
                                                id_card_no: idCard || null,
                                                payer_email: payerEmail || null,
                                                seat: seat,
                                                trip_id: tripForPayment.id,
                                                agency_name: tripForPayment.agency_name,
                                                journey_date: tripForPayment.journey_date,
                                                price: tripForPayment.price,
                                                departure_city: tripForPayment.from_location,
                                                arrival_city: tripForPayment.to_location,
                                                departure_time: tripForPayment.departure
                                            };
                                            return [
                                                4,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("api/v1/bookings/create-booking/".concat(tripForPayment.id), bookingPayload)
                                            ];
                                        case 1:
                                            data = _state.sent().data;
                                            if ((_this = data) === null || _this === void 0 ? void 0 : _this.error) {
                                                ;
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_this3 = data) === null || _this3 === void 0 ? void 0 : _this3.message) || 'Booking failed');
                                                return [
                                                    2
                                                ];
                                            }
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(((_this1 = data) === null || _this1 === void 0 ? void 0 : _this1.message) || 'Booking created (dev mode)');
                                            getModal({
                                                modal_static: false
                                            });
                                            bookingId = (_this2 = data) === null || _this2 === void 0 ? void 0 : (_data = _this2.data) === null || _data === void 0 ? void 0 : _data.id;
                                            if (bookingId) {
                                                router.push("/ticket/".concat(bookingId));
                                            }
                                            return [
                                                2
                                            ];
                                    }
                                });
                            })();
                        };
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            12
                        ]);
                        return [
                            4,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("api/v1/payunit/initialize", booked)
                        ];
                    case 2:
                        _ref = _state.sent(), data_0 = _ref.data;
                        if (data_0 === null || data_0 === void 0 ? void 0 : data_0.error) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(data_0.message);
                            setLoading(false);
                        } else {
                            if (data_0.status === "SUCCESS" && ("TURBOPACK compile-time value", "object") !== 'undefined') {
                                window.location.href = data_0.data.transaction_url;
                            }
                        }
                        return [
                            3,
                            12
                        ];
                    case 3:
                        error = _state.sent();
                        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) return [
                            3,
                            10
                        ];
                        msg = ((_this = (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) === null || _this === void 0 ? void 0 : _this.message) || 'Payment initialization failed';
                        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                        ;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(msg + ' — creating booking directly (dev fallback).');
                        _state.label = 4;
                    case 4:
                        _state.trys.push([
                            4,
                            6,
                            7,
                            8
                        ]);
                        return [
                            4,
                            createBookingFallback()
                        ];
                    case 5:
                        _state.sent();
                        return [
                            3,
                            8
                        ];
                    case 6:
                        e = _state.sent();
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_this1 = e) === null || _this1 === void 0 ? void 0 : _this1.message) || 'Booking fallback failed');
                        return [
                            3,
                            8
                        ];
                    case 7:
                        setLoading(false);
                        return [
                            7
                        ];
                    case 8:
                        return [
                            2
                        ];
                    case 9:
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(msg);
                        return [
                            3,
                            11
                        ];
                    case 10:
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('An unexpected error occurred');
                        _state.label = 11;
                    case 11:
                        setLoading(false);
                        return [
                            3,
                            12
                        ];
                    case 12:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var tripForDisplay = selectedTrip;
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), takenSeats = _useState1[0], setTakenSeats = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), loadingSeats = _useState2[0], setLoadingSeats = _useState2[1];
    var seatCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserBookingModal.useMemo[seatCount]": function() {
            var n = Number(tripForDisplay === null || tripForDisplay === void 0 ? void 0 : tripForDisplay.seats);
            return Number.isFinite(n) && n > 0 ? n : 0;
        }
    }["UserBookingModal.useMemo[seatCount]"], [
        tripForDisplay === null || tripForDisplay === void 0 ? void 0 : tripForDisplay.seats
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserBookingModal.useEffect": function() {
            var load = {
                "UserBookingModal.useEffect.load": function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        "UserBookingModal.useEffect.load": function() {
                            var _this, _ref, data_1, _data, _this1, e;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                                "UserBookingModal.useEffect.load": function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            if (!modal.modal_static) return [
                                                2
                                            ];
                                            if (!(tripForDisplay === null || tripForDisplay === void 0 ? void 0 : tripForDisplay.id)) return [
                                                2
                                            ];
                                            setLoadingSeats(true);
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
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("api/v1/bookings/trip-seats/".concat(tripForDisplay.id))
                                            ];
                                        case 2:
                                            _ref = _state.sent(), data_1 = _ref.data;
                                            if ((_this = data_1) === null || _this === void 0 ? void 0 : _this.error) {
                                                setTakenSeats([]);
                                            } else {
                                                ;
                                                setTakenSeats(((_this1 = data_1) === null || _this1 === void 0 ? void 0 : (_data = _this1.data) === null || _data === void 0 ? void 0 : _data.takenSeats) || []);
                                            }
                                            return [
                                                3,
                                                5
                                            ];
                                        case 3:
                                            e = _state.sent();
                                            setTakenSeats([]);
                                            return [
                                                3,
                                                5
                                            ];
                                        case 4:
                                            setLoadingSeats(false);
                                            return [
                                                7
                                            ];
                                        case 5:
                                            return [
                                                2
                                            ];
                                    }
                                }
                            }["UserBookingModal.useEffect.load"]);
                        }
                    }["UserBookingModal.useEffect.load"])();
                }
            }["UserBookingModal.useEffect.load"];
            load();
        }
    }["UserBookingModal.useEffect"], [
        modal.modal_static,
        tripForDisplay === null || tripForDisplay === void 0 ? void 0 : tripForDisplay.id
    ]);
    var pickSeat = function(seat_0) {
        setValue('seat', seat_0, {
            shouldValidate: true,
            shouldDirty: true
        });
    };
    var selectedSeat = watch('seat');
    var seatRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserBookingModal.useMemo[seatRows]": function() {
            if (seatCount <= 0) return [];
            var seats = Array.from({
                length: seatCount
            }, {
                "UserBookingModal.useMemo[seatRows].seats": function(_, i) {
                    return String(i + 1);
                }
            }["UserBookingModal.useMemo[seatRows].seats"]);
            var rows = [];
            for(var i_0 = 0; i_0 < seats.length; i_0 += 4){
                var _seats_i_0, _seats_, _seats_1, _seats_2;
                rows.push({
                    left: [
                        (_seats_i_0 = seats[i_0]) !== null && _seats_i_0 !== void 0 ? _seats_i_0 : null,
                        (_seats_ = seats[i_0 + 1]) !== null && _seats_ !== void 0 ? _seats_ : null
                    ],
                    right: [
                        (_seats_1 = seats[i_0 + 2]) !== null && _seats_1 !== void 0 ? _seats_1 : null,
                        (_seats_2 = seats[i_0 + 3]) !== null && _seats_2 !== void 0 ? _seats_2 : null
                    ]
                });
            }
            return rows;
        }
    }["UserBookingModal.useMemo[seatRows]"], [
        seatCount
    ]);
    var SeatButton = function(param) {
        var seat_1 = param.seat;
        if (!seat_1) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ta-seat ta-seat--empty",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
            lineNumber: 248,
            columnNumber: 25
        }, _this);
        var isTaken = takenSeats.includes(seat_1);
        var isSelected = selectedSeat === seat_1;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "ta-seat ".concat(isTaken ? 'is-taken' : 'is-available', " ").concat(isSelected ? 'is-selected' : ''),
            disabled: isTaken,
            onClick: function() {
                return pickSeat(seat_1);
            },
            "aria-label": "Seat ".concat(seat_1).concat(isTaken ? ' (taken)' : isSelected ? ' (selected)' : ''),
            children: seat_1
        }, seat_1, false, {
            fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
            lineNumber: 251,
            columnNumber: 12
        }, _this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
            isOpen: modal.modal_static,
            backdrop: "static",
            centered: true,
            size: "lg",
            contentClassName: "ta-modal",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalHeader$3e$__["ModalHeader"], {
                    className: "ta-modal__header",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ta-modal__headerInner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ta-modal__kicker",
                                        children: t('booking_details') || 'Booking details'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ta-modal__title",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (tripForDisplay === null || tripForDisplay === void 0 ? void 0 : tripForDisplay.from_location) || (tripForDisplay === null || tripForDisplay === void 0 ? void 0 : tripForDisplay.from) || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ta-modal__arrow",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 264,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (tripForDisplay === null || tripForDisplay === void 0 ? void 0 : tripForDisplay.to_location) || (tripForDisplay === null || tripForDisplay === void 0 ? void 0 : tripForDisplay.to) || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "ta-modal__close",
                                onClick: function() {
                                    return getModal({
                                        modal_static: false
                                    });
                                },
                                "aria-label": t('close') || 'Close',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                    lineNumber: 271,
                                    columnNumber: 15
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalBody$3e$__["ModalBody"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit(makePaymentOnPayunit),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                        lg: 6,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ta-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "name",
                                                        className: "ta-field__label",
                                                        children: t("name")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ta-field__control",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ta-field__icon",
                                                                "aria-hidden": "true",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 73
                                                                }, _this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 21
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                                                type: "text",
                                                                id: "name",
                                                                className: "form-control ta-input"
                                                            }, register("name", {
                                                                required: true,
                                                                minLength: 2
                                                            })), void 0, false, {
                                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 21
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, _this),
                                            errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: t("agency_branch_err")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 289,
                                                columnNumber: 33
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                        lg: 6,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ta-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "idCardNo",
                                                        className: "ta-field__label",
                                                        children: t("id_card")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ta-field__control",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ta-field__icon",
                                                                "aria-hidden": "true",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                    lineNumber: 297,
                                                                    columnNumber: 73
                                                                }, _this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 21
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                                                type: "text",
                                                                id: "idCardNo",
                                                                className: "form-control ta-input"
                                                            }, register("idCardNo", {
                                                                required: true
                                                            })), void 0, false, {
                                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 21
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, _this),
                                            errors.idCardNo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: t("id_card_err")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 303,
                                                columnNumber: 37
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                        lg: 6,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ta-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "phoneNumber",
                                                        className: "ta-field__label",
                                                        children: t("phone")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ta-field__control",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ta-field__icon",
                                                                "aria-hidden": "true",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 73
                                                                }, _this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 21
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                                                type: "tel",
                                                                inputMode: "numeric",
                                                                id: "phoneNumber",
                                                                placeholder: t('valid_momo_number') || "Valid money transfer number",
                                                                className: "form-control ta-input"
                                                            }, register("phoneNumber", {
                                                                required: true,
                                                                minLength: 9,
                                                                maxLength: 12
                                                            })), void 0, false, {
                                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 21
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 309,
                                                columnNumber: 17
                                            }, _this),
                                            errors.phoneNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: t("phone_err")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 320,
                                                columnNumber: 40
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                        lg: 6,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ta-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "payerEmail",
                                                        className: "ta-field__label",
                                                        children: t("email_address")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ta-field__control",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ta-field__icon",
                                                                "aria-hidden": "true",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                    lineNumber: 329,
                                                                    columnNumber: 73
                                                                }, _this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 21
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                                                type: "email",
                                                                id: "payerEmail",
                                                                className: "form-control ta-input"
                                                            }, register("payerEmail", {
                                                                required: true
                                                            })), void 0, false, {
                                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 21
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, _this),
                                            errors.payerEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: t("phone_err")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 335,
                                                columnNumber: 39
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ta-seatmap mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ta-seatmap__header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ta-seatmap__title",
                                                        children: t('seat') || 'Seat'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ta-seatmap__subtitle",
                                                        children: loadingSeats ? t('loading') || 'Loading...' : t('select_seat') || 'Select your seat'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 343,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ta-seatmap__legend",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ta-legend is-available",
                                                        children: t('available') || 'Available'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ta-legend is-selected",
                                                        children: t('selected') || 'Selected'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 19
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ta-legend is-taken",
                                                        children: t('taken') || 'Taken'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                        lineNumber: 342,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                                        type: "hidden"
                                    }, register("seat", {
                                        required: true
                                    })), void 0, false, {
                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, _this),
                                    errors.seat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-danger mt-1",
                                        children: t('seat_required') || 'Please select a seat'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                        lineNumber: 359,
                                        columnNumber: 30
                                    }, _this) : null,
                                    seatCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ta-seatmap__bus",
                                        role: "group",
                                        "aria-label": t('seat_map') || 'Seat map',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ta-seatmap__driver",
                                                "aria-hidden": "true",
                                                children: t('driver') || 'Driver'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 362,
                                                columnNumber: 19
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ta-seatmap__rows",
                                                children: seatRows.map(function(row, idx) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ta-seatmap__row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ta-seatmap__side",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeatButton, {
                                                                        seat: row.left[0]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                        lineNumber: 366,
                                                                        columnNumber: 27
                                                                    }, _this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeatButton, {
                                                                        seat: row.left[1]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                        lineNumber: 367,
                                                                        columnNumber: 27
                                                                    }, _this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 25
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ta-seatmap__aisle",
                                                                "aria-hidden": "true"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 25
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ta-seatmap__side",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeatButton, {
                                                                        seat: row.right[0]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                        lineNumber: 371,
                                                                        columnNumber: 27
                                                                    }, _this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeatButton, {
                                                                        seat: row.right[1]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                        lineNumber: 372,
                                                                        columnNumber: 27
                                                                    }, _this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 25
                                                            }, _this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 49
                                                    }, _this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                                lineNumber: 363,
                                                columnNumber: 19
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                        lineNumber: 361,
                                        columnNumber: 32
                                    }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-muted",
                                        children: t('no_seat_map') || 'Seat map not available for this trip'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                        lineNumber: 376,
                                        columnNumber: 26
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalFooter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalFooter$3e$__["ModalFooter"], {
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '20px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$SpinnerCircular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpinnerCircular"], {
                                        color: "#bcc015",
                                        size: 50,
                                        "aria-label": "Loading Spinner",
                                        "data-testid": "loader"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                        lineNumber: 386,
                                        columnNumber: 19
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                    lineNumber: 380,
                                    columnNumber: 26
                                }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                            color: "light",
                                            onClick: function() {
                                                return getModal({
                                                    modal_static: false
                                                });
                                            },
                                            children: t("cancel")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                            lineNumber: 388,
                                            columnNumber: 19
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                            type: "submit",
                                            color: "primary",
                                            children: buttonText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                            lineNumber: 393,
                                            columnNumber: 19
                                        }, _this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                                lineNumber: 379,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modals/UserBookingModal.tsx",
            lineNumber: 256,
            columnNumber: 7
        }, _this)
    }, void 0, false);
};
_s(UserBookingModal, "UrfS3GVdq6csppKEy2tJEySGHms=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$little$2d$state$2d$machine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachine"]
    ];
});
_c = UserBookingModal;
const __TURBOPACK__default__export__ = UserBookingModal;
var _c;
__turbopack_context__.k.register(_c, "UserBookingModal");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/utils/tripFilters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_TRIP_FILTERS",
    ()=>DEFAULT_TRIP_FILTERS,
    "applyTripFilters",
    ()=>applyTripFilters,
    "availableSeats",
    ()=>availableSeats,
    "departureMinutes",
    ()=>departureMinutes,
    "parsePrice",
    ()=>parsePrice,
    "sortTrips",
    ()=>sortTrips
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [app-client] (ecmascript)");
;
;
;
var DEFAULT_TRIP_FILTERS = {
    agency: '',
    type: '',
    maxPrice: null,
    minSeats: null,
    timeStart: '',
    timeEnd: '',
    sort: 'recommended'
};
function parsePrice(value) {
    if (value == null) return null;
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    var s = String(value);
    var digits = s.replace(/[^\d]/g, '');
    if (!digits) return null;
    var n = Number(digits);
    return Number.isFinite(n) ? n : null;
}
function availableSeats(trip) {
    var _trip_seats;
    var seats = Number((_trip_seats = trip.seats) !== null && _trip_seats !== void 0 ? _trip_seats : 0);
    var _trip_reserved;
    var reserved = Number((_trip_reserved = trip.reserved) !== null && _trip_reserved !== void 0 ? _trip_reserved : 0);
    return Math.max(0, seats - reserved);
}
function departureMinutes(trip) {
    var _trip_departure;
    var raw = (_trip_departure = trip.departure) !== null && _trip_departure !== void 0 ? _trip_departure : '';
    var s = String(raw || '').trim();
    if (!s) return null;
    var m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(s, [
        'HH:mm',
        'HH:mm a',
        'hh:mm A',
        'H:mm',
        'h:mm A'
    ], true);
    if (!m.isValid()) return null;
    return m.hours() * 60 + m.minutes();
}
function withinTimeWindow(trip, start, end) {
    if (!start && !end) return true;
    var mins = departureMinutes(trip);
    if (mins == null) return true;
    var startM = start ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(start, 'HH:mm', true) : null;
    var endM = end ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(end, 'HH:mm', true) : null;
    var startMin = (startM === null || startM === void 0 ? void 0 : startM.isValid()) ? startM.hours() * 60 + startM.minutes() : null;
    var endMin = (endM === null || endM === void 0 ? void 0 : endM.isValid()) ? endM.hours() * 60 + endM.minutes() : null;
    if (startMin != null && mins < startMin) return false;
    if (endMin != null && mins > endMin) return false;
    return true;
}
function applyTripFilters(trips, filters) {
    return trips.filter(function(trip) {
        if (filters.agency && String(trip.agency_name || '') !== filters.agency) return false;
        if (filters.type && String(trip.trip_type || '') !== filters.type) return false;
        if (filters.maxPrice != null) {
            var p = parsePrice(trip.price);
            if (p != null && p > filters.maxPrice) return false;
        }
        if (filters.minSeats != null) {
            if (availableSeats(trip) < filters.minSeats) return false;
        }
        if (!withinTimeWindow(trip, filters.timeStart, filters.timeEnd)) return false;
        return true;
    });
}
function sortTrips(trips, sort) {
    var arr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(trips);
    switch(sort){
        case 'price_low':
            return arr.sort(function(a, b) {
                var _parsePrice, _parsePrice1;
                return ((_parsePrice = parsePrice(a.price)) !== null && _parsePrice !== void 0 ? _parsePrice : Number.MAX_SAFE_INTEGER) - ((_parsePrice1 = parsePrice(b.price)) !== null && _parsePrice1 !== void 0 ? _parsePrice1 : Number.MAX_SAFE_INTEGER);
            });
        case 'price_high':
            return arr.sort(function(a, b) {
                var _parsePrice, _parsePrice1;
                return ((_parsePrice = parsePrice(b.price)) !== null && _parsePrice !== void 0 ? _parsePrice : 0) - ((_parsePrice1 = parsePrice(a.price)) !== null && _parsePrice1 !== void 0 ? _parsePrice1 : 0);
            });
        case 'departure_early':
            return arr.sort(function(a, b) {
                var _departureMinutes, _departureMinutes1;
                return ((_departureMinutes = departureMinutes(a)) !== null && _departureMinutes !== void 0 ? _departureMinutes : 0) - ((_departureMinutes1 = departureMinutes(b)) !== null && _departureMinutes1 !== void 0 ? _departureMinutes1 : 0);
            });
        case 'departure_late':
            return arr.sort(function(a, b) {
                var _departureMinutes, _departureMinutes1;
                return ((_departureMinutes = departureMinutes(b)) !== null && _departureMinutes !== void 0 ? _departureMinutes : 0) - ((_departureMinutes1 = departureMinutes(a)) !== null && _departureMinutes1 !== void 0 ? _departureMinutes1 : 0);
            });
        case 'seats_high':
            return arr.sort(function(a, b) {
                return availableSeats(b) - availableSeats(a);
            });
        case 'recommended':
        default:
            return arr;
    }
}
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Trips/TripFiltersBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TripFiltersBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tripFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/tripFilters.ts [app-client] (ecmascript)");
;
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function uniq(values) {
    return Array.from(new Set(values.filter(Boolean))).sort(function(a, b) {
        return a.localeCompare(b);
    });
}
function TripFiltersBar(param) {
    var _this = this;
    var trips = param.trips, filters = param.filters, onChange = param.onChange;
    _s();
    var agencies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TripFiltersBar.useMemo[agencies]": function() {
            return uniq(trips.map({
                "TripFiltersBar.useMemo[agencies]": function(t) {
                    return String(t.agency_name || '');
                }
            }["TripFiltersBar.useMemo[agencies]"]));
        }
    }["TripFiltersBar.useMemo[agencies]"], [
        trips
    ]);
    var types = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TripFiltersBar.useMemo[types]": function() {
            return uniq(trips.map({
                "TripFiltersBar.useMemo[types]": function(t_0) {
                    return String(t_0.trip_type || '');
                }
            }["TripFiltersBar.useMemo[types]"]));
        }
    }["TripFiltersBar.useMemo[types]"], [
        trips
    ]);
    var maxPriceHint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TripFiltersBar.useMemo[maxPriceHint]": function() {
            var _Math;
            var prices = trips.map({
                "TripFiltersBar.useMemo[maxPriceHint].prices": function(t_1) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tripFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePrice"])(t_1.price);
                }
            }["TripFiltersBar.useMemo[maxPriceHint].prices"]).filter({
                "TripFiltersBar.useMemo[maxPriceHint].prices": function(n) {
                    return typeof n === 'number';
                }
            }["TripFiltersBar.useMemo[maxPriceHint].prices"]);
            if (!prices.length) return null;
            return (_Math = Math).max.apply(_Math, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(prices));
        }
    }["TripFiltersBar.useMemo[maxPriceHint]"], [
        trips
    ]);
    var set = function(patch) {
        return onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, filters, patch));
    };
    var reset = function() {
        return onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tripFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TRIP_FILTERS"]));
    };
    var _filters_maxPrice, _filters_minSeats;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ta-filterbar",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ta-filterbar__row",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ta-filterbar__group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "ta-filterbar__label",
                            children: "Sort"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "form-select ta-filterbar__control",
                            value: filters.sort,
                            onChange: function(e) {
                                return set({
                                    sort: e.target.value
                                });
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "recommended",
                                    children: "Recommended"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "price_low",
                                    children: "Price: low → high"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "price_high",
                                    children: "Price: high → low"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "departure_early",
                                    children: "Departure: earliest"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "departure_late",
                                    children: "Departure: latest"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "seats_high",
                                    children: "Seats: most available"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ta-filterbar__group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "ta-filterbar__label",
                            children: "Agency"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "form-select ta-filterbar__control",
                            value: filters.agency,
                            onChange: function(e_0) {
                                return set({
                                    agency: e_0.target.value
                                });
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "All"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                agencies.map(function(a) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: a,
                                        children: a
                                    }, a, false, {
                                        fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                                        lineNumber: 54,
                                        columnNumber: 32
                                    }, _this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ta-filterbar__group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "ta-filterbar__label",
                            children: "Type"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "form-select ta-filterbar__control",
                            value: filters.type,
                            onChange: function(e_1) {
                                return set({
                                    type: e_1.target.value
                                });
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "All"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                types.map(function(t_2) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: t_2,
                                        children: t_2
                                    }, t_2, false, {
                                        fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                                        lineNumber: 66,
                                        columnNumber: 31
                                    }, _this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ta-filterbar__group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "ta-filterbar__label",
                            children: "Max price (XAF)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "form-control ta-filterbar__control",
                            inputMode: "numeric",
                            placeholder: maxPriceHint ? "e.g. ".concat(maxPriceHint) : 'e.g. 5000',
                            value: (_filters_maxPrice = filters.maxPrice) !== null && _filters_maxPrice !== void 0 ? _filters_maxPrice : '',
                            onChange: function(e_2) {
                                return set({
                                    maxPrice: e_2.target.value ? Number(e_2.target.value) : null
                                });
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ta-filterbar__group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "ta-filterbar__label",
                            children: "Min seats"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "form-control ta-filterbar__control",
                            inputMode: "numeric",
                            placeholder: "e.g. 2",
                            value: (_filters_minSeats = filters.minSeats) !== null && _filters_minSeats !== void 0 ? _filters_minSeats : '',
                            onChange: function(e_3) {
                                return set({
                                    minSeats: e_3.target.value ? Number(e_3.target.value) : null
                                });
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ta-filterbar__group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "ta-filterbar__label",
                            children: "Time"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ta-filterbar__time",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "time",
                                    className: "form-control ta-filterbar__control",
                                    value: filters.timeStart,
                                    onChange: function(e_4) {
                                        return set({
                                            timeStart: e_4.target.value
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ta-filterbar__time-sep",
                                    children: "–"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "time",
                                    className: "form-control ta-filterbar__control",
                                    value: filters.timeEnd,
                                    onChange: function(e_5) {
                                        return set({
                                            timeEnd: e_5.target.value
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ta-filterbar__actions",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn ta-btn-outline",
                        onClick: reset,
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Trips/TripFiltersBar.tsx",
        lineNumber: 32,
        columnNumber: 10
    }, this);
}
_s(TripFiltersBar, "xiymwdpS7Z/ZV/ySRLZlx1bEshs=");
_c = TripFiltersBar;
var _c;
__turbopack_context__.k.register(_c, "TripFiltersBar");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Trips/TripFiltersResponsive.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TripFiltersResponsive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalBody$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/ModalBody.js [app-client] (ecmascript) <export default as ModalBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalFooter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalFooter$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/ModalFooter.js [app-client] (ecmascript) <export default as ModalFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalHeader$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/ModalHeader.js [app-client] (ecmascript) <export default as ModalHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Trips$2f$TripFiltersBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Trips/TripFiltersBar.tsx [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function activeFiltersCount(filters) {
    var n = 0;
    if (filters.agency) n += 1;
    if (filters.type) n += 1;
    if (filters.maxPrice != null) n += 1;
    if (filters.minSeats != null) n += 1;
    if (filters.timeStart) n += 1;
    if (filters.timeEnd) n += 1;
    return n;
}
function TripFiltersResponsive(t0) {
    _s();
    var $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "9c80c5be81dc960fb36d85f06e8d53cb66b057314fd6f6f63b475f3911f49605") {
        for(var $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol["for"]("react.memo_cache_sentinel");
        }
        $[0] = "9c80c5be81dc960fb36d85f06e8d53cb66b057314fd6f6f63b475f3911f49605";
    }
    var trips = t0.trips, filters = t0.filters, onChange = t0.onChange;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), open = _useState[0], setOpen = _useState[1];
    var t1;
    t1 = activeFiltersCount(filters);
    var count = t1;
    var t2;
    if ($[1] !== filters || $[2] !== onChange || $[3] !== trips) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-none d-lg-block",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Trips$2f$TripFiltersBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                trips: trips,
                filters: filters,
                onChange: onChange
            }, void 0, false, {
                fileName: "[project]/src/components/Trips/TripFiltersResponsive.tsx",
                lineNumber: 38,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Trips/TripFiltersResponsive.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[1] = filters;
        $[2] = onChange;
        $[3] = trips;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    var t3;
    if ($[5] === Symbol["for"]("react.memo_cache_sentinel")) {
        t3 = function() {
            return setOpen(true);
        };
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    var t4 = count ? " (".concat(count, ")") : "";
    var t5;
    if ($[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-lg-none ta-filterbar-mobile",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                type: "button",
                className: "ta-btn-outline",
                onClick: t3,
                children: [
                    "Filters",
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Trips/TripFiltersResponsive.tsx",
                lineNumber: 56,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Trips/TripFiltersResponsive.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    var t6;
    if ($[8] === Symbol["for"]("react.memo_cache_sentinel")) {
        t6 = function() {
            return setOpen(false);
        };
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    var t7;
    if ($[9] === Symbol["for"]("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalHeader$3e$__["ModalHeader"], {
            toggle: function() {
                return setOpen(false);
            },
            children: "Filters"
        }, void 0, false, {
            fileName: "[project]/src/components/Trips/TripFiltersResponsive.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    var t8;
    if ($[10] !== filters || $[11] !== onChange || $[12] !== trips) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalBody$3e$__["ModalBody"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Trips$2f$TripFiltersBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                trips: trips,
                filters: filters,
                onChange: onChange
            }, void 0, false, {
                fileName: "[project]/src/components/Trips/TripFiltersResponsive.tsx",
                lineNumber: 78,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Trips/TripFiltersResponsive.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[10] = filters;
        $[11] = onChange;
        $[12] = trips;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    var t9;
    if ($[14] === Symbol["for"]("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
            type: "button",
            className: "ta-btn-outline",
            onClick: function() {
                return setOpen(false);
            },
            children: "Close"
        }, void 0, false, {
            fileName: "[project]/src/components/Trips/TripFiltersResponsive.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    var t10;
    if ($[15] === Symbol["for"]("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalFooter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalFooter$3e$__["ModalFooter"], {
            className: "ta-sheet__footer",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    type: "button",
                    className: "ta-btn-primary",
                    onClick: function() {
                        return setOpen(false);
                    },
                    children: "Apply"
                }, void 0, false, {
                    fileName: "[project]/src/components/Trips/TripFiltersResponsive.tsx",
                    lineNumber: 95,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Trips/TripFiltersResponsive.tsx",
            lineNumber: 95,
            columnNumber: 11
        }, this);
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    var t11;
    if ($[16] !== open || $[17] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
            isOpen: open,
            toggle: t6,
            centered: true,
            className: "ta-sheet",
            contentClassName: "ta-sheet__content",
            children: [
                t7,
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Trips/TripFiltersResponsive.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[16] = open;
        $[17] = t8;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    var t12;
    if ($[19] !== t11 || $[20] !== t2 || $[21] !== t5) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t2,
                t5,
                t11
            ]
        }, void 0, true);
        $[19] = t11;
        $[20] = t2;
        $[21] = t5;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    return t12;
}
_s(TripFiltersResponsive, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = TripFiltersResponsive;
var _c;
__turbopack_context__.k.register(_c, "TripFiltersResponsive");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/Users/TripSearch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$little$2d$state$2d$machine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/little-state-machine.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$updateActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/updateActions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Row.js [app-client] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Col.js [app-client] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$CardBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardBody$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/CardBody.js [app-client] (ecmascript) <export default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalHeader$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/ModalHeader.js [app-client] (ecmascript) <export default as ModalHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalBody$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/ModalBody.js [app-client] (ecmascript) <export default as ModalBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalFooter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalFooter$3e$__ = __turbopack_context__.i("[project]/node_modules/reactstrap/esm/ModalFooter.js [app-client] (ecmascript) <export default as ModalFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$SpinnerCircular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/spinners-react/lib/esm/SpinnerCircular.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$client$2d$2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$client$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/client-2.png.mjs { IMAGE => "[project]/src/assets/images/client-2.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modals$2f$UserBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modals/UserBookingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Common/Search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$PopularRoutes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Common/PopularRoutes.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Trips$2f$TripFiltersResponsive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Trips/TripFiltersResponsive.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tripFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/tripFilters.ts [app-client] (ecmascript)");
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
;
var TripSearch = function() {
    var hideFailureModal = function hideFailureModal() {
        setIsVisible(false);
        setModalFailure({
            modal_static: false
        });
    };
    var _this1, _this2;
    _s();
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])().t;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isVisible = _useState[0], setIsVisible = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), success = _useState1[0], setSuccess = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), ticket = _useState2[0], setTicket = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), seat = _useState3[0], setSeat = _useState3[1];
    var _useStateMachine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$little$2d$state$2d$machine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachine"])({
        updateSearch: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$updateActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSearch"],
        updateAction: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$updateActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAction"]
    }), actions = _useStateMachine.actions, state = _useStateMachine.state;
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), data = _useState4[0], setData = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), loading = _useState5[0], setLoading = _useState5[1];
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), errorMessage = _useState6[0], setErrorMessage = _useState6[1];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tripFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TRIP_FILTERS"]), 2), filters = _useState7[0], setFilters = _useState7[1];
    var tripRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        modal_static: false
    }), 2), modal = _useState8[0], setModal = _useState8[1];
    var _useState9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        modal_static: false
    }), 2), modalSuccess = _useState9[0], setModalSuccess = _useState9[1];
    var _useState10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        modal_static: false
    }), 2), modalFailure = _useState10[0], setModalFailure = _useState10[1];
    var searchState = state === null || state === void 0 ? void 0 : state.search;
    // Backend stores `journey_date` as `YYYY-MM-DD` (see `public.trips.journey_date`), so query params
    // must match that format or searches return 0 results.
    var journeyDate = typeof (searchState === null || searchState === void 0 ? void 0 : searchState.journeyDate) === 'string' ? searchState.journeyDate : (searchState === null || searchState === void 0 ? void 0 : searchState.journeyDate) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(searchState.journeyDate).format('YYYY-MM-DD') : '';
    var from = typeof (searchState === null || searchState === void 0 ? void 0 : searchState.from) === 'string' ? searchState.from : ((_this1 = searchState === null || searchState === void 0 ? void 0 : searchState.from) === null || _this1 === void 0 ? void 0 : _this1.value) || '';
    var to = typeof (searchState === null || searchState === void 0 ? void 0 : searchState.to) === 'string' ? searchState.to : ((_this2 = searchState === null || searchState === void 0 ? void 0 : searchState.to) === null || _this2 === void 0 ? void 0 : _this2.value) || '';
    // Backend stores `departure` as `HH:mm` (24h, no AM/PM)
    var departureTime = typeof (searchState === null || searchState === void 0 ? void 0 : searchState.departureTime) === 'string' ? searchState.departureTime : (searchState === null || searchState === void 0 ? void 0 : searchState.departureTime) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(searchState.departureTime).format('HH:mm') : '';
    var initialJourneyDate = (searchState === null || searchState === void 0 ? void 0 : searchState.journeyDate) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(searchState.journeyDate).toDate() : undefined;
    var initialDepartureTime = (searchState === null || searchState === void 0 ? void 0 : searchState.departureTime) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(searchState.departureTime, [
        'HH:mm',
        'hh:mm A'
    ]).toDate() : undefined;
    var showModal = function() {
        setModal({
            modal_static: true
        });
    };
    var hideSuccessModal = function() {
        setSuccess(false);
        setModalSuccess({
            modal_static: false
        });
        setTicket('');
        setSeat(null);
    };
    var getCurrentTrip = function(trip) {
        tripRef.current = trip;
        actions.updateAction({
            trip: tripRef.current
        });
        showModal();
    };
    var fetchTrips = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TripSearch.useCallback[fetchTrips]": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                "TripSearch.useCallback[fetchTrips]": function() {
                    var _ref, data_0, _data_0_data, trips, err, _err_response_data, _err_response, msg;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                        "TripSearch.useCallback[fetchTrips]": function(_state) {
                            switch(_state.label){
                                case 0:
                                    _state.trys.push([
                                        0,
                                        2,
                                        3,
                                        4
                                    ]);
                                    setErrorMessage(null);
                                    setLoading(true);
                                    return [
                                        4,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("api/v1/trips/trip-search", {
                                            params: {
                                                from: from,
                                                to: to,
                                                journeyDate: journeyDate,
                                                departureTime: departureTime
                                            }
                                        })
                                    ];
                                case 1:
                                    _ref = _state.sent(), data_0 = _ref.data;
                                    if (data_0 === null || data_0 === void 0 ? void 0 : data_0.error) {
                                        setErrorMessage(data_0.message || 'Failed to fetch trips');
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(data_0.message);
                                    } else {
                                        ;
                                        trips = (_data_0_data = data_0.data) !== null && _data_0_data !== void 0 ? _data_0_data : [];
                                        setData(trips);
                                    }
                                    return [
                                        3,
                                        4
                                    ];
                                case 2:
                                    err = _state.sent();
                                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(err)) {
                                        ;
                                        msg = ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || err.message || 'Failed to fetch trips';
                                        setErrorMessage(msg);
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(msg);
                                    } else {
                                        setErrorMessage('An unexpected error occurred');
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('An unexpected error occurred');
                                    }
                                    return [
                                        3,
                                        4
                                    ];
                                case 3:
                                    setLoading(false);
                                    return [
                                        7
                                    ];
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        }
                    }["TripSearch.useCallback[fetchTrips]"]);
                }
            }["TripSearch.useCallback[fetchTrips]"])();
        }
    }["TripSearch.useCallback[fetchTrips]"], [
        from,
        to,
        journeyDate,
        departureTime
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TripSearch.useEffect": function() {
            if (typeof document !== 'undefined') {
                document.body.setAttribute('style', 'background: #f1f5f7!important;');
            }
            fetchTrips();
        }
    }["TripSearch.useEffect"], [
        fetchTrips
    ]);
    var filterNoSeatsAvailable = data.filter(function(trip_0) {
        return trip_0.reserved !== trip_0.seats;
    });
    var filteredTrips = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tripFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortTrips"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tripFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTripFilters"])(filterNoSeatsAvailable, filters), filters.sort);
    var hasResults = filterNoSeatsAvailable.length > 0;
    var hasFilteredResults = filteredTrips.length > 0;
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                    fluid: true,
                    className: "",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "loader-outer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "loader-inner",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$spinners$2d$react$2f$lib$2f$esm$2f$SpinnerCircular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpinnerCircular"], {
                                color: "#bcc014",
                                size: 50
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                lineNumber: 148,
                                columnNumber: 17
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                            lineNumber: 147,
                            columnNumber: 15
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Users/TripSearch.tsx",
                        lineNumber: 146,
                        columnNumber: 13
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                    lineNumber: 145,
                    columnNumber: 11
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/pages/Users/TripSearch.tsx",
            lineNumber: 143,
            columnNumber: 12
        }, _this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "trip-search mb-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    !loading && (errorMessage || !hasResults) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row pt-5 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$CardBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardBody$3e$__["CardBody"], {
                                    children: [
                                        errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "mb-2",
                                                    children: [
                                                        t('Failed'),
                                                        " / ",
                                                        t('error') || 'Error'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 25
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-3",
                                                    children: errorMessage
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 25
                                                }, _this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "mb-2",
                                                    children: t('no_bus') || 'No buses found'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 25
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-3",
                                                    children: [
                                                        t('no_bus') || 'No buses were found for your search.',
                                                        " ",
                                                        from && to ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                "(",
                                                                from,
                                                                " → ",
                                                                to,
                                                                ")"
                                                            ]
                                                        }, void 0, true) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 25
                                                }, _this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex gap-2 flex-wrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                color: "primary",
                                                onClick: function() {
                                                    return fetchTrips();
                                                },
                                                children: t('retry') || 'Retry'
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                lineNumber: 174,
                                                columnNumber: 23
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                            lineNumber: 173,
                                            columnNumber: 21
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                    className: "mb-3",
                                                    children: t('modify_search') || 'Modify search'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 23
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$Search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    text: "book",
                                                    initialFrom: from || undefined,
                                                    initialTo: to || undefined,
                                                    initialJourneyDate: initialJourneyDate,
                                                    initialDepartureTime: initialDepartureTime
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 23
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Common$2f$PopularRoutes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 25
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 23
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/book",
                                                        className: "btn btn-outline-secondary",
                                                        children: t('back') || 'Back'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 25
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 23
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                            lineNumber: 179,
                                            columnNumber: 21
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                    lineNumber: 161,
                                    columnNumber: 19
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                lineNumber: 160,
                                columnNumber: 17
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                            lineNumber: 159,
                            columnNumber: 15
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Users/TripSearch.tsx",
                        lineNumber: 158,
                        columnNumber: 57
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row pt-5 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-12",
                            children: hasResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                children: [
                                    hasFilteredResults ? filteredTrips.length : 0,
                                    " ",
                                    t('buses'),
                                    " ",
                                    t('from'),
                                    " ",
                                    from,
                                    " ",
                                    t('to'),
                                    " ",
                                    to
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                lineNumber: 198,
                                columnNumber: 29
                            }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                children: [
                                    filterNoSeatsAvailable.length,
                                    " ",
                                    t('no_bus'),
                                    " ",
                                    t('from'),
                                    " ",
                                    from,
                                    " ",
                                    t('to'),
                                    " ",
                                    to
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                lineNumber: 200,
                                columnNumber: 25
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Users/TripSearch.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, _this),
                    hasResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Trips$2f$TripFiltersResponsive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        trips: filterNoSeatsAvailable,
                        filters: filters,
                        onChange: setFilters
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Users/TripSearch.tsx",
                        lineNumber: 204,
                        columnNumber: 26
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-12",
                            children: [
                                !hasFilteredResults && hasResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$CardBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardBody$3e$__["CardBody"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "mb-2",
                                                children: "No trips match your filters"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                lineNumber: 210,
                                                columnNumber: 21
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-0 text-muted",
                                                children: "Try widening your price/time window or resetting filters."
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                        lineNumber: 209,
                                        columnNumber: 19
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                    lineNumber: 208,
                                    columnNumber: 52
                                }, _this) : null,
                                filteredTrips.map(function(trip_1) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                        className: "ta-trip-card",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$CardBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardBody$3e$__["CardBody"], {
                                            className: "ta-trip-card__body",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ta-trip-card__left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ta-trip-card__logo",
                                                            children: trip_1.agency_logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: trip_1.agency_logo,
                                                                alt: "agency logo",
                                                                width: 44,
                                                                height: 44
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 47
                                                            }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$client$2d$2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$client$2d$2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                                alt: "logo",
                                                                width: 44,
                                                                height: 44
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 125
                                                            }, _this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 23
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ta-trip-card__meta",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "ta-trip-card__top",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "ta-trip-card__agency",
                                                                            children: trip_1.agency_name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                                            lineNumber: 223,
                                                                            columnNumber: 27
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "badge rounded-pill text-bg-light",
                                                                            children: trip_1.trip_type || 'Standard'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                                            lineNumber: 224,
                                                                            columnNumber: 27
                                                                        }, _this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 25
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "ta-trip-card__route",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: trip_1.from_location
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                                            lineNumber: 229,
                                                                            columnNumber: 27
                                                                        }, _this),
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-muted",
                                                                            children: "→"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                                            lineNumber: 229,
                                                                            columnNumber: 67
                                                                        }, _this),
                                                                        ' ',
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: trip_1.to_location
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                                            lineNumber: 230,
                                                                            columnNumber: 27
                                                                        }, _this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 25
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "ta-trip-card__sub",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                t('departure'),
                                                                                ": ",
                                                                                String(trip_1.departure || '')
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                                            lineNumber: 233,
                                                                            columnNumber: 27
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "ta-dot",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                                            lineNumber: 234,
                                                                            columnNumber: 27
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                t('available_seats'),
                                                                                ": ",
                                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tripFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["availableSeats"])(trip_1)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                                            lineNumber: 235,
                                                                            columnNumber: 27
                                                                        }, _this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 25
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 23
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ta-trip-card__right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ta-trip-card__price",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "ta-trip-card__price-label",
                                                                    children: t('price')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 25
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "ta-trip-card__price-value",
                                                                    children: [
                                                                        trip_1.price,
                                                                        " XAF"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 25
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 23
                                                        }, _this),
                                                        trip_1.reserved !== trip_1.seats ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                            color: "primary",
                                                            className: "ta-btn-primary",
                                                            onClick: function() {
                                                                return getCurrentTrip(trip_1);
                                                            },
                                                            children: t('get_ticket')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                            lineNumber: 245,
                                                            columnNumber: 59
                                                        }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                            disabled: true,
                                                            className: "ta-btn-primary",
                                                            children: t('sold_out') || 'Sold Out'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 37
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 21
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, _this)
                                    }, trip_1.id, false, {
                                        fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                        lineNumber: 215,
                                        columnNumber: 52
                                    }, _this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Users/TripSearch.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modals$2f$UserBookingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        getModal: setModal,
                        modal: modal,
                        booking: tripRef.current || undefined,
                        buttonText: t("buy")
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Users/TripSearch.tsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, _this),
                    success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                        isOpen: modalSuccess.modal_static,
                        toggle: hideSuccessModal,
                        centered: true,
                        size: "sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalHeader$3e$__["ModalHeader"], {
                                toggle: hideSuccessModal,
                                children: [
                                    t('Success'),
                                    "!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                lineNumber: 258,
                                columnNumber: 15
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalBody$3e$__["ModalBody"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                        lg: 12,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center",
                                                children: [
                                                    t('ticket_num'),
                                                    " ",
                                                    ticket
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                lineNumber: 262,
                                                columnNumber: 21
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center",
                                                children: [
                                                    t('seat'),
                                                    ": ",
                                                    seat
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                                lineNumber: 263,
                                                columnNumber: 21
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                        lineNumber: 261,
                                        columnNumber: 19
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                    lineNumber: 260,
                                    columnNumber: 17
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                lineNumber: 259,
                                columnNumber: 15
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalFooter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalFooter$3e$__["ModalFooter"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    color: "primary",
                                    onClick: hideSuccessModal,
                                    children: "OK"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                    lineNumber: 268,
                                    columnNumber: 17
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                lineNumber: 267,
                                columnNumber: 15
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/Users/TripSearch.tsx",
                        lineNumber: 257,
                        columnNumber: 23
                    }, _this),
                    isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                        isOpen: modalFailure.modal_static,
                        toggle: hideFailureModal,
                        centered: true,
                        size: "sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalHeader$3e$__["ModalHeader"], {
                                toggle: hideFailureModal,
                                children: [
                                    t('Failed'),
                                    "!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                lineNumber: 272,
                                columnNumber: 15
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalBody$3e$__["ModalBody"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                        lg: 12,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center",
                                            children: t('failed_booking')
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                            lineNumber: 276,
                                            columnNumber: 21
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                        lineNumber: 275,
                                        columnNumber: 19
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                    lineNumber: 274,
                                    columnNumber: 17
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                lineNumber: 273,
                                columnNumber: 15
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$ModalFooter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ModalFooter$3e$__["ModalFooter"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$reactstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    color: "primary",
                                    onClick: hideFailureModal,
                                    children: "OK"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                    lineNumber: 281,
                                    columnNumber: 17
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                                lineNumber: 280,
                                columnNumber: 15
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/Users/TripSearch.tsx",
                        lineNumber: 271,
                        columnNumber: 25
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/Users/TripSearch.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, _this)
        }, void 0, false, {
            fileName: "[project]/src/pages/Users/TripSearch.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, _this)
    }, void 0, false);
};
_s(TripSearch, "VyjpZSZ+JPjhZpWiV+IQbRvGWWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$little$2d$state$2d$machine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStateMachine"]
    ];
});
_c = TripSearch;
const __TURBOPACK__default__export__ = TripSearch;
var _c;
__turbopack_context__.k.register(_c, "TripSearch");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_044747b7._.js.map