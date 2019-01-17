webpackHotUpdate("static/development/pages/index.js",{

/***/ "./queries/ImageDisplayQuery.js":
/*!**************************************!*\
  !*** ./queries/ImageDisplayQuery.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_diode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-diode */ "./node_modules/react-diode/lib/DiodePublic.js");
/* harmony import */ var react_diode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_diode__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  type: 'FETCH_DUMMY_IMAGE',
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

/***/ })

})
//# sourceMappingURL=index.js.552d1113ddbccc3015f5.hot-update.js.map