"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile-picture",{

/***/ "./layout/Avatar.js":
/*!**************************!*\
  !*** ./layout/Avatar.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Avatar; }\n/* harmony export */ });\n/* harmony import */ var _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\");\n/* harmony import */ var _util_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/Button */ \"./util/Button.js\");\n/* harmony import */ var _api_authApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/authApi */ \"./api/authApi.js\");\n/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/loader/Loader */ \"./components/loader/Loader.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n     display: flex;\\n     justify-content: center;\\n     align-items: center;\\n     flex-direction: column;\\n     gap: 3rem;\\n     background-color: #131324;\\n     height: 100vh;\\n\\n     .title {\\n        h1{\\n           color: #fff;\\n        }\\n     }\\n\\n     .avatars{\\n       display: flex;\\n       gap: 3rem;\\n        \\n       .avatar {\\n         border: 0.4rem solid transparent;\\n         padding: 0.4rem;\\n         border-radius: 5rem;\\n         display: flex;\\n         justify-content: center;\\n         align-items: center;\\n         cursor: pointer;\\n         transition: 0.5s ease-in-out all;\\n         img{\\n           height: 6rem;\\n         }\\n         .selected{\\n          border: 7.4rem solid #997af0;\\n          background-color: green;\\n         }\\n       }\\n     }\\n     button{\\n            background-color: #997af0;\\n            border-radius: 0.4rem;\\n            cursor: pointer;\\n            text-transform: uppercase;\\n            color: #fff;\\n            padding: 1rem 2rem;\\n            font-size: 1rem;\\n            font-weight: bold;\\n            color: #fff;\\n            border: none;\\n            transition: 0.5s ease-in-out;\\n            &:hover{\\n                background-color: #4e0eff; \\n            }\\n         }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nfunction Avatar() {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), avatars = ref[0], setAvatars = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), selectedAvatar = ref2[0], setSelectedAvatar = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), user = ref3[0], setUser = ref3[1];\n    var api = \"https://api.multiavatar.com/45678945\";\n    var toastOption = {\n        position: \"bottom-right\",\n        autoclose: 8000,\n        pauseOnHover: true,\n        draggable: true,\n        theme: \"dark\"\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var userId = localStorage.getItem(\"userId\");\n        var id = JSON.parse(userId);\n        fetch(\"http://localhost:8080/office-api/auth/\".concat(JSON.parse(userId))).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setUser(data);\n        }).catch(function(err) {\n            console.log(err.message);\n        });\n    }, []);\n    var proflePicture = function() {\n        var _ref = _asyncToGenerator(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(selectedAvatar === undefined)) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Profile picture required\", toastOption);\n                        return _ctx.abrupt(\"return\", false);\n                    case 3:\n                        if (!user) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        console.log(user.user._id);\n                        _ctx.next = 7;\n                        return axios__WEBPACK_IMPORTED_MODULE_6___default().post(\"\".concat(_api_authApi__WEBPACK_IMPORTED_MODULE_10__.profile, \"/\").concat(user.user._id), {\n                            Image: avatars[selectedAvatar]\n                        });\n                    case 7:\n                        data = _ctx.sent.data;\n                        console.log(data);\n                        if (data.isSet) {\n                            user.user.avartImage = data.image, user.user.avatarImageSet;\n                        }\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function proflePicture() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function fetch() {\n            return _fetch.apply(this, arguments);\n        }\n        function _fetch() {\n            _fetch = _asyncToGenerator(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var data, i, image, buffer;\n                return _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            data = [];\n                            i = 0;\n                        case 2:\n                            if (!(i <= 5)) {\n                                _ctx.next = 11;\n                                break;\n                            }\n                            _ctx.next = 5;\n                            return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"\".concat(api, \"/\").concat(Math.random(Math.random() * 1000)));\n                        case 5:\n                            image = _ctx.sent;\n                            buffer = new buffer__WEBPACK_IMPORTED_MODULE_8__.Buffer(image.data);\n                            data.push(buffer.toString(\"base64\"));\n                        case 8:\n                            i++;\n                            _ctx.next = 2;\n                            break;\n                        case 11:\n                            setAvatars(data);\n                            setLoading(false);\n                        case 13:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _fetch.apply(this, arguments);\n        }\n        fetch();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                lineNumber: 78,\n                columnNumber: 21\n            }, this),\n            loading || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"title\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"Pick an Avatar as your profile picture\"\n                        }, void 0, false, {\n                            fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                            lineNumber: 81,\n                            columnNumber: 18\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                        lineNumber: 80,\n                        columnNumber: 14\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"avatars\",\n                        children: avatars.map(function(avatar, index) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"avatar \".concat(selectedAvatar ? \"selected\" : \" \"),\n                                onClick: function() {\n                                    return setSelectedAvatar(index);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    src: \"data:image/svg+xml;base64,\".concat(avatar),\n                                    alt: \"avatar\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 23\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                                lineNumber: 85,\n                                columnNumber: 27\n                            }, _this));\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_util_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        text: \"Set as Profile Picture\",\n                        onClick: function() {\n                            return proflePicture();\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                        lineNumber: 96,\n                        columnNumber: 14\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                lineNumber: 79,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                limit: 1\n            }, void 0, false, {\n                fileName: \"/home/ayomiku/Desktop/officeFrontend/layout/Avatar.js\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Avatar, \"BTDwVBrk9dzQwILlLi7gj5Kismo=\");\n_c = Avatar;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div(_templateObject());\n_c1 = Container;\nvar _c, _c1;\n$RefreshReg$(_c, \"Avatar\");\n$RefreshReg$(_c1, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvQXZhdGFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ3JCO0FBQ3lCO0FBQ2Q7QUFDZDtBQUNxQjtBQUNSO0FBQ1A7QUFDSTtBQUNLO0FBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUErRnJCLENBcUQzQjs7Ozs7Ozs7QUFqSmUsUUFBUSxDQUFDYSxNQUFNLEdBQUcsQ0FBQzs7O0lBQzlCLEdBQUssQ0FBc0JiLEdBQWtCLGtCQUFsQkEscURBQWMsQ0FBQyxDQUFDLENBQUMsT0FBckNjLE9BQU8sR0FBYWQsR0FBa0IsS0FBOUJlLFVBQVUsR0FBRWYsR0FBa0I7SUFDN0MsR0FBSyxDQUFzQkMsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBakNlLE9BQU8sR0FBYWYsSUFBYyxLQUExQmdCLFVBQVUsR0FBRWhCLElBQWM7SUFDekMsR0FBSyxDQUFvQ0EsSUFBbUIsR0FBbkJBLCtDQUFRLENBQUNpQixTQUFTLEdBQXBEQyxjQUFjLEdBQW9CbEIsSUFBbUIsS0FBdENtQixpQkFBaUIsR0FBRW5CLElBQW1CO0lBQzVELEdBQUssQ0FBZ0JBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBekJvQixJQUFJLEdBQVVwQixJQUFZLEtBQXJCcUIsT0FBTyxHQUFFckIsSUFBWTtJQUNqQyxHQUFLLENBQUNzQixHQUFHLEdBQUMsQ0FBc0M7SUFFaEQsR0FBSyxDQUFDQyxXQUFXLEdBQUMsQ0FBQztRQUNmQyxRQUFRLEVBQUUsQ0FBYztRQUN4QkMsU0FBUyxFQUFDLElBQUk7UUFDZEMsWUFBWSxFQUFDLElBQUk7UUFDakJDLFNBQVMsRUFBQyxJQUFJO1FBQ2RDLEtBQUssRUFBQyxDQUFNO0lBQ2hCLENBQUM7SUFFRDNCLGdEQUFTLENBQUMsUUFDWixHQURnQixDQUFDO1FBQ2IsR0FBSyxDQUFDNEIsTUFBTSxHQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFRO1FBQzFDLEdBQUssQ0FBQ0MsRUFBRSxHQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsTUFBTTtRQUN6Qk0sS0FBSyxDQUFFLENBQXNDLHdDQUFxQixPQUFuQkYsSUFBSSxDQUFDQyxLQUFLLENBQUNMLE1BQU0sSUFDL0RPLElBQUksQ0FBQ0MsUUFDWixDQURZQSxHQUFHLEVBQUUsQ0FBQztZQUNWLE1BQU0sQ0FBQ0EsR0FBRyxDQUFDQyxJQUFJO1FBQ2pCLENBQUMsRUFDQUYsSUFBSSxDQUFDRyxRQUNiLENBRGFBLElBQUksRUFBRSxDQUFDO1lBQ1hsQixPQUFPLENBQUNrQixJQUFJO1FBQ2QsQ0FBQyxFQUNBQyxLQUFLLENBQUNDLFFBQ2IsQ0FEYUEsR0FBRyxFQUFFLENBQUM7WUFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQ0csT0FBTztRQUN6QixDQUFDO0lBQ0osQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUVKLEdBQUssQ0FBQ0MsYUFBYTtxTEFBQyxRQUFRLFdBQUMsQ0FBQztnQkFPakJOLElBQUk7Ozs7OEJBTlZyQixjQUFjLEtBQUdELFNBQVM7Ozs7d0JBQzNCYix1REFBVyxDQUFDLENBQTBCLDJCQUFFbUIsV0FBVztxREFDNUMsS0FBSzs7NkJBRVhILElBQUk7Ozs7d0JBQ0xzQixPQUFPLENBQUNDLEdBQUcsQ0FBQ3ZCLElBQUksQ0FBQ0EsSUFBSSxDQUFDMkIsR0FBRzs7K0JBQ0x6QyxpREFBVSxDQUFFLEdBQWFjLE1BQWEsQ0FBeEJWLGtEQUFPLEVBQUMsQ0FBQyxJQUFnQixPQUFkVSxJQUFJLENBQUNBLElBQUksQ0FBQzJCLEdBQUcsR0FBRyxDQUFDOzRCQUM1REUsS0FBSyxFQUFDcEMsT0FBTyxDQUFDSyxjQUFjO3dCQUM5QixDQUFDOzt3QkFGTXFCLElBQUksYUFBSkEsSUFBSTt3QkFHWEcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUk7d0JBQ2hCLEVBQUUsRUFBQ0EsSUFBSSxDQUFDVyxLQUFLLEVBQUMsQ0FBQzs0QkFDYjlCLElBQUksQ0FBQ0EsSUFBSSxDQUFDK0IsVUFBVSxHQUFDWixJQUFJLENBQUNhLEtBQUssRUFDL0JoQyxJQUFJLENBQUNBLElBQUksQ0FDVGlDLGNBQWM7d0JBRWhCLENBQUM7Ozs7OztRQUVQLENBQUM7d0JBbEJLUixhQUFhOzs7O0lBbUJuQjVDLGdEQUFTLENBQUMsUUFDWixHQURnQixDQUFDO2lCQUNFa0MsS0FBSzttQkFBTEEsTUFBSzs7aUJBQUxBLE1BQUs7WUFBTEEsTUFBSyxxS0FBcEIsUUFBUSxXQUFjLENBQUM7b0JBQ2pCSSxJQUFJLEVBQ0FlLENBQUMsRUFDRkYsS0FBSyxFQUNMRyxNQUFNOzs7OzRCQUhUaEIsSUFBSSxHQUFDLENBQUMsQ0FBQzs0QkFDSGUsQ0FBQyxHQUFDLENBQUM7O2tDQUFFQSxDQUFDLElBQUUsQ0FBQzs7Ozs7bUNBQ0VoRCxnREFBUyxDQUFFLEdBQVNtRCxNQUFnQyxDQUF2Q25DLEdBQUcsRUFBQyxDQUFDLElBQW1DLE9BQWpDbUMsSUFBSSxDQUFDQyxNQUFNLENBQUNELElBQUksQ0FBQ0MsTUFBTSxLQUFJLElBQUk7OzRCQUEvRE4sS0FBSzs0QkFDTEcsTUFBTSxHQUFDLEdBQUcsQ0FBQy9DLDBDQUFNLENBQUM0QyxLQUFLLENBQUNiLElBQUk7NEJBQ2xDQSxJQUFJLENBQUNvQixJQUFJLENBQUNKLE1BQU0sQ0FBQ0ssUUFBUSxDQUFDLENBQVE7OzRCQUhoQk4sQ0FBQzs7Ozs0QkFLcEJ4QyxVQUFVLENBQUN5QixJQUFJOzRCQUNmdkIsVUFBVSxDQUFDLEtBQUs7Ozs7OztZQUNsQixDQUFDO21CQVRjbUIsTUFBSzs7UUFVcEJBLEtBQUs7SUFDUCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ04sTUFBTTs7WUFFQ3BCLE9BQU8sZ0ZBQUtKLGtFQUFNOzs7OztZQUNuQkksT0FBTyxnRkFBSzhDLFNBQVM7O2dHQUNmQyxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBTzs4R0FDakJDLENBQUU7c0NBQUMsQ0FBc0M7Ozs7Ozs7Ozs7O2dHQUU5Q0YsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQVM7a0NBQ3BCbEQsT0FBTyxDQUFDb0QsR0FBRyxDQUFDLFFBQVFDLENBQVBDLE1BQU0sRUFBQ0QsS0FBSyxFQUFHLENBQUM7NEJBQzFCLE1BQU0sNkVBQUVKLENBQUc7Z0NBQ1hDLFNBQVMsRUFBRyxDQUFPLFNBQWdDLE9BQTlCN0MsY0FBYyxHQUFDLENBQVUsWUFBQyxDQUFHO2dDQUVsRGtELE9BQU8sRUFBRSxRQUFRO29DQUFKakQsTUFBTSxDQUFOQSxpQkFBaUIsQ0FBQytDLEtBQUs7O3NIQUVoQ0csQ0FBRztvQ0FBQ0MsR0FBRyxFQUFHLENBQTBCLDRCQUFTLE9BQVBILE1BQU07b0NBQUlJLEdBQUcsRUFBQyxDQUFROzs7Ozs7K0JBSDNETCxLQUFLOzs7Ozt3QkFPZCxDQUFDOzs7Ozs7Z0dBRUZ6RCxvREFBTTt3QkFDUCtELElBQUksRUFBRSxDQUF3Qjt3QkFDOUJKLE9BQU8sRUFBRSxRQUFROzRCQUFKdkIsTUFBTSxDQUFOQSxhQUFhOzs7Ozs7Ozs7Ozs7O3dGQUc5QjFDLDBEQUFjO2dCQUFDc0UsS0FBSyxFQUFFLENBQUM7Ozs7Ozs7O0FBR2hDLENBQUM7R0ExRnVCN0QsTUFBTTtLQUFOQSxNQUFNO0FBNEY5QixHQUFLLENBQUNpRCxTQUFTLEdBQUN0RCw4REFBVTtNQUFwQnNELFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0F2YXRhci5qcz9hNDc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gJ2J1ZmZlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi91dGlsL0J1dHRvblwiXG5pbXBvcnQgeyBwcm9maWxlIH0gZnJvbSAnLi4vYXBpL2F1dGhBcGknO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRlci9Mb2FkZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF2YXRhcigpIHtcbiAgICBjb25zdCBbYXZhdGFycyxzZXRBdmF0YXJzXT1SZWFjdC51c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ109dXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkQXZhdGFyLHNldFNlbGVjdGVkQXZhdGFyXT11c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdPXVzZVN0YXRlKFtdKSAgICBcbiAgICBjb25zdCBhcGk9XCJodHRwczovL2FwaS5tdWx0aWF2YXRhci5jb20vNDU2Nzg5NDVcIjtcblxuICAgIGNvbnN0IHRvYXN0T3B0aW9uPXtcbiAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLXJpZ2h0XCIsXG4gICAgICAgIGF1dG9jbG9zZTo4MDAwLFxuICAgICAgICBwYXVzZU9uSG92ZXI6dHJ1ZSxcbiAgICAgICAgZHJhZ2dhYmxlOnRydWUsXG4gICAgICAgIHRoZW1lOlwiZGFya1wiXG4gICAgfVxuIFxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgY29uc3QgdXNlcklkPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXG4gICAgICBjb25zdCBpZD1KU09OLnBhcnNlKHVzZXJJZClcbiAgICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL29mZmljZS1hcGkvYXV0aC8ke0pTT04ucGFyc2UodXNlcklkKX1gKVxuICAgICAgIC50aGVuKHJlcz0+e1xuICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICB9KVxuICAgICAgIC50aGVuKGRhdGE9PntcbiAgICAgICAgIHNldFVzZXIoZGF0YSlcbiAgICAgICB9KVxuICAgICAgIC5jYXRjaChlcnI9PntcbiAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxuICAgICAgIH0pXG4gICAgfSxbXSlcblxuICAgIGNvbnN0IHByb2ZsZVBpY3R1cmU9YXN5bmMoKT0+e1xuICAgICAgICBpZihzZWxlY3RlZEF2YXRhcj09PXVuZGVmaW5lZCl7XG4gICAgICAgICAgdG9hc3QuZXJyb3IoXCJQcm9maWxlIHBpY3R1cmUgcmVxdWlyZWRcIiwgdG9hc3RPcHRpb24pO1xuICAgICAgICAgIHJldHVybiBmYWxzZSBcbiAgICAgICAgfVxuICAgICAgICBpZih1c2VyKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyLnVzZXIuX2lkKVxuICAgICAgICAgIGNvbnN0IHtkYXRhfT1hd2FpdCAgYXhpb3MucG9zdChgJHtwcm9maWxlfS8ke3VzZXIudXNlci5faWR9YCx7XG4gICAgICAgICAgICBJbWFnZTphdmF0YXJzW3NlbGVjdGVkQXZhdGFyXVxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICBpZihkYXRhLmlzU2V0KXtcbiAgICAgICAgICAgIHVzZXIudXNlci5hdmFydEltYWdlPWRhdGEuaW1hZ2UsXG4gICAgICAgICAgICB1c2VyLnVzZXIuXG4gICAgICAgICAgICBhdmF0YXJJbWFnZVNldFxuICAgICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaCgpe1xuICAgICAgICBsZXQgZGF0YT1bXVxuICAgICAgICBmb3IobGV0IGk9MDsgaTw9NTsgaSsrKXtcbiAgICAgICAgIGNvbnN0IGltYWdlPWF3YWl0IGF4aW9zLmdldChgJHthcGl9LyR7TWF0aC5yYW5kb20oTWF0aC5yYW5kb20oKSogMTAwMCl9YClcbiAgICAgICAgIGNvbnN0IGJ1ZmZlcj1uZXcgQnVmZmVyKGltYWdlLmRhdGEpXG4gICAgICAgICBkYXRhLnB1c2goYnVmZmVyLnRvU3RyaW5nKFwiYmFzZTY0XCIpKVxuICAgICAgICB9XG4gICAgICAgIHNldEF2YXRhcnMoZGF0YSlcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH1cbiAgICAgIGZldGNoKClcbiAgICB9LFtdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIHtsb2FkaW5nICYmIDxMb2FkZXIvPn1cbiAgICAgICB7bG9hZGluZyB8fCA8Q29udGFpbmVyPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgPGgxPlBpY2sgYW4gQXZhdGFyIGFzIHlvdXIgcHJvZmlsZSBwaWN0dXJlPC9oMT5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyc1wiPlxuICAgICAgICAgICAgICAge2F2YXRhcnMubWFwKChhdmF0YXIsaW5kZXgpPT57XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXZhdGFyICR7c2VsZWN0ZWRBdmF0YXI/XCJzZWxlY3RlZFwiOlwiIFwifWB9IFxuICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5zZXRTZWxlY3RlZEF2YXRhcihpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHthdmF0YXJ9YH0gYWx0PVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgdGV4dD17XCJTZXQgYXMgUHJvZmlsZSBQaWN0dXJlXCJ9XG4gICAgICAgICAgICAgb25DbGljaz17KCk9PnByb2ZsZVBpY3R1cmUoKX1cbiAgICAgICAgICAgICAvPiAgICBcbiAgICAgICAgPC9Db250YWluZXI+fVxuICAgICAgICA8VG9hc3RDb250YWluZXIgbGltaXQ9ezF9Lz5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBDb250YWluZXI9c3R5bGVkLmRpdmBcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgIGdhcDogM3JlbTtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTMyNDtcbiAgICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgICAudGl0bGUge1xuICAgICAgICBoMXtcbiAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgfVxuXG4gICAgIC5hdmF0YXJze1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgZ2FwOiAzcmVtO1xuICAgICAgICBcbiAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgIGJvcmRlcjogMC40cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgcGFkZGluZzogMC40cmVtO1xuICAgICAgICAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0IGFsbDtcbiAgICAgICAgIGltZ3tcbiAgICAgICAgICAgaGVpZ2h0OiA2cmVtO1xuICAgICAgICAgfVxuICAgICAgICAgLnNlbGVjdGVke1xuICAgICAgICAgIGJvcmRlcjogNy40cmVtIHNvbGlkICM5OTdhZjA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICB9XG4gICAgICAgfVxuICAgICB9XG4gICAgIGJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTdhZjA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRlMGVmZjsgXG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG5gXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwidXNlUm91dGVyIiwiYXhpb3MiLCJzdHlsZWQiLCJCdWZmZXIiLCJCdXR0b24iLCJwcm9maWxlIiwiTG9hZGVyIiwiQXZhdGFyIiwiYXZhdGFycyIsInNldEF2YXRhcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVuZGVmaW5lZCIsInNlbGVjdGVkQXZhdGFyIiwic2V0U2VsZWN0ZWRBdmF0YXIiLCJ1c2VyIiwic2V0VXNlciIsImFwaSIsInRvYXN0T3B0aW9uIiwicG9zaXRpb24iLCJhdXRvY2xvc2UiLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJ0aGVtZSIsInVzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpZCIsIkpTT04iLCJwYXJzZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInByb2ZsZVBpY3R1cmUiLCJlcnJvciIsIl9pZCIsInBvc3QiLCJJbWFnZSIsImlzU2V0IiwiYXZhcnRJbWFnZSIsImltYWdlIiwiYXZhdGFySW1hZ2VTZXQiLCJpIiwiYnVmZmVyIiwiZ2V0IiwiTWF0aCIsInJhbmRvbSIsInB1c2giLCJ0b1N0cmluZyIsIkNvbnRhaW5lciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiaW5kZXgiLCJhdmF0YXIiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwidGV4dCIsImxpbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layout/Avatar.js\n");

/***/ })

});