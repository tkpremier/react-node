"use strict";

// import { REQUEST_APPS,  RECEIVE_APPS } from './actions';
function apps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false,
    apps: [],
    name: 'TKizzle',
    type: 'bundle'
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_APPS':
      return Object.assign({}, state, {
        isFetching: true,
        name: 'Tommy'
      });

    case 'RECEIVE_APPS':
      return Object.assign({}, state, {
        isFetching: false,
        name: 'Tommy'
      });

    default:
      return state;
  }
}

module.exports = apps;