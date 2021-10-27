import React, { Suspense, lazy } from 'react';
import { Helmet } from "react-helmet";
import Spin from 'antd/lib/spin';
import Card from 'antd/lib/card';
import { Layout } from 'antd';
import './App.css';

const Navbar = lazy(() => import('../Navbar/Navbar'));

const { Content, Header } = Layout;

const App = (props) => {

  const { children } = props;

  return (
  <>

   <Helmet>
      <meta charset="utf-8" />
      <meta name="description" content="Description." />
      <title>SCV Test</title>
    </Helmet>

    <Layout data-testid="app-layout">

      <Suspense fallback={<Spin />}>
        <Header className="page-header-container">
           <Navbar />
        </Header>
      </Suspense>

      <Suspense fallback={<Spin />} className="app-layout">
        <Content data-testid="content-container">
          <Card bordered={false}>
          {children}
          </Card>
        </Content>
      </Suspense>
    </Layout>

    <br />

  </>
  );

}

export default App;
