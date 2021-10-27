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
    render: text => `U$S ${text}`
  }
];

const InvestmentsTable = ({ data }) => {
  return (
  <Table
     columns={columns}
     dataSource={data}
     ordered
     pagination={false}
  />
  );
}

/*
InvestmentsTable.propTypes = {
  : PropTypes.
};*/

export default InvestmentsTable;
