import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchReceiveDrugStores } from '../Redux/Action/DrugStore';
import DrugStoreDom from '../Component/DrugStoreDom';

class DrugStore extends Component {
  componentDidMount() {
    this.props.dispatchReceiveDrugStores();
  }

  render() {
    console.log(this.props.list);
    return (
      <DrugStoreDom />
    );
  }
}
const mapStateToProps = (state) => ({
  list: state.drugStores.list,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchReceiveDrugStores: () => dispatch(dispatchReceiveDrugStores()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrugStore);
