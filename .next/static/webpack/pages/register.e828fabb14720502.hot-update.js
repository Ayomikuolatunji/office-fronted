"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register/index.js":
/*!*********************************!*\
  !*** ./pages/register/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _util_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/Button */ \"./util/Button.js\");\n/* harmony import */ var _util_InputText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/InputText */ \"./util/InputText.js\");\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n     width: 100vw;\\n     height: 100vh;\\n     display: flex;\\n     flex-direction: column;\\n     align-items: center;\\n     gap: ;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction index() {\n    var submitUserInfo = function(e) {\n        e.preventDefault();\n    };\n    var handleChange = function(e) {};\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RegisterMain, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"brand\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"New EMployee Registration\"\n                }, void 0, false, {\n                    fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                lineNumber: 17,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitUserInfo,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_util_InputText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        type: \"text\",\n                        onChange: function() {\n                            return handleChange(e);\n                        },\n                        name: \"name\",\n                        placeholder: \"Enter your user name\"\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_util_InputText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        type: \"email\",\n                        onChange: function() {\n                            return handleChange(e);\n                        },\n                        name: \"email\",\n                        placeholder: \"Enter your email address\"\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_util_InputText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        type: \"password\",\n                        onChange: function() {\n                            return handleChange(e);\n                        },\n                        name: \"password\",\n                        placeholder: \"Enter your password\"\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_util_InputText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        type: \"text\",\n                        onChange: function() {\n                            return handleChange(e);\n                        },\n                        name: \"confirmPassword\",\n                        placeholder: \"Comfirm your password\"\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 14\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_util_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"Register\",\n                        className: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"Already have an account ? \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/login\",\n                                passHref: true,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 47\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                lineNumber: 20,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n};\nvar RegisterMain = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = RegisterMain;\nvar _c;\n$RefreshReg$(_c, \"RegisterMain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNIO0FBQ2E7QUFDQTtBQUNNOzs7Ozs7Ozs7Ozs7O1FBZ0RkLENBTzlCOzs7Ozs7O0FBckRlLFFBQVEsQ0FBQ0ssS0FBSyxHQUFHLENBQUM7SUFFaEMsR0FBSyxDQUFDQyxjQUFjLEdBQUMsUUFDckIsQ0FEc0JDLENBQUMsRUFBRyxDQUFDO1FBQ3ZCQSxDQUFDLENBQUNDLGNBQWM7SUFDcEIsQ0FBQztJQUNELEdBQUssQ0FBQ0MsWUFBWSxHQUFDLFFBRXBCLENBRnFCRixDQUFDLEVBQUcsQ0FBQyxDQUV4QjtJQUNBLE1BQU0sNkVBQ0hHLFlBQVk7O3dGQUNQQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTztzR0FDbEJDLENBQUU7OEJBQUMsQ0FBeUI7Ozs7Ozs7Ozs7O3dGQUUvQkMsQ0FBSTtnQkFBQ0MsUUFBUSxFQUFFVCxjQUFjOztnR0FDeEJGLHVEQUFTO3dCQUNSWSxJQUFJLEVBQUUsQ0FBTTt3QkFDWkMsUUFBUSxFQUFFLFFBQVE7NEJBQUpSLE1BQU0sQ0FBTkEsWUFBWSxDQUFDRixDQUFDOzt3QkFDNUJXLElBQUksRUFBRSxDQUFNO3dCQUNaQyxXQUFXLEVBQUUsQ0FBc0I7Ozs7OztnR0FFbENmLHVEQUFTO3dCQUNWWSxJQUFJLEVBQUUsQ0FBTzt3QkFDYkMsUUFBUSxFQUFFLFFBQVE7NEJBQUpSLE1BQU0sQ0FBTkEsWUFBWSxDQUFDRixDQUFDOzt3QkFDNUJXLElBQUksRUFBRSxDQUFPO3dCQUNiQyxXQUFXLEVBQUUsQ0FBMEI7Ozs7OztnR0FFeENmLHVEQUFTO3dCQUNSWSxJQUFJLEVBQUUsQ0FBVTt3QkFDaEJDLFFBQVEsRUFBRSxRQUFROzRCQUFKUixNQUFNLENBQU5BLFlBQVksQ0FBQ0YsQ0FBQzs7d0JBQzVCVyxJQUFJLEVBQUUsQ0FBVTt3QkFDaEJDLFdBQVcsRUFBRSxDQUFxQjs7Ozs7O2dHQUVwQ2YsdURBQVM7d0JBQ1BZLElBQUksRUFBRSxDQUFNO3dCQUNaQyxRQUFRLEVBQUUsUUFBUTs0QkFBSlIsTUFBTSxDQUFOQSxZQUFZLENBQUNGLENBQUM7O3dCQUM1QlcsSUFBSSxFQUFFLENBQWlCO3dCQUN2QkMsV0FBVyxFQUFFLENBQXVCOzs7Ozs7Z0dBRXJDaEIsb0RBQU07d0JBQUNpQixJQUFJLEVBQUUsQ0FBVTt3QkFBRVIsU0FBUyxFQUFFLENBQUU7Ozs7OztnR0FDdENTLENBQUk7OzRCQUFDLENBQTBCO3dHQUFDckIsa0RBQUk7Z0NBQUNzQixJQUFJLEVBQUUsQ0FBUTtnQ0FBRUMsUUFBUTswQ0FBQyxDQUFLOzs7Ozs7NEJBQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkxRixDQUFDO0FBR0QsR0FBSyxDQUFDYixZQUFZLEdBQUNSLDZEQUFVO0tBQXZCUSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlZ2lzdGVyL2luZGV4LmpzP2JmMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vdXRpbC9CdXR0b24nXG5pbXBvcnQgSW5wdXRUZXh0IGZyb20gJy4uLy4uL3V0aWwvSW5wdXRUZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcblxuIGNvbnN0IHN1Ym1pdFVzZXJJbmZvPShlKT0+e1xuICAgICBlLnByZXZlbnREZWZhdWx0KClcbiB9XG4gY29uc3QgaGFuZGxlQ2hhbmdlPShlKT0+e1xuXG4gfSBcbiAgcmV0dXJuIChcbiAgICA8UmVnaXN0ZXJNYWluPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZFwiPlxuICAgICAgICAgICAgPGgxPk5ldyBFTXBsb3llZSBSZWdpc3RyYXRpb248L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRVc2VySW5mb30+XG4gICAgICAgICAgICAgIDxJbnB1dFRleHQgXG4gICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpPT5oYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgbmFtZT17XCJuYW1lXCJ9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiRW50ZXIgeW91ciB1c2VyIG5hbWVcIn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SW5wdXRUZXh0IFxuICAgICAgICAgICAgICAgIHR5cGU9e1wiZW1haWxcIn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCk9PmhhbmRsZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICBuYW1lPXtcImVtYWlsXCJ9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzXCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxJbnB1dFRleHQgXG4gICAgICAgICAgICAgICAgdHlwZT17XCJwYXNzd29yZFwifVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+aGFuZGxlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgIG5hbWU9e1wicGFzc3dvcmRcIn1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJ9XG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICA8SW5wdXRUZXh0IFxuICAgICAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+aGFuZGxlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgIG5hbWU9e1wiY29uZmlybVBhc3N3b3JkXCJ9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQ29tZmlybSB5b3VyIHBhc3N3b3JkXCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJSZWdpc3RlclwifSBjbGFzc05hbWU9e1wiXCJ9Lz5cbiAgICAgICAgICAgICAgPHNwYW4+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQgPyA8TGluayBocmVmPXtcIi9sb2dpblwifSBwYXNzSHJlZj5Mb2dpbjwvTGluaz4gPC9zcGFuPlxuICAgICAgICAgPC9mb3JtPlxuICAgIDwvUmVnaXN0ZXJNYWluPlxuICApXG59XG5cblxuY29uc3QgUmVnaXN0ZXJNYWluPXN0eWxlZC5kaXZgXG4gICAgIHdpZHRoOiAxMDB2dztcbiAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgZ2FwOiA7XG5gIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInN0eWxlZCIsIkJ1dHRvbiIsIklucHV0VGV4dCIsImluZGV4Iiwic3VibWl0VXNlckluZm8iLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDaGFuZ2UiLCJSZWdpc3Rlck1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsInR5cGUiLCJvbkNoYW5nZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInRleHQiLCJzcGFuIiwiaHJlZiIsInBhc3NIcmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register/index.js\n");

/***/ })

});