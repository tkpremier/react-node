import { connect } from 'react-redux';
import App from './App';
import { receiveApps } from './actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {
  receiveApps
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
