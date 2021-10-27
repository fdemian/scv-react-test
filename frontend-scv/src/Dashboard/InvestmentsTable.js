import React from 'react';
//import PropTypes from 'prop-types';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Accion',
    dataIndex: 'name',
    render: (text, val) => (<Link to={`/stocks/${val.id}`}>{text}</Link>)
  },
  {
    title: 'Precio',
    dataIndex: 'current_price',
    render: text => `U$S ${text}`
  }
];

const InvestmentsTable = ({ stocks }) => {
  return (
  <Table
     columns={columns}
     dataSource={stocks}
     ordered
     pagination={false}
     locale={{
       emptyText: "No hay inversiones para mostrar."
     }}
  />
  );
}

/*
InvestmentsTable.propTypes = {
  : PropTypes.
};*/

export default InvestmentsTable;
