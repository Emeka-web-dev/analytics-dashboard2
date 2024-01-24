import search from '../assets/search.svg';
import calendar from '../assets/calendar.svg';
import notification from '../assets/notification.svg';
import justin from '../assets/justin.svg';
import arrowDown from '../assets/arrowDown.svg';
import { Input } from 'antd';
import { Header } from 'antd/es/layout/layout';

const DashboardHeader = ({ LSTheme }) => {
  return (
    <Header
      className='!bg-lightGrey dark:!bg-subDark border-b dark:!border-gray-800 !border-[#E5EAEF] !ml-[80px] md:!ml-[200px]'
      style={{
        padding: '20px',
        height: 'auto',
        lineHeight: 'auto',
      }}>
      <div className='flex items-center justify-between dark:text-white text-zinc-800'>
        <div>
          <h1 className='text-xl font-semibold'>Dashboard</h1>
        </div>
        <div className='flex gap-[22px] '>
          <div>
            <Input
              size='large'
              placeholder='Search...'
              prefix={
                <img
                  src={search}
                  alt='search icon'
                  className='w-[18px] h-[18px]'
                />
              }
            />
          </div>
          <div className='flex gap-5 items-center'>
            <div className='flex items-center gap-[10px]'>
              <img
                src={calendar}
                alt='calendar icon'
                className={` ${LSTheme === 'dark' && 'header-icon'} w-5 h-5`}
              />
              <p>November 15, 2023</p>
            </div>
            <div className='p-[11px] border border-zinc-300 rounded-[27px]'>
              <img
                src={notification}
                alt='notification icon'
                className={` ${LSTheme === 'dark' && 'header-icon'} w-5 h-5`}
              />
            </div>
            <div>
              <button
                id='dropdownDefaultButton'
                data-dropdown-toggle='dropdown'
                class='text-white border border-[#DADDDD] rounded-[28px] hover:bg-zinc-100 font-medium text-sm text-center flex items-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:border-transparent py-[6px] px-2 gap-3 transition-all ease-in-out duration-300'
                type='button'>
                <div>
                  <img src={justin} alt='Profile' className='w-10 h-10' />
                </div>
                <div className='flex flex-col gap-1 items-end'>
                  <span class='text-zinc-800 dark:text-white text-base leading-[19px]'>
                    Justin Bergson
                  </span>
                  <span class='text-zinc-500 dark:text-gray-400 leading-[17px]'>
                    Justin@gmail.com
                  </span>
                </div>
                <img
                  src={arrowDown}
                  alt='decorative'
                  className={`${
                    LSTheme === 'dark' && 'header-icon'
                  } w-[20px] h-[20px]`}
                />
              </button>

              <div
                id='dropdown'
                class='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'>
                <ul
                  class='py-2 text-sm text-gray-700 dark:text-gray-200'
                  aria-labelledby='dropdownDefaultButton'>
                  <li>
                    <a
                      href='#'
                      class='block px-4 py-2 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-600 '>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      class='block px-4 py-2 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-600 '>
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      class='block px-4 py-2 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-600 '>
                      Customers
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      class='block px-4 py-2 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-600 '>
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default DashboardHeader;
