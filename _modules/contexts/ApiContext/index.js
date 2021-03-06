"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useApi = exports.ApiProvider = exports.ApiContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingApiSdk = require("ordering-api-sdk");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Create ApiContext
 * Context to use Ordering API on the app
 */
var ApiContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Api provider to manage api request
 * @param {props} props
 */

exports.ApiContext = ApiContext;

var ApiProvider = function ApiProvider(_ref) {
  var settings = _ref.settings,
      children = _ref.children;

  var _useState = (0, _react.useState)(new _orderingApiSdk.Ordering(settings)),
      _useState2 = _slicedToArray(_useState, 2),
      ordering = _useState2[0],
      setOrdering = _useState2[1];

  var _useState3 = (0, _react.useState)(settings.language),
      _useState4 = _slicedToArray(_useState3, 2),
      language = _useState4[0],
      setLanguage = _useState4[1];

  var _setLanguage = function _setLanguage(languageCode) {
    if (languageCode === language) return;
    setLanguage(languageCode);
  };

  var _setOrderingState = function _setOrderingState(values) {
    setOrdering(new _orderingApiSdk.Ordering(_objectSpread({}, values)));
  };

  (0, _react.useEffect)(function () {
    if (ordering.language === language) return;

    var _ordering = new _orderingApiSdk.Ordering(_objectSpread(_objectSpread({}, settings), {}, {
      language: language
    }));

    setOrdering(_ordering);
  }, [language]);
  (0, _react.useEffect)(function () {
    _setOrderingState(settings);
  }, [settings === null || settings === void 0 ? void 0 : settings.project]);
  var functions = {
    setLanguage: _setLanguage,
    setOrdering: _setOrderingState
  };
  return /*#__PURE__*/_react.default.createElement(ApiContext.Provider, {
    value: [ordering, functions]
  }, children);
};
/**
 * Hook to get api state
 */


exports.ApiProvider = ApiProvider;

var useApi = function useApi() {
  var apiManager = (0, _react.useContext)(ApiContext);
  return apiManager || [{}];
};

exports.useApi = useApi;