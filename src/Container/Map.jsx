import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function GoogleMapSetting() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 25.032969, lng: 121.565414 }}
    />
  );
}
const WrappedMap = withScriptjs(withGoogleMap(GoogleMapSetting));
export default function Map() {
  return (
    <WrappedMap
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
      libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '480px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  );
}
