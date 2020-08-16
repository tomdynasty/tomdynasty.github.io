import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
// import { meters2ScreenPixels } from 'google-map-react/utils';
import Marker from './Marker';

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 25.075321,
        lng: 121.365495,
      },
    };
  }

  render() {
    const { locations, zoom } = this.props;
    const { center } = this.state;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={center}
          zoom={zoom}
        >
          {
            locations.map((geometry, index) => (
              <Marker
                key={index}
                location={geometry.coordinates}
              />
            ))
          }
        </GoogleMapReact>
      </div>
    );
  }
}

SimpleMap.propTypes = {
  locations: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default SimpleMap;
