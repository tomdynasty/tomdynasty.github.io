import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Table } from 'antd';

class AvailableTimeTable extends Component {
  render() {
    const availableTime = '星期一上午休診、星期二上午看診、星期三上午看診、星期四上午看診、星期五上午看診、星期六上午看診、星期日上午看診、星期一下午看診、星期二下午看診、星期三下午看診、星期四下午看診、星期五下午看診、星期六下午看診、星期日下午看診、星期一晚上看診、星期二晚上看診、星期三晚上看診、星期四晚上看診、星期五晚上看診、星期六晚上看診、星期日晚上看診';
    const availableTimeToArray = availableTime.split('、');
    const morningPeriods = availableTimeToArray.slice(0, 7);
    const afternoonPeriods = availableTimeToArray.slice(7, 14);
    const nightPeriods = availableTimeToArray.slice(14, 21);
    const MorRowObj = {
      timePeriod: '早上',
      monday: <FontAwesomeIcon icon={faCheckCircle}/>,
      tuesday: <FontAwesomeIcon icon={faTimesCircle}/>,
      wednesday: <FontAwesomeIcon icon={faTimesCircle}/>,
      Thursday: <FontAwesomeIcon icon={faTimesCircle}/>,
      Friday: <FontAwesomeIcon icon={faTimesCircle}/>,
      Saturday: <FontAwesomeIcon icon={faTimesCircle}/>,
      Sunday: <FontAwesomeIcon icon={faTimesCircle}/>,
    };
    const afternoonRowObj = {
      timePeriod: '下午',
      monday: <FontAwesomeIcon icon={faCheckCircle}/>,
      tuesday: <FontAwesomeIcon icon={faTimesCircle}/>,
      wednesday: <FontAwesomeIcon icon={faTimesCircle}/>,
      Thursday: <FontAwesomeIcon icon={faTimesCircle}/>,
      Friday: <FontAwesomeIcon icon={faTimesCircle}/>,
      Saturday: <FontAwesomeIcon icon={faTimesCircle}/>,
      Sunday: <FontAwesomeIcon icon={faTimesCircle}/>,
    };
    const nightRowObj = {
      timePeriod: '下午',
      monday: <FontAwesomeIcon icon={faCheckCircle}/>,
      tuesday: <FontAwesomeIcon icon={faTimesCircle}/>,
      wednesday: <FontAwesomeIcon icon={faTimesCircle}/>,
      Thursday: <FontAwesomeIcon icon={faTimesCircle}/>,
      Friday: <FontAwesomeIcon icon={faTimesCircle}/>,
      Saturday: <FontAwesomeIcon icon={faTimesCircle}/>,
      Sunday: <FontAwesomeIcon icon={faTimesCircle}/>,
    };
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
        key: 'Thursday',
        dataIndex: 'Thursday',
      },
      {
        title: '星期五',
        key: 'Friday',
        dataIndex: 'Friday',
      },
      {
        title: '星期六',
        key: 'Saturday',
        dataIndex: 'Saturday',
      },
      {
        title: '星期日',
        key: 'Sunday',
        dataIndex: 'Sunday',
      },
    ];
    const data = [MorRowObj, afternoonRowObj, nightRowObj];
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
