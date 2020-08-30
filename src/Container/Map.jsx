import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
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

  componentDidMount() {
    const { locations } = this.props;
    this.setState({
      center: {
        lat: locations[1],
        lng: locations[0],
      },
    });
  }

  render() {
    const { locations, zoom } = this.props;
    let defaultCenter = {
      lat: 25.075321,
      lng: 121.365495,
    };
    if (locations.length !== 0 && defaultCenter.lat !== locations[0][1] && defaultCenter.lng !== locations[0][0]) {
      defaultCenter = {
        lat: locations[0][1],
        lng: locations[0][0],
      };
    }
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={defaultCenter}
          center={defaultCenter}
          zoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => { this.props.setGoogleMaps(map, maps); }}
        >
          {
            locations.map((location, index) => (
              <Marker
                key={index}
                lat={location[1]}
                lng={location[0]}
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
  setGoogleMaps: PropTypes.func.isRequired,
};

export default SimpleMap;
