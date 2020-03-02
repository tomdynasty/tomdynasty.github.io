import React, { Component } from 'react';
import { Card } from 'antd';

class DrugStore extends Component {
  render() {
    return (
      <div>
        <Card size="small" title="啄木鳥藥局">
          <p>台北市中正區汀州路3段125號</p>
          <p>02 -23648180</p>
          <p>下午2點開始販售同時發號碼牌，228連假週五至週日休息</p>
        </Card>
        <Card size="small" title="吃吃吃藥局">
          <p>台北市中正區汀州路3段125號</p>
          <p>02 -23648180</p>
          <p>下午2點開始販售同時發號碼牌，228連假週五至週日休息</p>
        </Card>
      </div>
    );
  }
}

export default DrugStore;
