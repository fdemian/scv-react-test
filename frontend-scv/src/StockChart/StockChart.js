import React from 'react';
import { Pie } from '@ant-design/charts';
import './Chart.css';

const DemoPie = ({ stocks }) => {
  let valor = 0;
  let newData = [];

  if(stocks.length !== 0) {
    valor = stocks.map(d => d.stock.price).reduce((a, b)=> a+b);
    newData = stocks.map(s => ({ type: s.stock.name, value: s.stock.price }));
  }

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
    <h1 className="pie-chart-text">Valor total de cartera U$S {valor}</h1>
    <Pie {...config} />
  </>
  );
};

export default DemoPie;
