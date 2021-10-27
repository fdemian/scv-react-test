import React from 'react';
//import PropTypes from 'prop-types';
import { Card } from 'antd';
import StockChart from '../StockChart/StockChart';
import InvestmentsTable from './InvestmentsTable';
import { Row, Col } from 'antd';
import './Dashboard.css';

const data = [
  {
    key: '1',
    id: 1,
    stock: 'Alibaba',
    price: 200000,
  },
  {
    key: '2',
    id: 2,
    stock: 'Coca Cola',
    price:  300000,
  },
  {
    key: '3',
    id: 3,
    stock: 'La Serenísima',
    price: 100000,
  },
];

const otrasInv = [
  {
    key: '1',
    id: 1,
    stock: 'Contoso LTD.',
    price: 200000,
  },
  {
    key: '2',
    id: 2,
    stock: 'Apple, Inc.',
    price:  300000,
  },
  {
    key: '3',
    id: 3,
    stock: 'Lenovo',
    price: 100000,
  },
];

const Dashboard = () => {
  return (
  <>
    <Row>
      <Col span={12}>
        <Card
           title="Mis inversiones" bordered={true}>
          <InvestmentsTable data={data} />
        </Card>
      </Col>
      <Col span={12}>
         <StockChart data={data} />
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <Card title="Otras inversiones" bordered={true}>
            <InvestmentsTable data={otrasInv} />
        </Card>
      </Col>
    </Row>
  </>
  );
}

/*
Dashboard.propTypes = {
  : PropTypes.
};
*/

export default Dashboard;
