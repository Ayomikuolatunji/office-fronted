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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _util_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/Button */ \"./util/Button.js\");\n/* harmony import */ var _util_InputText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/InputText */ \"./util/InputText.js\");\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n     width: 100vw;\\n     height: 100vh;\\n     display: flex;\\n     flex-direction: column;\\n     align-items: center;\\n     gap: 1rem;\\n     justify-content: center;\\n     background-color: #131342;\\n\\n     .brand{\\n          h1{\\n              color: #fff;\\n              font-size: 30px;\\n              text-transform: uppercase;\\n          }\\n     }\\n     form {\\n         display: flex;\\n         justify-content: center;\\n         flex-direction: column;\\n         gap: 2rem;\\n         background-color: #00000076;\\n         padding: 2rem 3rem;\\n\\n         input{\\n             background: transparent;\\n             padding: 1rem;\\n             border: 0.1rem solid #4e0eff;\\n             border-radius: 0.4rem;\\n             color: #fff;\\n             width: 100%;\\n             font-size: 1rem;\\n\\n             &:hover{\\n                 border: 1px solid #997af0;\\n                 outline: none;\\n             }\\n         }\\n\\n         button{\\n            background-color: #997af0;\\n            border-radius: 0.4rem;\\n            cursor: pointer;\\n            text-transform: uppercase;\\n            color: #fff;\\n            padding: 1rem 2rem;\\n            font-size: 1rem;\\n            font-weight: bold;\\n            color: #fff;\\n            border: none;\\n            transition: 0.5s ease-in-out;\\n            &:hover{\\n                background-color: #4e0eff; \\n            }\\n         }\\n         span{\\n             color: white;\\n             text-transform: uppercase;\\n             a{\\n                 color: #4e0eff;\\n             }\\n         }\\n     }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction index() {\n    var submitUserInfo = function(e) {\n        e.preventDefault();\n    };\n    var handleChange = function(e) {};\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RegisterMain, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"brand\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"New EMployee Registration\"\n                }, void 0, false, {\n                    fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                lineNumber: 17,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitUserInfo,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_util_InputText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        type: \"text\",\n                        onChange: function() {\n                            return handleChange(e);\n                        },\n                        name: \"name\",\n                        placeholder: \"Enter your user name\"\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_util_InputText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        type: \"email\",\n                        onChange: function() {\n                            return handleChange(e);\n                        },\n                        name: \"email\",\n                        placeholder: \"Enter your email address\"\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_util_InputText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        type: \"password\",\n                        onChange: function() {\n                            return handleChange(e);\n                        },\n                        name: \"password\",\n                        placeholder: \"Enter your password\"\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_util_InputText__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        type: \"text\",\n                        onChange: function() {\n                            return handleChange(e);\n                        },\n                        name: \"confirmPassword\",\n                        placeholder: \"Comfirm your password\"\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 14\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_util_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"Register\",\n                        className: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"Already have an account ? \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/login\",\n                                passHref: true,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 47\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n                lineNumber: 20,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ayomiku/Desktop/officeFrontend/pages/register/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n};\nvar RegisterMain = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = RegisterMain;\nvar _c;\n$RefreshReg$(_c, \"RegisterMain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNIO0FBQ2E7QUFDQTtBQUNNOzs7Ozs7Ozs7Ozs7O1FBZ0RkLENBZ0U5Qjs7Ozs7OztBQTlHZSxRQUFRLENBQUNLLEtBQUssR0FBRyxDQUFDO0lBRWhDLEdBQUssQ0FBQ0MsY0FBYyxHQUFDLFFBQ3JCLENBRHNCQyxDQUFDLEVBQUcsQ0FBQztRQUN2QkEsQ0FBQyxDQUFDQyxjQUFjO0lBQ3BCLENBQUM7SUFDRCxHQUFLLENBQUNDLFlBQVksR0FBQyxRQUVwQixDQUZxQkYsQ0FBQyxFQUFHLENBQUMsQ0FFeEI7SUFDQSxNQUFNLDZFQUNIRyxZQUFZOzt3RkFDUEMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQU87c0dBQ2xCQyxDQUFFOzhCQUFDLENBQXlCOzs7Ozs7Ozs7Ozt3RkFFL0JDLENBQUk7Z0JBQUNDLFFBQVEsRUFBRVQsY0FBYzs7Z0dBQ3hCRix1REFBUzt3QkFDUlksSUFBSSxFQUFFLENBQU07d0JBQ1pDLFFBQVEsRUFBRSxRQUFROzRCQUFKUixNQUFNLENBQU5BLFlBQVksQ0FBQ0YsQ0FBQzs7d0JBQzVCVyxJQUFJLEVBQUUsQ0FBTTt3QkFDWkMsV0FBVyxFQUFFLENBQXNCOzs7Ozs7Z0dBRWxDZix1REFBUzt3QkFDVlksSUFBSSxFQUFFLENBQU87d0JBQ2JDLFFBQVEsRUFBRSxRQUFROzRCQUFKUixNQUFNLENBQU5BLFlBQVksQ0FBQ0YsQ0FBQzs7d0JBQzVCVyxJQUFJLEVBQUUsQ0FBTzt3QkFDYkMsV0FBVyxFQUFFLENBQTBCOzs7Ozs7Z0dBRXhDZix1REFBUzt3QkFDUlksSUFBSSxFQUFFLENBQVU7d0JBQ2hCQyxRQUFRLEVBQUUsUUFBUTs0QkFBSlIsTUFBTSxDQUFOQSxZQUFZLENBQUNGLENBQUM7O3dCQUM1QlcsSUFBSSxFQUFFLENBQVU7d0JBQ2hCQyxXQUFXLEVBQUUsQ0FBcUI7Ozs7OztnR0FFcENmLHVEQUFTO3dCQUNQWSxJQUFJLEVBQUUsQ0FBTTt3QkFDWkMsUUFBUSxFQUFFLFFBQVE7NEJBQUpSLE1BQU0sQ0FBTkEsWUFBWSxDQUFDRixDQUFDOzt3QkFDNUJXLElBQUksRUFBRSxDQUFpQjt3QkFDdkJDLFdBQVcsRUFBRSxDQUF1Qjs7Ozs7O2dHQUVyQ2hCLG9EQUFNO3dCQUFDaUIsSUFBSSxFQUFFLENBQVU7d0JBQUVSLFNBQVMsRUFBRSxDQUFFOzs7Ozs7Z0dBQ3RDUyxDQUFJOzs0QkFBQyxDQUEwQjt3R0FBQ3JCLGtEQUFJO2dDQUFDc0IsSUFBSSxFQUFFLENBQVE7Z0NBQUVDLFFBQVE7MENBQUMsQ0FBSzs7Ozs7OzRCQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUYsQ0FBQztBQUdELEdBQUssQ0FBQ2IsWUFBWSxHQUFDUiw2REFBVTtLQUF2QlEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci9pbmRleC5qcz9iZjI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL3V0aWwvQnV0dG9uJ1xuaW1wb3J0IElucHV0VGV4dCBmcm9tICcuLi8uLi91dGlsL0lucHV0VGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XG5cbiBjb25zdCBzdWJtaXRVc2VySW5mbz0oZSk9PntcbiAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gfVxuIGNvbnN0IGhhbmRsZUNoYW5nZT0oZSk9PntcblxuIH0gXG4gIHJldHVybiAoXG4gICAgPFJlZ2lzdGVyTWFpbj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRcIj5cbiAgICAgICAgICAgIDxoMT5OZXcgRU1wbG95ZWUgUmVnaXN0cmF0aW9uPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0VXNlckluZm99PlxuICAgICAgICAgICAgICA8SW5wdXRUZXh0IFxuICAgICAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+aGFuZGxlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgIG5hbWU9e1wibmFtZVwifVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkVudGVyIHlvdXIgdXNlciBuYW1lXCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPElucHV0VGV4dCBcbiAgICAgICAgICAgICAgICB0eXBlPXtcImVtYWlsXCJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpPT5oYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgbmFtZT17XCJlbWFpbFwifVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkVudGVyIHlvdXIgZW1haWwgYWRkcmVzc1wifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8SW5wdXRUZXh0IFxuICAgICAgICAgICAgICAgIHR5cGU9e1wicGFzc3dvcmRcIn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCk9PmhhbmRsZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICBuYW1lPXtcInBhc3N3b3JkXCJ9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiRW50ZXIgeW91ciBwYXNzd29yZFwifVxuICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgPElucHV0VGV4dCBcbiAgICAgICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCk9PmhhbmRsZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICBuYW1lPXtcImNvbmZpcm1QYXNzd29yZFwifVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkNvbWZpcm0geW91ciBwYXNzd29yZFwifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiUmVnaXN0ZXJcIn0gY2xhc3NOYW1lPXtcIlwifS8+XG4gICAgICAgICAgICAgIDxzcGFuPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50ID8gPExpbmsgaHJlZj17XCIvbG9naW5cIn0gcGFzc0hyZWY+TG9naW48L0xpbms+IDwvc3Bhbj5cbiAgICAgICAgIDwvZm9ybT5cbiAgICA8L1JlZ2lzdGVyTWFpbj5cbiAgKVxufVxuXG5cbmNvbnN0IFJlZ2lzdGVyTWFpbj1zdHlsZWQuZGl2YFxuICAgICB3aWR0aDogMTAwdnc7XG4gICAgIGhlaWdodDogMTAwdmg7XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgIGdhcDogMXJlbTtcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzEzNDI7XG5cbiAgICAgLmJyYW5ke1xuICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cbiAgICAgfVxuICAgICBmb3JtIHtcbiAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICBnYXA6IDJyZW07XG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNzY7XG4gICAgICAgICBwYWRkaW5nOiAycmVtIDNyZW07XG5cbiAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgIzRlMGVmZjtcbiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuXG4gICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5N2FmMDtcbiAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG5cbiAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTdhZjA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRlMGVmZjsgXG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICBzcGFue1xuICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgIGNvbG9yOiAjNGUwZWZmO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgfVxuYCJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJzdHlsZWQiLCJCdXR0b24iLCJJbnB1dFRleHQiLCJpbmRleCIsInN1Ym1pdFVzZXJJbmZvIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlIiwiUmVnaXN0ZXJNYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ0ZXh0Iiwic3BhbiIsImhyZWYiLCJwYXNzSHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register/index.js\n");

/***/ })

});