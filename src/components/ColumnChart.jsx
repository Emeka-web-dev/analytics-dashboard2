import ReactApexChart from 'react-apexcharts';
const ColumnChart = ({ LSTheme }) => {
  const options = {
    series: [
      {
        data: [
          6000, 17000, 2800, 28000, 9000, 45000, 9000, 19000, 33000, 4000,
          30000, 26000,
        ],
      },
    ],
    chart: {
      type: 'bar',
    },
    fill: {
      colors: ['#34CAA51A'],
    },
    plotOptions: {
      bar: {
        columnWidth: '30px',
        distributed: true,
        borderRadius: 15,
        borderRadiusApplication: 'end',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      strokeDashArray: 5,
      position: 'back',
    },
    xaxis: {
      categories: [
        ['Jan'],
        ['Feb'],
        ['Mar'],
        ['Apr'],
        ['May'],
        ['Jun'],
        ['Jul'],
        ['Aug'],
        ['Sep'],
        ['Oct'],
        ['Nov'],
        ['Dec'],
      ],
      crosshairs: {
        opacity: 1,
        position: 'front',
        height: 'maxContent',
        fill: {
          color: '#34CAA5',
          gradient: {
            colorFrom: '#34CAA5',
            colorTo: '#34CAA51A',
            stops: [0, 100],
            opacityFrom: 1,
            opacityTo: 0.3,
          },
          borderRadius: 15,
        },
        style: {
          borderRadius: 15,
        },
        x: {
          show: true,
          offsetX: 0,
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: `${LSTheme === 'dark' ? '#bebebe' : '#525252ab'}`,
          fontSize: '14px',
          fontFamily: 'Plus Jakarta Sans',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: `${LSTheme === 'dark' ? '#bebebe' : '#525252ab'}`,
          fontSize: '12px',
          fontFamily: 'Plus Jakarta Sans',
        },
      },
    },
  };
  return (
    <ReactApexChart
      options={options}
      series={options.series}
      type='bar'
      height={320}
    />
  );
};

export default ColumnChart;
