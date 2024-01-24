import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import dark from '../assets/dark.svg';
import light from '../assets/light.svg';
import useDarkMode from '../hooks/useDarkMode';
import { bottomMenu, menu } from '../data/menu';
import { Layout, Menu, theme } from 'antd';
import DashboardHeader from '../components/Header';
const { Content, Sider } = Layout;

const DashboardLayout = ({ ...props }) => {
  const {
    token: { grey, lightGrey, primary, borderRadius, mainDark, subDark },
  } = theme.useToken();

  const { setTheme } = useDarkMode();
  const [LSTheme, setLSTheme] = useState(localStorage.theme);
  const [selectedKeys, setSelectedKeys] = useState('1');

  const handleMenuClick = ({ key }) => {
    setSelectedKeys(key);
  };

  const handleToggleTheme = (theme) => {
    setTheme(theme);
    setLSTheme(theme);
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}>
      <Sider
        breakpoint='md'
        className='dark:!bg-subDark !bg-grey border-r dark:!border-r-gray-900 !border-r-[#EBECF2] !fixed h-full overflow-auto'>
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
          className='dark:!bg-subDark !bg-grey border-r dark:!border-gray-900 !border-[#EBECF2] mt-10'
          mode='inline'
          selectedKeys={[selectedKeys]}
          items={bottomMenu}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <DashboardHeader LSTheme={LSTheme} />
        <Content>
          <div
            className='dark:bg-mainDark bg-lightGrey !ml-[80px] md:!ml-[200px]'
            style={{
              padding: 24,
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
