import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class App extends PureComponent {
  componentDidMount() {
    console.log('compDidMount');
    this.props.requestDrive();
  }

  render() {
    const { isFetching, name, type } = this.props;
    return (
      <h1>
        {isFetching
          ? 'Fetching....'
          : `Here lies ${name}, the MFC King, born of ${type}.`
        }
        <button
          type="button"
        >
          Click me!
        </button>
      </h1>
    );
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default App;
