import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Table } from 'antd';

class AvailableTimeTable extends Component {
  getOnOrOffIcon = (str) => (
    str.includes('看診')
      ? <FontAwesomeIcon icon={faCheckCircle}/>
      : <FontAwesomeIcon icon={faTimesCircle}/>
  )

  getWeekdayObj = (obj, el) => {
    switch (true) {
      case (el.includes('星期一')):
        return {
          key: 'monday',
          icon: this.getOnOrOffIcon(el),
        };
      case (el.includes('星期二')):
        return {
          key: 'tuesday',
          icon: this.getOnOrOffIcon(el),
        };
      case (el.includes('星期三')):
        return {
          key: 'wednesday',
          icon: this.getOnOrOffIcon(el),
        };
      case (el.includes('星期四')):
        return {
          key: 'thursday',
          icon: this.getOnOrOffIcon(el),
        };
      case (el.includes('星期五')):
        return {
          key: 'friday',
          icon: this.getOnOrOffIcon(el),
        };
      case (el.includes('星期六')):
        return {
          key: 'saturday',
          icon: this.getOnOrOffIcon(el),
        };
      case (el.includes('星期日')):
        return {
          key: 'sunday',
          icon: this.getOnOrOffIcon(el),
        };
      default:
        break;
    }
    return { key: 'something wrong' };
  }

  convertPeriodsArrToRowData = (periods, timePeriod) => {
    const obj = { timePeriod };
    periods.every((el) => {
      if (timePeriod === '上午') {
        const weekdayObj = this.getWeekdayObj(obj, el);
        obj[weekdayObj.key] = weekdayObj.icon;
        return true;
      }
      if (timePeriod === '下午') {
        const weekdayObj = this.getWeekdayObj(obj, el);
        obj[weekdayObj.key] = weekdayObj.icon;
        return true;
      }
      if (timePeriod === '晚上') {
        const weekdayObj = this.getWeekdayObj(obj, el);
        obj[weekdayObj.key] = weekdayObj.icon;
      }
      return true;
    });
    return obj;
  }

  render() {
    const columns = [
      {
        title: '',
        dataIndex: 'timePeriod',
        key: 'timePeriod',
      },
      {
        title: '星期一',
        dataIndex: 'monday',
        key: 'monday',
      },
      {
        title: '星期二',
        dataIndex: 'tuesday',
        key: 'tuesday',
      },
      {
        title: '星期三',
        dataIndex: 'wednesday',
        key: 'wednesday',
      },
      {
        title: '星期四',
        key: 'thursday',
        dataIndex: 'thursday',
      },
      {
        title: '星期五',
        key: 'friday',
        dataIndex: 'friday',
      },
      {
        title: '星期六',
        key: 'saturday',
        dataIndex: 'saturday',
      },
      {
        title: '星期日',
        key: 'sunday',
        dataIndex: 'sunday',
      },
    ];
    const availableTime = '星期一上午休診、星期二上午看診、星期三上午看診、星期四上午看診、星期五上午看診、星期六上午看診、星期日上午看診、星期一下午看診、星期二下午看診、星期三下午看診、星期四下午看診、星期五下午看診、星期六下午看診、星期日下午看診、星期一晚上看診、星期二晚上看診、星期三晚上看診、星期四晚上看診、星期五晚上看診、星期六晚上看診、星期日晚上看診';
    const availableTimeToArray = availableTime.split('、');
    const morningPeriods = availableTimeToArray.slice(0, 7);
    const afternoonPeriods = availableTimeToArray.slice(7, 14);
    const nightPeriods = availableTimeToArray.slice(14, 21);
    const data = [
      this.convertPeriodsArrToRowData(morningPeriods, '上午'),
      this.convertPeriodsArrToRowData(afternoonPeriods, '下午'),
      this.convertPeriodsArrToRowData(nightPeriods, '晚上'),
    ];
    return (
      <Table
        pagination={false}
        dataSource={data}
        columns={columns}
        size="small"
        rowKey="timePeriod"
      />
    );
  }
}

export default AvailableTimeTable;
