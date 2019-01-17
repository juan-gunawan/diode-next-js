webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/DefaultDiodeNetworkLayer.js":
/*!*******************************************!*\
  !*** ./utils/DefaultDiodeNetworkLayer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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

        console.log(query);
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

/***/ })

})
//# sourceMappingURL=index.js.1e60e67a1a9bdba0042f.hot-update.js.map