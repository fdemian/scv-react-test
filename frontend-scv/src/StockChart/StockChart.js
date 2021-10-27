import React from 'react';
import { Pie } from '@ant-design/charts';
import './Chart.css';

const StockChart = ({ stocks }) => {

  if(stocks.length === 0)
    return (
    <>
      <h1 className="pie-chart-text">Aún no tenes acciones en tu portfolio.</h1>
    </>
  );

  const totalValue = stocks.map(d => (d.stock.current_price*d.quantity)).reduce((a, b)=> a+b);
  const newData = stocks.map(s => ({ type: s.stock.name, value: ((s.stock.current_price*s.quantity)/totalValue) }));

  const config = {
    appendPadding: 10,
    data: newData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    locale:'en-US',
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };

  return(
  <>
    <h1 className="pie-chart-text">Valor total de cartera U$S {totalValue}</h1>
    <Pie {...config} />
  </>
  );
};

export default StockChart;
