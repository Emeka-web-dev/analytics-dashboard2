import calendar from '../assets/calendar.svg';
import show from '../assets/show.png';
import { notification } from 'antd';
import { Header } from 'antd/es/layout/layout';
import UserNavigation from './UserNavigation';

const DashboardHeader = ({ LSTheme, toggleSidebar, collapsed }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Notification',
      description:
        'You have a lot of pending transactions, I would suggest you file them as soon as possible and proceed to withdraw your dividend.',
      duration: 0,
    });
  };

  // Get current date
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Header
      className={`!bg-lightGrey dark:!bg-subDark border-b dark:!border-gray-800 !border-[#E5EAEF] !fixed w-full z-20 ${
        !collapsed &&
        '!w-[calc(100%-80px)] !ml-[80px] md:!ml-[200px] md:!w-[calc(100%-200px)]'
      }`}
      style={{
        padding: '20px',
        height: 'auto',
        lineHeight: 'auto',
      }}>
      {contextHolder}
      <div className='flex items-center justify-between dark:text-white text-zinc-800'>
        <div className=' flex items-center gap-3'>
          {collapsed && (
            <div
              onClick={toggleSidebar}
              className='cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
              <img
                src={show}
                alt='theme icon'
                className={`w-8 h-8 ${
                  LSTheme === 'dark' ? 'toggle-icon' : 'dark-icon'
                }`}
              />
            </div>
          )}
          <div>
            <h1 className='text-xl font-semibold'>Dashboard</h1>

            <div className='md:hidden flex items-center gap-[10px]'>
              <img
                src={calendar}
                alt='calendar icon'
                className={`header-icon w-4 h-4`}
              />
              <p className='text-xs'>{currentDate}</p>
            </div>
          </div>
        </div>

        <UserNavigation
          LSTheme={LSTheme}
          openNotification={openNotification}
          currentDate={currentDate}
        />
      </div>
    </Header>
  );
};

export default DashboardHeader;
