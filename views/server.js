"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _Root = require("./App/Root");

function render(initialState) {
  // Model the initial state
  var _server = (0, _Root.server)(initialState),
      content = _server.content,
      preloadedState = _server.preloadedState;

  return {
    content: content,
    preloadedState: preloadedState
  };
}

;