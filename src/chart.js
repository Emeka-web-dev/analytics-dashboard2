var optionsSpark3 = {
  series: [{
  data: randomizeArray(sparklineData)
}],
  chart: {
  type: 'area',
  height: 160,
  sparkline: {
    enabled: true
  },
},
stroke: {
  curve: 'straight'
},
fill: {
  opacity: 0.3
},
xaxis: {
  crosshairs: {
    width: 1
  },
},
yaxis: {
  min: 0
},
title: {
  text: '$135,965',
  offsetX: 0,
  style: {
    fontSize: '24px',
  }
},
subtitle: {
  text: 'Total Order',
  offsetX: 0,
  style: {
    fontSize: '14px',
  }
}
};

var chartSpark3 = new ApexCharts(document.querySelector("#chart-1"), optionsSpark3);
chartSpark3.render();