import React, { Component } from 'react';
import {
  Dropdown,
  Button,
  Menu,
  Input,
} from 'antd';
import { DownOutlined } from '@ant-design/icons';


class SearchDom extends Component {
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
        <Dropdown overlay={country}>
          <Button shape="round">
            台北市&nbsp;&nbsp;
            <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown overlay={district} className="search-option-district">
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
          style={{ width: 220 }}
        />
      </div>
    );
  }
}

export default SearchDom;
