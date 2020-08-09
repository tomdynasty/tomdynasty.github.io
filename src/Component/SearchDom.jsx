import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Select,
} from 'antd';
// import { DownOutlined } from '@ant-design/icons';
import counties from '../Common/County';

class SearchDom extends Component {
  render() {
    // const { Search } = Input;
    const { towns, defaultCounty } = this.props;
    const { Option } = Select;
    return (
      <div>
        <Select
          showSearch
          defaultValue={defaultCounty}
          onChange={this.props.onSelectCountyChange}
        >
          {
            counties.map((county) => (
              <Option key={county} value={county}>
                {county}
              </Option>
            ))
          }
        </Select>
        <Select
          className="search-option-district"
          defaultValue={towns[0]}
        >
          {
            towns.map((town) => (
              <Option key={town} value={town}>
                {town}
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

SearchDom.propTypes = {
  onSelectCountyChange: PropTypes.func.isRequired,
  towns: PropTypes.array.isRequired,
  defaultCounty: PropTypes.string.isRequired,
};

export default SearchDom;
