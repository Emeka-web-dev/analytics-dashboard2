import dashboard from '../assets/dashboard.svg';
import analytics from '../assets/analytics.svg';
import customers from '../assets/customers.svg';
import inventory from '../assets/inventory.svg';
import discounts from '../assets/discount.svg';
import help from '../assets/help.svg';
import orders from '../assets/orders.svg';
import settings from '../assets/settings.svg';
import logout from '../assets/logout.svg';

export const menu = [
  {
    key: '1',
    label: 'Dashboard',
    icon: <img src={ dashboard } alt='dashboard icon' className='w-6 h-6 icon' />,
  },
  {
    key: '2',
    label: 'Analytics',
    icon: <img src={ analytics } alt='analytics icon' className='w-6 h-6 icon' />,
  },
  {
    key: '3',
    label: 'Customers',
    icon: <img src={ customers } alt='customers icon' className='w-6 h-6 icon' />,
  },
  {
    key: '4',
    label: 'Inventory',
    icon: <img src={ inventory } alt='inventory icon' className='w-6 h-6 icon' />,
  },
  {
    key: '5',
    label: 'Discounts',
    icon: <img src={ discounts } alt='discounts icon' className='w-6 h-6 icon' />,
  },
  {
    key: '6',
    label: 'Help',
    icon: <img src={ help } alt='help icon' className='w-6 h-6 icon' />,
  },
];

export const bottomMenu = [
  {
    key: '7',
    label: 'Orders',
    icon: <img src={ orders } alt='orders icon' className='w-6 h-6 icon' />,
  },
  {
    key: '8',
    label: 'Settings',
    icon: <img src={ settings } alt='settings icon' className='w-6 h-6 icon' />,
  },
  {
    key: '9',
    label: 'Sign Out',
    icon: <img src={ logout } alt='logout icon' className='w-6 h-6 icon' />,
  },
];