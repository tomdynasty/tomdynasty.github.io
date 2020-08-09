import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchDom from '../Component/SearchDom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      towns: [],
      defaultCounty: '新北市',
    };
  }

  componentDidMount() {
    this.handleSelectCountyChange(this.state.defaultCounty);
  }

  handleSelectCountyChange = (val) => {
    const { drugStoresMatchedMap } = this.props;
    const towns = [];
    drugStoresMatchedMap.forEach((el) => {
      const { properties } = el;
      const { town, county } = properties;
      console.log(town);
      if ((!towns.includes(town)) && (county === val)) {
        towns.push(town);
      }
    });
    console.log(towns);
    this.setState({
      towns,
    });
  }

  render() {
    return (
      <SearchDom
        onSelectCountyChange={this.handleSelectCountyChange}
        towns={this.state.towns}
        defaultCounty={this.state.defaultCounty}
      />
    );
  }
}

Search.propTypes = {
  // eslint-disable-next-line react/require-default-props
  drugStoresMatchedMap: PropTypes.arrayOf(
    PropTypes.shape({
      geometry: PropTypes.object.isRequired,
      properties: PropTypes.object.isRequired,
    }).isRequired,
  ),
};

const mapStateToProps = (state) => ({
  drugStoresMatchedMap: state.drugStores.list,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
