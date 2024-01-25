import ReactApexChart from 'react-apexcharts';
const SparklineChart = ({options}) => {
  return (
    <ReactApexChart options={options} series={options.series} type="area" height={32} width={104} />
  );
}
 
export default SparklineChart;