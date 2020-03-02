import React, { Component } from 'react';
import '../../src/style.css';
import { Menu, Dropdown, Button, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import faceMaskLogo from '../SVG/faceMask.svg';
// import styled from 'styled-components';

class DateMessageDom extends Component {
  render() {
    const { Search } = Input;

    const country = (
      <Menu>
        <Menu.Item key="1">台北市</Menu.Item>
        <Menu.Item key="2">台中市</Menu.Item>
        <Menu.Item key="3">台南市</Menu.Item>
      </Menu>
    );
    const district = (
      <Menu>
        <Menu.Item key="1">中正區</Menu.Item>
        <Menu.Item key="2">中山區</Menu.Item>
        <Menu.Item key="3">大安區</Menu.Item>
      </Menu>
    );
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
        <Dropdown overlay={country}>
          <Button shape="round">
            台北市
            <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown overlay={district}>
          <Button shape="round">
            全部地區
            <DownOutlined />
          </Button>
        </Dropdown>
        <Search
          className="search-address"
          placeholder="搜尋地址..."
          shape="round"
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        />
      </div>
    );
  }
}

export default DateMessageDom;
