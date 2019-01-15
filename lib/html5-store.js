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
Object.defineProperty(exports, "Local", {
  enumerable: true,
  get: function get() {
    return _local.default;
  }
});
Object.defineProperty(exports, "Session", {
  enumerable: true,
  get: function get() {
    return _session.default;
  }
});
exports.Cookie = void 0;

var _cookie = _interopRequireDefault(__webpack_require__(/*! ./cookie */ "./src/cookie.js"));

var _local = _interopRequireDefault(__webpack_require__(/*! ./local */ "./src/local.js"));

var _session = _interopRequireDefault(__webpack_require__(/*! ./session */ "./src/session.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _window = window,
    localStorage = _window.localStorage;
var _default = {
  get: function get(key) {
    if (!key) {
      throw new Error('We need a key to look up data from Local Storage');
    }

    var item = localStorage.getItem((0, _utils.keyHash)(key));
    return item ? JSON.parse(item).data : false;
  },
  set: function set(key, data) {
    if (!key) {
      throw new Error('We need a key to set data to Local Storage');
    }

    var obj = {
      timestamp: Date.now(),
      data: data
    };
    return localStorage.setItem((0, _utils.keyHash)(key), JSON.stringify(obj));
  },
  remove: function remove(key) {
    if (!key) {
      throw new Error('We need a key to look up data from Local Storage');
    }

    return localStorage.removeItem((0, _utils.keyHash)(key));
  },
  clear: function clear() {
    localStorage.clear();
  }
};
exports.default = _default;
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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _window = window,
    sessionStorage = _window.sessionStorage;
var _default = {
  get: function get(key) {
    var includeMeta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!key) {
      throw new Error('We need a key to look up data from Session Storage');
    }

    var item = sessionStorage.getItem((0, _utils.keyHash)(key));
    var parsedJSON = item ? JSON.parse(item) : false;

    if (parsedJSON) {
      return includeMeta ? parsedJSON : parsedJSON.data;
    }

    return false;
  },
  set: function set(key, data) {
    if (!key) {
      throw new Error('We need a key to set data to Session Storage');
    }

    if (!(_typeof(data) === 'object' || typeof data === 'string')) {
      throw new Error("We can only store JS objects or stings to Session Storage. '".concat(_typeof(data), "' was passed in."));
    }

    var dataString = "{\n      \"data\": ".concat(_typeof(data) === 'object' ? JSON.stringify(data) : data, ",\n      \"meta\": {\n        \"timestamp\": ").concat(Date.now(), "\n      }\n    }");
    return sessionStorage.setItem((0, _utils.keyHash)(key), dataString);
  },
  remove: function remove(key) {
    if (!key) {
      throw new Error('We need a key to look up data from Local Storage');
    }

    return sessionStorage.removeItem((0, _utils.keyHash)(key));
  },
  clear: function clear() {
    sessionStorage.clear();
  }
};
exports.default = _default;
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
exports.keyHash = exports.KEY = void 0;
var KEY = 'html5-store';
exports.KEY = KEY;

var keyHash = function keyHash(key) {
  return "".concat(KEY, ":").concat(key);
};

exports.keyHash = keyHash;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odG1sNS1zdG9yZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vaHRtbDUtc3RvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHRtbDUtc3RvcmUvLi9zcmMvY29va2llLmpzIiwid2VicGFjazovL2h0bWw1LXN0b3JlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2h0bWw1LXN0b3JlLy4vc3JjL2xvY2FsLmpzIiwid2VicGFjazovL2h0bWw1LXN0b3JlLy4vc3JjL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vaHRtbDUtc3RvcmUvLi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOlsiY2xlYXIiLCJjb29raWVzIiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJlcVBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiQ29va2llIiwic3RvcmUiLCJrZXkiLCJ2YWx1ZSIsImV4cGlyZXMiLCJEQVlTIiwiZGF0ZSIsIkVycm9yIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwid3JpdGVWYWwiLCJ0b1VUQ1N0cmluZyIsIm5hbWVFUSIsImNhIiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldCIsIml0ZW0iLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInNldCIsIm9iaiIsInRpbWVzdGFtcCIsIm5vdyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW1vdmUiLCJyZW1vdmVJdGVtIiwic2Vzc2lvblN0b3JhZ2UiLCJpbmNsdWRlTWV0YSIsInBhcnNlZEpTT04iLCJkYXRhU3RyaW5nIiwiS0VZIiwia2V5SGFzaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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QWhCLEdBQTJCRixJQUFJLENBQUNRLFNBQUwsQ0FBZU4sSUFBZixDQUEzQixHQUFrREEsSUFEOUMsMERBR0dqQixJQUFJLENBQUNxQixHQUFMLEVBSEgscUJBQWhCO0FBT0EsV0FBT0ssY0FBYyxDQUFDSixPQUFmLENBQXVCLG9CQUFRNUIsR0FBUixDQUF2QixFQUFxQ21DLFVBQXJDLENBQVA7QUFDRCxHQTdCWTtBQStCYkwsUUEvQmEsa0JBK0JOOUIsR0EvQk0sRUErQkQ7QUFDVixRQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNSLFlBQU0sSUFBSUssS0FBSixDQUFVLGtEQUFWLENBQU47QUFDRDs7QUFDRCxXQUFPMkIsY0FBYyxDQUFDRCxVQUFmLENBQTBCLG9CQUFRL0IsR0FBUixDQUExQixDQUFQO0FBQ0QsR0FwQ1k7QUFzQ2JiLE9BdENhLG1CQXNDTDtBQUNONkMsa0JBQWMsQ0FBQzdDLEtBQWY7QUFDRDtBQXhDWSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pSLElBQU1pRCxHQUFHLEdBQUcsYUFBWjs7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQXJDLEdBQUc7QUFBQSxtQkFBT29DLEdBQVAsY0FBY3BDLEdBQWQ7QUFBQSxDQUFuQiIsImZpbGUiOiJodG1sNS1zdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiaHRtbDUtc3RvcmVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaHRtbDUtc3RvcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiaHRtbDUtc3RvcmVcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjb29raWUgPSBjb29raWVzW2ldO1xuICAgIGNvbnN0IGVxUG9zID0gY29va2llLmluZGV4T2YoJz0nKTtcbiAgICBjb25zdCBuYW1lID0gZXFQb3MgPiAtMSA/IGNvb2tpZS5zdWJzdHIoMCwgZXFQb3MpIDogY29va2llO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PTtleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UYDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdG9yZSA9IHt9O1xuICB9XG5cbiAgc2V0KGtleSwgdmFsdWUsIGV4cGlyZXMpIHtcbiAgICBjb25zdCBEQVlTID0gNjA7XG4gICAgbGV0IGRhdGU7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2UgbmVlZCBhIGtleSB0byBsb29rIHVwIGRhdGEgZnJvbSB0aGUgQ29va2llcycpO1xuICAgIH1cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlIG5lZWQgYSB2YWx1ZSB0byBzdG9yZSBpbiB0aGUgQ29va2llJyk7XG4gICAgfVxuXG4gICAgaWYgKGV4cGlyZXMpIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShleHBpcmVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVmYXVsdCBleHBpcmF0aW9uIGRhdGUgaXMgNjAgZGF5c1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBEQVlTICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgd3JpdGVWYWwgPSBgJHtrZXl9PSR7dmFsdWV9OyBleHBpcmVzPSR7ZGF0ZS50b1VUQ1N0cmluZygpfTsgcGF0aD0vYDtcbiAgICBkb2N1bWVudC5jb29raWUgPSB3cml0ZVZhbDtcbiAgICB0aGlzLnN0b3JlW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICAvLyBnZXQgY2FjaGVkIHZhbHVlIGlmIGl0IGV4aXN0c1xuICAgIGlmICh0aGlzLnN0b3JlW2tleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JlW2tleV07XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZUVRID0gYCR7a2V5fT1gO1xuICAgIGNvbnN0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjID0gY2FbaV07XG5cbiAgICAgIHdoaWxlIChjLmNoYXJBdCgwKT09JyAnKSB7XG4gICAgICAgIGMgPSBjLnN1YnN0cmluZygxLCBjLmxlbmd0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSB7XG4gICAgICAgIC8vIGNhY2hlIHRoZSBsb29rdXAgdmFsdWUgZm9yIGZhc3RlciByZWFkc1xuICAgICAgICB0aGlzLnN0b3JlW2tleV0gPSBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlW2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVtb3ZlKGtleSkge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke2tleX09OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UO2A7XG4gICAgLy8gcmVtb3ZlIHZhbCBmcm9tIHRoZSBpbnRlcm5hbCBjYWNoZVxuICAgIGRlbGV0ZSB0aGlzLnN0b3JlW2tleV07XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvb2tpZSA9IGNvb2tpZXNbaV07XG4gICAgICBjb25zdCBlcVBvcyA9IGNvb2tpZS5pbmRleE9mKCc9Jyk7XG4gICAgICBjb25zdCBuYW1lID0gZXFQb3MgPiAtMSA/IGNvb2tpZS5zdWJzdHIoMCwgZXFQb3MpIDogY29va2llO1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09O2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRgO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcmUgPSB7fTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBDb29raWVTdG9yZSB9IGZyb20gJy4vY29va2llJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2NhbCB9IGZyb20gJy4vbG9jYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXNzaW9uIH0gZnJvbSAnLi9zZXNzaW9uJztcbmV4cG9ydCBjb25zdCBDb29raWUgPSBuZXcgQ29va2llU3RvcmUoKTtcbiIsImltcG9ydCB7IGtleUhhc2ggfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgeyBsb2NhbFN0b3JhZ2UgfSA9IHdpbmRvdztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQoa2V5KSB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2UgbmVlZCBhIGtleSB0byBsb29rIHVwIGRhdGEgZnJvbSBMb2NhbCBTdG9yYWdlJyk7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlIYXNoKGtleSkpO1xuICAgIHJldHVybiBpdGVtID8gSlNPTi5wYXJzZShpdGVtKS5kYXRhIDogZmFsc2U7XG4gIH0sXG5cbiAgc2V0KGtleSwgZGF0YSkge1xuICAgIGlmICgha2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlIG5lZWQgYSBrZXkgdG8gc2V0IGRhdGEgdG8gTG9jYWwgU3RvcmFnZScpO1xuICAgIH1cblxuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgIGRhdGFcbiAgICB9O1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXlIYXNoKGtleSksIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICB9LFxuXG4gIHJlbW92ZShrZXkpIHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZSBuZWVkIGEga2V5IHRvIGxvb2sgdXAgZGF0YSBmcm9tIExvY2FsIFN0b3JhZ2UnKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleUhhc2goa2V5KSk7XG4gIH0sXG5cbiAgY2xlYXIoKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBrZXlIYXNoIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IHsgc2Vzc2lvblN0b3JhZ2UgfSA9IHdpbmRvdztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQoa2V5LCBpbmNsdWRlTWV0YSA9IGZhbHNlKSB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2UgbmVlZCBhIGtleSB0byBsb29rIHVwIGRhdGEgZnJvbSBTZXNzaW9uIFN0b3JhZ2UnKTtcbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5SGFzaChrZXkpKTtcbiAgICBjb25zdCBwYXJzZWRKU09OID0gaXRlbSA/IEpTT04ucGFyc2UoaXRlbSkgOiBmYWxzZTtcbiAgICBpZiAocGFyc2VkSlNPTikge1xuICAgICAgcmV0dXJuIGluY2x1ZGVNZXRhID8gcGFyc2VkSlNPTiA6IHBhcnNlZEpTT04uZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgc2V0KGtleSwgZGF0YSkge1xuICAgIGlmICgha2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlIG5lZWQgYSBrZXkgdG8gc2V0IGRhdGEgdG8gU2Vzc2lvbiBTdG9yYWdlJyk7XG4gICAgfVxuICAgIGlmICghKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFdlIGNhbiBvbmx5IHN0b3JlIEpTIG9iamVjdHMgb3Igc3RpbmdzIHRvIFNlc3Npb24gU3RvcmFnZS4gJyR7dHlwZW9mIGRhdGF9JyB3YXMgcGFzc2VkIGluLmApO1xuICAgIH1cbiAgICBjb25zdCBkYXRhU3RyaW5nID0gYHtcbiAgICAgIFwiZGF0YVwiOiAke3R5cGVvZiBkYXRhID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogZGF0YX0sXG4gICAgICBcIm1ldGFcIjoge1xuICAgICAgICBcInRpbWVzdGFtcFwiOiAke0RhdGUubm93KCl9XG4gICAgICB9XG4gICAgfWA7XG5cbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXlIYXNoKGtleSksIGRhdGFTdHJpbmcpO1xuICB9LFxuXG4gIHJlbW92ZShrZXkpIHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZSBuZWVkIGEga2V5IHRvIGxvb2sgdXAgZGF0YSBmcm9tIExvY2FsIFN0b3JhZ2UnKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oa2V5SGFzaChrZXkpKTtcbiAgfSxcblxuICBjbGVhcigpIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IEtFWSA9ICdodG1sNS1zdG9yZSc7XG5leHBvcnQgY29uc3Qga2V5SGFzaCA9IGtleSA9PiBgJHtLRVl9OiR7a2V5fWA7XG4iXSwic291cmNlUm9vdCI6IiJ9