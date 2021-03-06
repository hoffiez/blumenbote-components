"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebStrategy = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var WebStrategy = /*#__PURE__*/function () {
  function WebStrategy() {
    _classCallCheck(this, WebStrategy);
  }

  _createClass(WebStrategy, [{
    key: "getItem",
    value: function () {
      var _getItem = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(storageKey, isJson) {
        var value;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return window.localStorage.getItem(storageKey);

              case 2:
                value = _context.sent;

                if (!(isJson && _typeof(value) !== 'object')) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", JSON.parse(value));

              case 5:
                return _context.abrupt("return", value);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getItem(_x, _x2) {
        return _getItem.apply(this, arguments);
      }

      return getItem;
    }()
  }, {
    key: "setItem",
    value: function () {
      var _setItem = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(key, val, isJson) {
        var value;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                value = isJson ? JSON.stringify(val) : val;
                _context2.next = 3;
                return window.localStorage.setItem(key, value);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function setItem(_x3, _x4, _x5) {
        return _setItem.apply(this, arguments);
      }

      return setItem;
    }()
  }, {
    key: "removeItem",
    value: function () {
      var _removeItem = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(key) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return window.localStorage.removeItem(key);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function removeItem(_x6) {
        return _removeItem.apply(this, arguments);
      }

      return removeItem;
    }()
  }]);

  return WebStrategy;
}();

exports.WebStrategy = WebStrategy;