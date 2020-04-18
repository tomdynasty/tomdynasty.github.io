import React from 'react';
import { Layout } from 'antd';
import Option from './Container/Option';
import './App.css';
import DrugStore from './Container/DrugStore';
import Map from './Container/Map';
import './style.css';

function App() {
  const {
    Header,
    Sider,
    Content,
  } = Layout;

  return (
    <div>
      <Layout>
        <Sider
          width="240px"
          breakpoint="lg"
          collapsedWidth="0"
        >
          <Layout>
            <Header
              style={{ height: '32vh', lineHeight: 'normal' }}
              className="layout-side-bar-header"
            >
              <Option />
            </Header>
            <Content className="scroll">
              <DrugStore />
            </Content>
          </Layout>
        </Sider>
        <Layout>
          <Content><Map /></Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
