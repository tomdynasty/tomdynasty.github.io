import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import counties from '../Common/County';

class SearchDom extends Component {
  render() {
    const { Option } = Select;
    const {
      towns,
      selectedTown,
      selectedCounty,
      onsubmitSearch,
    } = this.props;
    return (
      <div>
        <Select
          showSearch
          value={this.props.selectedCounty}
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
          value={this.props.selectedTown}
          onChange={this.props.handleTownChange}
        >
          {
            towns.map((town) => (
              <Option key={town} value={town}>
                {town}
              </Option>
            ))
          }
        </Select>
        <FontAwesomeIcon
          icon={faSearch}
          color="white"
          size="lg"
          className="search-option-district search-icon"
          onClick={() => onsubmitSearch(selectedCounty, selectedTown)}
        />
      </div>
    );
  }
}

SearchDom.propTypes = {
  loadTownsFromCounty: PropTypes.func.isRequired,
  onsubmitSearch: PropTypes.func.isRequired,
  handleTownChange: PropTypes.func.isRequired,
  towns: PropTypes.array.isRequired,
  selectedTown: PropTypes.string,
  selectedCounty: PropTypes.string.isRequired,
};

export default SearchDom;
