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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Avatar; }\n/* harmony export */ });\n/* harmony import */ var _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_authApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/authApi */ \"./api/authApi.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\");\n/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/loader/Loader */ \"./components/loader/Loader.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n     display: flex;\\n     justify-content: center;\\n     align-items: center;\\n     flex-direction: column;\\n     gap: 3rem;\\n     background-color: #131324;\\n     height: 100vh;\\n\\n     .title {\\n        h1{\\n          \\n        }\\n     }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nfunction Avatar() {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), avatars = ref[0], setAvatars = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), selectedAvatar = ref2[0], setSelectedAvatar = ref2[1];\n    var api = \"https://api.multiavatar.com/45678945\";\n    var toastOption = {\n        position: \"bottom-right\",\n        autoclose: 8000,\n        pauseOnHover: true,\n        draggable: true,\n        theme: \"dark\"\n    };\n    var proflePicture = function() {\n        var _ref = _asyncToGenerator(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function proflePicture() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function fetch() {\n            return _fetch.apply(this, arguments);\n        }\n        function _fetch() {\n            _fetch = _asyncToGenerator(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data, i, image, buffer;\n                return _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            data = [];\n                            i = 0;\n                        case 2:\n                            if (!(i < 4)) {\n                                _ctx.next = 11;\n                                break;\n                            }\n                            _ctx.next = 5;\n                            return axios__WEBPACK_IMPORTED_MODULE_10___default().get(\"\".concat(api, \"/\").concat(Math.random(Math.random() * 1000)));\n                        case 5:\n                            image = _ctx.sent;\n                            buffer = new buffer__WEBPACK_IMPORTED_MODULE_8__.Buffer(image.data);\n                            data.push(buffer.toString(\"base64\"));\n                        case 8:\n                            i++;\n                            _ctx.next = 2;\n                            break;\n                        case 11:\n                            setAvatars(data);\n                            setLoading(false);\n                        case 13:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _fetch.apply(this, arguments);\n        }\n        fetch();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"Pick an Avatar as your profile picture\"\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                            lineNumber: 45,\n                            columnNumber: 18\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                        lineNumber: 44,\n                        columnNumber: 14\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                        lineNumber: 47,\n                        columnNumber: 14\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"avatar\",\n                        children: avatars.map(function(avatar, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"avatar \".concat(selectedAvatar === index ? \"selected\" : \" \"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    src: \"data:image/svg+xml;base64,\".concat(avatar),\n                                    alt: \"avatar\",\n                                    onClick: function() {\n                                        return setSelectedAvatar(index);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 23\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                                lineNumber: 50,\n                                columnNumber: 27\n                            }, _this));\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                        lineNumber: 48,\n                        columnNumber: 14\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                limit: 1\n            }, void 0, false, {\n                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Avatar, \"XtVVwjAb/1T2m0q9GMBM//eH3GQ=\");\n_c = Avatar;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject());\n_c1 = Container;\nvar _c, _c1;\n$RefreshReg$(_c, \"Avatar\");\n$RefreshReg$(_c1, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBSUcsR0FBRyxFQUFDLENBQVE7b0NBQUNDLE9BQU8sRUFBRSxRQUFRO3dDQUFKN0IsTUFBTSxDQUFOQSxpQkFBaUIsQ0FBQ3dCLEtBQUs7Ozs7Ozs7K0JBRHRCQSxLQUFLOzs7Ozt3QkFHeEYsQ0FBQzs7Ozs7Ozs7Ozs7O3dGQUdQdkMsMERBQWM7Z0JBQUM2QyxLQUFLLEVBQUUsQ0FBQzs7Ozs7Ozs7QUFHaEMsQ0FBQztHQS9DdUJyQyxNQUFNO0tBQU5BLE1BQU07QUFpRDlCLEdBQUssQ0FBQzBCLFNBQVMsR0FBQzlCLDhEQUFVO01BQXBCOEIsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9sYXlvdXQvQXZhdGFyLmpzP2E0NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5pbXBvcnQgeyBwcm9maWxlIH0gZnJvbSAnLi4vYXBpL2F1dGhBcGknO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSAnYnVmZmVyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXIvTG9hZGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF2YXRhcigpIHtcbiAgICBjb25zdCBbYXZhdGFycyxzZXRBdmF0YXJzXT1SZWFjdC51c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ109dXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkQXZhdGFyLHNldFNlbGVjdGVkQXZhdGFyXT11c2VTdGF0ZSh1bmRlZmluZWQpOyAgICBcbiAgICBjb25zdCBhcGk9XCJodHRwczovL2FwaS5tdWx0aWF2YXRhci5jb20vNDU2Nzg5NDVcIjtcblxuICAgIGNvbnN0IHRvYXN0T3B0aW9uPXtcbiAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLXJpZ2h0XCIsXG4gICAgICAgIGF1dG9jbG9zZTo4MDAwLFxuICAgICAgICBwYXVzZU9uSG92ZXI6dHJ1ZSxcbiAgICAgICAgZHJhZ2dhYmxlOnRydWUsXG4gICAgICAgIHRoZW1lOlwiZGFya1wiXG4gICAgICB9XG4gICAgY29uc3QgcHJvZmxlUGljdHVyZT1hc3luYygpPT57XG5cbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaCgpe1xuICAgICAgICBsZXQgZGF0YT1bXVxuICAgICAgICBmb3IobGV0IGk9MDsgaTw0OyBpKyspe1xuICAgICAgICAgY29uc3QgaW1hZ2U9YXdhaXQgYXhpb3MuZ2V0KGAke2FwaX0vJHtNYXRoLnJhbmRvbShNYXRoLnJhbmRvbSgpKiAxMDAwKX1gKVxuICAgICAgICAgY29uc3QgYnVmZmVyPW5ldyBCdWZmZXIoaW1hZ2UuZGF0YSlcbiAgICAgICAgIGRhdGEucHVzaChidWZmZXIudG9TdHJpbmcoXCJiYXNlNjRcIikpXG4gICAgICAgIH1cbiAgICAgICAgc2V0QXZhdGFycyhkYXRhKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfVxuICAgICAgZmV0Y2goKVxuICAgIH0sW10pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgIDxoMT5QaWNrIGFuIEF2YXRhciBhcyB5b3VyIHByb2ZpbGUgcGljdHVyZTwvaDE+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPExvYWRlci8+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cbiAgICAgICAgICAgICAgIHthdmF0YXJzLm1hcCgoYXZhdGFyLGluZGV4KT0+e1xuICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YGF2YXRhciAke3NlbGVjdGVkQXZhdGFyPT09aW5kZXg/XCJzZWxlY3RlZFwiOlwiIFwifWB9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke2F2YXRhcn1gfSBhbHQ9XCJhdmF0YXJcIiBvbkNsaWNrPXsoKT0+c2V0U2VsZWN0ZWRBdmF0YXIoaW5kZXgpfSAvPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8VG9hc3RDb250YWluZXIgbGltaXQ9ezF9Lz5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBDb250YWluZXI9c3R5bGVkLmRpdmBcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgIGdhcDogM3JlbTtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTMyNDtcbiAgICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgICAudGl0bGUge1xuICAgICAgICBoMXtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICB9XG5gIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsInVzZVJvdXRlciIsInByb2ZpbGUiLCJzdHlsZWQiLCJCdWZmZXIiLCJMb2FkZXIiLCJheGlvcyIsIkF2YXRhciIsImF2YXRhcnMiLCJzZXRBdmF0YXJzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1bmRlZmluZWQiLCJzZWxlY3RlZEF2YXRhciIsInNldFNlbGVjdGVkQXZhdGFyIiwiYXBpIiwidG9hc3RPcHRpb24iLCJwb3NpdGlvbiIsImF1dG9jbG9zZSIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInRoZW1lIiwicHJvZmxlUGljdHVyZSIsImZldGNoIiwiZGF0YSIsImkiLCJpbWFnZSIsImJ1ZmZlciIsImdldCIsIk1hdGgiLCJyYW5kb20iLCJwdXNoIiwidG9TdHJpbmciLCJDb250YWluZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImluZGV4IiwiYXZhdGFyIiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsImxpbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layout/Avatar.js\n");

/***/ })

});