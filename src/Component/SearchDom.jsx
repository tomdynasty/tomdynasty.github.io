import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import counties from '../Common/County';

class SearchDom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultCounty: '臺北市',
    };
  }

  render() {
    const { Option } = Select;
    const { towns } = this.props;
    return (
      <div>
        <Select
          showSearch
          defaultValue={this.state.defaultCounty}
          onChange={this.props.loadTownsFromCounty}
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
          value={towns[0]}
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
  loadTownsFromCounty: PropTypes.func.isRequired,
  towns: PropTypes.array.isRequired,
};

export default SearchDom;
