import React from 'react';
import { Pie } from '@ant-design/charts';

const valor = 75001;
const data = [
  {
    type: '分类一',
    value: 27,
  },
  {
    type: '分类二',
    value: 25,
  },
  {
    type: '分类三',
    value: 18,
  },
  {
    type: '分类四',
    value: 15,
  },
  {
    type: '分类五',
    value: 10,
  },
  {
    type: '其他',
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
  interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
};


const DemoPie = () => {
  return(
  <>
    <h1>Valor total de cartera ${valor}</h1>
    <Pie {...config} />
  </>
  );
};

export default DemoPie;