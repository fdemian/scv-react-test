import React from 'react';
//import PropTypes from 'prop-types';
import { Card } from 'antd';
import StockChart from '../StockChart/StockChart';
import InvestmentsTable from './InvestmentsTable';
import UserInvestments from './UserInvestments';
import Loading from '../Loading/LoadingIndicator';
import { Row, Col } from 'antd';
import './Dashboard.css';
import { GET_USER, GET_STOCKS, GET_USER_STOCKS } from './Queries';
import { useQuery } from '@apollo/client';

const getAvailableStocks = (userStocks, stocks) => {
  const userStockIds = userStocks.map(s => s.stock.id);
  const otherStocks = stocks.filter(s => !userStockIds.includes(s.id));
  return otherStocks;
}

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

  //const user = userQuery.data.getUser;
  const stocks = stocksQuery.data.getStocks;
  const userStocks = userStocksQuery.data.getUserStocks;
  const availableStocks = getAvailableStocks(userStocks, stocks);


  return (
  <>
    <Row>
      <Col span={12}>
        <Card
           title="Mis inversiones" bordered={true}>
          <UserInvestments stocks={userStocks} />
        </Card>
      </Col>
      <Col span={12}>
         <StockChart stocks={userStocks} />
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <Card title="Otras inversiones" bordered={true}>
            <InvestmentsTable stocks={availableStocks} />
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
