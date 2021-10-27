import React from 'react';
//import PropTypes from 'prop-types';
import {
  Statistic,
  Row,
  Col,
  Card,
  Input,
  Button
} from 'antd';


const StockDetail = () => {
  return (
  <>
    <h1 style={{textAlign: 'center'}}>Acciones de Coca-Cola</h1>
    <br />
    <Row>
      <Col span={24}>
        <Card title="Valores">
           <Statistic title="Cantidad" value="200 Unidades" />
           <Statistic title="Cotización" value="AR$200/Unidad" />
           <Statistic title="Valor Actual" value="AR$40000" />
        </Card>
      </Col>
    </Row>
    <br />
    <Row gutter={16}>
      <Col span={12}>
        <Card title="Comprar" bordered={true}>
            <Input addonAfter={<Button type="link">Comprar</Button>} />
            <Statistic title="Valor a comprar" value="AR$2000000" />
        </Card>
      </Col>
      <Col span={12}>
        <Card title="Vender" bordered={true}>
          <Input addonAfter={<Button type="link">Vender</Button>} />
          <Statistic title="Valor a vender" value="AR$2000000" />
        </Card>
      </Col>
    </Row>
  </>
  );
}

/*
StockDetail.propTypes = {
  : PropTypes.
};
*/

export default StockDetail;
