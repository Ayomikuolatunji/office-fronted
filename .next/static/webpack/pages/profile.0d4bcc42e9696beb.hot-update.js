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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Avatar; }\n/* harmony export */ });\n/* harmony import */ var _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_authApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/authApi */ \"./api/authApi.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    \\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nfunction Avatar() {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), avatars = ref[0], setAvatars = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), selectedAvatar = ref2[0], setSelectedAvatar = ref2[1];\n    var api = \"https://api.multiavatar.com/45678945\";\n    var toastOption = {\n        position: \"bottom-right\",\n        autoclose: 8000,\n        pauseOnHover: true,\n        draggable: true,\n        theme: \"dark\"\n    };\n    var proflePicture = function() {\n        var _ref = _asyncToGenerator(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function proflePicture() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _asyncToGenerator(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data, i, image, buffer;\n            return _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        data = [];\n                        i = 0;\n                    case 2:\n                        if (!(i < 4)) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        _ctx.next = 5;\n                        return axios__WEBPACK_IMPORTED_MODULE_9___default().get(\"\".concat(api, \"/\").concat(Math.random(Math.random() * 1000)));\n                    case 5:\n                        image = _ctx.sent;\n                        buffer = new buffer__WEBPACK_IMPORTED_MODULE_8__.Buffer(image.data);\n                        data.push(buffer.toString(\"base64\"));\n                    case 8:\n                        i++;\n                        _ctx.next = 2;\n                        break;\n                    case 11:\n                        setAvatars(data);\n                        setLoading(false);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"Pick an Avatar as your profile picture\"\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                            lineNumber: 43,\n                            columnNumber: 18\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                        lineNumber: 42,\n                        columnNumber: 14\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"avatar\",\n                        children: avatars.map(function(avatar, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"avatar \".concat(selectedAvatar === index ? \"selected\" : \" \"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    src: \"data:image/svg+xml;base64,\".concat(avatar),\n                                    alt: \"avatar\",\n                                    onClick: function() {\n                                        return setSelectedAvatar(index);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 23\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                                lineNumber: 47,\n                                columnNumber: 27\n                            }, _this));\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                        lineNumber: 45,\n                        columnNumber: 14\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                limit: 1\n            }, void 0, false, {\n                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Avatar, \"XtVVwjAb/1T2m0q9GMBM//eH3GQ=\");\n_c = Avatar;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div(_templateObject());\n_c1 = Container;\nvar _c, _c1;\n$RefreshReg$(_c, \"Avatar\");\n$RefreshReg$(_c1, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvQXZhdGFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNyQjtBQUN5QjtBQUNkO0FBQ087QUFDTjtBQUNGO0FBQ1A7QUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQWlERSxDQUUzQjs7Ozs7Ozs7QUFqRGUsUUFBUSxDQUFDVyxNQUFNLEdBQUcsQ0FBQzs7O0lBQzlCLEdBQUssQ0FBc0JYLEdBQWtCLGtCQUFsQkEscURBQWMsQ0FBQyxDQUFDLENBQUMsT0FBckNZLE9BQU8sR0FBYVosR0FBa0IsS0FBOUJhLFVBQVUsR0FBRWIsR0FBa0I7SUFDN0MsR0FBSyxDQUFzQkMsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBakNhLE9BQU8sR0FBYWIsSUFBYyxLQUExQmMsVUFBVSxHQUFFZCxJQUFjO0lBQ3pDLEdBQUssQ0FBb0NBLElBQW1CLEdBQW5CQSwrQ0FBUSxDQUFDZSxTQUFTLEdBQXBEQyxjQUFjLEdBQW9CaEIsSUFBbUIsS0FBdENpQixpQkFBaUIsR0FBRWpCLElBQW1CO0lBQzVELEdBQUssQ0FBQ2tCLEdBQUcsR0FBQyxDQUFzQztJQUVoRCxHQUFLLENBQUNDLFdBQVcsR0FBQyxDQUFDO1FBQ2ZDLFFBQVEsRUFBRSxDQUFjO1FBQ3hCQyxTQUFTLEVBQUMsSUFBSTtRQUNkQyxZQUFZLEVBQUMsSUFBSTtRQUNqQkMsU0FBUyxFQUFDLElBQUk7UUFDZEMsS0FBSyxFQUFDLENBQU07SUFDZCxDQUFDO0lBQ0gsR0FBSyxDQUFDQyxhQUFhO3FMQUFDLFFBQVEsV0FBQyxDQUFDOzs7Ozs7OztRQUU5QixDQUFDO3dCQUZLQSxhQUFhOzs7O0lBR25CeEIsZ0RBQVMsQ0FBQyxRQUNaLEdBRGdCLENBQUM7MEtBQ1osUUFBUSxXQUFFLENBQUM7Z0JBQ055QixJQUFJLEVBQ0FDLENBQUMsRUFDRkMsS0FBSyxFQUNMQyxNQUFNOzs7O3dCQUhUSCxJQUFJLEdBQUMsQ0FBQyxDQUFDO3dCQUNIQyxDQUFDLEdBQUMsQ0FBQzs7OEJBQUVBLENBQUMsR0FBQyxDQUFDOzs7OzsrQkFDR2xCLGdEQUFTLENBQUUsR0FBU3NCLE1BQWdDLENBQXZDYixHQUFHLEVBQUMsQ0FBQyxJQUFtQyxPQUFqQ2EsSUFBSSxDQUFDQyxNQUFNLENBQUNELElBQUksQ0FBQ0MsTUFBTSxLQUFJLElBQUk7O3dCQUEvREosS0FBSzt3QkFDTEMsTUFBTSxHQUFDLEdBQUcsQ0FBQ3JCLDBDQUFNLENBQUNvQixLQUFLLENBQUNGLElBQUk7d0JBQ2xDQSxJQUFJLENBQUNPLElBQUksQ0FBQ0osTUFBTSxDQUFDSyxRQUFRLENBQUMsQ0FBUTs7d0JBSGpCUCxDQUFDOzs7O3dCQUtuQmYsVUFBVSxDQUFDYyxJQUFJO3dCQUNmWixVQUFVLENBQUMsS0FBSzs7Ozs7O1FBQ2pCLENBQUM7SUFDSixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ04sTUFBTTs7d0ZBRUNxQixTQUFTOztnR0FDSkMsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQU87OEdBQ2pCQyxDQUFFO3NDQUFDLENBQXNDOzs7Ozs7Ozs7OztnR0FFN0NGLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFRO2tDQUNwQjFCLE9BQU8sQ0FBQzRCLEdBQUcsQ0FBQyxRQUFRQyxDQUFQQyxNQUFNLEVBQUNELEtBQUssRUFBRyxDQUFDOzRCQUMxQixNQUFNLDZFQUFFSixDQUFHO2dDQUFDQyxTQUFTLEVBQUcsQ0FBTyxTQUF3QyxPQUF0Q3JCLGNBQWMsS0FBR3dCLEtBQUssR0FBQyxDQUFVLFlBQUMsQ0FBRztzSEFDbEVFLENBQUc7b0NBQUNDLEdBQUcsRUFBRyxDQUEwQiw0QkFBUyxPQUFQRixNQUFNO29DQUFJRyxHQUFHLEVBQUMsQ0FBUTtvQ0FBQ0MsT0FBTyxFQUFFLFFBQVE7d0NBQUo1QixNQUFNLENBQU5BLGlCQUFpQixDQUFDdUIsS0FBSzs7Ozs7OzsrQkFEdEJBLEtBQUs7Ozs7O3dCQUd4RixDQUFDOzs7Ozs7Ozs7Ozs7d0ZBR1ByQywwREFBYztnQkFBQzJDLEtBQUssRUFBRSxDQUFDOzs7Ozs7OztBQUdoQyxDQUFDO0dBN0N1QnBDLE1BQU07S0FBTkEsTUFBTTtBQStDOUIsR0FBSyxDQUFDeUIsU0FBUyxHQUFDNUIsOERBQVU7TUFBcEI0QixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dC9BdmF0YXIuanM/YTQ3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lcix0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCB7IHByb2ZpbGUgfSBmcm9tICcuLi9hcGkvYXV0aEFwaSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tICdidWZmZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXZhdGFyKCkge1xuICAgIGNvbnN0IFthdmF0YXJzLHNldEF2YXRhcnNdPVJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXT11c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRBdmF0YXIsc2V0U2VsZWN0ZWRBdmF0YXJdPXVzZVN0YXRlKHVuZGVmaW5lZCk7ICAgIFxuICAgIGNvbnN0IGFwaT1cImh0dHBzOi8vYXBpLm11bHRpYXZhdGFyLmNvbS80NTY3ODk0NVwiO1xuXG4gICAgY29uc3QgdG9hc3RPcHRpb249e1xuICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tcmlnaHRcIixcbiAgICAgICAgYXV0b2Nsb3NlOjgwMDAsXG4gICAgICAgIHBhdXNlT25Ib3Zlcjp0cnVlLFxuICAgICAgICBkcmFnZ2FibGU6dHJ1ZSxcbiAgICAgICAgdGhlbWU6XCJkYXJrXCJcbiAgICAgIH1cbiAgICBjb25zdCBwcm9mbGVQaWN0dXJlPWFzeW5jKCk9PntcblxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICBhc3luYyAoKT0+e1xuICAgICAgICBsZXQgZGF0YT1bXVxuICAgICAgICBmb3IobGV0IGk9MDsgaTw0OyBpKyspe1xuICAgICAgICAgY29uc3QgaW1hZ2U9YXdhaXQgYXhpb3MuZ2V0KGAke2FwaX0vJHtNYXRoLnJhbmRvbShNYXRoLnJhbmRvbSgpKiAxMDAwKX1gKVxuICAgICAgICAgY29uc3QgYnVmZmVyPW5ldyBCdWZmZXIoaW1hZ2UuZGF0YSlcbiAgICAgICAgIGRhdGEucHVzaChidWZmZXIudG9TdHJpbmcoXCJiYXNlNjRcIikpXG4gICAgICAgIH1cbiAgICAgICAgc2V0QXZhdGFycyhkYXRhKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgIH1cbiAgICB9LFtdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICA8aDE+UGljayBhbiBBdmF0YXIgYXMgeW91ciBwcm9maWxlIHBpY3R1cmU8L2gxPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XG4gICAgICAgICAgICAgICB7YXZhdGFycy5tYXAoKGF2YXRhcixpbmRleCk9PntcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BhdmF0YXIgJHtzZWxlY3RlZEF2YXRhcj09PWluZGV4P1wic2VsZWN0ZWRcIjpcIiBcIn1gfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHthdmF0YXJ9YH0gYWx0PVwiYXZhdGFyXCIgb25DbGljaz17KCk9PnNldFNlbGVjdGVkQXZhdGFyKGluZGV4KX0gLz5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIGxpbWl0PXsxfS8+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgQ29udGFpbmVyPXN0eWxlZC5kaXZgXG4gICAgXG5gIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsInVzZVJvdXRlciIsInByb2ZpbGUiLCJzdHlsZWQiLCJCdWZmZXIiLCJheGlvcyIsIkF2YXRhciIsImF2YXRhcnMiLCJzZXRBdmF0YXJzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1bmRlZmluZWQiLCJzZWxlY3RlZEF2YXRhciIsInNldFNlbGVjdGVkQXZhdGFyIiwiYXBpIiwidG9hc3RPcHRpb24iLCJwb3NpdGlvbiIsImF1dG9jbG9zZSIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInRoZW1lIiwicHJvZmxlUGljdHVyZSIsImRhdGEiLCJpIiwiaW1hZ2UiLCJidWZmZXIiLCJnZXQiLCJNYXRoIiwicmFuZG9tIiwicHVzaCIsInRvU3RyaW5nIiwiQ29udGFpbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJpbmRleCIsImF2YXRhciIsImltZyIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJsaW1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/Avatar.js\n");

/***/ })

});