import { connect } from 'react-redux';
import App from './App';
import { receiveApps, requestDrive } from './actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {
  receiveApps,
  requestDrive
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
