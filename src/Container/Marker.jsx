import React, { Component } from 'react';
import {
  Popover,
  Tag,
  PageHeader,
} from 'antd';
import PropTypes from 'prop-types';
import AvailableTimeTable from './AvailableTimeTable';
import currentWeekDayTime from '../Common/Weekday';

class Marker extends Component {
  render() {
    const { infoWindowContent, isShowInfoWindow } = this.props;
    const { name } = infoWindowContent;
    const { available } = infoWindowContent;
    const isAvailable = available ? available.includes(`${currentWeekDayTime}看診`) : '';
    return (
      <>
      <div className='marker' />
      {
        isShowInfoWindow
          ? <Popover
        content={<AvailableTimeTable infoWindowContent={infoWindowContent}/>}
        title= {<PageHeader
          title={name}
          tags={ isAvailable
            ? <Tag color="blue">營業中</Tag>
            : <Tag color="magenta">休息中</Tag>}
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
