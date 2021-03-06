"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOrder = exports.OrderProvider = exports.OrderContext = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _SessionContext = require("../SessionContext");

var _ApiContext = require("../ApiContext");

var _WebsocketContext = require("../WebsocketContext");

var _LanguageContext = require("../LanguageContext");

var _EventContext = require("../EventContext");

var _ConfigContext = require("../ConfigContext");

var _CustomerContext = require("../CustomerContext");

var _ToastContext = require("../ToastContext");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));

var _excluded = ["carts"],
    _excluded2 = ["carts"],
    _excluded3 = ["carts"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_dayjs.default.extend(_utc.default);
/**
 * Create OrderContext
 * This context will manage the current order with options internally and provide an easy interface
 */


var OrderContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Custom provider to order manager
 * This provider has a reducer for manage order state
 * @param {props} props
 */

exports.OrderContext = OrderContext;

var OrderProvider = function OrderProvider(_ref) {
  var _configState$configs, _configState$configs$, _configState$configs2, _configState$configs3, _customerState$user5;

  var Alert = _ref.Alert,
      children = _ref.children,
      strategy = _ref.strategy,
      isAlsea = _ref.isAlsea,
      isDisableToast = _ref.isDisableToast,
      franchiseId = _ref.franchiseId,
      isDisabledDefaultOpts = _ref.isDisabledDefaultOpts;

  var _useState = (0, _react.useState)({
    show: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      confirmAlert = _useState2[0],
      setConfirm = _useState2[1];

  var _useState3 = (0, _react.useState)({
    show: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alert = _useState4[0],
      setAlert = _useState4[1];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      languageState = _useLanguage2[0],
      t = _useLanguage2[1];

  var socket = (0, _WebsocketContext.useWebsocket)();

  var _useEvent = (0, _EventContext.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useConfig = (0, _ConfigContext.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 2),
      session = _useSession2[0],
      logout = _useSession2[1].logout;

  var _useCustomer = (0, _CustomerContext.useCustomer)(),
      _useCustomer2 = _slicedToArray(_useCustomer, 2),
      customerState = _useCustomer2[0],
      setUserCustomer = _useCustomer2[1].setUserCustomer;

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var configTypes = (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.order_types_allowed) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var orderTypes = {
    delivery: 1,
    pickup: 2,
    eatin: 3,
    curbside: 4,
    drivethru: 5
  };

  var _useState5 = (0, _react.useState)({
    loading: true,
    options: isDisabledDefaultOpts ? {
      type: null,
      moment: null
    } : {
      type: orderTypes[configState === null || configState === void 0 ? void 0 : (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 ? void 0 : (_configState$configs3 = _configState$configs2.default_order_type) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value],
      moment: null
    },
    carts: {},
    confirmAlert: confirmAlert,
    alert: alert
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      state = _useState6[0],
      setState = _useState6[1];
  /**
   * Refresh order options and carts from API
   */


  var refreshOrderOptions = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var customerFromLocalStorage, userCustomerId, options, _yield$ordering$setAc, _yield$ordering$setAc2, error, result, carts, _options, localOptions, _options2, _localOptions$address, conditions, userId, addressesResponse, address, _yield$ordering$setAc3, _yield$ordering$setAc4, _error, _result, _err$message, message;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!state.loading) {
                setState(_objectSpread(_objectSpread({}, state), {}, {
                  loading: true
                }));
              }

              _context.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              options = {};

              if (userCustomerId) {
                options.query = {
                  user_id: userCustomerId
                };
              }

              if (franchiseId) {
                options.query = _objectSpread(_objectSpread({}, options.query), {}, {
                  franchise_id: franchiseId
                });
              }

              _context.next = 11;
              return ordering.setAccessToken(session.token).orderOptions().get(options);

            case 11:
              _yield$ordering$setAc = _context.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              error = _yield$ordering$setAc2.error;
              result = _yield$ordering$setAc2.result;

              if (!error) {
                carts = result.carts, _options = _objectWithoutProperties(result, _excluded);
                state.carts = {};
                carts.forEach(function (cart) {
                  state.carts["businessId:".concat(cart.business_id)] = cart;
                });
                state.options = _objectSpread(_objectSpread({}, state.options), _options);
              }

              if (error) {
                setAlert({
                  show: true,
                  content: result
                });

                if ((result === null || result === void 0 ? void 0 : result[0]) === 'You do not have permission.') {
                  session.auth && logout();
                }
              }

              _context.next = 19;
              return strategy.getItem('options', true);

            case 19:
              localOptions = _context.sent;

              if (!localOptions) {
                _context.next = 51;
                break;
              }

              _options2 = {};

              if (!(Object.keys(localOptions.address).length > 0)) {
                _context.next = 43;
                break;
              }

              conditions = [{
                attribute: 'address',
                value: localOptions === null || localOptions === void 0 ? void 0 : (_localOptions$address = localOptions.address) === null || _localOptions$address === void 0 ? void 0 : _localOptions$address.address
              }];
              userId = userCustomerId || session.user.id;
              _context.next = 27;
              return ordering.setAccessToken(session.token).users(userId).addresses().where(conditions).get();

            case 27:
              addressesResponse = _context.sent;
              address = addressesResponse.content.result.find(function (address) {
                var _localOptions$address2, _localOptions$address3, _localOptions$address4, _address$location, _localOptions$address5, _address$location2, _localOptions$address6, _localOptions$address7, _localOptions$address8, _localOptions$address9, _localOptions$address10;

                localOptions.address.internal_number = ((_localOptions$address2 = localOptions.address) === null || _localOptions$address2 === void 0 ? void 0 : _localOptions$address2.internal_number) || null;
                localOptions.address.zipcode = ((_localOptions$address3 = localOptions.address) === null || _localOptions$address3 === void 0 ? void 0 : _localOptions$address3.zipcode) || null;
                localOptions.address.address_notes = ((_localOptions$address4 = localOptions.address) === null || _localOptions$address4 === void 0 ? void 0 : _localOptions$address4.address_notes) || null;
                return (address === null || address === void 0 ? void 0 : (_address$location = address.location) === null || _address$location === void 0 ? void 0 : _address$location.lat) === (localOptions === null || localOptions === void 0 ? void 0 : (_localOptions$address5 = localOptions.address) === null || _localOptions$address5 === void 0 ? void 0 : _localOptions$address5.location.lat) && (address === null || address === void 0 ? void 0 : (_address$location2 = address.location) === null || _address$location2 === void 0 ? void 0 : _address$location2.lng) === (localOptions === null || localOptions === void 0 ? void 0 : (_localOptions$address6 = localOptions.address) === null || _localOptions$address6 === void 0 ? void 0 : (_localOptions$address7 = _localOptions$address6.location) === null || _localOptions$address7 === void 0 ? void 0 : _localOptions$address7.lng) && (address === null || address === void 0 ? void 0 : address.internal_number) === (localOptions === null || localOptions === void 0 ? void 0 : (_localOptions$address8 = localOptions.address) === null || _localOptions$address8 === void 0 ? void 0 : _localOptions$address8.internal_number) && (address === null || address === void 0 ? void 0 : address.zipcode) === (localOptions === null || localOptions === void 0 ? void 0 : (_localOptions$address9 = localOptions.address) === null || _localOptions$address9 === void 0 ? void 0 : _localOptions$address9.zipcode) && (address === null || address === void 0 ? void 0 : address.address_notes) === (localOptions === null || localOptions === void 0 ? void 0 : (_localOptions$address10 = localOptions.address) === null || _localOptions$address10 === void 0 ? void 0 : _localOptions$address10.address_notes);
              });

              if (address) {
                _context.next = 40;
                break;
              }

              Object.keys(localOptions.address).forEach(function (key) {
                var _localOptions$address11, _localOptions$address12;

                return (localOptions === null || localOptions === void 0 ? void 0 : (_localOptions$address11 = localOptions.address) === null || _localOptions$address11 === void 0 ? void 0 : _localOptions$address11[key]) === null && (localOptions === null || localOptions === void 0 ? true : (_localOptions$address12 = localOptions.address) === null || _localOptions$address12 === void 0 ? true : delete _localOptions$address12[key]);
              });
              _context.next = 33;
              return ordering.setAccessToken(session.token).users(userId).addresses().save(localOptions.address);

            case 33:
              _yield$ordering$setAc3 = _context.sent;
              _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
              _error = _yield$ordering$setAc4.error;
              _result = _yield$ordering$setAc4.result;

              if (!_error) {
                address = _result;
              }

              _context.next = 42;
              break;

            case 40:
              _context.next = 42;
              return ordering.setAccessToken(session.token).users(userId).addresses(address.id).save({
                default: true
              });

            case 42:
              address && (_options2.address_id = address.id);

            case 43:
              if (localOptions.type) {
                _options2.type = localOptions.type;
              }

              if (localOptions.moment) {
                _options2.moment = _dayjs.default.utc(localOptions.moment, 'YYYY-MM-DD HH:mm:ss').unix();
              }

              if (localOptions !== null && localOptions !== void 0 && localOptions.address_id) {
                _options2.address_id = localOptions === null || localOptions === void 0 ? void 0 : localOptions.address_id;
              }

              if (_options2 && Object.keys(_options2).length > 0) {
                updateOrderOptions(_options2);
              } else {
                setState(_objectSpread(_objectSpread({}, state), {}, {
                  loading: false
                }));
              }

              _context.next = 49;
              return strategy.removeItem('options');

            case 49:
              _context.next = 52;
              break;

            case 51:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));

            case 52:
              _context.next = 59;
              break;

            case 54:
              _context.prev = 54;
              _context.t0 = _context["catch"](0);
              message = _context.t0 !== null && _context.t0 !== void 0 && (_err$message = _context.t0.message) !== null && _err$message !== void 0 && _err$message.includes('Internal error') ? 'INTERNAL_ERROR' : _context.t0.message;
              setAlert({
                show: true,
                content: [message]
              });
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));

            case 59:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 54]]);
    }));

    return function refreshOrderOptions() {
      return _ref2.apply(this, arguments);
    };
  }();

  var checkAddress = function checkAddress(address) {
    var props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number'];
    var values = [];
    props.forEach(function (prop) {
      var _state$options, _state$options2, _state$options2$addre;

      if ((_state$options = state.options) !== null && _state$options !== void 0 && _state$options.address && (_state$options2 = state.options) !== null && _state$options2 !== void 0 && (_state$options2$addre = _state$options2.address) !== null && _state$options2$addre !== void 0 && _state$options2$addre[prop]) {
        if (prop === 'location') {
          var _address$prop, _state$options3, _state$options3$addre, _state$options3$addre2, _address$prop2, _state$options4, _state$options4$addre, _state$options4$addre2;

          values.push((address === null || address === void 0 ? void 0 : (_address$prop = address[prop]) === null || _address$prop === void 0 ? void 0 : _address$prop.lat) === ((_state$options3 = state.options) === null || _state$options3 === void 0 ? void 0 : (_state$options3$addre = _state$options3.address) === null || _state$options3$addre === void 0 ? void 0 : (_state$options3$addre2 = _state$options3$addre[prop]) === null || _state$options3$addre2 === void 0 ? void 0 : _state$options3$addre2.lat) && (address === null || address === void 0 ? void 0 : (_address$prop2 = address[prop]) === null || _address$prop2 === void 0 ? void 0 : _address$prop2.lng) === ((_state$options4 = state.options) === null || _state$options4 === void 0 ? void 0 : (_state$options4$addre = _state$options4.address) === null || _state$options4$addre === void 0 ? void 0 : (_state$options4$addre2 = _state$options4$addre[prop]) === null || _state$options4$addre2 === void 0 ? void 0 : _state$options4$addre2.lng));
        } else {
          var _state$options5, _state$options5$addre;

          values.push((address === null || address === void 0 ? void 0 : address[prop]) === ((_state$options5 = state.options) === null || _state$options5 === void 0 ? void 0 : (_state$options5$addre = _state$options5.address) === null || _state$options5$addre === void 0 ? void 0 : _state$options5$addre[prop]));
        }
      } else {
        values.push(!(address !== null && address !== void 0 && address[prop]));
      }
    });
    return values.every(function (value) {
      return value;
    });
  };
  /**
   * Change order address
   */


  var changeAddress = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(addressId, params) {
      var optionsStorage, options, _state$options6, _params$address;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_typeof(addressId) === 'object')) {
                _context2.next = 10;
                break;
              }

              _context2.next = 3;
              return strategy.getItem('options', true);

            case 3:
              optionsStorage = _context2.sent;
              options = _objectSpread(_objectSpread(_objectSpread({}, state.options), optionsStorage), {}, {
                address: _objectSpread(_objectSpread({}, optionsStorage === null || optionsStorage === void 0 ? void 0 : optionsStorage.address), addressId)
              });

              if (!session.auth) {
                options.type = state === null || state === void 0 ? void 0 : (_state$options6 = state.options) === null || _state$options6 === void 0 ? void 0 : _state$options6.type;
              }

              _context2.next = 8;
              return strategy.setItem('options', options, true);

            case 8:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                options: options
              }));
              return _context2.abrupt("return");

            case 10:
              if (!(params && params !== null && params !== void 0 && params.address && !checkAddress(params === null || params === void 0 ? void 0 : params.address))) {
                _context2.next = 13;
                break;
              }

              updateOrderOptions({
                address_id: params === null || params === void 0 ? void 0 : (_params$address = params.address) === null || _params$address === void 0 ? void 0 : _params$address.id
              });
              return _context2.abrupt("return");

            case 13:
              if (!(params && params !== null && params !== void 0 && params.isEdit)) {
                _context2.next = 18;
                break;
              }

              if (!(addressId !== state.options.address_id)) {
                _context2.next = 16;
                break;
              }

              return _context2.abrupt("return");

            case 16:
              updateOrderOptions({
                address_id: addressId
              });
              return _context2.abrupt("return");

            case 18:
              updateOrderOptions({
                address_id: addressId
              });

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function changeAddress(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Change order type
   */


  var changeType = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(type) {
      var options;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              options = _objectSpread(_objectSpread({}, state.options), {}, {
                type: type
              });

              if (!(state.options.type === type)) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt("return");

            case 3:
              if (session.auth) {
                _context3.next = 7;
                break;
              }

              _context3.next = 6;
              return strategy.setItem('options', options, true);

            case 6:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                options: options
              }));

            case 7:
              updateOrderOptions({
                type: type
              });

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function changeType(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Change order moment
   */


  var changeMoment = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(moment) {
      var momentUnix, momentFormatted, options;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              momentUnix = moment ? moment.getTime() / 1000 : null;
              momentFormatted = momentUnix ? _dayjs.default.unix(momentUnix).utc().format('YYYY-MM-DD HH:mm:ss') : null;
              options = _objectSpread(_objectSpread({}, state.options), {}, {
                moment: momentFormatted
              });

              if (!(state.options.moment === momentFormatted)) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return");

            case 5:
              if (session.auth) {
                _context4.next = 9;
                break;
              }

              _context4.next = 8;
              return strategy.setItem('options', options, true);

            case 8:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                options: options
              }));

            case 9:
              updateOrderOptions({
                moment: momentUnix
              });

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function changeMoment(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Update order option data
   * @param {object} changes Changes to update order options
   */


  var updateOrderOptions = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(changes) {
      var customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc5, _yield$ordering$setAc6, error, result, carts, options, _err$message2, message;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!session.auth) {
                _context5.next = 28;
                break;
              }

              _context5.next = 3;
              return strategy.getItem('user-customer', true);

            case 3:
              customerFromLocalStorage = _context5.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = _objectSpread(_objectSpread({}, changes), {}, {
                user_id: userCustomerId || session.user.id
              });
              _context5.prev = 6;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              state.loading = true;
              _context5.next = 11;
              return ordering.setAccessToken(session.token).orderOptions().save(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 11:
              _yield$ordering$setAc5 = _context5.sent;
              _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
              error = _yield$ordering$setAc6.error;
              result = _yield$ordering$setAc6.result;

              if (!error) {
                carts = result.carts, options = _objectWithoutProperties(result, _excluded2);
                state.carts = {};
                carts.forEach(function (cart) {
                  state.carts["businessId:".concat(cart.business_id)] = cart;
                });
                state.options = _objectSpread(_objectSpread({}, state.options), options);
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              state.loading = false;
              return _context5.abrupt("return", !error);

            case 21:
              _context5.prev = 21;
              _context5.t0 = _context5["catch"](6);
              message = _context5.t0 !== null && _context5.t0 !== void 0 && (_err$message2 = _context5.t0.message) !== null && _err$message2 !== void 0 && _err$message2.includes('Internal error') ? 'INTERNAL_ERROR' : _context5.t0.message;
              setAlert({
                show: true,
                content: [message]
              });
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              state.loading = false;
              return _context5.abrupt("return", false);

            case 28:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[6, 21]]);
    }));

    return function updateOrderOptions(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();
  /**
   * Add product to cart
   * @param {object} product product for add
   * @param {object} cart cart of the product
   * @param {boolean} isQuickAddProduct option to add product when clicks
   */


  var addProduct = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(product, cart, isQuickAddProduct) {
      var customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc7, _yield$ordering$setAc8, error, result;

      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context6.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context6.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = {
                product: product,
                business_id: cart.business_id,
                user_id: userCustomerId || session.user.id
              };
              _context6.next = 9;
              return ordering.setAccessToken(session.token).carts().addProduct(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 9:
              _yield$ordering$setAc7 = _context6.sent;
              _yield$ordering$setAc8 = _yield$ordering$setAc7.content;
              error = _yield$ordering$setAc8.error;
              result = _yield$ordering$setAc8.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
                events.emit('cart_product_added', product, result);
                events.emit('cart_updated', result);
                events.emit('product_added', product);
                isQuickAddProduct && showToast(_ToastContext.ToastType.Success, t('PRODUCT_ADDED_NOTIFICATION', 'Product _PRODUCT_ added succesfully').replace('_PRODUCT_', product.name));
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context6.abrupt("return", !error);

            case 18:
              _context6.prev = 18;
              _context6.t0 = _context6["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context6.abrupt("return", false);

            case 22:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 18]]);
    }));

    return function addProduct(_x6, _x7, _x8) {
      return _ref7.apply(this, arguments);
    };
  }();
  /**
   * Remove product to cart
   */


  var removeProduct = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(product, cart) {
      var customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc9, _yield$ordering$setAc10, error, result;

      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context7.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context7.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = {
                product: {
                  id: product.id,
                  code: product.code,
                  business_id: product.business_id
                },
                business_id: cart.business_id,
                user_id: userCustomerId || session.user.id
              };
              _context7.next = 9;
              return ordering.setAccessToken(session.token).carts().removeProduct(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 9:
              _yield$ordering$setAc9 = _context7.sent;
              _yield$ordering$setAc10 = _yield$ordering$setAc9.content;
              error = _yield$ordering$setAc10.error;
              result = _yield$ordering$setAc10.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
                events.emit('cart_product_removed', product, result);
                events.emit('cart_updated', result);
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context7.abrupt("return", !error);

            case 18:
              _context7.prev = 18;
              _context7.t0 = _context7["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context7.abrupt("return", false);

            case 22:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 18]]);
    }));

    return function removeProduct(_x9, _x10) {
      return _ref8.apply(this, arguments);
    };
  }();
  /**
   * Clear products of cart
   */


  var clearCart = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(uuid) {
      var customerFromLocalStorage, userCustomerId, body, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context8.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context8.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = JSON.stringify({
                uuid: uuid,
                user_id: userCustomerId || session.user.id
              });
              _context8.next = 9;
              return fetch("".concat(ordering.root, "/carts/clear"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                  Authorization: "Bearer ".concat(session.token)
                },
                body: body
              });

            case 9:
              response = _context8.sent;
              _context8.next = 12;
              return response.json();

            case 12:
              _yield$response$json = _context8.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context8.abrupt("return", !error);

            case 20:
              _context8.prev = 20;
              _context8.t0 = _context8["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context8.abrupt("return", false);

            case 24:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 20]]);
    }));

    return function clearCart(_x11) {
      return _ref9.apply(this, arguments);
    };
  }();
  /**
   * Update product to cart
   */


  var updateProduct = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9(product, cart, isQuickAddProduct) {
      var customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc11, _yield$ordering$setAc12, error, result;

      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context9.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context9.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = {
                product: product,
                business_id: cart.business_id,
                user_id: userCustomerId || session.user.id
              };
              _context9.next = 9;
              return ordering.setAccessToken(session.token).carts().updateProduct(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 9:
              _yield$ordering$setAc11 = _context9.sent;
              _yield$ordering$setAc12 = _yield$ordering$setAc11.content;
              error = _yield$ordering$setAc12.error;
              result = _yield$ordering$setAc12.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
                events.emit('cart_product_updated', product, result);
                events.emit('cart_updated', result);
                isQuickAddProduct && showToast(_ToastContext.ToastType.Success, t('PRODUCT_UPDATED_NOTIFICATION', 'Product _PRODUCT_ updated succesfully').replace('_PRODUCT_', product.name));
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context9.abrupt("return", !error);

            case 18:
              _context9.prev = 18;
              _context9.t0 = _context9["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context9.abrupt("return", false);

            case 22:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[0, 18]]);
    }));

    return function updateProduct(_x12, _x13, _x14) {
      return _ref10.apply(this, arguments);
    };
  }();
  /**
   * Apply coupon to cart
   */


  var applyCoupon = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10(couponData, customParams) {
      var _state$carts$;

      var response, _result2, customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc13, content, result;

      return _regenerator.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (couponData.business_id) {
                _context10.next = 2;
                break;
              }

              throw new Error('`business_id` is required.');

            case 2:
              if (!(typeof couponData.coupon === 'undefined')) {
                _context10.next = 4;
                break;
              }

              throw new Error('`coupon` is required.');

            case 4:
              if (!(((_state$carts$ = state.carts["businessId:".concat(couponData.business_id)]) === null || _state$carts$ === void 0 ? void 0 : _state$carts$.coupon) === couponData.coupon)) {
                _context10.next = 6;
                break;
              }

              return _context10.abrupt("return");

            case 6:
              _context10.prev = 6;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));

              if (!(customParams && isAlsea)) {
                _context10.next = 19;
                break;
              }

              _context10.next = 11;
              return fetch('https://alsea-plugins.ordering.co/alseaplatform/vcoupon2.php', {
                method: 'POST',
                body: JSON.stringify({
                  userId: customParams.userId,
                  businessId: customParams.businessId,
                  couponId: couponData.coupon
                }),
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Access-Control-Allow-Origin': '*'
                }
              });

            case 11:
              response = _context10.sent;
              _context10.next = 14;
              return response.json();

            case 14:
              _result2 = _context10.sent;

              if (!(_result2.message !== "Cup\xF3n v\xE1lido")) {
                _context10.next = 19;
                break;
              }

              setAlert({
                show: true,
                content: _result2.message === 'Not found' ? ['ERROR_INVALID_COUPON'] : [_result2.message]
              });
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context10.abrupt("return");

            case 19:
              _context10.next = 21;
              return strategy.getItem('user-customer', true);

            case 21:
              customerFromLocalStorage = _context10.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = {
                business_id: couponData.business_id,
                coupon: couponData.coupon,
                user_id: userCustomerId || session.user.id
              };
              _context10.next = 26;
              return ordering.setAccessToken(session.token).carts().applyCoupon(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 26:
              _yield$ordering$setAc13 = _context10.sent;
              content = _yield$ordering$setAc13.content;
              result = content;

              if (!result.error) {
                state.carts["businessId:".concat(result.result.business_id)] = result.result;
                events.emit('cart_updated', result.result);
              } else {
                setAlert({
                  show: true,
                  content: result.result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context10.abrupt("return", !result.error);

            case 34:
              _context10.prev = 34;
              _context10.t0 = _context10["catch"](6);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context10.abrupt("return", false);

            case 38:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[6, 34]]);
    }));

    return function applyCoupon(_x15, _x16) {
      return _ref11.apply(this, arguments);
    };
  }();

  var applyOffer = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(offerData) {
      var _offerData$force, response, result;

      return _regenerator.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              if (offerData.business_id) {
                _context11.next = 2;
                break;
              }

              throw new Error('`business_id` is required.');

            case 2:
              if (!(typeof offerData.coupon === 'undefined')) {
                _context11.next = 4;
                break;
              }

              throw new Error('`coupon` is required.');

            case 4:
              _context11.prev = 4;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context11.next = 8;
              return fetch("".concat(ordering.root, "/carts/add_offer"), {
                method: 'POST',
                body: JSON.stringify({
                  user_id: offerData.userId,
                  business_id: offerData.business_id,
                  coupon: offerData.coupon,
                  force: (_offerData$force = offerData.force) !== null && _offerData$force !== void 0 ? _offerData$force : false
                }),
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                }
              });

            case 8:
              response = _context11.sent;
              _context11.next = 11;
              return response.json();

            case 11:
              result = _context11.sent;

              if (!result.error) {
                state.carts["businessId:".concat(result.result.business_id)] = result.result;
                events.emit('cart_updated', result.result);
              } else {
                setAlert({
                  show: true,
                  content: result.result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context11.abrupt("return", !result.error);

            case 17:
              _context11.prev = 17;
              _context11.t0 = _context11["catch"](4);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context11.abrupt("return", false);

            case 21:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[4, 17]]);
    }));

    return function applyOffer(_x17) {
      return _ref12.apply(this, arguments);
    };
  }();

  var removeOffer = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12(offerData) {
      var response, result;
      return _regenerator.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              if (offerData.business_id) {
                _context12.next = 2;
                break;
              }

              throw new Error('`business_id` is required.');

            case 2:
              if (!(typeof offerData.offer_id === 'undefined')) {
                _context12.next = 4;
                break;
              }

              throw new Error('`offer_id` is required.');

            case 4:
              _context12.prev = 4;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context12.next = 8;
              return fetch("".concat(ordering.root, "/carts/remove_offer"), {
                method: 'POST',
                body: JSON.stringify({
                  business_id: offerData.business_id,
                  offer_id: offerData.offer_id
                }),
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                }
              });

            case 8:
              response = _context12.sent;
              _context12.next = 11;
              return response.json();

            case 11:
              result = _context12.sent;

              if (!result.error) {
                state.carts["businessId:".concat(result.result.business_id)] = result.result;
                events.emit('cart_updated', result.result);
              } else {
                setAlert({
                  show: true,
                  content: result.result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context12.abrupt("return", !result.error);

            case 17:
              _context12.prev = 17;
              _context12.t0 = _context12["catch"](4);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context12.abrupt("return", false);

            case 21:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[4, 17]]);
    }));

    return function removeOffer(_x18) {
      return _ref13.apply(this, arguments);
    };
  }();
  /**
   * Apply coupon to cart
   */


  var changeDriverTip = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13(businessId) {
      var _state$carts$2;

      var driverTipRate,
          isFixedPrice,
          _body,
          customerFromLocalStorage,
          userCustomerId,
          body,
          _yield$ordering$setAc14,
          _yield$ordering$setAc15,
          error,
          result,
          _args13 = arguments;

      return _regenerator.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              driverTipRate = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : 0;
              isFixedPrice = _args13.length > 2 ? _args13[2] : undefined;

              if (businessId) {
                _context13.next = 4;
                break;
              }

              throw new Error('`businessId` is required.');

            case 4:
              if (!(!driverTipRate && driverTipRate !== 0)) {
                _context13.next = 6;
                break;
              }

              throw new Error('`driverTipRate` is required.');

            case 6:
              if (!(!state.carts["businessId:".concat(businessId)] || ((_state$carts$2 = state.carts["businessId:".concat(businessId)]) === null || _state$carts$2 === void 0 ? void 0 : _state$carts$2.driver_tip_rate) === driverTipRate)) {
                _context13.next = 8;
                break;
              }

              return _context13.abrupt("return");

            case 8:
              _context13.prev = 8;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context13.next = 12;
              return strategy.getItem('user-customer', true);

            case 12:
              customerFromLocalStorage = _context13.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = (_body = {
                business_id: businessId
              }, _defineProperty(_body, isFixedPrice ? 'driver_tip' : 'driver_tip_rate', driverTipRate), _defineProperty(_body, "user_id", userCustomerId || session.user.id), _body);
              _context13.next = 17;
              return ordering.setAccessToken(session.token).carts().changeDriverTip(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 17:
              _yield$ordering$setAc14 = _context13.sent;
              _yield$ordering$setAc15 = _yield$ordering$setAc14.content;
              error = _yield$ordering$setAc15.error;
              result = _yield$ordering$setAc15.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
                events.emit('cart_updated', result);
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context13.abrupt("return", !error);

            case 26:
              _context13.prev = 26;
              _context13.t0 = _context13["catch"](8);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context13.abrupt("return", false);

            case 30:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, null, [[8, 26]]);
    }));

    return function changeDriverTip(_x19) {
      return _ref14.apply(this, arguments);
    };
  }();
  /**
   * Change payment method
   */


  var changePaymethod = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14(businessId, paymethodId, paymethodData) {
      var _state$carts$3;

      var customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc16, _yield$ordering$setAc17, error, result;

      return _regenerator.default.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              if (businessId) {
                _context14.next = 2;
                break;
              }

              throw new Error('`businessId` is required.');

            case 2:
              if (paymethodId) {
                _context14.next = 4;
                break;
              }

              throw new Error('`paymethodId` is required.');

            case 4:
              if (paymethodData) {
                _context14.next = 6;
                break;
              }

              throw new Error('`paymethodData` is required.');

            case 6:
              if (!(!state.carts["businessId:".concat(businessId)] || ((_state$carts$3 = state.carts["businessId:".concat(businessId)]) === null || _state$carts$3 === void 0 ? void 0 : _state$carts$3.paymethodId) === paymethodId)) {
                _context14.next = 8;
                break;
              }

              return _context14.abrupt("return");

            case 8:
              _context14.prev = 8;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context14.next = 12;
              return strategy.getItem('user-customer', true);

            case 12:
              customerFromLocalStorage = _context14.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = {
                business_id: businessId,
                paymethod_id: paymethodId,
                paymethod_data: paymethodData,
                user_id: userCustomerId !== null && userCustomerId !== void 0 ? userCustomerId : session.user.id
              };
              _context14.next = 17;
              return ordering.setAccessToken(session.token).carts().changePaymethod(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 17:
              _yield$ordering$setAc16 = _context14.sent;
              _yield$ordering$setAc17 = _yield$ordering$setAc16.content;
              error = _yield$ordering$setAc17.error;
              result = _yield$ordering$setAc17.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
                events.emit('cart_updated', result);
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context14.abrupt("return", !error);

            case 26:
              _context14.prev = 26;
              _context14.t0 = _context14["catch"](8);
              return _context14.abrupt("return", false);

            case 29:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, null, [[8, 26]]);
    }));

    return function changePaymethod(_x20, _x21, _x22) {
      return _ref15.apply(this, arguments);
    };
  }();
  /**
   * Place cart
   */


  var placeCart = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(cardId, data) {
      var customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc18, _yield$ordering$setAc19, error, result, orderObject;

      return _regenerator.default.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context15.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context15.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = _objectSpread(_objectSpread({}, data), {}, {
                user_id: userCustomerId || session.user.id
              });
              _context15.next = 9;
              return ordering.setAccessToken(session.token).carts(cardId).place(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 9:
              _yield$ordering$setAc18 = _context15.sent;
              _yield$ordering$setAc19 = _yield$ordering$setAc18.content;
              error = _yield$ordering$setAc19.error;
              result = _yield$ordering$setAc19.result;

              if (error) {
                _context15.next = 17;
                break;
              }

              if (result.status !== 1) {
                state.carts["businessId:".concat(result.business_id)] = result;
                events.emit('cart_updated', result);
              } else {
                delete state.carts["businessId:".concat(result.business_id)];
                orderObject = {
                  id: result.order.uuid,
                  business: {
                    name: result.business.name
                  },
                  total: result.total,
                  tax_total: result.tax,
                  delivery_zone_price: result.delivery_price
                };
                events.emit('order_placed', orderObject);
              }

              _context15.next = 20;
              break;

            case 17:
              setAlert({
                show: true,
                content: result
              });
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context15.abrupt("return");

            case 20:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context15.abrupt("return", {
                error: error,
                result: result
              });

            case 24:
              _context15.prev = 24;
              _context15.t0 = _context15["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context15.abrupt("return", {
                error: true,
                result: [_context15.t0.message]
              });

            case 28:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, null, [[0, 24]]);
    }));

    return function placeCart(_x23, _x24) {
      return _ref16.apply(this, arguments);
    };
  }();
  /**
   * Confirm cart
   */


  var confirmCart = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(cardId, data) {
      var customerFromLocalStorage, userCustomerId, body, fetchurl, _fetchurl, _fetchurl$content, error, result, cart;

      return _regenerator.default.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context16.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context16.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              body = _objectSpread(_objectSpread({}, data), {}, {
                user_id: userCustomerId || session.user.id
              });

              if (!(body.user_id === userCustomerId)) {
                _context16.next = 13;
                break;
              }

              _context16.next = 10;
              return ordering.setAccessToken(session.token).carts(cardId).confirmWithData(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 10:
              fetchurl = _context16.sent;
              _context16.next = 16;
              break;

            case 13:
              _context16.next = 15;
              return ordering.setAccessToken(session.token).carts(cardId).confirm(body, {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              });

            case 15:
              fetchurl = _context16.sent;

            case 16:
              _fetchurl = fetchurl, _fetchurl$content = _fetchurl.content, error = _fetchurl$content.error, result = _fetchurl$content.result, cart = _fetchurl$content.cart;

              if (!error) {
                if (result.status !== 1) {
                  state.carts["businessId:".concat(result.business_id)] = result;
                  events.emit('cart_updated', result);
                } else {
                  delete state.carts["businessId:".concat(result.business_id)];
                }
              } else if (cart) {
                state.carts["businessId:".concat(cart.business_id)] = cart;
                events.emit('cart_updated', cart);
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context16.abrupt("return", {
                error: error,
                result: result
              });

            case 22:
              _context16.prev = 22;
              _context16.t0 = _context16["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context16.abrupt("return", {
                error: true,
                result: [_context16.t0.message]
              });

            case 26:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, null, [[0, 22]]);
    }));

    return function confirmCart(_x25, _x26) {
      return _ref17.apply(this, arguments);
    };
  }();
  /**
   * Reorder an order and get cart
   */


  var reorder = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(orderId) {
      var customerFromLocalStorage, userCustomerId, query, options, _yield$ordering$setAc20, _yield$ordering$setAc21, error, result;

      return _regenerator.default.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context17.next = 4;
              return strategy.getItem('user-customer', true);

            case 4:
              customerFromLocalStorage = _context17.sent;
              userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
              query = userCustomerId ? {
                user_id: userCustomerId
              } : null;
              options = {
                headers: {
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              };

              if (query) {
                options.query = query;
              }

              _context17.next = 11;
              return ordering.setAccessToken(session.token).orders(orderId).reorder(options);

            case 11:
              _yield$ordering$setAc20 = _context17.sent;
              _yield$ordering$setAc21 = _yield$ordering$setAc20.content;
              error = _yield$ordering$setAc21.error;
              result = _yield$ordering$setAc21.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
                events.emit('cart_added', result);
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context17.abrupt("return", {
                error: error,
                result: result
              });

            case 20:
              _context17.prev = 20;
              _context17.t0 = _context17["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context17.abrupt("return", {
                error: true,
                result: [_context17.t0.message]
              });

            case 24:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, null, [[0, 20]]);
    }));

    return function reorder(_x27) {
      return _ref18.apply(this, arguments);
    };
  }();

  var setOptionFromLocalStorage = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18() {
      var _configState$configs4, _configState$configs5, _state$options7;

      var optionsLocalStorage;
      return _regenerator.default.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _context18.next = 2;
              return strategy.getItem('options', true);

            case 2:
              optionsLocalStorage = _context18.sent;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false,
                options: isDisabledDefaultOpts ? {
                  type: null,
                  moment: null
                } : {
                  type: (optionsLocalStorage === null || optionsLocalStorage === void 0 ? void 0 : optionsLocalStorage.type) || orderTypes[configState === null || configState === void 0 ? void 0 : (_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 ? void 0 : (_configState$configs5 = _configState$configs4.default_order_type) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.value],
                  moment: (optionsLocalStorage === null || optionsLocalStorage === void 0 ? void 0 : optionsLocalStorage.moment) || null,
                  address: (optionsLocalStorage === null || optionsLocalStorage === void 0 ? void 0 : optionsLocalStorage.address) || (state === null || state === void 0 ? void 0 : (_state$options7 = state.options) === null || _state$options7 === void 0 ? void 0 : _state$options7.address) || {}
                }
              }));

            case 4:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18);
    }));

    return function setOptionFromLocalStorage() {
      return _ref19.apply(this, arguments);
    };
  }();

  var setStateValues = function setStateValues(values) {
    setState(_objectSpread(_objectSpread({}, state), values));
  };

  var setUserCustomerOptions = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(params) {
      var _params$options, _params$customer;

      var options;
      return _regenerator.default.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              options = (_params$options = params.options) !== null && _params$options !== void 0 ? _params$options : {};
              _context19.next = 4;
              return setUserCustomer((_params$customer = params.customer) !== null && _params$customer !== void 0 ? _params$customer : {}, true);

            case 4:
              _context19.next = 6;
              return updateOrderOptions(options);

            case 6:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));

            case 7:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    }));

    return function setUserCustomerOptions(_x28) {
      return _ref20.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (session.loading || languageState.loading) return;

    if (session.auth) {
      refreshOrderOptions();
    }
  }, [session.auth, session.loading, languageState.loading]);
  (0, _react.useEffect)(function () {
    if (session.loading || configState.loading) return;

    if (!session.auth) {
      setOptionFromLocalStorage();
    }
  }, [session.auth, session.loading, configState]);
  (0, _react.useEffect)(function () {
    if ((configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0 && state.options.type && !configTypes.includes(state.options.type)) {
      var _configState$configs6, _configState$configs7, _configState$configs8, _configState$configs9;

      var validDefaultValue = configTypes.includes(configState === null || configState === void 0 ? void 0 : (_configState$configs6 = configState.configs) === null || _configState$configs6 === void 0 ? void 0 : (_configState$configs7 = _configState$configs6.default_order_type) === null || _configState$configs7 === void 0 ? void 0 : _configState$configs7.type);
      updateOrderOptions(validDefaultValue ? {
        type: configState === null || configState === void 0 ? void 0 : (_configState$configs8 = configState.configs) === null || _configState$configs8 === void 0 ? void 0 : (_configState$configs9 = _configState$configs8.default_order_type) === null || _configState$configs9 === void 0 ? void 0 : _configState$configs9.type
      } : {
        type: configTypes[0]
      });
      setAlert({
        show: true,
        title: t('INFORMATION', 'Information'),
        content: t('ORDER_TYPE_CHANGED', 'the order type config has changed')
      });
    }
  }, [configTypes === null || configTypes === void 0 ? void 0 : configTypes.length, state.options.type]);
  /**
   * Update carts from sockets
   */

  (0, _react.useEffect)(function () {
    var handleCartUpdate = function handleCartUpdate(cart) {
      if (!isDisableToast) {
        showToast(_ToastContext.ToastType.Info, t('UPDATING_CART_INFO', 'Updating cart information...'));
      }

      if (cart.status === 1) {
        if (state.carts["businessId:".concat(cart.business_id)]) {
          delete state.carts["businessId:".concat(cart.business_id)];
        }
      } else {
        var cartFinded = Object.values(state.carts).find(function (_cart) {
          return (_cart === null || _cart === void 0 ? void 0 : _cart.uuid) === (cart === null || cart === void 0 ? void 0 : cart.uuid);
        });
        var oldBusinessId = cartFinded === null || cartFinded === void 0 ? void 0 : cartFinded.business_id;
        var newBusinessId = cart === null || cart === void 0 ? void 0 : cart.business_id;

        if (!oldBusinessId || oldBusinessId === newBusinessId) {
          state.carts["businessId:".concat(cart.business_id)] = _objectSpread(_objectSpread({}, state.carts["businessId:".concat(cart.business_id)]), cart);
        } else {
          delete state.carts["businessId:".concat(oldBusinessId)];
          state.carts["businessId:".concat(newBusinessId)] = cart;
        }
      }

      setState(_objectSpread(_objectSpread({}, state), {}, {
        loading: false
      }));
    };

    var handleOrderOptionUpdate = function handleOrderOptionUpdate(_ref21) {
      var carts = _ref21.carts,
          options = _objectWithoutProperties(_ref21, _excluded3);

      if (!isDisableToast) {
        showToast(_ToastContext.ToastType.Info, t('UPDATING_ORDER_OPTIONS', 'Updating order options...'));
      }

      var newCarts = {};
      carts.forEach(function (cart) {
        newCarts["businessId:".concat(cart.business_id)] = cart;
      });

      var newState = _objectSpread(_objectSpread({}, state), {}, {
        options: _objectSpread(_objectSpread({}, state.options), options),
        carts: _objectSpread(_objectSpread({}, state.carts), newCarts)
      });

      setState(_objectSpread(_objectSpread({}, newState), {}, {
        loading: false
      }));
    };

    socket.on('carts_update', handleCartUpdate);
    socket.on('order_options_update', handleOrderOptionUpdate);
    return function () {
      socket.off('carts_update', handleCartUpdate);
      socket.off('order_options_update', handleOrderOptionUpdate);
    };
  }, [state, socket]);
  /**
   * Join to carts room
   */

  (0, _react.useEffect)(function () {
    var _customerState$user, _session$user, _customerState$user2, _session$user2;

    if (!session.auth || session.loading) return;
    socket.join("carts_".concat((customerState === null || customerState === void 0 ? void 0 : (_customerState$user = customerState.user) === null || _customerState$user === void 0 ? void 0 : _customerState$user.id) || (session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.id)));
    socket.join("orderoptions_".concat((customerState === null || customerState === void 0 ? void 0 : (_customerState$user2 = customerState.user) === null || _customerState$user2 === void 0 ? void 0 : _customerState$user2.id) || (session === null || session === void 0 ? void 0 : (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.id)));
    return function () {
      var _customerState$user3, _session$user3, _customerState$user4, _session$user4;

      socket.leave("carts_".concat((customerState === null || customerState === void 0 ? void 0 : (_customerState$user3 = customerState.user) === null || _customerState$user3 === void 0 ? void 0 : _customerState$user3.id) || (session === null || session === void 0 ? void 0 : (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id)));
      socket.leave("orderoptions_".concat((customerState === null || customerState === void 0 ? void 0 : (_customerState$user4 = customerState.user) === null || _customerState$user4 === void 0 ? void 0 : _customerState$user4.id) || (session === null || session === void 0 ? void 0 : (_session$user4 = session.user) === null || _session$user4 === void 0 ? void 0 : _session$user4.id)));
    };
  }, [socket, session, customerState === null || customerState === void 0 ? void 0 : (_customerState$user5 = customerState.user) === null || _customerState$user5 === void 0 ? void 0 : _customerState$user5.id]);
  var functions = {
    refreshOrderOptions: refreshOrderOptions,
    changeAddress: changeAddress,
    changeType: changeType,
    changeMoment: changeMoment,
    addProduct: addProduct,
    removeProduct: removeProduct,
    updateProduct: updateProduct,
    clearCart: clearCart,
    applyCoupon: applyCoupon,
    applyOffer: applyOffer,
    removeOffer: removeOffer,
    changeDriverTip: changeDriverTip,
    placeCart: placeCart,
    confirmCart: confirmCart,
    reorder: reorder,
    setAlert: setAlert,
    setConfirm: setConfirm,
    changePaymethod: changePaymethod,
    setUserCustomerOptions: setUserCustomerOptions,
    setStateValues: setStateValues
  };
  var copyState = JSON.parse(JSON.stringify(state));
  return /*#__PURE__*/_react.default.createElement(OrderContext.Provider, {
    value: [copyState, functions]
  }, Alert && /*#__PURE__*/_react.default.createElement(Alert, {
    open: alert.show,
    title: alert.title || t('ERROR', 'Error'),
    onAccept: function onAccept() {
      return setAlert({
        show: false
      });
    },
    onClose: function onClose() {
      return setAlert({
        show: false
      });
    },
    content: alert.content
  }), children);
};
/**
 * Hook to get and update order state
 */


exports.OrderProvider = OrderProvider;

var useOrder = function useOrder() {
  var orderManager = (0, _react.useContext)(OrderContext);

  var warningMessage = function warningMessage() {
    console.warn('Must use OrderProvider to wrappe the app.');
  };
  /**
   * Functions to avoid fails
   */


  var functionsPlaceholders = {
    refreshOrderOptions: warningMessage,
    changeAddress: warningMessage,
    changeType: warningMessage,
    changeMoment: warningMessage,
    addProduct: warningMessage,
    removeProduct: warningMessage,
    updateProduct: warningMessage,
    clearCart: warningMessage,
    applyCoupon: warningMessage,
    placeCart: warningMessage,
    confirmCart: warningMessage,
    setAlert: warningMessage,
    setConfirm: warningMessage,
    changeDriverTip: warningMessage,
    reorder: warningMessage,
    changePaymethod: warningMessage,
    setStateValues: warningMessage
  };
  return orderManager || [{}, functionsPlaceholders];
};

exports.useOrder = useOrder;