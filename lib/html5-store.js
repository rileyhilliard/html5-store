(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("html5-store", [], factory);
	else if(typeof exports === 'object')
		exports["html5-store"] = factory();
	else
		root["html5-store"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cookie.js":
/*!***********************!*\
  !*** ./src/cookie.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.clear = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var clear = function clear() {
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf('=');
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = "".concat(name, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT");
  }
};

exports.clear = clear;

var Cookie =
/*#__PURE__*/
function () {
  function Cookie() {
    _classCallCheck(this, Cookie);

    this.store = {};
  }

  _createClass(Cookie, [{
    key: "set",
    value: function set(key, value, expires) {
      var DAYS = 60;
      var date;

      if (!key) {
        throw new Error('We need a key to look up data from the Cookies');
      }

      if (!value) {
        throw new Error('We need a value to store in the Cookie');
      }

      if (expires) {
        date = new Date(expires);
      } else {
        // Default expiration date is 60 days
        date = new Date();
        date.setTime(date.getTime() + DAYS * 24 * 60 * 60 * 1000);
      }

      var writeVal = "".concat(key, "=").concat(value, "; expires=").concat(date.toUTCString(), "; path=/");
      document.cookie = writeVal;
      this.store[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      // get cached value if it exists
      if (this.store[key]) {
        return this.store[key];
      }

      var nameEQ = "".concat(key, "=");
      var ca = document.cookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
          c = c.substring(1, c.length);
        }

        if (c.indexOf(nameEQ) == 0) {
          // cache the lookup value for faster reads
          this.store[key] = c.substring(nameEQ.length, c.length);
          return this.store[key];
        }
      }

      return null;
    }
  }, {
    key: "remove",
    value: function remove(key) {
      document.cookie = "".concat(key, "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"); // remove val from the internal cache

      delete this.store[key];
    }
  }, {
    key: "clear",
    value: function clear() {
      var cookies = document.cookie.split(';');

      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf('=');
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = "".concat(name, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT");
      }

      this.store = {};
    }
  }]);

  return Cookie;
}();

exports.default = Cookie;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cookie = exports.Session = exports.Local = void 0;

var _cookie = _interopRequireDefault(__webpack_require__(/*! ./cookie */ "./src/cookie.js"));

var _local = _interopRequireDefault(__webpack_require__(/*! ./local */ "./src/local.js"));

var _session = _interopRequireDefault(__webpack_require__(/*! ./session */ "./src/session.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Local = new _local.default();
exports.Local = Local;
var Session = new _session.default();
exports.Session = Session;
var Cookie = new _cookie.default();
exports.Cookie = Cookie;

/***/ }),

/***/ "./src/local.js":
/*!**********************!*\
  !*** ./src/local.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _window = window,
    localStorage = _window.localStorage;

var Local =
/*#__PURE__*/
function () {
  function Local() {
    _classCallCheck(this, Local);
  }

  _createClass(Local, [{
    key: "get",
    value: function get(key) {
      if (!key) {
        throw new Error(_utils.GET_KEY_ERROR);
      }

      var item = localStorage.getItem((0, _utils.keyHash)(key));
      return item && JSON.parse(item).data;
    }
  }, {
    key: "set",
    value: function set(key, data) {
      if (!key) {
        throw new Error(_utils.SET_KEY_ERROR);
      }

      var obj = {
        timestamp: Date.now(),
        data: data
      };
      return localStorage.setItem((0, _utils.keyHash)(key), JSON.stringify(obj));
    }
  }, {
    key: "remove",
    value: function remove(key) {
      if (!key) {
        throw new Error(_utils.REMOVE_KEY_ERROR);
      }

      return localStorage.removeItem((0, _utils.keyHash)(key));
    }
  }, {
    key: "clear",
    value: function clear() {
      localStorage.clear();
    }
  }]);

  return Local;
}();

exports.default = Local;
module.exports = exports["default"];

/***/ }),

/***/ "./src/session.js":
/*!************************!*\
  !*** ./src/session.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _window = window,
    sessionStorage = _window.sessionStorage;

var Session =
/*#__PURE__*/
function () {
  function Session() {
    _classCallCheck(this, Session);
  }

  _createClass(Session, [{
    key: "get",
    value: function get(key) {
      if (!key) {
        throw new Error(_utils.GET_KEY_ERROR);
      }

      var item = sessionStorage.getItem((0, _utils.keyHash)(key));
      return item && JSON.parse(item).data;
    }
  }, {
    key: "set",
    value: function set(key, data) {
      if (!key) {
        throw new Error(_utils.SET_KEY_ERROR);
      }

      var obj = {
        timestamp: Date.now(),
        data: data
      };
      return sessionStorage.setItem((0, _utils.keyHash)(key), JSON.stringify(obj));
    }
  }, {
    key: "remove",
    value: function remove(key) {
      if (!key) {
        throw new Error(_utils.REMOVE_KEY_ERROR);
      }

      return sessionStorage.removeItem((0, _utils.keyHash)(key));
    }
  }, {
    key: "clear",
    value: function clear() {
      sessionStorage.clear();
    }
  }]);

  return Session;
}();

exports.default = Session;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REMOVE_KEY_ERROR = exports.SET_KEY_ERROR = exports.GET_KEY_ERROR = exports.keyHash = exports.KEY = void 0;
var KEY = 'html5-store';
exports.KEY = KEY;

var keyHash = function keyHash(key) {
  return "".concat(KEY, ":").concat(key);
};

exports.keyHash = keyHash;
var GET_KEY_ERROR = '.get(\'key\') requires a key to look up data';
exports.GET_KEY_ERROR = GET_KEY_ERROR;
var SET_KEY_ERROR = '.set(\'key\', \'{ data }\') needs a key to set data';
exports.SET_KEY_ERROR = SET_KEY_ERROR;
var REMOVE_KEY_ERROR = '.remove(\'key\') requires a key to remove data';
exports.REMOVE_KEY_ERROR = REMOVE_KEY_ERROR;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odG1sNS1zdG9yZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vaHRtbDUtc3RvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHRtbDUtc3RvcmUvLi9zcmMvY29va2llLmpzIiwid2VicGFjazovL2h0bWw1LXN0b3JlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2h0bWw1LXN0b3JlLy4vc3JjL2xvY2FsLmpzIiwid2VicGFjazovL2h0bWw1LXN0b3JlLy4vc3JjL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vaHRtbDUtc3RvcmUvLi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOlsiY2xlYXIiLCJjb29raWVzIiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJlcVBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiQ29va2llIiwic3RvcmUiLCJrZXkiLCJ2YWx1ZSIsImV4cGlyZXMiLCJEQVlTIiwiZGF0ZSIsIkVycm9yIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwid3JpdGVWYWwiLCJ0b1VUQ1N0cmluZyIsIm5hbWVFUSIsImNhIiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsIkxvY2FsIiwiU2Vzc2lvbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsIml0ZW0iLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsIm9iaiIsInRpbWVzdGFtcCIsIm5vdyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW1vdmVJdGVtIiwic2Vzc2lvblN0b3JhZ2UiLCJLRVkiLCJrZXlIYXNoIiwiR0VUX0tFWV9FUlJPUiIsIlNFVF9LRVlfRVJST1IiLCJSRU1PVkVfS0VZX0VSUk9SIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7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QUN6Q0ksSUFBTTZDLEdBQUcsR0FBRyxhQUFaOzs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBakMsR0FBRztBQUFBLG1CQUFPZ0MsR0FBUCxjQUFjaEMsR0FBZDtBQUFBLENBQW5COzs7QUFDQSxJQUFNa0MsYUFBYSxHQUFHLDhDQUF0Qjs7QUFDQSxJQUFNQyxhQUFhLEdBQUcscURBQXRCOztBQUNBLElBQU1DLGdCQUFnQixHQUFHLGdEQUF6QiIsImZpbGUiOiJodG1sNS1zdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiaHRtbDUtc3RvcmVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaHRtbDUtc3RvcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiaHRtbDUtc3RvcmVcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjb29raWUgPSBjb29raWVzW2ldO1xuICAgIGNvbnN0IGVxUG9zID0gY29va2llLmluZGV4T2YoJz0nKTtcbiAgICBjb25zdCBuYW1lID0gZXFQb3MgPiAtMSA/IGNvb2tpZS5zdWJzdHIoMCwgZXFQb3MpIDogY29va2llO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PTtleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UYDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdG9yZSA9IHt9O1xuICB9XG5cbiAgc2V0KGtleSwgdmFsdWUsIGV4cGlyZXMpIHtcbiAgICBjb25zdCBEQVlTID0gNjA7XG4gICAgbGV0IGRhdGU7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2UgbmVlZCBhIGtleSB0byBsb29rIHVwIGRhdGEgZnJvbSB0aGUgQ29va2llcycpO1xuICAgIH1cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlIG5lZWQgYSB2YWx1ZSB0byBzdG9yZSBpbiB0aGUgQ29va2llJyk7XG4gICAgfVxuXG4gICAgaWYgKGV4cGlyZXMpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShleHBpcmVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVmYXVsdCBleHBpcmF0aW9uIGRhdGUgaXMgNjAgZGF5c1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBEQVlTICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgd3JpdGVWYWwgPSBgJHtrZXl9PSR7dmFsdWV9OyBleHBpcmVzPSR7ZGF0ZS50b1VUQ1N0cmluZygpfTsgcGF0aD0vYDtcbiAgICBkb2N1bWVudC5jb29raWUgPSB3cml0ZVZhbDtcbiAgICB0aGlzLnN0b3JlW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICAvLyBnZXQgY2FjaGVkIHZhbHVlIGlmIGl0IGV4aXN0c1xuICAgIGlmICh0aGlzLnN0b3JlW2tleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JlW2tleV07XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZUVRID0gYCR7a2V5fT1gO1xuICAgIGNvbnN0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjID0gY2FbaV07XG5cbiAgICAgIHdoaWxlIChjLmNoYXJBdCgwKT09JyAnKSB7XG4gICAgICAgIGMgPSBjLnN1YnN0cmluZygxLCBjLmxlbmd0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSB7XG4gICAgICAgIC8vIGNhY2hlIHRoZSBsb29rdXAgdmFsdWUgZm9yIGZhc3RlciByZWFkc1xuICAgICAgICB0aGlzLnN0b3JlW2tleV0gPSBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlW2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVtb3ZlKGtleSkge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke2tleX09OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UO2A7XG4gICAgLy8gcmVtb3ZlIHZhbCBmcm9tIHRoZSBpbnRlcm5hbCBjYWNoZVxuICAgIGRlbGV0ZSB0aGlzLnN0b3JlW2tleV07XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvb2tpZSA9IGNvb2tpZXNbaV07XG4gICAgICBjb25zdCBlcVBvcyA9IGNvb2tpZS5pbmRleE9mKCc9Jyk7XG4gICAgICBjb25zdCBuYW1lID0gZXFQb3MgPiAtMSA/IGNvb2tpZS5zdWJzdHIoMCwgZXFQb3MpIDogY29va2llO1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09O2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRgO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcmUgPSB7fTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBDb29raWVTdG9yZSB9IGZyb20gJy4vY29va2llJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgTG9jYWxTdG9yZSB9IGZyb20gJy4vbG9jYWwnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBTZXNzaW9uU3RvcmUgfSBmcm9tICcuL3Nlc3Npb24nO1xuXG5leHBvcnQgY29uc3QgTG9jYWwgPSBuZXcgTG9jYWxTdG9yZSgpO1xuZXhwb3J0IGNvbnN0IFNlc3Npb24gPSBuZXcgU2Vzc2lvblN0b3JlKCk7XG5leHBvcnQgY29uc3QgQ29va2llID0gbmV3IENvb2tpZVN0b3JlKCk7XG4iLCJpbXBvcnQge1xuICBrZXlIYXNoLFxuICBHRVRfS0VZX0VSUk9SLFxuICBTRVRfS0VZX0VSUk9SLFxuICBSRU1PVkVfS0VZX0VSUk9SLFxufSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgeyBsb2NhbFN0b3JhZ2UgfSA9IHdpbmRvdztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWwge1xuICBnZXQoa2V5KSB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihHRVRfS0VZX0VSUk9SKTtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5SGFzaChrZXkpKTtcblxuICAgIHJldHVybiBpdGVtICYmIEpTT04ucGFyc2UoaXRlbSkuZGF0YTtcbiAgfVxuXG4gIHNldChrZXksIGRhdGEpIHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFNFVF9LRVlfRVJST1IpO1xuICAgIH1cblxuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgIGRhdGFcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleUhhc2goa2V5KSwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gIH1cblxuICByZW1vdmUoa2V5KSB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihSRU1PVkVfS0VZX0VSUk9SKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5SGFzaChrZXkpKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBrZXlIYXNoLFxuICBHRVRfS0VZX0VSUk9SLFxuICBTRVRfS0VZX0VSUk9SLFxuICBSRU1PVkVfS0VZX0VSUk9SLFxufSBmcm9tICcuL3V0aWxzJztcbmNvbnN0IHsgc2Vzc2lvblN0b3JhZ2UgfSA9IHdpbmRvdztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvbiB7XG4gIGdldChrZXkpIHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKEdFVF9LRVlfRVJST1IpO1xuICAgIH1cbiAgICBjb25zdCBpdGVtID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXlIYXNoKGtleSkpO1xuXG4gICAgcmV0dXJuIGl0ZW0gJiYgSlNPTi5wYXJzZShpdGVtKS5kYXRhO1xuICB9XG5cbiAgc2V0KGtleSwgZGF0YSkge1xuICAgIGlmICgha2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoU0VUX0tFWV9FUlJPUik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgZGF0YVxuICAgIH07XG5cbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXlIYXNoKGtleSksIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICB9XG5cbiAgcmVtb3ZlKGtleSkge1xuICAgIGlmICgha2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoUkVNT1ZFX0tFWV9FUlJPUik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oa2V5SGFzaChrZXkpKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBLRVkgPSAnaHRtbDUtc3RvcmUnO1xuZXhwb3J0IGNvbnN0IGtleUhhc2ggPSBrZXkgPT4gYCR7S0VZfToke2tleX1gO1xuZXhwb3J0IGNvbnN0IEdFVF9LRVlfRVJST1IgPSAnLmdldChcXCdrZXlcXCcpIHJlcXVpcmVzIGEga2V5IHRvIGxvb2sgdXAgZGF0YSc7XG5leHBvcnQgY29uc3QgU0VUX0tFWV9FUlJPUiA9ICcuc2V0KFxcJ2tleVxcJywgXFwneyBkYXRhIH1cXCcpIG5lZWRzIGEga2V5IHRvIHNldCBkYXRhJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfS0VZX0VSUk9SID0gJy5yZW1vdmUoXFwna2V5XFwnKSByZXF1aXJlcyBhIGtleSB0byByZW1vdmUgZGF0YSc7XG4iXSwic291cmNlUm9vdCI6IiJ9