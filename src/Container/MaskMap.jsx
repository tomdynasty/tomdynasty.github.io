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
    };
  }

  async componentDidMount() {
    await this.props.dispatchReceiveDrugStores();
    await this.loadTownsFromCounty(counties[1]);
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


  render() {
    const {
      Sider,
      Content,
    } = Layout;
    return (
      <Layout>
        <Sider
          width="240px"
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
              />
            </div>
            {/* <Content className="scroll" style={{ height: '80vh' }}>
              <DrugStore />
            </Content> */}
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
