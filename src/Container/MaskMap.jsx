import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

import { dispatchReceiveDrugStores } from '../Redux/Action/DrugStore';
import Option from './Option';
import DrugStore from './DrugStore';
import Map from './Map';
import counties from '../Common/County';

class MaskMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      towns: [],
      selectedCounty: '',
      filteredDrugStores: [],
    };
  }

  async componentDidMount() {
    await this.props.dispatchReceiveDrugStores();
    await this.loadTownsFromCounty(counties[1]);
    await this.initializeDrugStores();
  }

  loadTownsFromCounty = (val) => {
    const { drugStoresMatchedMap } = this.props;
    const towns = [];
    drugStoresMatchedMap.forEach((el) => {
      const { properties } = el;
      const { town, county } = properties;
      if ((!towns.includes(town)) && (county === val)) {
        towns.push(town);
      }
    });
    this.setState({
      towns,
      selectedCounty: val,
    });
  }

  onsubmitSearch = (selCounty, selTown) => {
    const found = this.loadFilterdDrugStore(selCounty, selTown);
    this.setState({
      filteredDrugStores: found,
    });
  }

  initializeDrugStores = () => {
    const found = this.loadFilterdDrugStore(counties[1], this.state.towns[0]);
    this.setState({
      filteredDrugStores: found,
    });
  }

  loadFilterdDrugStore = (selCounty, selTown) => {
    const { drugStoresMatchedMap } = this.props;
    const found = drugStoresMatchedMap.filter((el) => {
      const { properties } = el;
      const { town, county } = properties;
      return (selCounty === county && selTown === town);
    });
    return found;
  }


  render() {
    const {
      Sider,
      Content,
    } = Layout;
    return (
      <Layout>
        <Sider
          width="280px"
          breakpoint="lg"
          collapsedWidth="0"
        >
          <Layout>
            <div
              style={{ height: '25vh', lineHeight: 'normal' }}
              className="layout-side-bar-header"
            >
              <Option
                towns={this.state.towns}
                loadTownsFromCounty={this.loadTownsFromCounty}
                selectedCounty={this.state.selectedCounty}
                onsubmitSearch={this.onsubmitSearch}
              />
            </div>
            <Content className="scroll" style={{ height: '80vh' }}>
              <DrugStore
                initializeDrugStores={this.initializeDrugStores}
                filteredDrugStores={this.state.filteredDrugStores}
              />
            </Content>
          </Layout>
        </Sider>
        <Layout>
          <Content><Map /></Content>
        </Layout>
      </Layout>
    );
  }
}
const mapStateToProps = (state) => ({
  drugStoresMatchedMap: state.drugStores.list,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchReceiveDrugStores: () => dispatch(dispatchReceiveDrugStores()),
});

MaskMap.propTypes = {
  dispatchReceiveDrugStores: PropTypes.func.isRequired,
  drugStoresMatchedMap: PropTypes.arrayOf(
    PropTypes.shape({
      geometry: PropTypes.object.isRequired,
      properties: PropTypes.object.isRequired,
    }).isRequired,
  ),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MaskMap);
