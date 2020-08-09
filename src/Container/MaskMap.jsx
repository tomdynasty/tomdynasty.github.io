import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { dispatchReceiveDrugStores } from '../Redux/Action/DrugStore';
import Option from './Option';
import DrugStore from './DrugStore';
import Map from './Map';

class MaskMap extends Component {
  componentDidMount() {
    this.props.dispatchReceiveDrugStores();
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
              style={{ height: '32vh', lineHeight: 'normal' }}
              className="layout-side-bar-header"
            >
              <Option />
            </div>
            <Content className="scroll">
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
  list: state.drugStores.list,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchReceiveDrugStores: () => dispatch(dispatchReceiveDrugStores()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MaskMap);
