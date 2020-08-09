import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OptionDom from '../Component/OptionDom';

class Option extends Component {
  render() {
    return (
      <OptionDom
        towns={this.props.towns}
        loadTownsFromCounty={this.props.loadTownsFromCounty}
      />
    );
  }
}

Option.propTypes = {
  towns: PropTypes.array.isRequired,
  loadTownsFromCounty: PropTypes.func.isRequired,
};

export default Option;
