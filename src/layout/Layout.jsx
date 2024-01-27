import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import dark from '../assets/dark.svg';
import light from '../assets/light.svg';
import hide from '../assets/hide.png';
import useDarkMode from '../hooks/useDarkMode';
import { bottomMenu, menu } from '../data/menu';
import { Button, Layout, Menu } from 'antd';
import DashboardHeader from '../components/Header';
const { Content, Sider } = Layout;

const DashboardLayout = ({ LSTheme, setLSTheme, ...props }) => {
  // const {
  //   token: { grey, lightGrey, primary, borderRadius, mainDark, subDark },
  // } = theme.useToken();
  const { setTheme } = useDarkMode();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState('1');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Keep track of active/selected menu item
  const handleMenuClick = ({ key }) => {
    setSelectedKeys(key);
  };

  // Theme toggler function
  const handleToggleTheme = (theme) => {
    setTheme(theme);
    setLSTheme(theme);
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}>
      <Sider
        breakpoint='md'
        width={screenWidth < 768 ? 80 : 200}
        collapsedWidth={0}
        collapsed={collapsed}
        className='dark:!bg-subDark !bg-grey border-r dark:!border-r-transparent !border-r-[#EBECF2] !fixed h-full overflow-y-auto overflow-x-hidden z-30'>
        <div
          onClick={toggleSidebar}
          className='md:hidden p-5 rounded-full flex justify-center cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
          <img
            src={hide}
            alt='theme icon'
            className={`w-8 h-8 ${
              LSTheme === 'dark' ? 'toggle-icon' : 'dark-icon'
            }`}
          />
        </div>
        <div className='grid place-content-center py-5'>
          <img src={logo} alt='logo icon' className='w-10 h-10' />
        </div>
        <Menu
          theme='light'
          className='dark:!bg-subDark !bg-grey border-r dark:!border-gray-900 !border-[#EBECF2]'
          style={{
            marginTop: '10px',
          }}
          defaultSelectedKeys={['1']}
          onClick={handleMenuClick}
          selectedKeys={[selectedKeys]}
          mode='inline'
          items={menu}
        />
        <div className='flex flex-col md:flex-row p-2 rounded-[100px] bg-white items-center max-w-[50px] md:max-w-[100px] gap-4 md:justify-between mx-auto md:mx-6 '>
          <div
            className={`cursor-pointer rounded-full p-[7px] ${
              LSTheme === 'light' ? ' bg-primary' : ''
            }`}
            onClick={() => {
              handleToggleTheme('light');
            }}>
            <img
              src={light}
              alt='theme icon'
              className={`w-[16.88px] h-[16.88px] ${
                LSTheme === 'light' ? 'toggle-icon' : 'dark-icon'
              }`}
            />
          </div>
          <div
            className={`cursor-pointer rounded-full p-[7px] ${
              LSTheme === 'dark' ? 'bg-primary' : ''
            }`}
            onClick={() => {
              handleToggleTheme('dark');
            }}>
            <img
              src={dark}
              alt='theme icon'
              className={`w-[16.88px] h-[16.88px] ${
                LSTheme === 'dark' && 'toggle-icon'
              }`}
            />
          </div>
        </div>
        <Menu
          theme='light'
          className='dark:!bg-subDark !bg-grey border-r dark:!border-gray-900 !border-[#EBECF2] mt-10 [@media(min-height:740px)]:fixed [@media(min-height:740px)]:bottom-10 [@media(min-height:740px)]:w-[200px] [@media(min-height:740px)_and_(max-width:768px)]:!w-[80px]'
          mode='inline'
          selectedKeys={[selectedKeys]}
          items={bottomMenu}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <DashboardHeader
          LSTheme={LSTheme}
          toggleSidebar={toggleSidebar}
          collapsed={collapsed}
        />
        <Content>
          <div
            className={`dark:bg-mainDark bg-lightGrey ${
              !collapsed && '!ml-[80px] md:!ml-[200px]'
            }`}
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 20,
              paddingTop: 125,
              minHeight: '100vh',
            }}>
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
