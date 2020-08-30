import React, { Component } from 'react';
import {
  Popover,
  Tag,
  PageHeader,
} from 'antd';
import PropTypes from 'prop-types';
import AvailableTimeTable from './AvailableTimeTable';

class Marker extends Component {
  render() {
    const { infoWindowContent, isShowInfoWindow } = this.props;
    const { name } = infoWindowContent;
    return (
      <>
      <div className='marker' />
      {
        isShowInfoWindow
          ? <Popover
        content={<AvailableTimeTable infoWindowContent={infoWindowContent}/>}
        title= {<PageHeader
          title={name}
          tags={<Tag color="blue">營業中</Tag>}
         />}
        visible={isShowInfoWindow}
      ></Popover> : null
      }
      </>
    );
  }
}

Marker.propTypes = {
  infoWindowContent: PropTypes.object.isRequired,
  isShowInfoWindow: PropTypes.bool.isRequired,
};

export default Marker;
