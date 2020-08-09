import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Marker extends Component {
  render() {
    const { location } = this.props;
    return (
      <div
        className="marker"
        lat={location[1]}
        lng={location[0]}
      />
    );
  }
}

Marker.propTypes = {
  location: PropTypes.array.isRequired,
};

export default Marker;
