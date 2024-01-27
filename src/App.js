import './index.css';
import DashboardLayout from './layout/Layout';
import { Button, Col, ConfigProvider, Dropdown, Row, Space } from 'antd';
import arrowDown from './assets/blackDownArrow.svg';
import StatsCard from './components/StatsCard';
import { bottomStats, stats } from './data/stats';
import ColumnChart from './components/ColumnChart';
import { useState } from 'react';
import Platform from './components/Platform';
import OrderTable from './components/OrderTable';

function App ()
{
  const [sortedValue, setSortedValue] = useState('Monthly');

  const [LSTheme, setLSTheme] = useState(localStorage.theme || 'light');

  const items = [
    {
      label: 'Monthly',
      key: 'Monthly',
    },
    {
      label: 'Weekly',
      key: 'Weekly',
    },
    {
      label: 'Yearly',
      key: 'Yearly',
    },
  ];
  const handleDropdownClick = (e) =>
  {
    setSortedValue(e.key);
  };

  const menuProps = {
    items,
    onClick: handleDropdownClick
  };

  return (
    <ConfigProvider
      theme={ {
        components: {
          Table: {
            headerBg: "#FFF",
            headerSplitColor: "transparent",
            headerBorderRadius: 0,
            stickyScrollBarBg: "#34CAA5"
          }
        },
        token: {
          colorPrimary: "#34CAA5",
          colorInfo: "#34CAA5",
          primary: "#34CAA5",
          secondary: "#0D062D",
          grey: "#F7F8FA",
          lightGrey: "#FAFAFA",
          borderRadius: '14px',
          mainDark: "#0D0F11",
          subDark: "#191D23",
        },
      } }
    >
      <DashboardLayout LSTheme={ LSTheme } setLSTheme={ setLSTheme }>
        <Row className='dark:!text-white !text-zinc-800'>
          <Col className='dark:!bg-subDark !bg-white rounded-[14px] p-4 pl-0 pb-0' xs={ 24 } lg={ 15 }>
            <div>
              <div className='flex items-center justify-between px-4 mb-1'>
                <h2 className='text-lg font-semibold'>Sales Trends</h2>
                <div className='flex items-center gap-[10px]'>
                  <span className='font-medium text-sm dark:text-gray-200 text-gray-700'>Sort by:</span>
                  <Dropdown menu={ menuProps } className='dark:!text-white !text-zinc-800'>
                    <Button>
                      <Space>
                        { sortedValue }
                        <img src={ arrowDown } alt="down arrow" className={ 'header-icon' } />
                      </Space>
                    </Button>
                  </Dropdown>
                </div>
              </div>
              <ColumnChart LSTheme={ LSTheme } />
            </div>
          </Col>
          <Col className='flex flex-col gap-5 tab:pl-5 pt-5 tab:pt-0' xs={ 24 } lg={ 9 }>
            <div className='grid sm:grid-cols-2 tab:grid-cols-1 desktop:grid-cols-2 gap-4'>
              {
                stats.map(({ id, title, value, icon, options, increase }) => (
                  <StatsCard
                    key={ id }
                    title={ title }
                    value={ value }
                    icon={ icon }
                    options={ options }
                    increase={ increase } />
                ))
              }
            </div>
            <div className='grid sm:grid-cols-2 tab:hidden desktop:grid desktop:grid-cols-2 gap-4'>
              { bottomStats.map(({ id, title, value, icon, options, increase }) => (
                <StatsCard
                  key={ id }
                  title={ title }
                  value={ value }
                  icon={ icon }
                  options={ options }
                  increase={ increase } />
              ))
              }
            </div>


          </Col>
        </Row>
        <div className='hidden mt-5 tab:grid grid-cols-2 desktop:hidden gap-4'>
          { bottomStats.map(({ id, title, value, icon, options, increase }) => (
            <StatsCard
              key={ id }
              title={ title }
              value={ value }
              icon={ icon }
              options={ options }
              increase={ increase } />
          ))
          }
        </div>
        <Row className='dark:!text-white !text-zinc-800 mt-5'>
          <Col className='dark:!bg-subDark !bg-white rounded-[14px] p-4 pb-0' xs={ 24 } lg={ 15 }>
            <div className='flex items-center justify-between mb-[14px]'>
              <h2 className='text-lg font-semibold'>Last Orders</h2>
              <a href='/' className='text-primary text-lg font-medium hover:text-emerald-500 hover:underline transition-all ease-in-out duration-300'>See All</a>
            </div>
            <OrderTable />
          </Col>
          <Col className='flex flex-col gap-5 tab:pl-5 pt-5 tab:pt-0' xs={ 24 } lg={ 9 }>
            <Platform />
          </Col>
        </Row>
      </DashboardLayout>
    </ConfigProvider>
  );
}

export default App;
