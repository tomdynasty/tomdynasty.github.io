import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

import { dispatchReceiveDrugStores } from '../Redux/Action/DrugStore';
import Option from './Option';
import DrugStore from './DrugStore';
import Map from './Map';

class MaskMap extends Component {
  async componentDidMount() {
    await this.props.dispatchReceiveDrugStores();
  }

  render() {
    const { drugStoresMatchedMap } = this.props;
    // const counties = [];
    // drugStoresMatchedMap.forEach((el) => {
    //   const { properties } = el;
    //   const { county } = properties;
    //   if ((!counties.includes(county)) && counties !== '') {
    //     counties.push(county);
    //   }
    // });
    // console.log(counties);

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
              <Option />
            </div>
            <Content className="scroll" style={{ height: '80vh' }}>
              <DrugStore />
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
