import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DrugStoreDom from '../Component/DrugStoreDom';

class DrugStore extends Component {
  render() {
    return (
      <DrugStoreDom
       filteredDrugStores={this.props.filteredDrugStores}
      />
    );
  }
}

DrugStore.propTypes = {
  filteredDrugStores: PropTypes.array.isRequired,
};

export default DrugStore;
