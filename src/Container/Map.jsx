import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import { meters2ScreenPixels } from 'google-map-react/utils';
import Marker from './Marker';
import axios from 'axios';

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 25.032969,
        lng: 121.565414,
      },
      zoom: 11,
      // data: [],
    };
  }

  componentDidMount() {
    const url = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json';
    axios.get(url).then((res) => {
      // this.setState({
      // });
      // console.log(res.data);
    });
  }

  render() {
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
          <Marker />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
