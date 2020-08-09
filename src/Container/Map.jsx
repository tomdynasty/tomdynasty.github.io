import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import { meters2ScreenPixels } from 'google-map-react/utils';
import Marker from './Marker';
import PropTypes from 'prop-types';

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 25.075321,
        lng: 121.365495,
      },
      zoom: 11,
      // data: [],
    };
  }

  render() {
    const { locations } = this.props;
    const { center } = this.state;
    const { zoom } = this.state;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
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
  handleSearchByName: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};

export default SimpleMap;
