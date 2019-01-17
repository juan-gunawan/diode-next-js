module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ImageDisplay.js":
/*!************************************!*\
  !*** ./components/ImageDisplay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_diode_src_DiodePublic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../react-diode/src/DiodePublic */ "./react-diode/src/DiodePublic.js");
/* harmony import */ var _queries_ImageDisplayQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../queries/ImageDisplayQuery */ "./queries/ImageDisplayQuery.js");
var _jsxFileName = "/Users/juan.gunawan/diode-next-js/components/ImageDisplay.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import Diode from 'react-diode';


 // import ContentResourceQuery from '../queries/ContentResourceQuery';

var ImageDisplay =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageDisplay, _Component);

  function ImageDisplay() {
    _classCallCheck(this, ImageDisplay);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageDisplay).apply(this, arguments));
  }

  _createClass(ImageDisplay, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      });
    }
  }]);

  return ImageDisplay;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (_react_diode_src_DiodePublic__WEBPACK_IMPORTED_MODULE_1__["default"].createRootContainer(ImageDisplay, {
  children: [],
  queries: {
    fetchImage: _react_diode_src_DiodePublic__WEBPACK_IMPORTED_MODULE_1__["default"].createQuery(_queries_ImageDisplayQuery__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: 'fragment'
    }) // contentResource: Diode.createQuery(ContentResourceQuery, {
    //   hello: {
    //     world: null,
    //   },
    // }),

  }
}));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_diode_src_DiodePublic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../react-diode/src/DiodePublic */ "./react-diode/src/DiodePublic.js");
/* harmony import */ var _components_ImageDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ImageDisplay */ "./components/ImageDisplay.js");
/* harmony import */ var _utils_DefaultDiodeNetworkLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/DefaultDiodeNetworkLayer */ "./utils/DefaultDiodeNetworkLayer.js");

var _jsxFileName = "/Users/juan.gunawan/diode-next-js/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import Diode from 'react-diode';

 // Component

 // Diode

 // import CRNetworkLayer from '../utils/FakeNetworkLayer';

_react_diode_src_DiodePublic__WEBPACK_IMPORTED_MODULE_2__["default"].injectNetworkLayer(new _utils_DefaultDiodeNetworkLayer__WEBPACK_IMPORTED_MODULE_4__["default"]('')); // Diode.injectNetworkLayer(new CRNetworkLayer());

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  _createClass(Home, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var cache;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!ctx.req) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return _react_diode_src_DiodePublic__WEBPACK_IMPORTED_MODULE_2__["default"].Store.forceFetch(_components_ImageDisplay__WEBPACK_IMPORTED_MODULE_3__["default"]);

              case 3:
                cache = _context.sent;
                return _context.abrupt("return", {
                  cache: cache,
                  isServer: true
                });

              case 6:
                return _context.abrupt("return", {
                  cache: window.__NEXT_DATA__.props.pageProps.cache,
                  isServer: false
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    var cache = props.cache;

    if (!props.isServer && !props.cache) {
      cache = (_readOnlyError("cache"), window.__NEXT_DATA__.props.pageProps.cache);
    }

    _this.cache = _react_diode_src_DiodePublic__WEBPACK_IMPORTED_MODULE_2__["default"].createCache(cache); // this.cache = Diode.createCache({});

    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_react_diode_src_DiodePublic__WEBPACK_IMPORTED_MODULE_2__["default"].CacheProvider, {
        value: this.cache,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ImageDisplay__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./queries/ImageDisplayQuery.js":
/*!**************************************!*\
  !*** ./queries/ImageDisplayQuery.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_diode_src_DiodePublic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react-diode/src/DiodePublic */ "./react-diode/src/DiodePublic.js");
// import Diode from 'react-diode';

/* harmony default export */ __webpack_exports__["default"] = ({
  type: 'fetchImage',
  request: function request(fragment, params, options) {
    var url = "https://jsonplaceholder.typicode.com/photos";
    var method = 'get';
    var payload = '';
    return _react_diode_src_DiodePublic__WEBPACK_IMPORTED_MODULE_0__["default"].queryRequest(url, method, payload);
  },
  resolve: function resolve(response, fragment, options) {
    return response.data;
  }
});

/***/ }),

/***/ "./react-diode/src/DiodePublic.js":
/*!****************************************!*\
  !*** ./react-diode/src/DiodePublic.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_DiodeCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache/DiodeCache */ "./react-diode/src/cache/DiodeCache.js");
/* harmony import */ var _store_DiodeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/DiodeStore */ "./react-diode/src/store/DiodeStore.js");
/* harmony import */ var _container_DiodeContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/DiodeContainer */ "./react-diode/src/container/DiodeContainer.js");
/* harmony import */ var _container_DiodeRootContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/DiodeRootContainer */ "./react-diode/src/container/DiodeRootContainer.js");
/* harmony import */ var _query_DiodeQueryTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query/DiodeQueryTypes */ "./react-diode/src/query/DiodeQueryTypes.js");
/* harmony import */ var _query_createDiodeQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./query/createDiodeQuery */ "./react-diode/src/query/createDiodeQuery.js");
/* harmony import */ var _query_DiodeQueryRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./query/DiodeQueryRequest */ "./react-diode/src/query/DiodeQueryRequest.js");







var DiodePublic = {
  Store: _store_DiodeStore__WEBPACK_IMPORTED_MODULE_1__["default"],
  CacheProvider: _cache_DiodeCache__WEBPACK_IMPORTED_MODULE_0__["CacheContext"].Provider,
  QueryTypes: _query_DiodeQueryTypes__WEBPACK_IMPORTED_MODULE_4__["default"],
  createCache: _cache_DiodeCache__WEBPACK_IMPORTED_MODULE_0__["createCache"],
  createContainer: _container_DiodeContainer__WEBPACK_IMPORTED_MODULE_2__["createContainer"],
  createRootContainer: _container_DiodeRootContainer__WEBPACK_IMPORTED_MODULE_3__["createRootContainer"],
  createQuery: _query_createDiodeQuery__WEBPACK_IMPORTED_MODULE_5__["createDiodeQuery"],
  queryRequest: _query_DiodeQueryRequest__WEBPACK_IMPORTED_MODULE_6__["createQueryRequest"],
  waitForQuery: _query_DiodeQueryRequest__WEBPACK_IMPORTED_MODULE_6__["createPendingQueryRequest"],
  useBatchQuery: _store_DiodeStore__WEBPACK_IMPORTED_MODULE_1__["default"].useBatchQuery.bind(_store_DiodeStore__WEBPACK_IMPORTED_MODULE_1__["default"]),
  useMockQueries: _store_DiodeStore__WEBPACK_IMPORTED_MODULE_1__["default"].useMockQueries.bind(_store_DiodeStore__WEBPACK_IMPORTED_MODULE_1__["default"]),
  injectNetworkLayer: _store_DiodeStore__WEBPACK_IMPORTED_MODULE_1__["default"].injectNetworkLayer.bind(_store_DiodeStore__WEBPACK_IMPORTED_MODULE_1__["default"])
};
/* harmony default export */ __webpack_exports__["default"] = (DiodePublic);

/***/ }),

/***/ "./react-diode/src/cache/DiodeCache.js":
/*!*********************************************!*\
  !*** ./react-diode/src/cache/DiodeCache.js ***!
  \*********************************************/
/*! exports provided: CacheContext, FETCH_ALL_CACHE, DiodeCache, createCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheContext", function() { return CacheContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALL_CACHE", function() { return FETCH_ALL_CACHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiodeCache", function() { return DiodeCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCache", function() { return createCache; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_DiodeStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/DiodeStore */ "./react-diode/src/store/DiodeStore.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CacheContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(null);
var FETCH_ALL_CACHE = "__fac__";
var DiodeCache =
/*#__PURE__*/
function () {
  function DiodeCache(cache, options) {
    _classCallCheck(this, DiodeCache);

    _store_DiodeStore__WEBPACK_IMPORTED_MODULE_2__["default"].cache = cache;
    _store_DiodeStore__WEBPACK_IMPORTED_MODULE_2__["default"].options = options;
  }

  _createClass(DiodeCache, [{
    key: "getContents",
    value: function getContents() {
      return _store_DiodeStore__WEBPACK_IMPORTED_MODULE_2__["default"].cache;
    } // TODO memo

  }, {
    key: "getUnresolvedQueries",
    value: function getUnresolvedQueries(containerQuery) {
      return Object.keys(containerQuery.map).filter(function (type) {
        var cache = _store_DiodeStore__WEBPACK_IMPORTED_MODULE_2__["default"].cache[type];

        if (!cache) {
          // have no matching cache
          return true;
        } // check for unresolved fragment


        var query = containerQuery.map[type];
        return Object.keys(query.fragmentStructure).some(function (fragment) {
          var cachedFragment = cache[fragment];
          var innerFragmentKeys = Object.keys(query.fragmentStructure[fragment]);

          if (innerFragmentKeys.length === 0) {
            if (cachedFragment && _typeof(cachedFragment) === "object") {
              // might already cache fetch-all
              return !cachedFragment[FETCH_ALL_CACHE];
            }

            return cachedFragment === undefined;
          }

          return innerFragmentKeys.some(function (key) {
            // API can return null
            if (cachedFragment) {
              return cachedFragment[key] === undefined;
            }

            return cachedFragment === undefined;
          });
        });
      });
    }
  }, {
    key: "hasResolved",
    value: function hasResolved(containerQuery) {
      return this.getUnresolvedQueries(containerQuery).length === 0;
    }
  }, {
    key: "resolve",
    value: function () {
      var _resolve = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(containerQuery) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _store_DiodeStore__WEBPACK_IMPORTED_MODULE_2__["default"].fetch(containerQuery);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function resolve(_x) {
        return _resolve.apply(this, arguments);
      }

      return resolve;
    }()
  }]);

  return DiodeCache;
}();
function createCache(initialCache, options) {
  return new DiodeCache(initialCache, options);
}

/***/ }),

/***/ "./react-diode/src/container/DiodeContainer.js":
/*!*****************************************************!*\
  !*** ./react-diode/src/container/DiodeContainer.js ***!
  \*****************************************************/
/*! exports provided: createContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContainer", function() { return createContainer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var deep_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deep-extend */ "deep-extend");
/* harmony import */ var deep_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deep_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! object-assign */ "object-assign");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _query_DiodeContainerQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../query/DiodeContainerQuery */ "./react-diode/src/query/DiodeContainerQuery.js");
/* harmony import */ var _cache_DiodeCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cache/DiodeCache */ "./react-diode/src/cache/DiodeCache.js");

var _jsxFileName = "/Users/juan.gunawan/diode-next-js/react-diode/src/container/DiodeContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @flow
 */







var DiodeQueryFetcher =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DiodeQueryFetcher, _React$Component);

  function DiodeQueryFetcher() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DiodeQueryFetcher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DiodeQueryFetcher)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      error: null,
      loading: true
    });

    return _this;
  }

  _createClass(DiodeQueryFetcher, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this$props, cache, query;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, cache = _this$props.cache, query = _this$props.query; // prevent re-renders ?

                if (!cache.hasResolved(query)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return cache.resolve(query);

              case 6:
                this.setState({
                  loading: false
                });
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                console.error("error", _context.t0);
                this.setState({
                  error: _context.t0,
                  loading: false
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 9]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          Component = _this$props2.Component,
          wrapper = _this$props2.wrapper,
          cache = _this$props2.cache,
          query = _this$props2.query,
          props = _objectWithoutProperties(_this$props2, ["Component", "wrapper", "cache", "query"]);

      if (this.state.error !== null) {
        // TODO error handling
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, this.state.error.message);
      }

      var resolved = cache.hasResolved(query);
      var loading = !resolved && this.state.loading;
      var component = loading ? // TODO async handling
      null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, props, cache.getContents(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }));

      if (wrapper) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({}, wrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }), component);
      }

      return component;
    }
  }]);

  return DiodeQueryFetcher;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

function createContainerComponent(Component, spec, query) {
  /* istanbul ignore next */
  var componentName = Component.displayName || Component.name;
  var containerName = "Diode(".concat(componentName, ")");

  var DiodeContainer =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(DiodeContainer, _React$Component2);

    function DiodeContainer(props) {
      var _this2;

      _classCallCheck(this, DiodeContainer);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(DiodeContainer).call(this, props));
      _this2.wrapperInfo = spec.wrapperInfo;
      return _this2;
    }

    _createClass(DiodeContainer, [{
      key: "render",
      value: function render() {
        var _this3 = this;

        var props = this.props,
            wrapperInfo = this.wrapperInfo;
        var wrapper = props.wrapperInfo ? props.wrapperInfo : wrapperInfo;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_cache_DiodeCache__WEBPACK_IMPORTED_MODULE_6__["CacheContext"].Consumer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, function (cache) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DiodeQueryFetcher, _extends({}, _this3.props, {
            Component: Component,
            wrapper: wrapper,
            query: query,
            cache: cache,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }));
        });
      }
    }]);

    return DiodeContainer;
  }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

  DiodeContainer.displayName = containerName;
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(DiodeContainer, Component);
}

function createContainer(Component) {
  var spec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /* istanbul ignore next */
  var componentName = Component.displayName || Component.name;
  var containerName = "Diode(".concat(componentName, ")");
  var query = new _query_DiodeContainerQuery__WEBPACK_IMPORTED_MODULE_5__["default"](componentName, spec.queries, spec.children);
  var Container;

  function ContainerConstructor(props) {
    /* istanbul ignore else */
    if (!Container) {
      Container = createContainerComponent(Component, spec, query);
    }

    return new Container(props);
  }

  ContainerConstructor.setWrapperInfo = function setWrapperInfo(wrapperInfo) {
    object_assign__WEBPACK_IMPORTED_MODULE_3___default()(spec.wrapperInfo, wrapperInfo);
  };

  ContainerConstructor.getWrapperInfo = function getWrapperInfo(key) {
    return spec.wrapperInfo[key];
  };

  ContainerConstructor.getComponent = function getComponent() {
    return Component;
  };

  ContainerConstructor.getChildren = function getChildren() {
    if (spec.children && spec.children.length) {
      return spec.children;
    } else {
      return [];
    }
  };

  ContainerConstructor.query = deep_extend__WEBPACK_IMPORTED_MODULE_2___default()(query, Component.query);
  ContainerConstructor.displayName = containerName;
  ContainerConstructor.componentName = componentName;
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(ContainerConstructor, Component, {
    query: true
  });
}

/***/ }),

/***/ "./react-diode/src/container/DiodeRootContainer.js":
/*!*********************************************************!*\
  !*** ./react-diode/src/container/DiodeRootContainer.js ***!
  \*********************************************************/
/*! exports provided: createRootContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRootContainer", function() { return createRootContainer; });
/* harmony import */ var _query_DiodeRootQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../query/DiodeRootQuery */ "./react-diode/src/query/DiodeRootQuery.js");
/* harmony import */ var _DiodeContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiodeContainer */ "./react-diode/src/container/DiodeContainer.js");
/**
 * @flow
 */


function createRootContainer(Component, spec) {
  var Container = Object(_DiodeContainer__WEBPACK_IMPORTED_MODULE_1__["createContainer"])(Component, spec);
  Container.query = new _query_DiodeRootQuery__WEBPACK_IMPORTED_MODULE_0__["default"](Container.query);
  return Container;
}

/***/ }),

/***/ "./react-diode/src/container/resolveContainerProps.js":
/*!************************************************************!*\
  !*** ./react-diode/src/container/resolveContainerProps.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveContainerProps; });
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-assign */ "object-assign");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);

function resolveContainerProps(response, RootContainer) {
  // Convert diode response as root container props
  var _RootContainer$query$ = RootContainer.query.getContainerQuery(),
      queryMap = _RootContainer$query$.map;

  var containerProps = Object.keys(queryMap).reduce(function (props, key) {
    props[key] = response[queryMap[key].type];
    return props;
  }, {});
  var __additional = response.__additional;

  if (__additional) {
    return object_assign__WEBPACK_IMPORTED_MODULE_0___default()(containerProps, {
      __additional: __additional
    });
  } else {
    return containerProps;
  }
}

/***/ }),

/***/ "./react-diode/src/network/DiodeNetworkLayer.js":
/*!******************************************************!*\
  !*** ./react-diode/src/network/DiodeNetworkLayer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-assign */ "object-assign");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @flow
 */


var DiodeNetworkLayer =
/*#__PURE__*/
function () {
  function DiodeNetworkLayer() {
    _classCallCheck(this, DiodeNetworkLayer);

    _defineProperty(this, "_injectedNetworkLayer", void 0);

    _defineProperty(this, "_queryMockEnabled", void 0);

    this._queryMockEnabled = false;
  }
  /**
   * @internal
   *
   * Supply your own network layer
   */


  _createClass(DiodeNetworkLayer, [{
    key: "injectNetworkLayer",
    value: function injectNetworkLayer(networkLayer) {
      this._injectedNetworkLayer = networkLayer;
    }
  }, {
    key: "injectQueryMockResolver",
    value: function injectQueryMockResolver(queryMockResolver) {
      this._queryMockEnabled = true;
      this._queryMockResolver = queryMockResolver;
    }
    /**
     * @internal
     *
     * Send diode query via injected network layer
     */

  }, {
    key: "sendQueries",
    value: function sendQueries(queries, options) {
      var _this = this;

      var queryRequests = queries;
      var mockedQueryResponse = {};

      var networkLayer = this._getCurrentNetworkLayer();

      if (this._queryMockEnabled) {
        queryRequests = queries.filter(function (query) {
          // check whether a query as a mocked response
          var queryMockResolver = _this._queryMockResolver[query.type];

          if (queryMockResolver && typeof queryMockResolver === "function") {
            var mockedResponse = queryMockResolver(query);

            if (mockedResponse) {
              mockedQueryResponse[query.type] = mockedResponse;
              return false;
            }

            {
              return true;
            }
          } else {
            return true;
          }
        });
      }

      return networkLayer.sendQueries(queryRequests, options).then(function (response) {
        return object_assign__WEBPACK_IMPORTED_MODULE_0___default()(mockedQueryResponse, response);
      });
    }
  }, {
    key: "_getCurrentNetworkLayer",
    value: function _getCurrentNetworkLayer() {
      return this._injectedNetworkLayer;
    }
  }]);

  return DiodeNetworkLayer;
}();

/* harmony default export */ __webpack_exports__["default"] = (DiodeNetworkLayer);

/***/ }),

/***/ "./react-diode/src/query/DiodeContainerQuery.js":
/*!******************************************************!*\
  !*** ./react-diode/src/query/DiodeContainerQuery.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var deep_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deep-extend */ "deep-extend");
/* harmony import */ var deep_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deep_extend__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @flow
 */

/**
 * Partially-complete query in given DiodeContainer
 *
 */

var DiodeContainerQuery =
/*#__PURE__*/
function () {
  // store final query shape
  // store distinct query type
  function DiodeContainerQuery(componentName, queries, children) {
    _classCallCheck(this, DiodeContainerQuery);

    _defineProperty(this, "map", {});

    _defineProperty(this, "_queryTypeMap", {});

    _defineProperty(this, "_queries", void 0);

    _defineProperty(this, "_children", void 0);

    this._componentName = componentName;
    this._queries = queries;
    this._children = children || [];

    this._parseQueryTypeMap(queries);

    this._mergeChildQueryTypeMap(children);

    this._buildFinalQueryMap(queries, children);
  }

  _createClass(DiodeContainerQuery, [{
    key: "getQueryTypeMap",
    value: function getQueryTypeMap() {
      return this._queryTypeMap;
    }
    /**
     * @internal
     * @unstable
     *
     * Add child container dynamicly and rebuilt the query map
     */

  }, {
    key: "injectChildren",
    value: function injectChildren(children) {
      this._children = this._children.concat(children);

      this._mergeChildQueryTypeMap(children);

      this._buildFinalQueryMap(this._queries, this._children);
    }
    /**
     * Group distinct query type into single query shape, this is to make sure
     * there is no same query type with different key.
     */

  }, {
    key: "_parseQueryTypeMap",
    value: function _parseQueryTypeMap(queries) {
      var _this = this;

      if (queries === null || queries === undefined) {
        return;
      }

      Object.keys(queries).forEach(function (key) {
        var query = queries[key];
        var existingQueryType = _this._queryTypeMap[query.type];

        if (existingQueryType) {
          var existingFragment = existingQueryType.fragmentStructure;
          var newFragment = query.fragmentStructure;
          deep_extend__WEBPACK_IMPORTED_MODULE_0___default()(existingFragment, newFragment);
          deep_extend__WEBPACK_IMPORTED_MODULE_0___default()(existingQueryType.params, query.params);
        } else if (query.type) {
          _this._queryTypeMap[query.type] = query;
        } else {
          throw new Error("Invalid query type in query key ".concat(key, " at component ").concat(_this._componentName));
        }
      });
    }
    /**
     * Merge all child query map with existing query map, also merge all queries
     * with same type as we can have different key between parent-child that
     * represent same query type
     */

  }, {
    key: "_mergeChildQueryTypeMap",
    value: function _mergeChildQueryTypeMap(children) {
      var _this2 = this;

      if (!children || !children.length) {
        return;
      }

      children.forEach(function (child) {
        var childQueryMap = child.query.map;
        /* istanbul ignore if */

        if (childQueryMap === null || childQueryMap === undefined) {
          return;
        }

        Object.keys(childQueryMap).forEach(function (key) {
          var childQuery = childQueryMap[key];
          var existingQueryType = _this2._queryTypeMap[childQuery.type];

          if (existingQueryType) {
            var existingFragment = existingQueryType.fragmentStructure;
            var newFragment = childQuery.fragmentStructure;
            deep_extend__WEBPACK_IMPORTED_MODULE_0___default()(existingFragment, newFragment);
          } else {
            _this2._queryTypeMap[childQuery.type] = childQuery;
          }
        });
      });
    }
    /**
     * Given complete query type map from current container and child container,
     * re-generate query map from initial queries with the complete query
     */

  }, {
    key: "_buildFinalQueryMap",
    value: function _buildFinalQueryMap(queries, children) {
      var _this3 = this;

      if (queries) {
        // Create initial query map from parent container via query type map.
        // For the most part, this is enough as we already compile the complete
        // fragment and usually parent and child use same query key
        this.map = Object.keys(queries).reduce(function (queryMap, key) {
          var query = queries[key];
          queryMap[key] = _this3._queryTypeMap[query.type];
          return queryMap;
        }, {});
      }

      if (!children || !children.length) {
        return;
      }

      children.forEach(function (child) {
        var queryMap = child.query.map;
        Object.keys(queryMap).forEach(function (key) {
          var childQuery = queryMap[key];
          var existingQuery = _this3.map[key];

          if (existingQuery && existingQuery.type !== childQuery.type) {
            return console.warn( // eslint-disable-line no-console
            "Different query type for same query key %s: %s (%s) and %s (%s)", key, _this3._componentName, existingQuery.type, child.componentName, childQuery.type);
          }

          _this3.map[key] = _this3._queryTypeMap[childQuery.type];
        });
      });
    }
  }]);

  return DiodeContainerQuery;
}();

/* harmony default export */ __webpack_exports__["default"] = (DiodeContainerQuery);

/***/ }),

/***/ "./react-diode/src/query/DiodeQueryRequest.js":
/*!****************************************************!*\
  !*** ./react-diode/src/query/DiodeQueryRequest.js ***!
  \****************************************************/
/*! exports provided: createPendingQueryRequest, createQueryRequest, getQueryRequests, generateQueryRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPendingQueryRequest", function() { return createPendingQueryRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQueryRequest", function() { return createQueryRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryRequests", function() { return getQueryRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateQueryRequest", function() { return generateQueryRequest; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @flow
 */

/**
 * @public
 *
 */
function createPendingQueryRequest(QueryDependencies, callback) {
  if (!(QueryDependencies instanceof Array)) {
    QueryDependencies = [QueryDependencies];
  }

  return {
    pending: true,
    dependencies: QueryDependencies,
    callback: callback
  };
}
/**
 * @public
 *
 */

function createQueryRequest(url, method, payload) {
  var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return {
    pending: false,
    url: url,
    method: method,
    payload: payload,
    headers: headers
  };
}
/**
 * @internal
 *
 */

function getQueryRequests(RootContainer, options) {
  var queries = RootContainer.query.compile();
  return queries.map(function (query) {
    var fragment = query.fragment,
        params = query.params;
    var queryRequestInfo = query.request(fragment, params, options);
    return generateQueryRequest(query, queryRequestInfo);
  });
}
/**
 * @internal
 *
 * Generate query request to be sent via sendQueries
 */

function generateQueryRequest(query, queryRequestInfo) {
  var type = query.type,
      fragment = query.fragment,
      resolve = query.resolve;
  return _objectSpread({
    type: type,
    fragment: fragment,
    resolve: resolve
  }, queryRequestInfo);
}

/***/ }),

/***/ "./react-diode/src/query/DiodeQueryTypes.js":
/*!**************************************************!*\
  !*** ./react-diode/src/query/DiodeQueryTypes.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DiodeQueryTypes = {
  BATCH: "batch-query"
};
/* harmony default export */ __webpack_exports__["default"] = (DiodeQueryTypes);

/***/ }),

/***/ "./react-diode/src/query/DiodeRootQuery.js":
/*!*************************************************!*\
  !*** ./react-diode/src/query/DiodeRootQuery.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var deep_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deep-extend */ "deep-extend");
/* harmony import */ var deep_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deep_extend__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @flow
 */

/**
 * Represent complete query in Diode.RootContainer
 *
 */

var DiodeRootQuery =
/*#__PURE__*/
function () {
  function DiodeRootQuery(containerQuery) {
    _classCallCheck(this, DiodeRootQuery);

    _defineProperty(this, "_variables", void 0);

    _defineProperty(this, "_containerQuery", void 0);

    this._containerQuery = containerQuery;
  }
  /**
   * @internal
   *
   */


  _createClass(DiodeRootQuery, [{
    key: "getContainerQuery",
    value: function getContainerQuery() {
      return this._containerQuery;
    }
    /**
     * @public
     *
     */

  }, {
    key: "setVariables",
    value: function setVariables(variables) {
      deep_extend__WEBPACK_IMPORTED_MODULE_0___default()(this._variables, variables);
    }
    /**
     * @public
     *
     */

  }, {
    key: "getVariables",
    value: function getVariables() {
      return this._variables;
    }
    /**
     * @public
     *
     * Compile query map into an array of actionable query and apply fragment
     * values from .setVariables() method (if any)
     */

  }, {
    key: "compile",
    value: function compile() {
      var _this = this;

      var queryTypeMap = this._containerQuery.getQueryTypeMap();

      return Object.keys(queryTypeMap).map(function (queryType) {
        var query = queryTypeMap[queryType];
        query.fragment = _this._compileFragmentKeys(query.fragmentStructure);
        query.params = _this._compileFragmentKeys(query.paramsStructure);
        return query;
      });
    }
    /**
     * Iterate over fragment structure keys and compile the value.
     * If an object is found, recursively iterate the object keys
     */

  }, {
    key: "_compileFragmentKeys",
    value: function _compileFragmentKeys(rawFragment) {
      var _this2 = this;

      return Object.keys(rawFragment).reduce(function (fragment, key) {
        var parsedKey = _this2._compileFragmentValue(key); // typeof null === 'object'


        if (_typeof(rawFragment[key]) === "object" && rawFragment[key] !== null) {
          fragment[parsedKey] = _this2._compileFragmentKeys(rawFragment[key]);
        } else {
          fragment[parsedKey] = _this2._compileFragmentValue(rawFragment[key]);
        }

        return fragment;
      }, {});
    }
    /**
     * Replace value format with actual value from stored value map
     */

  }, {
    key: "_compileFragmentValue",
    value: function _compileFragmentValue(rawFragment) {
      if (typeof rawFragment === "string" && rawFragment.charAt(0) === "$") {
        var key = rawFragment.slice(1);
        var value = this._variables[key]; // If value not found from value map, return as is.
        // Do not use boolean coercion here as it's possible we have
        // falsy value like 0 and ''

        if (typeof value === "undefined" || value === null) {
          return rawFragment;
        }

        return value;
      }

      return rawFragment;
    }
  }]);

  return DiodeRootQuery;
}();

/* harmony default export */ __webpack_exports__["default"] = (DiodeRootQuery);

/***/ }),

/***/ "./react-diode/src/query/createBatchQueryRequest.js":
/*!**********************************************************!*\
  !*** ./react-diode/src/query/createBatchQueryRequest.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createBatchQueryRequest; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createBatchQueryRequest(query, queryList, options) {
  var resolve = query.resolve,
      type = query.type;
  return _objectSpread({
    type: type,
    resolve: resolve
  }, query.request(queryList, options));
}

/***/ }),

/***/ "./react-diode/src/query/createDiodeQuery.js":
/*!***************************************************!*\
  !*** ./react-diode/src/query/createDiodeQuery.js ***!
  \***************************************************/
/*! exports provided: createDiodeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDiodeQuery", function() { return createDiodeQuery; });
/**
 * @flow
 */
function createDiodeQuery(Query, fragmentStructure) {
  var paramsStructure = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof Query.type !== "string") {
    throw new TypeError("Expected query definition to have query type");
  }

  if (typeof Query.request !== "function") {
    throw new TypeError("Expected query definition to have .request() method");
  }

  if (typeof Query.resolve !== "function") {
    throw new TypeError("Expected query definition to have .resolve() method");
  }

  var query = Object.create(Query);
  query.fragmentStructure = fragmentStructure;
  query.paramsStructure = paramsStructure;
  return query;
}

/***/ }),

/***/ "./react-diode/src/query/filterBatchQuery.js":
/*!***************************************************!*\
  !*** ./react-diode/src/query/filterBatchQuery.js ***!
  \***************************************************/
/*! exports provided: filterBatchQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterBatchQuery", function() { return filterBatchQuery; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.find */ "lodash.find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createBatchQueryRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBatchQueryRequest */ "./react-diode/src/query/createBatchQueryRequest.js");


/**
 * Given a set of query requests, filter and transform some queries
 * as BatchQuery (if applicable).
 *
 * If BatchQuery types is incomplete, send the queries as normal query
 */

function filterBatchQuery(queries, batchQuery, options) {
  var filteredQueries = [];
  var queryTypes = batchQuery.queryTypes,
      forceMerge = batchQuery.forceMerge;
  var batchQueryList = queryTypes.map(function (type) {
    return lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(queries, {
      type: type
    });
  }).filter(function (query) {
    return Boolean(query);
  }); // We need to make sure the queries listed has same length as
  // query requirements in queryTypes. We can use forceMerge to bypass
  // this checking but be warned that by using forceMerge, you can no
  // longer rely on query requirements order in request() method

  if (batchQueryList.length === queryTypes.length || // if forceMerge is enabled, make sure at least one query satisfied
  // the requirement to prevent zero query length
  forceMerge && batchQueryList.length > 0) {
    var batchQueryRequest = Object(_createBatchQueryRequest__WEBPACK_IMPORTED_MODULE_1__["default"])(batchQuery, batchQueryList, options);
    filteredQueries.push(batchQueryRequest);
  } else {
    // incomplete batch query, send each query individually
    filteredQueries = filteredQueries.concat(batchQueryList);
  }

  var normalQueryList = queries.filter(function (query) {
    return batchQueryList.indexOf(query) === -1;
  });
  filteredQueries = filteredQueries.concat(normalQueryList);
  return filteredQueries;
}

/***/ }),

/***/ "./react-diode/src/query/resolveBatchQuery.js":
/*!****************************************************!*\
  !*** ./react-diode/src/query/resolveBatchQuery.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveBatchQuery; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.find */ "lodash.find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-assign */ "object-assign");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Parse batch query response and assign the response to each
 * initial queries before filtered as batch queryType
 */

function resolveBatchQuery(batchResponse, initialQueries, options) {
  var responseMap = {};

  for (var queryType in batchResponse) {
    /* istanbul ignore else */
    if (batchResponse.hasOwnProperty(queryType)) {
      var queryResponse = batchResponse[queryType];
      var query = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(initialQueries, {
        type: queryType
      }); // Special treatment for __additional property in batch query response.
      // This is used internally so only remove this if statement when you
      // know what you're doing

      if (queryType === "__additional") {
        var specialResponse = {
          __additional: queryResponse
        };
        object_assign__WEBPACK_IMPORTED_MODULE_1___default()(responseMap, specialResponse);
      } else if (queryResponse && query) {
        var resolve = query.resolve,
            fragment = query.fragment;
        responseMap[queryType] = resolve(queryResponse, fragment, options);
      }
    }
  }

  return responseMap;
}

/***/ }),

/***/ "./react-diode/src/query/resolvePendingQueries.js":
/*!********************************************************!*\
  !*** ./react-diode/src/query/resolvePendingQueries.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolvePendingQueries; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function resolvePendingQuery(pendingQuery, response) {
  var callback = pendingQuery.callback,
      dependencies = pendingQuery.dependencies;
  var resolvedDependencies = dependencies.map(function (query) {
    return response[query.type];
  }).filter(function (response) {
    return Boolean(response);
  });

  if (resolvedDependencies.length === dependencies.length) {
    // all dependencies resolvedDependencies
    // eslint-disable-next-line callback-return
    var queryRequestInfo = callback.apply(void 0, _toConsumableArray(resolvedDependencies));
    var queryRequest = generateQueryRequest(pendingQuery, queryRequestInfo); // After resolving initial query dependencies, it's possible that the query
    // still return pending query which can be resolved using initial response.

    if (queryRequest.dependencies) {
      return resolvePendingQuery(queryRequest, response);
    }

    return queryRequest;
  } else {
    return pendingQuery;
  }
}

function resolvePendingQueries(pendingQueries, response) {
  return pendingQueries.map(function (pendingQuery) {
    return resolvePendingQuery(pendingQuery, response);
  });
}

/***/ }),

/***/ "./react-diode/src/query/resolveQueryResponse.js":
/*!*******************************************************!*\
  !*** ./react-diode/src/query/resolveQueryResponse.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveQueryResponse; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.find */ "lodash.find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DiodeQueryTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiodeQueryTypes */ "./react-diode/src/query/DiodeQueryTypes.js");
/* harmony import */ var _resolveBatchQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolveBatchQuery */ "./react-diode/src/query/resolveBatchQuery.js");



function resolveQueryResponse(queries, initialQueries, queryResponseMap, options) {
  return Object.keys(queryResponseMap).reduce(function (map, type) {
    var queryResponse = queryResponseMap[type];
    var query = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(queries, {
      type: type
    });

    if (type === _DiodeQueryTypes__WEBPACK_IMPORTED_MODULE_1__["default"].BATCH) {
      // BatchQuery returns multiple response at once as single object,
      // we need to merge initial response with response generated by
      // batch query response resolution
      var batchQueryResponseMap = Object(_resolveBatchQuery__WEBPACK_IMPORTED_MODULE_2__["default"])(query.resolve(queryResponse, options), initialQueries, options);
      Object.assign(map, batchQueryResponseMap);
    } else {
      map[type] = query.resolve(queryResponse, query.fragment, options);
    }

    return map;
  }, {});
}

/***/ }),

/***/ "./react-diode/src/store/DiodeStore.js":
/*!*********************************************!*\
  !*** ./react-diode/src/store/DiodeStore.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var deep_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-extend */ "deep-extend");
/* harmony import */ var deep_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container_resolveContainerProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/resolveContainerProps */ "./react-diode/src/container/resolveContainerProps.js");
/* harmony import */ var _network_DiodeNetworkLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../network/DiodeNetworkLayer */ "./react-diode/src/network/DiodeNetworkLayer.js");
/* harmony import */ var _query_DiodeRootQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../query/DiodeRootQuery */ "./react-diode/src/query/DiodeRootQuery.js");
/* harmony import */ var _query_resolvePendingQueries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../query/resolvePendingQueries */ "./react-diode/src/query/resolvePendingQueries.js");
/* harmony import */ var _query_resolveQueryResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../query/resolveQueryResponse */ "./react-diode/src/query/resolveQueryResponse.js");
/* harmony import */ var _query_filterBatchQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../query/filterBatchQuery */ "./react-diode/src/query/filterBatchQuery.js");
/* harmony import */ var _query_DiodeQueryRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../query/DiodeQueryRequest */ "./react-diode/src/query/DiodeQueryRequest.js");
/* harmony import */ var _cache_DiodeCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cache/DiodeCache */ "./react-diode/src/cache/DiodeCache.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @flow
 */










function markFetchAllCache(response, queries) {
  // mark special fetch-all case so our cache is aware
  queries.forEach(function (query) {
    Object.keys(query.fragment).forEach(function (fragmentKey) {
      var fragmentResponse = response[query.type][fragmentKey];

      if (Object.keys(query.fragment[fragmentKey]).length === 0 && fragmentResponse) {
        fragmentResponse[_cache_DiodeCache__WEBPACK_IMPORTED_MODULE_9__["FETCH_ALL_CACHE"]] = true;
      }
    });
  });
  return response;
}

var DiodeStore =
/*#__PURE__*/
function () {
  function DiodeStore() {
    _classCallCheck(this, DiodeStore);

    _defineProperty(this, "_networkLayer", void 0);

    _defineProperty(this, "_batchQueryEnabled", void 0);

    _defineProperty(this, "_batchQuery", void 0);

    this._batchQueriesEnabled = false;
    this._networkLayer = new _network_DiodeNetworkLayer__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }
  /**
   * @public
   */


  _createClass(DiodeStore, [{
    key: "injectNetworkLayer",
    value: function injectNetworkLayer(networkLayer) {
      this._networkLayer.injectNetworkLayer(networkLayer);
    }
    /**
     * @public
     */

  }, {
    key: "useMockQueries",
    value: function useMockQueries(queryMockResolver) {
      this._networkLayer.injectQueryMockResolver(queryMockResolver);
    }
    /**
     * @public
     */

  }, {
    key: "useBatchQuery",
    value: function useBatchQuery(batchQuery) {
      /* istanbul ignore else */
      if (batchQuery) {
        this._batchQueryEnabled = true;
        this._batchQuery = batchQuery;
      }
    }
    /**
     * @public
     *
     * Send queries via network layer bypassing internal cache. Note that the
     * server may respond with 304 status but it's not actually an internal
     * cached response
     */

  }, {
    key: "forceFetch",
    value: function forceFetch(RootContainer, options) {
      var queries = Object(_query_DiodeQueryRequest__WEBPACK_IMPORTED_MODULE_8__["getQueryRequests"])(RootContainer, options);
      return this._fetchQueries(queries, options).then(function (response) {
        var result = Object(_container_resolveContainerProps__WEBPACK_IMPORTED_MODULE_2__["default"])(response, RootContainer);
        return markFetchAllCache(result, queries);
      });
    }
  }, {
    key: "filterCachedFragments",
    value: function filterCachedFragments(query) {
      var cache = this.cache[query.type];

      if (!cache) {
        return query;
      }

      var filteredFragments = {};
      Object.keys(query.fragment).forEach(function (fragmentKey) {
        var cachedFragment = cache[fragmentKey];
        var innerFragment = query.fragment[fragmentKey];
        var innerFragmentKeys = Object.keys(innerFragment);

        if (innerFragmentKeys.length === 0) {
          // fetch all
          if (cachedFragment && !cachedFragment[_cache_DiodeCache__WEBPACK_IMPORTED_MODULE_9__["FETCH_ALL_CACHE"]]) {
            filteredFragments[fragmentKey] = {};
          }

          return;
        } // this query type might be partially cached
        // check specific fragment


        filteredFragments[fragmentKey] = {};
        innerFragmentKeys.forEach(function (innerKey) {
          if (cachedFragment && cachedFragment[innerKey]) {
            return;
          }

          filteredFragments[fragmentKey][innerKey] = innerFragment[innerKey];
        });
      });
      return _objectSpread({}, query, {
        fragment: filteredFragments
      });
    }
  }, {
    key: "fetch",
    value: function () {
      var _fetch = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(rawQuery, options) {
        var _this = this;

        var rootQuery, queries, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                rootQuery = new _query_DiodeRootQuery__WEBPACK_IMPORTED_MODULE_4__["default"](rawQuery);
                queries = rootQuery.compile().map(function (query) {
                  var _this$filterCachedFra = _this.filterCachedFragments(query),
                      fragment = _this$filterCachedFra.fragment,
                      params = _this$filterCachedFra.params;

                  if (Object.keys(fragment).length === 0) {
                    return null;
                  }

                  var queryRequestInfo = query.request(fragment, params, options);
                  return Object(_query_DiodeQueryRequest__WEBPACK_IMPORTED_MODULE_8__["generateQueryRequest"])(query, queryRequestInfo);
                }).filter(Boolean);
                _context.next = 4;
                return this._fetchQueries(queries, options);

              case 4:
                response = _context.sent;
                deep_extend__WEBPACK_IMPORTED_MODULE_1___default()(this.cache, markFetchAllCache(response, queries));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetch(_x, _x2) {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }()
    /**
     * Recursively fetch over query dependency, starting with query with no
     * dependency, and build response moving up
     *
     * TODO:
     *  - All DiodeQueryRequest should contain pending property for filtering
     *    instead of using query.dependencies which is not available in normal
     *    QueryRequest
     */

  }, {
    key: "_fetchQueries",
    value: function _fetchQueries(allQueries) {
      var _this2 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // We need to store unmodified initial queries before filtered
      // into batch query so we can use their resolve function when resolving
      // response from batch query
      var pendingQueries = allQueries.filter(function (query) {
        return query.dependencies;
      });
      var initialQueries = allQueries.filter(function (query) {
        return !query.dependencies;
      });
      var queries = initialQueries;

      if (this._batchQueryEnabled) {
        queries = Object(_query_filterBatchQuery__WEBPACK_IMPORTED_MODULE_7__["filterBatchQuery"])(queries, this._batchQuery, options);
      }

      return this._networkLayer.sendQueries(queries, options).then(function (queryResponseMap) {
        var responseMap = Object(_query_resolveQueryResponse__WEBPACK_IMPORTED_MODULE_6__["default"])(queries, initialQueries, queryResponseMap, options);

        if (pendingQueries.length > 0) {
          var nextQueries = Object(_query_resolvePendingQueries__WEBPACK_IMPORTED_MODULE_5__["default"])(pendingQueries, responseMap);
          return _this2._fetchQueries(nextQueries, options).then(function (nextResponseMap) {
            return Object.assign(responseMap, nextResponseMap);
          });
        }

        return responseMap;
      });
    }
  }]);

  return DiodeStore;
}();

/* harmony default export */ __webpack_exports__["default"] = (new DiodeStore());

/***/ }),

/***/ "./utils/DefaultDiodeNetworkLayer.js":
/*!*******************************************!*\
  !*** ./utils/DefaultDiodeNetworkLayer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var DiodeDefaultNetworkLayer =
/*#__PURE__*/
function () {
  // TODO accept fetch options
  function DiodeDefaultNetworkLayer(baseApiEndpoint, options) {
    _classCallCheck(this, DiodeDefaultNetworkLayer);

    _defineProperty(this, "_baseApiEndpoint", void 0);

    _defineProperty(this, "_defaultHeaders", void 0);

    this._baseApiEndpoint = baseApiEndpoint;
    this._defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
  }
  /**
   * @public
   *
   */


  _createClass(DiodeDefaultNetworkLayer, [{
    key: "sendQueries",
    value: function sendQueries(queryRequests, options) {
      var _this = this;

      var requests = queryRequests.map(function (query) {
        /* istanbul ignore next */
        var headers = options.headers ? options.headers : _this._defaultHeaders;
        var url = query.url,
            method = query.method,
            payload = query.payload;
        var apiUrl = "".concat(_this._baseApiEndpoint).concat(url);
        var fetchParams = {
          url: apiUrl,
          method: method,
          headers: _objectSpread({}, headers, query.headers)
        };
        /* istanbul ignore else */

        if (_typeof(payload) === "object") {
          // we use JSON.stringify here because this is what most POST request
          // body looked like. GET requests are usually in form of query string
          // which should already handled inside apiUrl. Other type of payload,
          // like urlencodedform should be generated inside query.generate method
          fetchParams.data = JSON.stringify(payload);
        } else if (typeof payload === "string") {
          fetchParams.data = payload;
        }

        return axios__WEBPACK_IMPORTED_MODULE_0___default()(fetchParams).then(function (response) {
          return {
            // ...response,
            type: query.type,
            data: response.data
          };
        });
      });
      return Promise.all(requests).then(function (responses) {
        // Convert array of response into Map<QueryType, QueryResponse>
        var responseMap = responses.reduce(function (responseMap, response) {
          var type = response.type;
          responseMap[type] = response;
          return responseMap;
        }, {});
        return responseMap;
      });
    }
  }]);

  return DiodeDefaultNetworkLayer;
}(); // module.exports.default = DiodeDefaultNetworkLayer;


/* harmony default export */ __webpack_exports__["default"] = (DiodeDefaultNetworkLayer);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "deep-extend":
/*!******************************!*\
  !*** external "deep-extend" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("deep-extend");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "lodash.find":
/*!******************************!*\
  !*** external "lodash.find" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.find");

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map