webpackHotUpdate("static/development/pages/index.js",{

/***/ "./react-diode/src/store/DiodeStore.js":
/*!*********************************************!*\
  !*** ./react-diode/src/store/DiodeStore.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./react-diode/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var deep_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-extend */ "./react-diode/node_modules/deep-extend/lib/deep-extend.js");
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
  // console.log('MARK_FETCH', response);
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

/***/ })

})
//# sourceMappingURL=index.js.7ccf70ed9f2f62183863.hot-update.js.map