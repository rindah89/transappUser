"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@fvilers";
exports.ids = ["vendor-chunks/@fvilers"];
exports.modules = {

/***/ "(ssr)/./node_modules/@fvilers/disable-react-devtools/helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fvilers/disable-react-devtools/helpers.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hasWindowObject: () => (/* binding */ hasWindowObject),\n/* harmony export */   isFunction: () => (/* binding */ isFunction),\n/* harmony export */   isObject: () => (/* binding */ isObject)\n/* harmony export */ });\nfunction isFunction(obj) {\r\n  return typeof obj === \"function\";\r\n}\r\n\r\nfunction isObject(obj) {\r\n  const type = typeof obj;\r\n\r\n  return type === \"function\" || (type === \"object\" && !!obj);\r\n}\r\n\r\nfunction hasWindowObject() {\r\n  return typeof window !== \"undefined\" && window.document;\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGZ2aWxlcnMvZGlzYWJsZS1yZWFjdC1kZXZ0b29scy9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvcmVteW5nd2FueWFtL0Rlc2t0b3AvdHJhbnNhcHAvdHJhbnNhcHAtdXNlci1tYXN0ZXIvbm9kZV9tb2R1bGVzL0BmdmlsZXJzL2Rpc2FibGUtcmVhY3QtZGV2dG9vbHMvaGVscGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcclxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XHJcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiBvYmo7XHJcblxyXG4gIHJldHVybiB0eXBlID09PSBcImZ1bmN0aW9uXCIgfHwgKHR5cGUgPT09IFwib2JqZWN0XCIgJiYgISFvYmopO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzV2luZG93T2JqZWN0KCkge1xyXG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5kb2N1bWVudDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@fvilers/disable-react-devtools/helpers.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@fvilers/disable-react-devtools/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@fvilers/disable-react-devtools/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   disableReactDevTools: () => (/* binding */ disableReactDevTools)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"(ssr)/./node_modules/@fvilers/disable-react-devtools/helpers.js\");\n\r\n\r\nfunction disableReactDevTools() {\r\n  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.hasWindowObject)()) {\r\n    // Ensure the React Developer Tools global hook exists\r\n    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isObject)(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {\r\n      return;\r\n    }\r\n\r\n    // Replace all global hook properties with a no-op function or a null value\r\n    for (const prop in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {\r\n      if (prop === \"renderers\") {\r\n        // prevents console error when dev tools try to iterate of renderers\r\n        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = new Map();\r\n        continue;\r\n      }\r\n      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isFunction)(\r\n        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop]\r\n      )\r\n        ? Function.prototype\r\n        : null;\r\n    }\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGZ2aWxlcnMvZGlzYWJsZS1yZWFjdC1kZXZ0b29scy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrRTtBQUNsRTtBQUNPO0FBQ1AsTUFBTSx5REFBZTtBQUNyQjtBQUNBLFNBQVMsa0RBQVE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsb0RBQVU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZW15bmd3YW55YW0vRGVza3RvcC90cmFuc2FwcC90cmFuc2FwcC11c2VyLW1hc3Rlci9ub2RlX21vZHVsZXMvQGZ2aWxlcnMvZGlzYWJsZS1yZWFjdC1kZXZ0b29scy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYXNXaW5kb3dPYmplY3QsIGlzRnVuY3Rpb24sIGlzT2JqZWN0IH0gZnJvbSBcIi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVSZWFjdERldlRvb2xzKCkge1xyXG4gIGlmIChoYXNXaW5kb3dPYmplY3QoKSkge1xyXG4gICAgLy8gRW5zdXJlIHRoZSBSZWFjdCBEZXZlbG9wZXIgVG9vbHMgZ2xvYmFsIGhvb2sgZXhpc3RzXHJcbiAgICBpZiAoIWlzT2JqZWN0KHdpbmRvdy5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXBsYWNlIGFsbCBnbG9iYWwgaG9vayBwcm9wZXJ0aWVzIHdpdGggYSBuby1vcCBmdW5jdGlvbiBvciBhIG51bGwgdmFsdWVcclxuICAgIGZvciAoY29uc3QgcHJvcCBpbiB3aW5kb3cuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKSB7XHJcbiAgICAgIGlmIChwcm9wID09PSBcInJlbmRlcmVyc1wiKSB7XHJcbiAgICAgICAgLy8gcHJldmVudHMgY29uc29sZSBlcnJvciB3aGVuIGRldiB0b29scyB0cnkgdG8gaXRlcmF0ZSBvZiByZW5kZXJlcnNcclxuICAgICAgICB3aW5kb3cuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fW3Byb3BdID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHdpbmRvdy5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX19bcHJvcF0gPSBpc0Z1bmN0aW9uKFxyXG4gICAgICAgIHdpbmRvdy5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX19bcHJvcF1cclxuICAgICAgKVxyXG4gICAgICAgID8gRnVuY3Rpb24ucHJvdG90eXBlXHJcbiAgICAgICAgOiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@fvilers/disable-react-devtools/index.js\n");

/***/ })

};
;