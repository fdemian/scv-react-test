import React from 'react';
import { Pie } from '@ant-design/charts';
import './Chart.css';

const valor = 75001;
const data = [
  {
    type: 'A',
    value: 27,
  },
  {
    type: 'AAA',
    value: 25,
  },
  {
    type: 'AAAB',
    value: 18,
  },
  {
    type: 'AAAAL',
    value: 15,
  },
  {
    type: 'AAAXXXX',
    value: 10,
  },
  {
    type: 'AWEE',
    value: 5,
  },
];
const config = {
  appendPadding: 10,
  data: data,
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


const DemoPie = () => {
  return(
  <>
    <h1 className="pie-chart-text">Valor total de cartera ${valor}</h1>
    <Pie {...config} />
  </>
  );
};

export default DemoPie;
