import React, { Component } from 'react';
import {
  Popover,
  Tag,
  PageHeader,
} from 'antd';
import AvailableTimeTable from './AvailableTimeTable';

class Marker extends Component {
  render() {
    return (
      <Popover
        content={<AvailableTimeTable />}
        title= {<PageHeader
          title="全球藥師藥局"
          tags={<Tag color="blue">營業中</Tag>}
         />}
      >
        <div className='marker'></div>
      </Popover>
    );
  }
}

export default Marker;
