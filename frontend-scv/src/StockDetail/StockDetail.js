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
import { Redirect } from 'react-router-dom';
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


  const [buyMutation, buyMutationResult] = useMutation(BUY_STOCK, {
      update(
        cache,
        {
          data: { buyStock }
        }
      ) {
        cache.modify({
          fields: {
            getUserStocks(existingStock = []) {
              const { stockId, quantity } = buyStock;
              if(existingStock.indexOf(s => s.stock.id === stockId) !== -1){
                const newStockArray = existingStock.map(e => {
                  if(e.stock.id === stockId) {
                    return {
                      stock: {
                        id: e.stock.id,
                        name: e.stock.name,
                        current_price: e.stock.current_price
                      },
                      quantity: e.quantity + quantity
                    }
                  }
                  return e;
                })

                return newStockArray;
              }
              else {
                let _stock = {
                  quantity: quantity,
                  stock: {
                    id: data.getStockDetail.id,
                    name: data.getStockDetail.name,
                    current_price: data.getStockDetail.current_price
                  }
                };
                return existingStock.concat(_stock);
              }
            }
          }
        });
      }
    }
  );

  const [sellMutation, sellMutationResult] = useMutation(SELL_STOCK, {
      update(
        cache,
        {
          data: { sellStock }
        }
      ) {
        cache.modify({
          fields: {
            getUserStocks(existingStock = []) {
              const { stockId, quantity } = sellStock;
              const element = existingStock.find(s => s.stock.id === stockId);
              if(element.quantity - quantity === 0){
                // Remove element from user stocks.
                return existingStock.filter(s => s.stock.id !== stockId);
              }
              else {
                return existingStock.map(s => {
                   console.clear();
                   console.log({
                     quantity: (s.quantity - quantity),
                     stock: {
                       id: s.stock.id,
                       name: s.stock.name,
                       current_price: s.stock.current_price
                     }
                   });
                   console.log(":::::-->");
                   if(s.stock.id === stockId){
                    return {
                      quantity: (s.quantity - quantity),
                      stock: {
                        id: s.stock.id,
                        name: s.stock.name,
                        current_price: s.stock.current_price
                      }
                    };
                   }
                   else {
                     return s;
                   }
                })
              }
            }
          }
        });
      }
    });

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

    buyMutation({
      variables: {
        user: userId,
        stock: stockId,
        amount: amountToBuy
      },
      optimisticResponse: {
        buyStock:{
          ok: true,
          message: "",
          stockId: stockId,
          quantity: amountToBuy
        }
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

    sellMutation({
      variables: {
        user: userId,
        stock: stockId,
        amount: amountToSell
      },
      optimisticResponse: {
        sellStock:{
          ok: true,
          message: "",
          stockId: stockId,
          quantity: amountToSell
        }
      }
    });

  }

  if(loading || buyMutationResult.loading || sellMutationResult.loading)
    return <Loading />;

  if(error)
    return <p>Error</p>;

  if(buyMutationResult.data || sellMutationResult.data) {
    const buyOk = buyMutationResult.data ? buyMutationResult.data.buyStock.ok : null;
    const sellOk = sellMutationResult.data ? sellMutationResult.data.sellStock.ok : null;

    if(buyOk || sellOk)
      return <Redirect to="/" />;
  }

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
