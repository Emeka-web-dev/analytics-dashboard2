import ReactApexChart from 'react-apexcharts';
const ColumnChart = ({ LSTheme, sortedValue }) => {
  const dataMap = {
    Monthly: [
      6000, 17000, 2800, 28000, 9000, 45000, 9000, 19000, 33000, 4000, 30000,
      26000,
    ],
    Weekly: [6000, 17000, 2800, 28000, 9000, 45000, 9000],
    Yearly: [6000, 17000, 2800, 28000, 9000, 45000, 9000, 19000, 23000],
  };

  const categoriesMap = {
    Monthly: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    Weekly: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    Yearly: [
      '2020',
      '2021',
      '2022',
      '2023',
      '2024',
      '2025',
      '2026',
      '2027',
      '2028',
    ],
  };

  const options = {
    series: [
      {
        name: 'Sales Trends',
        data: dataMap[sortedValue] || [],
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
      categories: categoriesMap[sortedValue] || [],
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
    tooltip: {
      legend: 'Sales trends',
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
