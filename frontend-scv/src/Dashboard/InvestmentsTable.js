import React from 'react';
//import PropTypes from 'prop-types';
import { Table } from 'antd';

const columns = [
  {
    title: 'Accion',
    dataIndex: 'stock',
    render: text => <a href="/stocks/1">{text}</a>,
  },
  {
    title: 'Precio',
    dataIndex: 'price',
  }
];

const data = [
  {
    key: '1',
    stock: 'Alibaba',
    price: '￥300,000.00',
  },
  {
    key: '2',
    stock: 'Coca Cola',
    price: 'U$D 300,000.00',
  },
  {
    key: '3',
    stock: 'La Serenísima',
    price: 'AR$ 300,000.00',
  },
];

const InvestmentsTable = () => {
  return <Table columns={columns} dataSource={data} bordered pagination={false} />;
}

/*
InvestmentsTable.propTypes = {
  : PropTypes.
};*/

export default InvestmentsTable;
