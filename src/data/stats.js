import totalOrder from '../assets/totalOrder.svg';
import totalRefund from '../assets/totalRefund.svg';
import averageSales from '../assets/averageSales.svg';
import totalIncome from '../assets/totalIncome.svg';


let sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

let randomizeArray = function (arg)
{
  let array = arg.slice();
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex)
  {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};


const options = {
  chart: {
    group: 'sparklines',
    type: 'area',
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'straight',
    width: 1
  },
  fill: {
    opacity: 0.2
  },
  xaxis: {
    type: 'datetime',
  },

  colors: ['#77B900'],
  series: [{
    name: 'Total',
    data: randomizeArray(sparklineData)
  }],
  labels: [...Array(24).keys()].map(n => `2018-09-0${ n + 1 }`),
  tooltip: {
    x: {
      show: false
    },
    fixed: {
      enabled: true,
      position: 'topRight',
      offsetX: 20,
      offsetY: -40,
    }
  },


};


export const stats = [
  {
    id: 1,
    title: 'Total Order',
    value: '350',
    increase: true,
    options: {
      ...options, series: [{
        name: 'Total Order',
        data: randomizeArray(sparklineData)
      }]
    },
    icon: <img src={ totalOrder } alt='stats icon' />
  },
  {
    id: 2,
    title: 'Total Refund',
    value: '270',
    options: {
      ...options, colors: ['#ED544E'], series: [{
        name: 'Total Refund',
        data: randomizeArray(sparklineData)
      }]
    },
    icon: <img src={ totalRefund } alt='stats icon' />
  },
];

export const bottomStats = [
  {
    id: 3,
    title: 'Average Sales',
    value: '1567',
    options: {
      ...options, colors: ['#ED544E'], series: [{
        name: 'Average Sales',
        data: randomizeArray(sparklineData)
      }]
    },
    icon: <img src={ averageSales } alt='stats icon' />
  },
  {
    id: 4,
    title: 'Total Income',
    value: '350.000',
    increase: true,
    options: {
      ...options, series: [{
        name: 'Total Income',
        data: randomizeArray(sparklineData)
      }]
    },
    icon: <img src={ totalIncome } alt='stats icon' />
  },
];