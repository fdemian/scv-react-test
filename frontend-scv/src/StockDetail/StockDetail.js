import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import {
  Statistic,
  Row,
  Col,
  Card,
  InputNumber as Input,
  Button,
  notification
} from 'antd';
import { useMutation, useQuery } from '@apollo/client';
import { BUY_STOCK, SELL_STOCK } from './Mutations';
import { GET_STOCK_DETAIL } from './Queries';
import { useParams } from "react-router-dom";
import { getUserId } from '../utils';
import Loading from '../Loading/LoadingIndicator';

const StockDetail = () => {

  let { id } = useParams();
  const [amountToSell, setAmountToSell] = useState(0);
  const [amountToBuy, setAmountToBuy] = useState(0);

  const { data, loading, error } = useQuery(GET_STOCK_DETAIL, {
    variables: {
      user: getUserId(),
      stock: parseInt(id, 10)
    }
  });

  const [buyMutation] = useMutation(BUY_STOCK);
  const [sellMutation] = useMutation(SELL_STOCK);

  const buyStock = () => {
    const userId = getUserId();
    const stockId = parseInt(id, 10);

    if(amountToBuy <= 0) {
      notification.error({
        message: `Notification`,
        description: 'Debe especificar una cantidad a comprar positiva mayor que 0.',
        placement: 'topRight',
      });

      return;
    }

    console.log({
      variables: {
        user: userId,
        stock: stockId,
        amount: amountToBuy
      }
    });
  }

  const sellStock = () => {
    const userId = getUserId();
    const stockId = parseInt(id, 10);

    if(amountToSell <= 0) {
      notification.error({
        message: `Error al vender acciones.`,
        description: 'Debe especificar una cantidad a comprar positiva mayor que 0.',
        placement: 'topRight',
      });

      return;
    }

    console.log({
      variables: {
        user: userId,
        stock: stockId,
        amount: amountToSell
      }
    });
  }

  if(loading)
    return <Loading />;

  if(error)
    return <p>Error</p>;


  const stockDetail = data.getStockDetail;
  const currentValue = stockDetail.quantity*stockDetail.stock.current_price;

  return (
  <>
    <h1 style={{textAlign: 'center'}}>{stockDetail.stock.name}</h1>
    <br />
    <Row>
      <Col span={24}>
        <Card title="Valores">
           <Statistic title="Cantidad" value={`${stockDetail.quantity} Unidades`} />
           <Statistic title="Cotización" value={`U$D${stockDetail.stock.current_price}/Unidad`} />
           <Statistic title="Valor Actual" value={`U$D${currentValue}`} />
        </Card>
      </Col>
    </Row>
    <br />
    <Row gutter={16}>
      <Col span={12}>
        <Card title="Comprar" bordered={true}>
            <Input onChange={setAmountToBuy} min={0} />
            <Button type="link" onClick={buyStock}>
            Comprar
            </Button>
            <Statistic
               title="Valor a comprar"
               value={`U$D${amountToBuy*stockDetail.stock.current_price}`}
            />
        </Card>
      </Col>
      <Col span={12}>
        <Card title="Vender" bordered={true}>
          <Input onChange={setAmountToSell} min={0} />
          <Button type="link" onClick={sellStock}>
            Vender
          </Button>
          <Statistic
             title="Valor a vender"
             value={`U$D${amountToSell*stockDetail.stock.current_price}`}
          />
        </Card>
      </Col>
    </Row>
  </>
  );
}

StockDetail.propTypes = {};

export default StockDetail;
