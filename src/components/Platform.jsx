import { Progress } from 'antd';
import { platformData } from '../data/platform';

const Platform = () => {
  return (
    <div className='dark:!bg-subDark !bg-white rounded-[14px] p-4'>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-lg font-semibold'>Top Platform</h2>
        <a
          href='/'
          className='text-primary text-lg font-medium hover:text-emerald-500 hover:underline transition-all ease-in-out duration-300'>
          See All
        </a>
      </div>
      <div className='flex flex-col gap-5 h-[350px] overflow-x-hidden overflow-y-auto'>
        {platformData.map(
          ({ id, title, value, percentage, increase, color }) => (
            <div key={id} className='space-y-3'>
              <p className='text-lg font-semibold'>{title}</p>
              <Progress
                percent={percentage}
                showInfo={false}
                strokeColor={color}
              />
              <div className='flex items-center justify-between text-neutral-600 dark:text-neutral-400 text-lg'>
                <p>${value}</p>
                <p>+{increase}%</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Platform;
