import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchDom from '../Component/SearchDom';

class Search extends Component {
  render() {
    return (
      <SearchDom
        loadTownsFromCounty={this.props.loadTownsFromCounty}
        towns={this.props.towns}
      />
    );
  }
}

Search.propTypes = {
  drugStoresMatchedMap: PropTypes.arrayOf(
    PropTypes.shape({
      geometry: PropTypes.object.isRequired,
      properties: PropTypes.object.isRequired,
    }).isRequired,
  ),
  towns: PropTypes.array.isRequired,
  loadTownsFromCounty: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  drugStoresMatchedMap: state.drugStores.list,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
