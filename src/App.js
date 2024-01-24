import logo from './logo.svg';
import './index.css'
import DashboardLayout from './layout/Layout';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider
    theme={{
      token: {
        primary: "#34CAA5",
        secondary: "#0D062D",
        grey: "#F7F8FA",
        lightGrey: "#FAFAFA",
        borderRadius: '14px',
        mainDark: "#0D0F11",
        subDark: "#191D23"
      },
    }}
  >
      <DashboardLayout>
        <div className=" ">
        <p className='dark:!bg-subDark dark:text-white text-zinc-800 !bg-white'>hello guys</p>
        </div>
      </DashboardLayout>
    </ConfigProvider>
  );
}

export default App;
