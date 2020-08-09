import React, { Component } from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import faceMaskLogo from '../SVG/faceMask.svg';

class DateMessageDom extends Component {
  render() {
    return (
      <div>
        <div className="weekday">
          {this.props.currentWeekday}
          <span>
            <img src={faceMaskLogo} alt="口罩圖片" width="50px" className="maskLogo" />
          </span>
        </div>
        <div className="date-info-group">
          <div>{this.props.currentFullDate}</div>
          <div>
            身分證末碼為
            <span className="id-card-last-code">
              <span> </span>
              {this.props.idToPurchase}
              <span> </span>
            </span>
            可購買
          </div>
        </div>
      </div>
    );
  }
}

DateMessageDom.propTypes = {
  currentWeekday: PropTypes.string.isRequired,
  currentFullDate: PropTypes.string.isRequired,
  idToPurchase: PropTypes.string.isRequired,
};

export default DateMessageDom;
