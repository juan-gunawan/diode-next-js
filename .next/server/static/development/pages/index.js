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
/* harmony import */ var react_diode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-diode */ "react-diode");
/* harmony import */ var react_diode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_diode__WEBPACK_IMPORTED_MODULE_1__);
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


 // import Diode from '../react-diode/src/DiodePublic';

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
      // console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, this.props.contentResource ? 'Yes' : 'No');
    }
  }]);

  return ImageDisplay;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (react_diode__WEBPACK_IMPORTED_MODULE_1___default.a.createRootContainer(ImageDisplay, {
  children: [],
  queries: {
    fetchImage: react_diode__WEBPACK_IMPORTED_MODULE_1___default.a.createQuery(_queries_ImageDisplayQuery__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
/* harmony import */ var react_diode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-diode */ "react-diode");
/* harmony import */ var react_diode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_diode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ImageDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ImageDisplay */ "./components/ImageDisplay.js");
/* harmony import */ var _utils_DefaultDiodeNetworkLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/DefaultDiodeNetworkLayer */ "./utils/DefaultDiodeNetworkLayer.js");

var _jsxFileName = "/Users/juan.gunawan/diode-next-js/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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


 // import Diode from '../react-diode/src/DiodePublic';
// Component

 // Diode

 // import CRNetworkLayer from '../utils/FakeNetworkLayer';

react_diode__WEBPACK_IMPORTED_MODULE_2___default.a.injectNetworkLayer(new _utils_DefaultDiodeNetworkLayer__WEBPACK_IMPORTED_MODULE_4__["default"]('')); // Diode.injectNetworkLayer(new CRNetworkLayer());

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
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return react_diode__WEBPACK_IMPORTED_MODULE_2___default.a.Store.forceFetch(_components_ImageDisplay__WEBPACK_IMPORTED_MODULE_3__["default"]);

              case 3:
                cache = _context.sent;
                return _context.abrupt("return", {
                  cache: cache,
                  isServer: true
                });

              case 5:
                return _context.abrupt("return", {
                  cache: window.__NEXT_DATA__.props.pageProps.cache,
                  isServer: false
                });

              case 6:
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

    if (false) {}

    _this.cache = react_diode__WEBPACK_IMPORTED_MODULE_2___default.a.createCache(cache);
    console.log(_this.cache.getContents());
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_diode__WEBPACK_IMPORTED_MODULE_2___default.a.CacheProvider, {
        value: this.cache,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ImageDisplay__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
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
/* harmony import */ var react_diode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-diode */ "react-diode");
/* harmony import */ var react_diode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_diode__WEBPACK_IMPORTED_MODULE_0__);
 // import Diode from '../react-diode/src/DiodePublic';

/* harmony default export */ __webpack_exports__["default"] = ({
  type: 'fetchImage',
  request: function request(fragment, params, options) {
    var url = "https://jsonplaceholder.typicode.com/photos";
    var method = 'get';
    var payload = '';
    return react_diode__WEBPACK_IMPORTED_MODULE_0___default.a.queryRequest(url, method, payload);
  },
  resolve: function resolve(response, fragment, options) {
    return response.data;
  }
});

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-diode":
/*!******************************!*\
  !*** external "react-diode" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-diode");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map