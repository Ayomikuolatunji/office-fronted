"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./layout/Avatar.js":
/*!**************************!*\
  !*** ./layout/Avatar.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Avatar; }\n/* harmony export */ });\n/* harmony import */ var _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_authApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/authApi */ \"./api/authApi.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    \\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nfunction Avatar() {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), avatars = ref[0], setAvatars = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), selectedAvatar = ref2[0], setSelectedAvatar = ref2[1];\n    var api = \"https://api.multiavatar.com/45678945\";\n    var toastOption = {\n        position: \"bottom-right\",\n        autoclose: 8000,\n        pauseOnHover: true,\n        draggable: true,\n        theme: \"dark\"\n    };\n    var proflePicture = function() {\n        var _ref = _asyncToGenerator(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function proflePicture() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var data = [];\n        for(var i = 0; i < 4; i++){\n            var image = axios__WEBPACK_IMPORTED_MODULE_8___default().get(\"\".concat(api, \"/\").concat(Math.random(Math.random() * 1000)));\n            var buffer = new Buffer(image.data);\n            data.push(buffer.toString(\"base64\"));\n        }\n        setAvatars(data);\n        setLoading(false);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"Pick an Avatar as your profile picture\"\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                            lineNumber: 40,\n                            columnNumber: 18\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                        lineNumber: 39,\n                        columnNumber: 14\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"avatar\",\n                        children: avatars.map(function(avatar, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"avatar \".concat(selectedAvatar === index ? \"selected\" : \" \"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    src: \"data:image/svg+xml;base64,\".concat(avatar),\n                                    alt: \"avatar\",\n                                    onClick: function() {\n                                        return set;\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 23\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                                lineNumber: 44,\n                                columnNumber: 27\n                            }, _this));\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                        lineNumber: 42,\n                        columnNumber: 14\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                limit: 1\n            }, void 0, false, {\n                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Avatar, \"XtVVwjAb/1T2m0q9GMBM//eH3GQ=\");\n_c = Avatar;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject());\n_c1 = Container;\nvar _c, _c1;\n$RefreshReg$(_c, \"Avatar\");\n$RefreshReg$(_c1, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7Ozs7Ozs7O0FBR2hDLENBQUM7R0EzQ3VCdEMsTUFBTTtLQUFOQSxNQUFNO0FBNkM5QixHQUFLLENBQUMwQixTQUFTLEdBQUM1Qiw2REFBVTtNQUFwQjRCLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0F2YXRhci5qcz9hNDc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuaW1wb3J0IHsgcHJvZmlsZSB9IGZyb20gJy4uL2FwaS9hdXRoQXBpJztcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF2YXRhcigpIHtcbiAgICBjb25zdCBbYXZhdGFycyxzZXRBdmF0YXJzXT1SZWFjdC51c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ109dXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkQXZhdGFyLHNldFNlbGVjdGVkQXZhdGFyXT11c2VTdGF0ZSh1bmRlZmluZWQpOyAgICBcbiAgICBjb25zdCBhcGk9XCJodHRwczovL2FwaS5tdWx0aWF2YXRhci5jb20vNDU2Nzg5NDVcIjtcblxuICAgIGNvbnN0IHRvYXN0T3B0aW9uPXtcbiAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLXJpZ2h0XCIsXG4gICAgICAgIGF1dG9jbG9zZTo4MDAwLFxuICAgICAgICBwYXVzZU9uSG92ZXI6dHJ1ZSxcbiAgICAgICAgZHJhZ2dhYmxlOnRydWUsXG4gICAgICAgIHRoZW1lOlwiZGFya1wiXG4gICAgICB9XG4gICAgY29uc3QgcHJvZmxlUGljdHVyZT1hc3luYygpPT57XG5cbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGxldCBkYXRhPVtdXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPDQ7IGkrKyl7XG4gICAgICAgICBjb25zdCBpbWFnZT1heGlvcy5nZXQoYCR7YXBpfS8ke01hdGgucmFuZG9tKE1hdGgucmFuZG9tKCkqIDEwMDApfWApXG4gICAgICAgICBjb25zdCBidWZmZXI9bmV3IEJ1ZmZlcihpbWFnZS5kYXRhKVxuICAgICAgICAgZGF0YS5wdXNoKGJ1ZmZlci50b1N0cmluZyhcImJhc2U2NFwiKSlcbiAgICAgICAgfVxuICAgICAgICBzZXRBdmF0YXJzKGRhdGEpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSxbXSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgPGgxPlBpY2sgYW4gQXZhdGFyIGFzIHlvdXIgcHJvZmlsZSBwaWN0dXJlPC9oMT5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxuICAgICAgICAgICAgICAge2F2YXRhcnMubWFwKChhdmF0YXIsaW5kZXgpPT57XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgYXZhdGFyICR7c2VsZWN0ZWRBdmF0YXI9PT1pbmRleD9cInNlbGVjdGVkXCI6XCIgXCJ9YH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7YXZhdGFyfWB9IGFsdD1cImF2YXRhclwiIG9uQ2xpY2s9eygpPT5zZXR9IC8+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxUb2FzdENvbnRhaW5lciBsaW1pdD17MX0vPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IENvbnRhaW5lcj1zdHlsZWQuZGl2YFxuICAgIFxuYCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJwcm9maWxlIiwic3R5bGVkIiwiYXhpb3MiLCJBdmF0YXIiLCJhdmF0YXJzIiwic2V0QXZhdGFycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidW5kZWZpbmVkIiwic2VsZWN0ZWRBdmF0YXIiLCJzZXRTZWxlY3RlZEF2YXRhciIsImFwaSIsInRvYXN0T3B0aW9uIiwicG9zaXRpb24iLCJhdXRvY2xvc2UiLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJ0aGVtZSIsInByb2ZsZVBpY3R1cmUiLCJkYXRhIiwiaSIsImltYWdlIiwiZ2V0IiwiTWF0aCIsInJhbmRvbSIsImJ1ZmZlciIsIkJ1ZmZlciIsInB1c2giLCJ0b1N0cmluZyIsIkNvbnRhaW5lciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiaW5kZXgiLCJhdmF0YXIiLCJpbWciLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwic2V0IiwibGltaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layout/Avatar.js\n");

/***/ })

});