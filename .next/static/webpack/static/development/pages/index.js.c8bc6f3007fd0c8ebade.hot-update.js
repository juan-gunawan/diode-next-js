webpackHotUpdate("static/development/pages/index.js",{

/***/ "./react-diode/src/container/resolveContainerProps.js":
/*!************************************************************!*\
  !*** ./react-diode/src/container/resolveContainerProps.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveContainerProps; });
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-assign */ "./react-diode/node_modules/object-assign/index.js");
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

/***/ })

})
//# sourceMappingURL=index.js.c8bc6f3007fd0c8ebade.hot-update.js.map