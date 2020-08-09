import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchDom from '../Component/SearchDom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTown: '',
    };
  }

  handleTownChange = (val) => {
    this.setState({
      selectedTown: val,
    });
  }

  render() {
    const { towns } = this.props;
    return (
      <SearchDom
        loadTownsFromCounty={this.props.loadTownsFromCounty}
        towns={this.props.towns}
        handleTownChange={this.handleTownChange}
        selectedTown={this.state.selectedTown === '' ? towns[0] : this.state.selectedTown}
        selectedCounty={this.props.selectedCounty}
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
  selectedCounty: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  drugStoresMatchedMap: state.drugStores.list,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
