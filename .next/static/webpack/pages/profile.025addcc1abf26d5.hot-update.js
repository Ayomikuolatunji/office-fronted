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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Avatar; }\n/* harmony export */ });\n/* harmony import */ var _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\");\n/* harmony import */ var _util_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/Button */ \"./util/Button.js\");\n/* harmony import */ var _api_authApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/authApi */ \"./api/authApi.js\");\n/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/loader/Loader */ \"./components/loader/Loader.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n     display: flex;\\n     justify-content: center;\\n     align-items: center;\\n     flex-direction: column;\\n     gap: 3rem;\\n     background-color: #131324;\\n     height: 100vh;\\n\\n     .title {\\n        h1{\\n           color: #fff;\\n        }\\n     }\\n\\n     .avatars{\\n       display: flex;\\n       gap: 3rem;\\n        \\n       .avatar {\\n         border: 0.4rem solid transparent;\\n         padding: 0.4rem;\\n         border-radius: 5rem;\\n         display: flex;\\n         justify-content: center;\\n         align-items: center;\\n         cursor: pointer;\\n         transition: 0.5s ease-in-out all;\\n         img{\\n           height: 6rem;\\n         }\\n         .selected{\\n          border: 7.4rem solid #997af0;\\n          background-color: green;\\n         }\\n       }\\n     }\\n     button{\\n            background-color: #997af0;\\n            border-radius: 0.4rem;\\n            cursor: pointer;\\n            text-transform: uppercase;\\n            color: #fff;\\n            padding: 1rem 2rem;\\n            font-size: 1rem;\\n            font-weight: bold;\\n            color: #fff;\\n            border: none;\\n            transition: 0.5s ease-in-out;\\n            &:hover{\\n                background-color: #4e0eff; \\n            }\\n         }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nfunction Avatar() {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), avatars = ref[0], setAvatars = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), selectedAvatar = ref2[0], setSelectedAvatar = ref2[1];\n    var api = \"https://api.multiavatar.com/45678945\";\n    var toastOption = {\n        position: \"bottom-right\",\n        autoclose: 8000,\n        pauseOnHover: true,\n        draggable: true,\n        theme: \"dark\"\n    };\n    var proflePicture = function() {\n        var _ref = _asyncToGenerator(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (selectedAvatar === undefined) {}\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function proflePicture() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    console.log(selectedAvatar);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function fetch() {\n            return _fetch.apply(this, arguments);\n        }\n        function _fetch() {\n            _fetch = _asyncToGenerator(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data, i, image, buffer;\n                return _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            data = [];\n                            i = 0;\n                        case 2:\n                            if (!(i <= 5)) {\n                                _ctx.next = 11;\n                                break;\n                            }\n                            _ctx.next = 5;\n                            return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"\".concat(api, \"/\").concat(Math.random(Math.random() * 1000)));\n                        case 5:\n                            image = _ctx.sent;\n                            buffer = new buffer__WEBPACK_IMPORTED_MODULE_8__.Buffer(image.data);\n                            data.push(buffer.toString(\"base64\"));\n                        case 8:\n                            i++;\n                            _ctx.next = 2;\n                            break;\n                        case 11:\n                            setAvatars(data);\n                            setLoading(false);\n                        case 13:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _fetch.apply(this, arguments);\n        }\n        fetch();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"Pick an Avatar as your profile picture\"\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                            lineNumber: 50,\n                            columnNumber: 18\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                        lineNumber: 49,\n                        columnNumber: 14\n                    }, this),\n                    loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                        lineNumber: 52,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"avatars\",\n                        children: avatars.map(function(avatar, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"avatar \".concat(selectedAvatar ? \"selected\" : \" \"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    src: \"data:image/svg+xml;base64,\".concat(avatar),\n                                    alt: \"avatar\",\n                                    onClick: function() {\n                                        return setSelectedAvatar(index);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 23\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                                lineNumber: 55,\n                                columnNumber: 27\n                            }, _this));\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                        lineNumber: 53,\n                        columnNumber: 14\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_util_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        text: \"Set as Profile Picture\",\n                        onClick: proflePicture\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                        lineNumber: 65,\n                        columnNumber: 14\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                limit: 1\n            }, void 0, false, {\n                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Avatar, \"XtVVwjAb/1T2m0q9GMBM//eH3GQ=\");\n_c = Avatar;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div(_templateObject());\n_c1 = Container;\nvar _c, _c1;\n$RefreshReg$(_c, \"Avatar\");\n$RefreshReg$(_c1, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLFNBQWdDLE9BQTlCeEIsY0FBYyxHQUFDLENBQVUsWUFBQyxDQUFHO3NIQUc5QzZCLENBQUc7b0NBQUNDLEdBQUcsRUFBRyxDQUEwQiw0QkFBUyxPQUFQRixNQUFNO29DQUFJRyxHQUFHLEVBQUMsQ0FBUTtvQ0FDMURDLE9BQU8sRUFBRSxRQUFRO3dDQUFKL0IsTUFBTSxDQUFOQSxpQkFBaUIsQ0FBQzBCLEtBQUs7Ozs7Ozs7K0JBSHJDQSxLQUFLOzs7Ozt3QkFNZCxDQUFDOzs7Ozs7Z0dBRUZwQyxvREFBTTt3QkFDUDBDLElBQUksRUFBRSxDQUF3Qjt3QkFDOUJELE9BQU8sRUFBRXZCLGFBQWE7Ozs7Ozs7Ozs7Ozt3RkFHMUJ4QiwwREFBYztnQkFBQ2lELEtBQUssRUFBRSxDQUFDOzs7Ozs7OztBQUdoQyxDQUFDO0dBM0R1QnhDLE1BQU07S0FBTkEsTUFBTTtBQTZEOUIsR0FBSyxDQUFDNEIsU0FBUyxHQUFDakMsOERBQVU7TUFBcEJpQyxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dC9BdmF0YXIuanM/YTQ3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lcix0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tICdidWZmZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vdXRpbC9CdXR0b25cIlxuaW1wb3J0IHsgcHJvZmlsZSB9IGZyb20gJy4uL2FwaS9hdXRoQXBpJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXIvTG9hZGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdmF0YXIoKSB7XG4gICAgY29uc3QgW2F2YXRhcnMsc2V0QXZhdGFyc109UmVhY3QudXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddPXVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtzZWxlY3RlZEF2YXRhcixzZXRTZWxlY3RlZEF2YXRhcl09dXNlU3RhdGUodW5kZWZpbmVkKTsgICAgXG4gICAgY29uc3QgYXBpPVwiaHR0cHM6Ly9hcGkubXVsdGlhdmF0YXIuY29tLzQ1Njc4OTQ1XCI7XG5cbiAgICBjb25zdCB0b2FzdE9wdGlvbj17XG4gICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1yaWdodFwiLFxuICAgICAgICBhdXRvY2xvc2U6ODAwMCxcbiAgICAgICAgcGF1c2VPbkhvdmVyOnRydWUsXG4gICAgICAgIGRyYWdnYWJsZTp0cnVlLFxuICAgICAgICB0aGVtZTpcImRhcmtcIlxuICAgICAgfVxuICAgIGNvbnN0IHByb2ZsZVBpY3R1cmU9YXN5bmMoKT0+e1xuICAgICAgICBpZihzZWxlY3RlZEF2YXRhcj09PXVuZGVmaW5lZCl7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEF2YXRhcilcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoKCl7XG4gICAgICAgIGxldCBkYXRhPVtdXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPD01OyBpKyspe1xuICAgICAgICAgY29uc3QgaW1hZ2U9YXdhaXQgYXhpb3MuZ2V0KGAke2FwaX0vJHtNYXRoLnJhbmRvbShNYXRoLnJhbmRvbSgpKiAxMDAwKX1gKVxuICAgICAgICAgY29uc3QgYnVmZmVyPW5ldyBCdWZmZXIoaW1hZ2UuZGF0YSlcbiAgICAgICAgIGRhdGEucHVzaChidWZmZXIudG9TdHJpbmcoXCJiYXNlNjRcIikpXG4gICAgICAgIH1cbiAgICAgICAgc2V0QXZhdGFycyhkYXRhKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfVxuICAgICAgZmV0Y2goKVxuICAgIH0sW10pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgIDxoMT5QaWNrIGFuIEF2YXRhciBhcyB5b3VyIHByb2ZpbGUgcGljdHVyZTwvaDE+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7bG9hZGluZyAmJiA8TG9hZGVyLz59XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJzXCI+XG4gICAgICAgICAgICAgICB7YXZhdGFycy5tYXAoKGF2YXRhcixpbmRleCk9PntcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhdmF0YXIgJHtzZWxlY3RlZEF2YXRhcj9cInNlbGVjdGVkXCI6XCIgXCJ9YH0gXG4gICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHthdmF0YXJ9YH0gYWx0PVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+c2V0U2VsZWN0ZWRBdmF0YXIoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgIHRleHQ9e1wiU2V0IGFzIFByb2ZpbGUgUGljdHVyZVwifVxuICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb2ZsZVBpY3R1cmV9XG4gICAgICAgICAgICAgLz4gICAgIFxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIGxpbWl0PXsxfS8+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgQ29udGFpbmVyPXN0eWxlZC5kaXZgXG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICBnYXA6IDNyZW07XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzEzMjQ7XG4gICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICAgLnRpdGxlIHtcbiAgICAgICAgaDF7XG4gICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgIH1cblxuICAgICAuYXZhdGFyc3tcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgIGdhcDogM3JlbTtcbiAgICAgICAgXG4gICAgICAgLmF2YXRhciB7XG4gICAgICAgICBib3JkZXI6IDAuNHJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dCBhbGw7XG4gICAgICAgICBpbWd7XG4gICAgICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgICAgIH1cbiAgICAgICAgIC5zZWxlY3RlZHtcbiAgICAgICAgICBib3JkZXI6IDcuNHJlbSBzb2xpZCAjOTk3YWYwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgfVxuICAgICBidXR0b257XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk3YWYwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTBlZmY7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuYCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsInN0eWxlZCIsIkJ1ZmZlciIsIkJ1dHRvbiIsInByb2ZpbGUiLCJMb2FkZXIiLCJBdmF0YXIiLCJhdmF0YXJzIiwic2V0QXZhdGFycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidW5kZWZpbmVkIiwic2VsZWN0ZWRBdmF0YXIiLCJzZXRTZWxlY3RlZEF2YXRhciIsImFwaSIsInRvYXN0T3B0aW9uIiwicG9zaXRpb24iLCJhdXRvY2xvc2UiLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJ0aGVtZSIsInByb2ZsZVBpY3R1cmUiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJkYXRhIiwiaSIsImltYWdlIiwiYnVmZmVyIiwiZ2V0IiwiTWF0aCIsInJhbmRvbSIsInB1c2giLCJ0b1N0cmluZyIsIkNvbnRhaW5lciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiaW5kZXgiLCJhdmF0YXIiLCJpbWciLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwidGV4dCIsImxpbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layout/Avatar.js\n");

/***/ })

});