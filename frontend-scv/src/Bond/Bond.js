import React from 'react';
//import PropTypes from 'prop-types';
import { Statistic, Row, Col, Card, Input, Space, Button } from 'antd';

const Bond = () => {
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
        </Card>
      </Col>
      <Col span={12} gutter={2}>
          <h1>Acciones de Coca-Cola</h1>

          <Card
             title="Valores"
             bordered={true}
             style={{ width: 300 }}
           >
             <Statistic title="Cantidad" value="200 Unidades" />
             <Statistic title="Cotización" value="AR$200/Unidad" />
             <Statistic title="Valor Actual" value="AR$40000" />
          </Card>

          <Card
             title="Comprar"
             bordered={true}
             style={{ width: 300 }}
           >
              <Input addonAfter={<Button type="link">Comprar</Button>} />
              <Statistic title="Valor a comprar" value="AR$2000000" />
          </Card>
          <br />
          <Card
             title="Vender"
             bordered={true}
             style={{ width: 300 }}
           >
            <Input addonAfter={<Button type="link">Vender</Button>} />
            <Statistic title="Valor a vender" value="AR$2000000" />
          </Card>

      </Col>
    </Row>
  );
}

/*
Bond.propTypes = {
  : PropTypes.
};*/

export default Bond;
