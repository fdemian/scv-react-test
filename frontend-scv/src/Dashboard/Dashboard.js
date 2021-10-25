import React from 'react';
//import PropTypes from 'prop-types';
import { Card } from 'antd';
import PieChart from './PieChart';
import { Row, Col } from 'antd';
import './Dashboard.css';

const Dashboard = () => {
  return (
  <Row className="dashboard-row-container">
    <Col span={12} gutter={2}>
      <Card
         title="Mis inversiones"
         bordered={true}
         style={{ width: 300 }}
       >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <br />
      <Card
         title="Otras inversiones"
         bordered={true}
         style={{ width: 300 }}
       >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Col>
    <Col span={12} gutter={2}>
      <Card bordered={true}>
          <PieChart />
      </Card>
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
