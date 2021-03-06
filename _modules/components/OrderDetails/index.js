"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _WebsocketContext = require("../../contexts/WebsocketContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

var _EventContext = require("../../contexts/EventContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

var OrderDetails = function OrderDetails(props) {
  var _props$order, _props$order2, _props$order2$driver, _orderState$order, _orderState$order$dri, _orderState$order9, _orderState$order13;

  var orderId = props.orderId,
      hashKey = props.hashKey,
      UIComponent = props.UIComponent,
      userCustomerId = props.userCustomerId,
      isFetchDrivers = props.isFetchDrivers,
      driverAndBusinessId = props.driverAndBusinessId,
      sendCustomMessage = props.sendCustomMessage,
      isDisabledOrdersRoom = props.isDisabledOrdersRoom;

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      user = _useSession2$.user,
      token = _useSession2$.token,
      loading = _useSession2$.loading;

  var accessToken = props.accessToken || token;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useEvent = (0, _EventContext.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useState = (0, _react.useState)({
    order: (_props$order = props.order) !== null && _props$order !== void 0 ? _props$order : null,
    businessData: {},
    loading: !props.order,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      orderState = _useState2[0],
      setOrderState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    drivers: [],
    loadingDriver: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      drivers = _useState4[0],
      setDrivers = _useState4[1];

  var _useState5 = (0, _react.useState)({
    status: null,
    loading: false,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      messageErrors = _useState6[0],
      setMessageErrors = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: true,
    error: null,
    messages: []
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      messages = _useState8[0],
      setMessages = _useState8[1];

  var socket = (0, _WebsocketContext.useWebsocket)();

  var _useState9 = (0, _react.useState)(((_props$order2 = props.order) === null || _props$order2 === void 0 ? void 0 : (_props$order2$driver = _props$order2.driver) === null || _props$order2$driver === void 0 ? void 0 : _props$order2$driver.location) || ((_orderState$order = orderState.order) === null || _orderState$order === void 0 ? void 0 : (_orderState$order$dri = _orderState$order.driver) === null || _orderState$order$dri === void 0 ? void 0 : _orderState$order$dri.location) || null),
      _useState10 = _slicedToArray(_useState9, 2),
      driverLocation = _useState10[0],
      setDriverLocation = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      messagesReadList = _useState12[0],
      setMessagesReadList = _useState12[1];

  var _useState13 = (0, _react.useState)({
    loading: false,
    error: null,
    newLocation: null
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      driverUpdateLocation = _useState14[0],
      setDriverUpdateLocation = _useState14[1];

  var _useState15 = (0, _react.useState)(null),
      _useState16 = _slicedToArray(_useState15, 2),
      forceUpdate = _useState16[0],
      setForceUpdate = _useState16[1];

  var propsToFetch = ['header', 'slug'];
  var deliveryMessages = {
    delivery: {
      text: 'outside delivery area, insert reasons to force update',
      value: 11
    },
    pickup: {
      text: 'outside pickup area, insert reasons to force update',
      value: 9
    }
  };
  var requestsState = {};
  /**
   * Method to format a price number
   * @param {Number} price
   */

  var formatPrice = function formatPrice(price) {
    return price && "$ ".concat(price.toFixed(2));
  };
  /**
   * Method to Load message for first time
   */


  var loadMessages = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _orderState$order2, _orderState$order3, url, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: true
              }));
              url = userCustomerId || driverAndBusinessId ? "".concat(ordering.root, "/orders/").concat((_orderState$order2 = orderState.order) === null || _orderState$order2 === void 0 ? void 0 : _orderState$order2.id, "/messages?mode=dashboard") : "".concat(ordering.root, "/orders/").concat((_orderState$order3 = orderState.order) === null || _orderState$order3 === void 0 ? void 0 : _orderState$order3.id, "/messages");
              _context.next = 5;
              return fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(accessToken)
                }
              });

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                setMessages({
                  messages: result,
                  loading: false,
                  error: null
                });
              } else {
                setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: false,
                error: [_context.t0.Messages]
              }));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function loadMessages() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to send a message
   * @param {string} spot
   */


  var sendMessage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(spot) {
      var _orderState$order4, _orderState$order5, _yield$fetch, status;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!sendCustomMessage) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", sendCustomMessage(spot));

            case 2:
              _context2.prev = 2;
              setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
                loading: true
              }));
              _context2.next = 6;
              return fetch("".concat(ordering.root, "/orders/").concat((_orderState$order4 = orderState.order) === null || _orderState$order4 === void 0 ? void 0 : _orderState$order4.id, "/messages"), {
                method: 'post',
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  can_see: '0,2,3',
                  comment: "I am on the parking number: ".concat(spot),
                  order_id: (_orderState$order5 = orderState.order) === null || _orderState$order5 === void 0 ? void 0 : _orderState$order5.id,
                  type: 2
                })
              });

            case 6:
              _yield$fetch = _context2.sent;
              status = _yield$fetch.status;
              setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
                loading: false,
                status: status
              }));
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](2);
              setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 11]]);
    }));

    return function sendMessage(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to update differents orders status
  */


  var handleChangeOrderStatus = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(status) {
      var isAcceptOrReject,
          _orderState$order$id,
          _orderState$order6,
          bodyToSend,
          _yield$ordering$setAc,
          _yield$ordering$setAc2,
          result,
          error,
          selected,
          message,
          defaultMessage,
          _args3 = arguments;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              isAcceptOrReject = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
              _context3.prev = 1;
              bodyToSend = Object.keys(isAcceptOrReject || {}).length > 0 ? isAcceptOrReject : {
                status: status
              };
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: true
              }));
              _context3.next = 6;
              return ordering.setAccessToken(token).orders((_orderState$order$id = (_orderState$order6 = orderState.order) === null || _orderState$order6 === void 0 ? void 0 : _orderState$order6.id) !== null && _orderState$order$id !== void 0 ? _orderState$order$id : orderId).save(bodyToSend);

            case 6:
              _yield$ordering$setAc = _context3.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              result = _yield$ordering$setAc2.result;
              error = _yield$ordering$setAc2.error;

              if (!error) {
                setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                  order: result,
                  loading: false
                }));
              }

              if (error) {
                selected = result.includes(deliveryMessages.delivery.text) ? deliveryMessages.delivery : result.includes(deliveryMessages.pickup.text) ? deliveryMessages.pickup : null;

                if (selected) {
                  setForceUpdate(null);
                  setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                    loading: false
                  }));
                  setForceUpdate(selected.value);
                } else {
                  message = Array.isArray(result) ? result[0] : typeof result === 'string' ? result : 'INTERNAL_ERROR';
                  defaultMessage = message !== 'INTERNAL_ERROR' ? message : t('INTERNAL_ERROR', 'Internal Error');
                  setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                    error: [defaultMessage],
                    loading: false
                  }));
                }
              }

              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](1);
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: false,
                error: [(_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) || t('NETWORK_ERROR', 'Network Error')]
              }));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 14]]);
    }));

    return function handleChangeOrderStatus(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var updateDriverPosition = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var newLocation,
          _yield$ordering$setAc3,
          _yield$ordering$setAc4,
          error,
          result,
          _args4 = arguments;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              newLocation = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
              _context4.prev = 1;
              setDriverLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
                loading: true
              }));
              _context4.next = 5;
              return ordering.setAccessToken(token).users(user === null || user === void 0 ? void 0 : user.id).driverLocations().save(newLocation);

            case 5:
              _yield$ordering$setAc3 = _context4.sent;
              _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
              error = _yield$ordering$setAc4.error;
              result = _yield$ordering$setAc4.result;

              if (error) {
                setDriverUpdateLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
                  loading: false,
                  error: [result[0] || result || t('ERROR_UPDATING_POSITION', 'Error updating position')]
                }));
              } else {
                setDriverUpdateLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
                  loading: false,
                  newLocation: _objectSpread(_objectSpread({}, newLocation), result)
                }));
              }

              _context4.next = 15;
              break;

            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](1);
              setDriverUpdateLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
                loading: false,
                error: [(_context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message) || t('NETWORK_ERROR', 'Network Error')]
              }));

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 12]]);
    }));

    return function updateDriverPosition() {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
     * Method to assign a driver for order
  */


  var handleAssignDriver = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(driverId) {
      var _orderState$order$id2, _orderState$order7, bodyToSend, _yield$ordering$setAc5, _yield$ordering$setAc6, error, result, _drivers$error;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              bodyToSend = {
                driver_id: driverId
              };
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: true
              }));
              _context5.next = 5;
              return ordering.setAccessToken(token).orders((_orderState$order$id2 = orderState === null || orderState === void 0 ? void 0 : (_orderState$order7 = orderState.order) === null || _orderState$order7 === void 0 ? void 0 : _orderState$order7.id) !== null && _orderState$order$id2 !== void 0 ? _orderState$order$id2 : orderId).save(bodyToSend);

            case 5:
              _yield$ordering$setAc5 = _context5.sent;
              _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
              error = _yield$ordering$setAc6.error;
              result = _yield$ordering$setAc6.result;
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: false,
                order: result,
                error: error ? result : null
              }));
              _context5.next = 15;
              break;

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](0);
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: false,
                error: _context5.t0 !== null && _context5.t0 !== void 0 && _context5.t0.message ? (_drivers$error = drivers.error) === null || _drivers$error === void 0 ? void 0 : _drivers$error.push(_context5.t0 === null || _context5.t0 === void 0 ? void 0 : _context5.t0.message) : ['ERROR']
              }));

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 12]]);
    }));

    return function handleAssignDriver(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * handler send message with spot info
   * @param {number} param0
   */


  var handlerSubmitSpotNumber = function handlerSubmitSpotNumber(_ref6) {
    var spot = _ref6.spot;
    sendMessage(spot);
  };
  /**
   * Method to get order from API
   */


  var getOrder = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var source, options, _yield$ordering$setAc7, _yield$ordering$setAc8, error, result, order, err, businessData, _yield$ordering$setAc9, content, _order$id, _orderState$error;

      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              source = {};
              requestsState.order = source;
              requestsState.business = source;
              options = {};

              if (hashKey) {
                options.headers = {
                  'X-uuid-access-X': hashKey
                };
              }

              if (userCustomerId || driverAndBusinessId) {
                options.query = {
                  mode: 'dashboard'
                };
              }

              _context6.prev = 6;
              _context6.next = 9;
              return ordering.setAccessToken(token).orders(orderId).get(_objectSpread(_objectSpread({}, options), {}, {
                cancelToken: source
              }));

            case 9:
              _yield$ordering$setAc7 = _context6.sent;
              _yield$ordering$setAc8 = _yield$ordering$setAc7.content;
              error = _yield$ordering$setAc8.error;
              result = _yield$ordering$setAc8.result;
              order = error ? null : result;
              err = error ? result : null;
              businessData = null;
              _context6.prev = 16;
              _context6.next = 19;
              return ordering.setAccessToken(token).businesses(order.business_id).select(propsToFetch).get({
                cancelToken: source
              });

            case 19:
              _yield$ordering$setAc9 = _context6.sent;
              content = _yield$ordering$setAc9.content;
              businessData = content.result;
              content.error && err.push(content.result[0]);
              _context6.next = 28;
              break;

            case 25:
              _context6.prev = 25;
              _context6.t0 = _context6["catch"](16);
              err.push(_context6.t0.message);

            case 28:
              if (isFetchDrivers) {
                getDrivers((_order$id = order === null || order === void 0 ? void 0 : order.id) !== null && _order$id !== void 0 ? _order$id : orderId);
              }

              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: false,
                order: order,
                businessData: businessData,
                error: err
              }));
              _context6.next = 35;
              break;

            case 32:
              _context6.prev = 32;
              _context6.t1 = _context6["catch"](6);
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: false,
                error: _context6.t1.message ? (_orderState$error = orderState.error) === null || _orderState$error === void 0 ? void 0 : _orderState$error.push(_context6.t1 === null || _context6.t1 === void 0 ? void 0 : _context6.t1.message) : ['ERROR']
              }));

            case 35:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[6, 32], [16, 25]]);
    }));

    return function getOrder() {
      return _ref7.apply(this, arguments);
    };
  }();

  var readMessages = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
      var _messages$messages, _messages$messages2;

      var messageId, _orderState$order8, response, _yield$response$json2, result;

      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              messageId = messages === null || messages === void 0 ? void 0 : (_messages$messages = messages.messages[(messages === null || messages === void 0 ? void 0 : (_messages$messages2 = messages.messages) === null || _messages$messages2 === void 0 ? void 0 : _messages$messages2.length) - 1]) === null || _messages$messages === void 0 ? void 0 : _messages$messages.id;

              if (messageId) {
                _context7.next = 3;
                break;
              }

              return _context7.abrupt("return");

            case 3:
              _context7.prev = 3;
              _context7.next = 6;
              return fetch("".concat(ordering.root, "/orders/").concat((_orderState$order8 = orderState.order) === null || _orderState$order8 === void 0 ? void 0 : _orderState$order8.id, "/messages/").concat(messageId, "/read"), {
                method: 'GET',
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'Content-Type': 'application/json'
                }
              });

            case 6:
              response = _context7.sent;
              _context7.next = 9;
              return response.json();

            case 9:
              _yield$response$json2 = _context7.sent;
              result = _yield$response$json2.result;
              setMessagesReadList(result);
              _context7.next = 17;
              break;

            case 14:
              _context7.prev = 14;
              _context7.t0 = _context7["catch"](3);
              console.log(_context7.t0.message);

            case 17:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[3, 14]]);
    }));

    return function readMessages() {
      return _ref8.apply(this, arguments);
    };
  }();

  var getDrivers = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(orderId) {
      var _yield$ordering$setAc10, _yield$ordering$setAc11, error, result, _drivers$error2;

      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
                loadingDriver: true
              }));
              _context8.next = 4;
              return ordering.setAccessToken(token).controls(orderId).get();

            case 4:
              _yield$ordering$setAc10 = _context8.sent;
              _yield$ordering$setAc11 = _yield$ordering$setAc10.content;
              error = _yield$ordering$setAc11.error;
              result = _yield$ordering$setAc11.result;
              setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
                loadingDriver: false,
                drivers: result.drivers,
                error: error ? result : null
              }));
              _context8.next = 14;
              break;

            case 11:
              _context8.prev = 11;
              _context8.t0 = _context8["catch"](0);
              setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
                loadingDriver: false,
                error: _context8.t0 !== null && _context8.t0 !== void 0 && _context8.t0.message ? (_drivers$error2 = drivers.error) === null || _drivers$error2 === void 0 ? void 0 : _drivers$error2.push(_context8.t0 === null || _context8.t0 === void 0 ? void 0 : _context8.t0.message) : ['ERROR']
              }));

            case 14:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 11]]);
    }));

    return function getDrivers(_x4) {
      return _ref9.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    !orderState.loading && loadMessages();
  }, [orderId, orderState === null || orderState === void 0 ? void 0 : (_orderState$order9 = orderState.order) === null || _orderState$order9 === void 0 ? void 0 : _orderState$order9.status, orderState.loading]);
  (0, _react.useEffect)(function () {
    if (props.order) {
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        loading: false,
        order: props.order
      }));

      if (isFetchDrivers) {
        var _props$order$id, _props$order3;

        getDrivers((_props$order$id = (_props$order3 = props.order) === null || _props$order3 === void 0 ? void 0 : _props$order3.id) !== null && _props$order$id !== void 0 ? _props$order$id : orderId);
      }
    } else {
      getOrder();
    }

    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }

      if (requestsState.business) {
        requestsState.business.cancel();
      }
    };
  }, [props.order]);
  (0, _react.useEffect)(function () {
    var _orderState$order11;

    if (orderState.loading || loading) return;

    var handleUpdateOrder = function handleUpdateOrder(order) {
      var _orderState$order10;

      if ((order === null || order === void 0 ? void 0 : order.id) !== ((_orderState$order10 = orderState.order) === null || _orderState$order10 === void 0 ? void 0 : _orderState$order10.id)) return;
      showToast(_ToastContext.ToastType.Info, t('UPDATING_ORDER', 'Updating order...'), 1000);
      delete order.total;
      delete order.subtotal;
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: Object.assign(orderState.order, order)
      })); // loadMessages()
    };

    var handleTrackingDriver = function handleTrackingDriver(_ref10) {
      var location = _ref10.location;
      var newLocation = location !== null && location !== void 0 ? location : {
        lat: -37.9722342,
        lng: 144.7729561
      };
      setDriverLocation(newLocation);
    };

    var ordersRoom = (user === null || user === void 0 ? void 0 : user.level) === 0 ? 'orders' : "orders_".concat(userCustomerId || (user === null || user === void 0 ? void 0 : user.id));
    if (!isDisabledOrdersRoom) socket.join(ordersRoom);
    socket.join("drivers_".concat((_orderState$order11 = orderState.order) === null || _orderState$order11 === void 0 ? void 0 : _orderState$order11.driver_id));
    socket.on('tracking_driver', handleTrackingDriver);
    socket.on('update_order', handleUpdateOrder);
    return function () {
      var _orderState$order12;

      if (!isDisabledOrdersRoom) socket.leave(ordersRoom);
      socket.leave("drivers_".concat((_orderState$order12 = orderState.order) === null || _orderState$order12 === void 0 ? void 0 : _orderState$order12.driver_id));
      socket.off('update_order', handleUpdateOrder);
      socket.off('tracking_driver', handleTrackingDriver);
    };
  }, [orderState.order, socket, loading, userCustomerId]);
  (0, _react.useEffect)(function () {
    if (messages.loading) return;

    var handleNewMessage = function handleNewMessage(message) {
      var found = messages.messages.find(function (_message) {
        return _message.id === message.id;
      });

      if (!found) {
        setMessages(_objectSpread(_objectSpread({}, messages), {}, {
          messages: [].concat(_toConsumableArray(messages.messages), [message])
        }));
      }
    };

    socket.on('message', handleNewMessage);
    return function () {
      socket.off('message', handleNewMessage);
    };
  }, [messages, socket, (_orderState$order13 = orderState.order) === null || _orderState$order13 === void 0 ? void 0 : _orderState$order13.status, userCustomerId]);
  (0, _react.useEffect)(function () {
    var messagesOrdersRoom = (user === null || user === void 0 ? void 0 : user.level) === 0 ? 'messages_orders' : "messages_orders_".concat(userCustomerId || (user === null || user === void 0 ? void 0 : user.id));
    socket.join(messagesOrdersRoom);
    return function () {
      // neccesary refactor
      if (!isDisabledOrdersRoom) socket.leave(messagesOrdersRoom);
    };
  }, [socket, userCustomerId]);
  (0, _react.useEffect)(function () {
    var handleCustomerReviewed = function handleCustomerReviewed(review) {
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: _objectSpread(_objectSpread({}, orderState.order), {}, {
          user_review: review
        })
      }));
    };

    events.on('customer_reviewed', handleCustomerReviewed);
    return function () {
      events.off('customer_reviewed', handleCustomerReviewed);
    };
  }, [orderState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    order: orderState,
    updateDriverPosition: updateDriverPosition,
    driverLocation: driverLocation,
    messageErrors: messageErrors,
    formatPrice: formatPrice,
    handleAssignDriver: handleAssignDriver,
    handlerSubmit: handlerSubmitSpotNumber,
    handleChangeOrderStatus: handleChangeOrderStatus,
    messages: messages,
    drivers: drivers,
    setMessages: setMessages,
    readMessages: readMessages,
    messagesReadList: messagesReadList,
    driverUpdateLocation: driverUpdateLocation,
    setDriverUpdateLocation: setDriverUpdateLocation,
    forceUpdate: forceUpdate
  })));
};

exports.OrderDetails = OrderDetails;
OrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * This must be contains orderId to fetch
   */
  orderId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * Order, this must be contains an object with all order info
   */
  order: _propTypes.default.object,

  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after order details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
OrderDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};