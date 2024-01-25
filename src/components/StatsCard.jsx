import rise from '../assets/rise.svg';
import fall from '../assets/fall.svg';
import SparklineChart from './SparklineChart';

const StatsCard = ({ title, value, icon, options, increase }) => {
  return (
    <div className='p-4 dark:!bg-subDark !bg-white rounded-[14px] hover:scale-105 transition-all ease-in-out duration-300 group'>
      <div className='flex items-center justify-between mb-[10px]'>
        <div className='p-2 border border-[#e6e6e6] rounded-full group-hover:bg-emerald-100 transition-all ease-in duration-300'>
          {icon}
        </div>
        <SparklineChart options={options} />
      </div>
      <h3 className='text-lg font-medium text-[#898989] dark:text-gray-300 mb-[5px]'>
        {title}
      </h3>
      <p className='text-2xl font-semibold text-gray-700 dark:text-white mb-[10px]'>
        {value}
      </p>
      <div className='flex gap-[10px] items-center'>
        <div
          className={`pr-4 pl-2 py-1 inline-flex gap-1 items-center rounded-full ${
            increase
              ? 'bg-[#34CAA51F] text-[#34CAA5]'
              : 'bg-[#ED544E1F] text-[#ED544E]'
          }`}>
          <img
            src={increase ? rise : fall}
            alt='trend icon'
            className='w-[9px] h-[5px]'
          />
          <p className='text-xs'>23.5%</p>
        </div>
        <p className='text-sm text-zinc-600 dark:text-gray-200 truncate'>
          vs. previous month
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
