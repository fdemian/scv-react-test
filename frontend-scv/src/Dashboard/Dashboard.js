import React from 'react';
//import PropTypes from 'prop-types';
import { Card } from 'antd';
import StockChart from '../StockChart/StockChart';
import InvestmentsTable from './InvestmentsTable';

import { Row, Col } from 'antd';
import './Dashboard.css';

const Dashboard = () => {
  return (
  <Row className="dashboard-row-container">
    <Col span={12} gutter={2} className="investments-container">
      <Card
         title="Mis inversiones"
         bordered={true}
       >
        <InvestmentsTable />
      </Card>
      <br />
      <Card
         title="Otras inversiones"
         bordered={true}
       >
          <InvestmentsTable />
      </Card>
    </Col>
    <Col span={12} gutter={2}>
       <StockChart />
    </Col>
  </Row>
  );
}

/*
Dashboard.propTypes = {
  : PropTypes.
};
*/

export default Dashboard;
