import React, { Component } from 'react';
import 'antd/dist/antd.css';
import faceMaskLogo from '../SVG/faceMask.svg';

class DateMessageDom extends Component {
  render() {
    return (
      <div>
        <div className="weekday">
          星期六
          <span>
            <img src={faceMaskLogo} alt="口罩圖片" width="50px" className="maskLogo" />
          </span>
        </div>
        <div className="date-info-group">
          <div>2020-02-29</div>
          <div>
            身分證末碼為
            <span className="id-card-last-code">
              <span> </span>
              0,2,4,6,8
              <span> </span>
            </span>
            可購買
          </div>
        </div>
      </div>
    );
  }
}

export default DateMessageDom;
