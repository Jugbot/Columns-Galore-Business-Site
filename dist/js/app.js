/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"about":"about","catalog":"catalog","coloroptions":"coloroptions","columnparts":"columnparts","home":"home","partinformation":"partinformation","payment":"payment","quoteform":"quoteform","rebuiltcolumns":"rebuiltcolumns","techsupport":"techsupport"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--17-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ \"./node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match */ \"./node_modules/core-js/modules/es.string.match.js\");\n/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  metaInfo: {\n    titleTemplate: '%s | Steering Columns Galore',\n    meta: [{\n      name: 'description',\n      content: 'Steering columns for American cars and trucks from 1967 and up'\n    }]\n  },\n  components: {},\n  data: function data() {\n    return {\n      pages: {\n        primary: [{\n          name: 'Catalog',\n          page: '/catalog'\n        }, {\n          name: 'Quote',\n          page: '/quote'\n        }],\n        secondary: [{\n          name: 'Rebuilt Columns',\n          page: '/rebuiltcolumns'\n        }, // { name: 'Column Parts', page: '/columnparts' },\n        {\n          name: 'Tech Support',\n          page: '/techsupport'\n        }, {\n          name: 'Color Options',\n          page: '/coloroptions'\n        }, {\n          name: 'Payment',\n          page: '/payment'\n        }, {\n          name: 'About',\n          page: '/about'\n        }]\n      },\n      phoneNumbers: [{\n        name: 'Toll Free',\n        number: '(888) 326-5866'\n      }, {\n        name: 'Local',\n        number: '(845) 278-5762'\n      }, {\n        name: 'Fax',\n        number: '(845) 278-5764'\n      }, {\n        name: 'International',\n        number: '+1 (845) 278-5762'\n      }],\n      hours: [{\n        day: 'Sunday',\n        start: 'CLOSED',\n        end: 'CLOSED'\n      }, {\n        day: 'Monday',\n        start: '9 AM',\n        end: '6 PM'\n      }, {\n        day: 'Tuesday',\n        start: '9 AM',\n        end: '6 PM'\n      }, {\n        day: 'Wednesday',\n        start: '9 AM',\n        end: '6 PM'\n      }, {\n        day: 'Thursday',\n        start: '9 AM',\n        end: '6 PM'\n      }, {\n        day: 'Friday',\n        start: '9 AM',\n        end: '6 PM'\n      }, {\n        day: 'Saturday',\n        start: 'CLOSED',\n        end: 'CLOSED'\n      }]\n    };\n  },\n  methods: {\n    toCallable: function toCallable(number) {\n      return 'tel:' + number.match(/(\\d|\\+)+/g).join('-');\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--17-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"33517a6c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33517a6c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--17-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-app\",\n    [\n      _c(\n        \"v-content\",\n        [\n          _c(\n            \"v-col\",\n            { staticClass: \"pa-0\" },\n            [\n              _vm.$vuetify.breakpoint.smAndUp\n                ? _c(\n                    \"v-container\",\n                    [\n                      _c(\n                        \"v-row\",\n                        { attrs: { justify: \"center\" } },\n                        [\n                          _c(\n                            \"v-flex\",\n                            { attrs: { xs12: \"\", sm2: \"\", \"px-1\": \"\" } },\n                            [\n                              _c(\"v-img\", {\n                                attrs: { src: __webpack_require__(/*! ./assets/logo.svg */ \"./src/assets/logo.svg\") }\n                              })\n                            ],\n                            1\n                          ),\n                          _c(\n                            \"v-flex\",\n                            { attrs: { shrink: \"\" } },\n                            [\n                              _c(\n                                \"v-row\",\n                                {\n                                  staticClass: \"fill-height mx-3\",\n                                  attrs: { \"no-gutters\": \"\", align: \"center\" }\n                                },\n                                [\n                                  _c(\n                                    \"v-flex\",\n                                    [\n                                      _c(\"h2\", [\n                                        _vm._v(\n                                          \"Your complete steering column source.\"\n                                        )\n                                      ]),\n                                      _c(\"h3\", [\n                                        _vm._v(\n                                          \"Steering Columns And Parts Shipped Worldwide\"\n                                        )\n                                      ]),\n                                      _c(\n                                        \"v-row\",\n                                        {\n                                          staticClass: \"accent--text\",\n                                          attrs: { \"no-gutters\": \"\" }\n                                        },\n                                        [\n                                          _c(\"h3\", [\n                                            _vm._v(\"Toll Free 888-326-5866\")\n                                          ]),\n                                          _c(\"div\", { staticClass: \"px-1\" }, [\n                                            _vm._v(\"—\")\n                                          ]),\n                                          _c(\"h3\", [\n                                            _vm._v(\"Satisfaction Guaranteed\")\n                                          ])\n                                        ]\n                                      )\n                                    ],\n                                    1\n                                  )\n                                ],\n                                1\n                              )\n                            ],\n                            1\n                          )\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                : _vm._e(),\n              _c(\n                \"v-tabs\",\n                { attrs: { centered: \"\", \"show-arrows\": \"\" } },\n                [\n                  _c(\n                    \"v-tab\",\n                    { key: \"Home\", attrs: { to: \"/\", exact: \"\" } },\n                    [\n                      _vm.$vuetify.breakpoint.xsOnly\n                        ? _c(\n                            \"v-avatar\",\n                            { attrs: { tile: \"\" } },\n                            [\n                              _c(\"v-img\", {\n                                attrs: { src: __webpack_require__(/*! ./assets/logo.svg */ \"./src/assets/logo.svg\") }\n                              })\n                            ],\n                            1\n                          )\n                        : _c(\"span\", [_vm._v(\"Home\")])\n                    ],\n                    1\n                  ),\n                  _vm._l(_vm.pages.primary, function(ref) {\n                    var name = ref.name\n                    var page = ref.page\n                    return [\n                      _c(\"v-tab\", { key: name, attrs: { to: page } }, [\n                        _vm._v(_vm._s(name))\n                      ])\n                    ]\n                  }),\n                  _c(\n                    \"v-menu\",\n                    {\n                      attrs: { \"offset-y\": \"\" },\n                      scopedSlots: _vm._u([\n                        {\n                          key: \"activator\",\n                          fn: function(ref) {\n                            var on = ref.on\n                            var value = ref.value\n                            return [\n                              _c(\n                                \"v-tab\",\n                                _vm._g({}, on),\n                                [\n                                  _c(\"v-icon\", { attrs: { left: \"\" } }, [\n                                    _vm._v(\n                                      \" \" +\n                                        _vm._s(\n                                          value ? \"mdi-close\" : \"mdi-menu\"\n                                        ) +\n                                        \" \"\n                                    )\n                                  ]),\n                                  _vm._v(\" More \")\n                                ],\n                                1\n                              )\n                            ]\n                          }\n                        }\n                      ])\n                    },\n                    [\n                      _c(\n                        \"v-list\",\n                        [\n                          _vm._l(_vm.pages.secondary, function(ref) {\n                            var name = ref.name\n                            var page = ref.page\n                            return [\n                              _c(\n                                \"v-list-item\",\n                                { key: name, attrs: { to: page } },\n                                [\n                                  _c(\"v-list-item-title\", [\n                                    _vm._v(_vm._s(name))\n                                  ])\n                                ],\n                                1\n                              )\n                            ]\n                          })\n                        ],\n                        2\n                      )\n                    ],\n                    1\n                  )\n                ],\n                2\n              )\n            ],\n            1\n          ),\n          _c(\n            \"v-container\",\n            { staticClass: \"py-5\", attrs: { fluid: \"\" } },\n            [_c(\"router-view\", { key: _vm.$route.fullPath })],\n            1\n          )\n        ],\n        1\n      ),\n      _c(\n        \"v-footer\",\n        { attrs: { app: \"\", absolute: \"\", color: \"white\" } },\n        [\n          _c(\n            \"v-container\",\n            [\n              _c(\n                \"v-row\",\n                { attrs: { justify: \"space-between\" } },\n                [\n                  _c(\n                    \"v-col\",\n                    { staticClass: \"grow\", attrs: { cols: \"12\", md: \"auto\" } },\n                    [\n                      _c(\n                        \"v-card\",\n                        {\n                          staticClass: \"pa-3 fill-height\",\n                          attrs: { outlined: \"\" }\n                        },\n                        [\n                          _c(\"v-card-title\", [_vm._v(\"Phone\")]),\n                          _c(\n                            \"v-card-text\",\n                            {},\n                            _vm._l(_vm.phoneNumbers, function(ref, i) {\n                              var name = ref.name\n                              var number = ref.number\n                              return _c(\"p\", { key: i }, [\n                                _vm._v(\" \" + _vm._s(name) + \" \"),\n                                _c(\n                                  \"a\",\n                                  {\n                                    staticClass: \"ml-2\",\n                                    staticStyle: { float: \"right\" },\n                                    attrs: { href: _vm.toCallable(number) }\n                                  },\n                                  [_vm._v(_vm._s(number))]\n                                )\n                              ])\n                            }),\n                            0\n                          )\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  ),\n                  _c(\n                    \"v-col\",\n                    { staticClass: \"grow\", attrs: { cols: \"12\", md: \"auto\" } },\n                    [\n                      _c(\n                        \"v-card\",\n                        {\n                          staticClass: \"pa-3 fill-height\",\n                          attrs: { outlined: \"\" }\n                        },\n                        [\n                          _c(\"v-card-title\", [_vm._v(\"Shipping & Mailing\")]),\n                          _c(\"v-card-text\", [\n                            _c(\"p\", [_vm._v(\"Steering Columns Galore Inc.\")]),\n                            _c(\"p\", [_vm._v(\"5 Progress Street\")]),\n                            _c(\"p\", [_vm._v(\"Brewster, NY 10509\")])\n                          ])\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  ),\n                  _c(\n                    \"v-col\",\n                    { staticClass: \"grow\", attrs: { cols: \"12\", md: \"auto\" } },\n                    [\n                      _c(\n                        \"v-card\",\n                        {\n                          staticClass: \"pa-3 fill-height\",\n                          attrs: { outlined: \"\" }\n                        },\n                        [\n                          _c(\"v-card-title\", [_vm._v(\"Email\")]),\n                          _c(\"v-card-text\", [\n                            _c(\"p\", [\n                              _c(\n                                \"a\",\n                                {\n                                  attrs: {\n                                    href: \"mailto:techsupport@columnsgalore.com\"\n                                  }\n                                },\n                                [_vm._v(\"techsupport@columnsgalore.com\")]\n                              )\n                            ]),\n                            _c(\"p\", [\n                              _c(\n                                \"a\",\n                                {\n                                  attrs: {\n                                    href: \"mailto:salesteam@columnsgalore.com\"\n                                  }\n                                },\n                                [_vm._v(\"salesteam@columnsgalore.com\")]\n                              )\n                            ])\n                          ])\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  ),\n                  _c(\n                    \"v-col\",\n                    { staticClass: \"grow\", attrs: { cols: \"12\", md: \"auto\" } },\n                    [\n                      _c(\n                        \"v-card\",\n                        {\n                          staticClass: \"pa-3 fill-height\",\n                          attrs: { outlined: \"\" }\n                        },\n                        [\n                          _c(\"v-card-title\", [\n                            _vm._v(\"Hours of Operation (EST)\")\n                          ]),\n                          _c(\n                            \"v-card-text\",\n                            [\n                              _c(\n                                \"v-simple-table\",\n                                { attrs: { dense: \"\", width: \"100%\" } },\n                                [\n                                  _c(\n                                    \"tbody\",\n                                    _vm._l(_vm.hours, function(ref, i) {\n                                      var day = ref.day\n                                      var start = ref.start\n                                      var end = ref.end\n                                      return _c(\"tr\", { key: i }, [\n                                        _c(\"td\", [_vm._v(_vm._s(day))]),\n                                        _c(\"td\", [_vm._v(_vm._s(start))]),\n                                        _c(\"td\", [_vm._v(_vm._s(end))])\n                                      ])\n                                    }),\n                                    0\n                                  )\n                                ]\n                              )\n                            ],\n                            1\n                          )\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  ),\n                  _c(\n                    \"v-col\",\n                    { staticClass: \"grow\", attrs: { cols: \"12\", md: \"auto\" } },\n                    [\n                      _c(\n                        \"v-card\",\n                        {\n                          staticClass: \"fill-height grow\",\n                          attrs: { outlined: \"\" }\n                        },\n                        [\n                          _c(\"v-card-actions\", { staticClass: \"pa-0\" }, [\n                            _c(\"iframe\", {\n                              staticStyle: { border: \"0\" },\n                              attrs: {\n                                src:\n                                  \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.03556457633!2d-73.62045168448964!3d41.3950340034838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd52e5ff79a0cb%3A0x487f9a4fb8e078ea!2sSteering%20Columns%20Galore%20Inc.!5e0!3m2!1sen!2sus!4v1578945739765!5m2!1sen!2sus\",\n                                width: \"100%\",\n                                height: \"300\",\n                                frameborder: \"0\",\n                                allowfullscreen: \"\"\n                              }\n                            })\n                          ])\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2233517a6c-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--17-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/vuetify-loader/lib/loader.js??ref--17-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.v-content__wrap {\\r\\n  min-height: 100vh;\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/vuetify-loader/lib/loader.js??ref--17-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/vuetify-loader/lib/loader.js??ref--17-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/vuetify-loader/lib/loader.js??ref--17-0!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"2ea2fc33\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/vuetify-loader/lib/loader.js??ref--17-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ \"./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./src/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/vuetify-loader/lib/runtime/installComponents.js */ \"./node_modules/vuetify-loader/lib/runtime/installComponents.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VApp */ \"./node_modules/vuetify/lib/components/VApp/index.js\");\n/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ \"./node_modules/vuetify/lib/components/VAvatar/index.js\");\n/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ \"./node_modules/vuetify/lib/components/VCard/index.js\");\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ \"./node_modules/vuetify/lib/components/VGrid/index.js\");\n/* harmony import */ var vuetify_lib_components_VContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VContent */ \"./node_modules/vuetify/lib/components/VContent/index.js\");\n/* harmony import */ var vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VFooter */ \"./node_modules/vuetify/lib/components/VFooter/index.js\");\n/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ \"./node_modules/vuetify/lib/components/VIcon/index.js\");\n/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VImg */ \"./node_modules/vuetify/lib/components/VImg/index.js\");\n/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VList */ \"./node_modules/vuetify/lib/components/VList/index.js\");\n/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ \"./node_modules/vuetify/lib/components/VMenu/index.js\");\n/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ \"./node_modules/vuetify/lib/components/VDataTable/index.js\");\n/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ \"./node_modules/vuetify/lib/components/VTabs/index.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* vuetify-loader */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__[\"VApp\"],VAvatar: vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_6__[\"VAvatar\"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__[\"VCard\"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__[\"VCardActions\"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__[\"VCardText\"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__[\"VCardTitle\"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__[\"VCol\"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__[\"VContainer\"],VContent: vuetify_lib_components_VContent__WEBPACK_IMPORTED_MODULE_9__[\"VContent\"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__[\"VFlex\"],VFooter: vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_10__[\"VFooter\"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__[\"VIcon\"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_12__[\"VImg\"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__[\"VList\"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__[\"VListItem\"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__[\"VListItemTitle\"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_14__[\"VMenu\"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__[\"VRow\"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_15__[\"VSimpleTable\"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_16__[\"VTab\"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_16__[\"VTabs\"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_17_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/vuetify-loader/lib/loader.js??ref--17-0!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_17_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_17_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--6-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/vuetify-loader/lib/loader.js??ref--17-0!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_17_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_17_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_17_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_17_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vuetify_loader_lib_loader_js_ref_17_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_33517a6c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_17_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"33517a6c-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vuetify-loader/lib/loader.js??ref--17-0!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"33517a6c-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_33517a6c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_17_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_33517a6c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_17_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo.93dfd27b.svg\";\n\n//# sourceURL=webpack:///./src/assets/logo.svg?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_lucas_Documents_GitHub_Columns_Galore_Business_Site_node_modules_vue_babel_preset_app_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/@vue/babel-preset-app/node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var C_Users_lucas_Documents_GitHub_Columns_Galore_Business_Site_node_modules_vue_babel_preset_app_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_lucas_Documents_GitHub_Columns_Galore_Business_Site_node_modules_vue_babel_preset_app_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Users_lucas_Documents_GitHub_Columns_Galore_Business_Site_node_modules_vue_babel_preset_app_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/core-js/modules/es.promise.js */ \"./node_modules/@vue/babel-preset-app/node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var C_Users_lucas_Documents_GitHub_Columns_Galore_Business_Site_node_modules_vue_babel_preset_app_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_lucas_Documents_GitHub_Columns_Galore_Business_Site_node_modules_vue_babel_preset_app_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var C_Users_lucas_Documents_GitHub_Columns_Galore_Business_Site_node_modules_vue_babel_preset_app_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/@vue/babel-preset-app/node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var C_Users_lucas_Documents_GitHub_Columns_Galore_Business_Site_node_modules_vue_babel_preset_app_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_lucas_Documents_GitHub_Columns_Galore_Business_Site_node_modules_vue_babel_preset_app_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_lucas_Documents_GitHub_Columns_Galore_Business_Site_node_modules_vue_babel_preset_app_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/@vue/babel-preset-app/node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var C_Users_lucas_Documents_GitHub_Columns_Galore_Business_Site_node_modules_vue_babel_preset_app_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_lucas_Documents_GitHub_Columns_Galore_Business_Site_node_modules_vue_babel_preset_app_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/vuetify */ \"./src/plugins/vuetify.js\");\n\n\n\n\n\n\n\n // import store from './store'\n\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config.productionTip = false;\nnew vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n  router: _router__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  vuetify: _plugins_vuetify__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  // store,\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  },\n  mounted: function mounted() {\n    return document.dispatchEvent(new Event('x-app-rendered'));\n  }\n}).$mount('#app');\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/plugins/vuetify.js":
/*!********************************!*\
  !*** ./src/plugins/vuetify.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib */ \"./node_modules/vuetify/lib/index.js\");\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuetify_lib__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuetify_lib__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  theme: {\n    options: {\n      customProperties: true\n    },\n    themes: {\n      light: {\n        primary: '#EF5B5B',\n        secondary: '#23001E',\n        accent: '#235789',\n        error: '#FFBA49',\n        info: '#235789',\n        success: '#FFBA49',\n        warning: '#FFBA49'\n      }\n    }\n  }\n}));\n\n//# sourceURL=webpack:///./src/plugins/vuetify.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Users_lucas_Documents_GitHub_Columns_Galore_Business_Site_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var vue_meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-meta */ \"./node_modules/vue-meta/dist/vue-meta.esm.js\");\n\n\n\n\n\n\nvar _require = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\"),\n    staticRoutes = _require.staticRoutes,\n    dynamicRoutes = _require.dynamicRoutes;\n\nvar routes = [].concat(Object(C_Users_lucas_Documents_GitHub_Columns_Galore_Business_Site_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(staticRoutes), Object(C_Users_lucas_Documents_GitHub_Columns_Galore_Business_Site_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dynamicRoutes), [{\n  path: '*',\n  redirect: '/'\n}]);\nvue__WEBPACK_IMPORTED_MODULE_2__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_2__[\"default\"].use(vue_meta__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  keyName: 'metaInfo',\n  attribute: 'data-vue-meta',\n  ssrAttribute: 'data-vue-meta-server-rendered',\n  tagIDKeyName: 'vmid',\n  refreshOnceOnNavigation: true\n});\nvar router = new vue_router__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n  mode: 'history',\n  routes: routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n\nvar _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n\nvar staticRoutes = [{\n  path: '/',\n  name: 'home',\n  component: function component() {\n    return __webpack_require__.e(/*! import() | home */ \"home\").then(__webpack_require__.bind(null, /*! ../views/Home.vue */ \"./src/views/Home.vue\"));\n  }\n}, {\n  path: '/about',\n  name: 'about',\n  component: function component() {\n    return __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(null, /*! ../views/About.vue */ \"./src/views/About.vue\"));\n  }\n}, {\n  path: '/catalog',\n  name: 'catalog',\n  component: function component() {\n    return __webpack_require__.e(/*! import() | catalog */ \"catalog\").then(__webpack_require__.bind(null, /*! ../views/Catalog.vue */ \"./src/views/Catalog.vue\"));\n  }\n}, {\n  path: '/rebuiltcolumns',\n  name: 'rebuiltcolumns',\n  component: function component() {\n    return __webpack_require__.e(/*! import() | rebuiltcolumns */ \"rebuiltcolumns\").then(__webpack_require__.bind(null, /*! ../views/RebuiltColumns.vue */ \"./src/views/RebuiltColumns.vue\"));\n  }\n}, {\n  path: '/columnparts',\n  name: 'columnparts',\n  component: function component() {\n    return __webpack_require__.e(/*! import() | columnparts */ \"columnparts\").then(__webpack_require__.bind(null, /*! ../views/ColumnParts.vue */ \"./src/views/ColumnParts.vue\"));\n  }\n}, {\n  path: '/coloroptions',\n  name: 'coloroptions',\n  component: function component() {\n    return __webpack_require__.e(/*! import() | coloroptions */ \"coloroptions\").then(__webpack_require__.bind(null, /*! ../views/ColorOptions.vue */ \"./src/views/ColorOptions.vue\"));\n  }\n}, {\n  path: '/techsupport',\n  name: 'techsupport',\n  component: function component() {\n    return __webpack_require__.e(/*! import() | techsupport */ \"techsupport\").then(__webpack_require__.bind(null, /*! ../views/TechSupport.vue */ \"./src/views/TechSupport.vue\"));\n  }\n}, {\n  path: '/payment',\n  name: 'payment',\n  component: function component() {\n    return __webpack_require__.e(/*! import() | payment */ \"payment\").then(__webpack_require__.bind(null, /*! ../views/Payment.vue */ \"./src/views/Payment.vue\"));\n  }\n}, {\n  path: '/quote',\n  component: function component() {\n    return __webpack_require__.e(/*! import() | quoteform */ \"quoteform\").then(__webpack_require__.bind(null, /*! ../views/Quote.vue */ \"./src/views/Quote.vue\"));\n  }\n}];\nvar MAX_PART_ID = 5;\nvar dynamicRoutes = [{\n  path: '/part/:id',\n  component: function component() {\n    return __webpack_require__.e(/*! import() | partinformation */ \"partinformation\").then(__webpack_require__.bind(null, /*! ../views/PartInformation.vue */ \"./src/views/PartInformation.vue\"));\n  },\n  meta: {\n    // special code for including part urls in the sitemap\n    sitemap: {\n      priority: 0.1,\n      slugs: _toConsumableArray(Array(MAX_PART_ID).keys())\n    }\n  }\n}];\nmodule.exports = {\n  staticRoutes: staticRoutes,\n  dynamicRoutes: dynamicRoutes\n};\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });