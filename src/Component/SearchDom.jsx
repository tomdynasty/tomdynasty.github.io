import React, { Component } from 'react';
import {
  Select,
} from 'antd';
// import { DownOutlined } from '@ant-design/icons';
import counties from '../Common/County';


class SearchDom extends Component {
  render() {
    // const { Search } = Input;
    const { Option } = Select;
    return (
      <div>
        <Select
          showSearch
          defaultValue="臺北市"
        >
          {
            counties.map((county) => (
              <Option key={county}>
                {county}
              </Option>
            ))
          }
        </Select>
        <Select defaultValue="北投區" className="search-option-district">
          {
            counties.map((county) => (
              <Option key={1}>
                {county}
              </Option>
            ))
          }
        </Select>
        {/* TODO Search func */}
        {/* <Search
          className="search-address"
          placeholder="搜尋地址..."
          onSearch={(value) => console.log(value)}
          style={{ width: 220 }}
        /> */}
      </div>
    );
  }
}

export default SearchDom;
