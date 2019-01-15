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
exports.default = void 0;

var _local = _interopRequireDefault(__webpack_require__(/*! ./local */ "./src/local.js"));

var _session = _interopRequireDefault(__webpack_require__(/*! ./session */ "./src/session.js"));

var _cookie = _interopRequireDefault(__webpack_require__(/*! ./cookie */ "./src/cookie.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = {
  Local: _local.default,
  Session: _session.default,
  Cookie: new _cookie.default()
};
var _default = Store;
exports.default = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odG1sNS1zdG9yZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vaHRtbDUtc3RvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHRtbDUtc3RvcmUvLi9zcmMvY29va2llLmpzIiwid2VicGFjazovL2h0bWw1LXN0b3JlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2h0bWw1LXN0b3JlLy4vc3JjL2xvY2FsLmpzIiwid2VicGFjazovL2h0bWw1LXN0b3JlLy4vc3JjL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vaHRtbDUtc3RvcmUvLi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOlsiY2xlYXIiLCJjb29raWVzIiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJlcVBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiQ29va2llIiwic3RvcmUiLCJrZXkiLCJ2YWx1ZSIsImV4cGlyZXMiLCJEQVlTIiwiZGF0ZSIsIkVycm9yIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwid3JpdGVWYWwiLCJ0b1VUQ1N0cmluZyIsIm5hbWVFUSIsImNhIiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsIlN0b3JlIiwiTG9jYWwiLCJTZXNzaW9uIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0IiwiaXRlbSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJkYXRhIiwic2V0Iiwib2JqIiwidGltZXN0YW1wIiwibm93Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInJlbW92ZSIsInJlbW92ZUl0ZW0iLCJzZXNzaW9uU3RvcmFnZSIsImluY2x1ZGVNZXRhIiwicGFyc2VkSlNPTiIsImRhdGFTdHJpbmciLCJLRVkiLCJrZXlIYXNoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZB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Z0NBQ0osUUFBT1osSUFBUCxNQUFnQixRQUFoQixHQUEyQkYsSUFBSSxDQUFDUSxTQUFMLENBQWVOLElBQWYsQ0FBM0IsR0FBa0RBLElBRDlDLDBEQUdHcEIsSUFBSSxDQUFDd0IsR0FBTCxFQUhILHFCQUFoQjtBQU9BLFdBQU9LLGNBQWMsQ0FBQ0osT0FBZixDQUF1QixvQkFBUS9CLEdBQVIsQ0FBdkIsRUFBcUNzQyxVQUFyQyxDQUFQO0FBQ0QsR0E3Qlk7QUErQmJMLFFBL0JhLGtCQStCTmpDLEdBL0JNLEVBK0JEO0FBQ1YsUUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDUixZQUFNLElBQUlLLEtBQUosQ0FBVSxrREFBVixDQUFOO0FBQ0Q7O0FBQ0QsV0FBTzhCLGNBQWMsQ0FBQ0QsVUFBZixDQUEwQixvQkFBUWxDLEdBQVIsQ0FBMUIsQ0FBUDtBQUNEO0FBcENZLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSlIsSUFBTXVDLEdBQUcsR0FBRyxhQUFaOzs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBeEMsR0FBRztBQUFBLG1CQUFPdUMsR0FBUCxjQUFjdkMsR0FBZDtBQUFBLENBQW5CIiwiZmlsZSI6Imh0bWw1LXN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJodG1sNS1zdG9yZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJodG1sNS1zdG9yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJodG1sNS1zdG9yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgY29uc3QgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvb2tpZSA9IGNvb2tpZXNbaV07XG4gICAgY29uc3QgZXFQb3MgPSBjb29raWUuaW5kZXhPZignPScpO1xuICAgIGNvbnN0IG5hbWUgPSBlcVBvcyA+IC0xID8gY29va2llLnN1YnN0cigwLCBlcVBvcykgOiBjb29raWU7XG4gICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09O2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRgO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0b3JlID0ge307XG4gIH1cblxuICBzZXQoa2V5LCB2YWx1ZSwgZXhwaXJlcykge1xuICAgIGNvbnN0IERBWVMgPSA2MDtcbiAgICBsZXQgZGF0ZTtcbiAgICBpZiAoIWtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZSBuZWVkIGEga2V5IHRvIGxvb2sgdXAgZGF0YSBmcm9tIHRoZSBDb29raWVzJyk7XG4gICAgfVxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2UgbmVlZCBhIHZhbHVlIHRvIHN0b3JlIGluIHRoZSBDb29raWUnKTtcbiAgICB9XG5cbiAgICBpZiAoZXhwaXJlcykge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGV4cGlyZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWZhdWx0IGV4cGlyYXRpb24gZGF0ZSBpcyA2MCBkYXlzXG4gICAgICBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIERBWVMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBjb25zdCB3cml0ZVZhbCA9IGAke2tleX09JHt2YWx1ZX07IGV4cGlyZXM9JHtkYXRlLnRvVVRDU3RyaW5nKCl9OyBwYXRoPS9gO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IHdyaXRlVmFsO1xuICAgIHRoaXMuc3RvcmVba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0KGtleSkge1xuICAgIC8vIGdldCBjYWNoZWQgdmFsdWUgaWYgaXQgZXhpc3RzXG4gICAgaWYgKHRoaXMuc3RvcmVba2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5XTtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lRVEgPSBgJHtrZXl9PWA7XG4gICAgY29uc3QgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGMgPSBjYVtpXTtcblxuICAgICAgd2hpbGUgKGMuY2hhckF0KDApPT0nICcpIHtcbiAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEsIGMubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09IDApIHtcbiAgICAgICAgLy8gY2FjaGUgdGhlIGxvb2t1cCB2YWx1ZSBmb3IgZmFzdGVyIHJlYWRzXG4gICAgICAgIHRoaXMuc3RvcmVba2V5XSA9IGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW1vdmUoa2V5KSB7XG4gICAgZG9jdW1lbnQuY29va2llID0gYCR7a2V5fT07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7YDtcbiAgICAvLyByZW1vdmUgdmFsIGZyb20gdGhlIGludGVybmFsIGNhY2hlXG4gICAgZGVsZXRlIHRoaXMuc3RvcmVba2V5XTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29va2llID0gY29va2llc1tpXTtcbiAgICAgIGNvbnN0IGVxUG9zID0gY29va2llLmluZGV4T2YoJz0nKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBlcVBvcyA+IC0xID8gY29va2llLnN1YnN0cigwLCBlcVBvcykgOiBjb29raWU7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT07ZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVGA7XG4gICAgfVxuXG4gICAgdGhpcy5zdG9yZSA9IHt9O1xuICB9XG59XG4iLCJpbXBvcnQgTG9jYWwgZnJvbSAnLi9sb2NhbCc7XG5pbXBvcnQgU2Vzc2lvbiBmcm9tICcuL3Nlc3Npb24nO1xuaW1wb3J0IENvb2tpZSBmcm9tICcuL2Nvb2tpZSc7XG5cbmNvbnN0IFN0b3JlID0ge1xuICBMb2NhbCxcbiAgU2Vzc2lvbixcbiAgQ29va2llOiBuZXcgQ29va2llKClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuIiwiaW1wb3J0IHsga2V5SGFzaCB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCB7IGxvY2FsU3RvcmFnZSB9ID0gd2luZG93O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldChrZXkpIHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZSBuZWVkIGEga2V5IHRvIGxvb2sgdXAgZGF0YSBmcm9tIExvY2FsIFN0b3JhZ2UnKTtcbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleUhhc2goa2V5KSk7XG4gICAgcmV0dXJuIGl0ZW0gPyBKU09OLnBhcnNlKGl0ZW0pLmRhdGEgOiBmYWxzZTtcbiAgfSxcblxuICBzZXQoa2V5LCBkYXRhKSB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2UgbmVlZCBhIGtleSB0byBzZXQgZGF0YSB0byBMb2NhbCBTdG9yYWdlJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgZGF0YVxuICAgIH07XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleUhhc2goa2V5KSwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gIH0sXG5cbiAgcmVtb3ZlKGtleSkge1xuICAgIGlmICgha2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlIG5lZWQgYSBrZXkgdG8gbG9vayB1cCBkYXRhIGZyb20gTG9jYWwgU3RvcmFnZScpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5SGFzaChrZXkpKTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBrZXlIYXNoIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IHsgc2Vzc2lvblN0b3JhZ2UgfSA9IHdpbmRvdztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQoa2V5LCBpbmNsdWRlTWV0YSA9IGZhbHNlKSB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2UgbmVlZCBhIGtleSB0byBsb29rIHVwIGRhdGEgZnJvbSBTZXNzaW9uIFN0b3JhZ2UnKTtcbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5SGFzaChrZXkpKTtcbiAgICBjb25zdCBwYXJzZWRKU09OID0gaXRlbSA/IEpTT04ucGFyc2UoaXRlbSkgOiBmYWxzZTtcbiAgICBpZiAocGFyc2VkSlNPTikge1xuICAgICAgcmV0dXJuIGluY2x1ZGVNZXRhID8gcGFyc2VkSlNPTiA6IHBhcnNlZEpTT04uZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgc2V0KGtleSwgZGF0YSkge1xuICAgIGlmICgha2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlIG5lZWQgYSBrZXkgdG8gc2V0IGRhdGEgdG8gU2Vzc2lvbiBTdG9yYWdlJyk7XG4gICAgfVxuICAgIGlmICghKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFdlIGNhbiBvbmx5IHN0b3JlIEpTIG9iamVjdHMgb3Igc3RpbmdzIHRvIFNlc3Npb24gU3RvcmFnZS4gJyR7dHlwZW9mIGRhdGF9JyB3YXMgcGFzc2VkIGluLmApO1xuICAgIH1cbiAgICBjb25zdCBkYXRhU3RyaW5nID0gYHtcbiAgICAgIFwiZGF0YVwiOiAke3R5cGVvZiBkYXRhID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogZGF0YX0sXG4gICAgICBcIm1ldGFcIjoge1xuICAgICAgICBcInRpbWVzdGFtcFwiOiAke0RhdGUubm93KCl9XG4gICAgICB9XG4gICAgfWA7XG5cbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXlIYXNoKGtleSksIGRhdGFTdHJpbmcpO1xuICB9LFxuXG4gIHJlbW92ZShrZXkpIHtcbiAgICBpZiAoIWtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZSBuZWVkIGEga2V5IHRvIGxvb2sgdXAgZGF0YSBmcm9tIExvY2FsIFN0b3JhZ2UnKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oa2V5SGFzaChrZXkpKTtcbiAgfSxcbn07XG4iLCJleHBvcnQgY29uc3QgS0VZID0gJ2h0bWw1LXN0b3JlJztcbmV4cG9ydCBjb25zdCBrZXlIYXNoID0ga2V5ID0+IGAke0tFWX06JHtrZXl9YDtcbiJdLCJzb3VyY2VSb290IjoiIn0=