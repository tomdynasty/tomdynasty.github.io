import React from 'react';
import { Layout } from 'antd';
import Option from './Container/Option';
import './App.css';
import DrugStore from './Container/DrugStore';

function App() {
  const { Header, Sider, Content } = Layout;
  return (
    <div>
      <Layout>
        <Sider
         width="230px"
         breakpoint="lg"
         collapsedWidth="0">
          <Layout>
            <Header 
              style={{height:"32vh", lineHeight: "normal"}}
              className="layout-side-bar-header">
              <Option/>
            </Header>
            <Content>
              <DrugStore/>
            </Content>
          </Layout>
        </Sider>
        <Layout>
          <Content>Content</Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
    </Layout>
    </div>
  );
}

export default App;
