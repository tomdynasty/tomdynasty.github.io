import React, { Component } from 'react';
import DateMessageDom from '../Component/DateMessageDom';

class DateMessage extends Component {
  render() {
    const today = new Date();
    const weekday = new Array(7);
    weekday[0] = '星期日';
    weekday[1] = '星期一';
    weekday[2] = '星期二';
    weekday[3] = '星期三';
    weekday[4] = '星期四';
    weekday[5] = '星期`五';
    weekday[6] = '星期六';

    const currentWeekday = weekday[today.getDay()];
    const currentFullDate = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;

    let idToPurchase = '1, 3, 5, 7, 9';
    if ((today.getDay() === 0) || (today.getDay % 2 === 0)) {
      idToPurchase = '0, 2, 4, 6, 8';
    }

    return (
      <DateMessageDom
        currentWeekday={currentWeekday}
        currentFullDate={currentFullDate}
        idToPurchase={idToPurchase}
      />
    );
  }
}

export default DateMessage;
