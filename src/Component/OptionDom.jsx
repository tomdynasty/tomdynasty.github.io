import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateMessage from '../Container/DateMessage';
import Search from '../Container/Search';

class OptionDom extends Component {
  render() {
    return (
      <div>
        <DateMessage />
        <Search
          towns={this.props.towns}
          loadTownsFromCounty={this.props.loadTownsFromCounty}
          selectedCounty={this.props.selectedCounty}
        />
      </div>
    );
  }
}

OptionDom.propTypes = {
  towns: PropTypes.array.isRequired,
  loadTownsFromCounty: PropTypes.func.isRequired,
  selectedCounty: PropTypes.string.isRequired,
};

export default OptionDom;
