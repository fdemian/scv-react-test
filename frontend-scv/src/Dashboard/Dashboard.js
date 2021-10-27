import React from 'react';
//import PropTypes from 'prop-types';
import { Card } from 'antd';
import StockChart from '../StockChart/StockChart';
import InvestmentsTable from './InvestmentsTable';
import Loading from '../Loading/LoadingIndicator';
import { Row, Col } from 'antd';
import './Dashboard.css';
import { GET_USER, GET_STOCKS, GET_USER_STOCKS } from './Queries';
import { useQuery } from '@apollo/client';

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

  const userQuery = useQuery(GET_USER, {
    variables: { id: 1 }
  });
  const stocksQuery = useQuery(GET_STOCKS);
  const userStocksQuery = useQuery(GET_USER_STOCKS, {
    variables: { id: 1 }
  });

  if(userQuery.loading || stocksQuery.loading || userStocksQuery.loading)
    return <Loading />;

  if(userQuery.error || stocksQuery.error || userStocksQuery.error)
    return (
    <h2>
      Hubo un error con una o mas de las consultas a nuestra base de datos
    </h2>
    );

  const user = userQuery.data.getUser;
  const stocks = stocksQuery.data.getStocks;
  const userStocks = userStocksQuery.data.getUserStocks;

  console.clear();
  console.log(userStocks);
  console.log("::::::");

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
         <StockChart stocks={stocks} data={data} />
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <Card title="Otras inversiones" bordered={true}>
            <InvestmentsTable stocks={stocks} />
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
