"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = exports.bundle = exports.client = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _store = _interopRequireDefault(require("./store"));

var _App = _interopRequireDefault(require("./App.container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var server = function server(initialState) {
  var store = (0, _store.default)(initialState);
  var content = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_App.default, null)));
  var preloadedState = store.getState();
  return {
    content: content,
    preloadedState: preloadedState
  };
};

exports.server = server;

var bundle = function bundle() {
  var store = (0, _store.default)();
  (0, _reactDom.render)(_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_App.default, null)), document.querySelector('#app'));
};

exports.bundle = bundle;

var client = function client(state) {
  var store = (0, _store.default)(_objectSpread({}, state, {
    isFetching: false,
    type: 'client'
  }));
  (0, _reactDom.hydrate)(_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_App.default, null)), document.querySelector('#app'));
};

exports.client = client;