// import { REQUEST_APPS,  RECEIVE_APPS } from './actions';
function apps(state = {
  isFetching: false,
  apps: [],
  name: 'TKizzle',
  type: 'bundle'
}, action) {
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
