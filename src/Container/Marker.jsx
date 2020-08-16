import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Marker extends Component {
  render() {
    return (
      <div
        className="marker"
      />
    );
  }
}

Marker.propTypes = {
  location: PropTypes.array.isRequired,
};

export default Marker;
