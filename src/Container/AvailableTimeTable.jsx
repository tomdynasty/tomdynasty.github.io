import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Table } from 'antd';

class AvailableTimeTable extends PureComponent {
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
    const rowObj = { timePeriod };
    const arr = ['上午', '下午', '晚上'];
    periods.forEach((el) => {
      if (arr.includes(timePeriod)) {
        const weekdayObj = this.getWeekdayObj(rowObj, el);
        rowObj[weekdayObj.key] = weekdayObj.icon;
      }
    });
    return rowObj;
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
    const { infoWindowContent } = this.props;
    const { available } = infoWindowContent;
    const availableTimeToArray = available.split('、');
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
        bordered
      />
    );
  }
}

AvailableTimeTable.propTypes = {
  infoWindowContent: PropTypes.object.isRequired,
};

export default AvailableTimeTable;
