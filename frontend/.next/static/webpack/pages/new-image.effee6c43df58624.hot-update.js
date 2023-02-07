"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/new-image",{

/***/ "./pages/new-image.js":
/*!****************************!*\
  !*** ./pages/new-image.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_font_google_target_css_path_pages_new_image_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"pages/new-image.js\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"pages/new-image.js\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_pages_new_image_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_pages_new_image_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_new_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/new-image */ \"./lib/new-image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/dist/esm/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction NewImage() {\n    _s();\n    const [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    function handleKeyPress(event) {\n        if (event.key === \"Enter\") {\n            inputRef.current.click();\n        }\n    }\n    const handleClick = async (e)=>{\n        const prompt = document.getElementById(\"prompt\").value;\n        setLoading(true);\n        const response = await (0,_lib_new_image__WEBPACK_IMPORTED_MODULE_2__.newImage)(prompt);\n        console.log(response);\n        setLoading(false);\n        setImage(response.imageUrl);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_next_font_google_target_css_path_pages_new_image_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default().className),\n                        children: \"Enter a Prompt to generate a new image:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewwarr/AI-lbum/frontend/pages/new-image.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        sx: {\n                            paddingRight: \"10px\"\n                        },\n                        variant: \"filled\",\n                        id: \"prompt\",\n                        label: \"Prompt\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().textField),\n                        value: prompt,\n                        onKeyPress: handleKeyPress,\n                        onChange: (e)=>setPrompt(e.target.value),\n                        InputLabelProps: {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().textFieldLabel)\n                        },\n                        InputProps: {\n                            classes: {\n                                input: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().textField)\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewwarr/AI-lbum/frontend/pages/new-image.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        ref: inputRef,\n                        variant: \"contained\",\n                        onClick: handleClick,\n                        children: \"Generate\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewwarr/AI-lbum/frontend/pages/new-image.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewwarr/AI-lbum/frontend/pages/new-image.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__.RotatingLines, {\n                strokeColor: \"grey\",\n                strokeWidth: \"5\",\n                animationDuration: \"0.75\",\n                width: \"96\",\n                visible: loading\n            }, void 0, false, {\n                fileName: \"/Users/andrewwarr/AI-lbum/frontend/pages/new-image.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            image && !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                margin: \"top\",\n                src: image,\n                alt: prompt,\n                width: 512,\n                height: 512,\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/andrewwarr/AI-lbum/frontend/pages/new-image.js\",\n                lineNumber: 77,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andrewwarr/AI-lbum/frontend/pages/new-image.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(NewImage, \"2/6dbH6q2lRXfXRCHe9e0cpqG94=\");\n_c = NewImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewImage);\nvar _c;\n$RefreshReg$(_c, \"NewImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXctaW1hZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBS01BO0FBTDJCO0FBQ1c7QUFDYjtBQUNpQjtBQUdOO0FBQ0o7QUFDZTtBQUVOO0FBRS9DLFNBQVNVLFdBQVc7O0lBQ2hCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNLENBQUNjLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQUM7SUFFbkMsTUFBTWdCLFdBQVdWLDZDQUFNQSxDQUFDLElBQUk7SUFFNUIsU0FBU1csZUFBZUMsS0FBSyxFQUFFO1FBQzNCLElBQUlBLE1BQU1DLEdBQUcsS0FBSyxTQUFTO1lBQ3ZCSCxTQUFTSSxPQUFPLENBQUNDLEtBQUs7UUFDMUIsQ0FBQztJQUNMO0lBRUEsTUFBTUMsY0FBYyxPQUFPQyxJQUFNO1FBQzdCLE1BQU1iLFNBQVNjLFNBQVNDLGNBQWMsQ0FBQyxVQUFVQyxLQUFLO1FBQ3REYixXQUFXLElBQUk7UUFDZixNQUFNYyxXQUFXLE1BQU0xQix3REFBUUEsQ0FBQ1M7UUFFaENrQixRQUFRQyxHQUFHLENBQUNGO1FBQ1pkLFdBQVcsS0FBSztRQUNoQkUsU0FBU1ksU0FBU0csUUFBUTtJQUM5QjtJQUVBLHFCQUNJLDhEQUFDQztRQUFLQyxXQUFXeEIscUVBQVc7OzBCQUN4Qiw4REFBQ3lCO2dCQUFJRCxXQUFXeEIsNEVBQWtCOztrQ0FDOUIsOERBQUMyQjt3QkFBR0gsV0FBV2pDLGdLQUFlO2tDQUFFOzs7Ozs7a0NBR2hDLDhEQUFDSSwrREFBU0E7d0JBQ05pQyxJQUFJOzRCQUFFQyxjQUFjO3dCQUFPO3dCQUMzQkMsU0FBUTt3QkFDUkMsSUFBRzt3QkFDSEMsT0FBTTt3QkFDTlIsV0FBV3hCLDBFQUFnQjt3QkFDM0JrQixPQUFPaEI7d0JBQ1BnQyxZQUFZekI7d0JBQ1owQixVQUFVLENBQUNwQixJQUFNWixVQUFVWSxFQUFFcUIsTUFBTSxDQUFDbEIsS0FBSzt3QkFDekNtQixpQkFBaUI7NEJBQ2JiLFdBQVd4QiwrRUFBcUI7d0JBQ3BDO3dCQUNBdUMsWUFBWTs0QkFDUkMsU0FBUztnQ0FDTEMsT0FBT3pDLDBFQUFnQjs0QkFDM0I7d0JBQ0o7Ozs7OztrQ0FFSiw4REFBQ0osNERBQU1BO3dCQUNIOEMsS0FBS2xDO3dCQUNMc0IsU0FBUTt3QkFDUmEsU0FBUzdCO2tDQUNaOzs7Ozs7Ozs7Ozs7MEJBSUwsOERBQUNmLCtEQUFhQTtnQkFDVjZDLGFBQVk7Z0JBQ1pDLGFBQVk7Z0JBQ1pDLG1CQUFrQjtnQkFDbEJDLE9BQU07Z0JBQ05DLFNBQVM1Qzs7Ozs7O1lBR1pFLFNBQVMsQ0FBQ0YseUJBQ1AsOERBQUNWLG1EQUFLQTtnQkFDRnVELFFBQU87Z0JBQ1BDLEtBQUs1QztnQkFDTDZDLEtBQUtqRDtnQkFDTDZDLE9BQU87Z0JBQ1BLLFFBQVE7Z0JBQ1JDLFFBQVE7Ozs7Ozs7Ozs7OztBQUs1QjtHQTNFU3BEO0tBQUFBO0FBNkVULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ldy1pbWFnZS5qcz84OTBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBuZXdJbWFnZSB9IGZyb20gXCIuLi9saWIvbmV3LWltYWdlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJAbmV4dC9mb250L2dvb2dsZVwiO1xuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdGF0aW5nTGluZXMgfSBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBOZXdJbWFnZSgpIHtcbiAgICBjb25zdCBbcHJvbXB0LCBzZXRQcm9tcHRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgaW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9tcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb21wdFwiKS52YWx1ZTtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXdJbWFnZShwcm9tcHQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldEltYWdlKHJlc3BvbnNlLmltYWdlVXJsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtpbnRlci5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICBFbnRlciBhIFByb21wdCB0byBnZW5lcmF0ZSBhIG5ldyBpbWFnZTpcbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcm9tcHRcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByb21wdFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb21wdH1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvbXB0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHN0eWxlcy50ZXh0RmllbGRMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBzdHlsZXMudGV4dEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgR2VuZXJhdGVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFJvdGF0aW5nTGluZXNcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcj1cImdyZXlcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNVwiXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249XCIwLjc1XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjk2XCJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXtsb2FkaW5nfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge2ltYWdlICYmICFsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MTJ9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTEyfVxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3SW1hZ2U7XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJ1c2VTdGF0ZSIsIm5ld0ltYWdlIiwiSW1hZ2UiLCJUZXh0RmllbGQiLCJCdXR0b24iLCJSZWFjdCIsInVzZVJlZiIsIlJvdGF0aW5nTGluZXMiLCJzdHlsZXMiLCJOZXdJbWFnZSIsInByb21wdCIsInNldFByb21wdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImlucHV0UmVmIiwiaGFuZGxlS2V5UHJlc3MiLCJldmVudCIsImtleSIsImN1cnJlbnQiLCJjbGljayIsImhhbmRsZUNsaWNrIiwiZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImltYWdlVXJsIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImRlc2NyaXB0aW9uIiwiaDIiLCJzeCIsInBhZGRpbmdSaWdodCIsInZhcmlhbnQiLCJpZCIsImxhYmVsIiwidGV4dEZpZWxkIiwib25LZXlQcmVzcyIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiSW5wdXRMYWJlbFByb3BzIiwidGV4dEZpZWxkTGFiZWwiLCJJbnB1dFByb3BzIiwiY2xhc3NlcyIsImlucHV0IiwicmVmIiwib25DbGljayIsInN0cm9rZUNvbG9yIiwic3Ryb2tlV2lkdGgiLCJhbmltYXRpb25EdXJhdGlvbiIsIndpZHRoIiwidmlzaWJsZSIsIm1hcmdpbiIsInNyYyIsImFsdCIsImhlaWdodCIsInByaW9yaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/new-image.js\n"));

/***/ })

});