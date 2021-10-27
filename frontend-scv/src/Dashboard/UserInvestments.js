import React from 'react';
//import PropTypes from 'prop-types';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

const InvestmentsTable = ({ stocks }) => {

  const columns = [
    {
      title: 'Accion',
      dataIndex: '',
      render: (text, val) => (<Link to={`/stocks/${val.stock.id}`}>{val.stock.name}</Link>)
    },
    {
      title: 'Precio',
      dataIndex: '',
      render: (text, val) => (`U$S ${val.stock.current_price}`)
    },
    {
      title: 'Cantidad Comprada',
      dataIndex: 'quantity'
    }
  ];

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
