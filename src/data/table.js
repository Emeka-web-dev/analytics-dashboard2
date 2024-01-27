import Marcus from '../assets/marcus.svg';
import Jaydon from '../assets/jaydon.svg';
import Corey from '../assets/corey.svg';
import Cooper from '../assets/cooper.svg';
import Phillip from '../assets/phillip.svg';

export const dataSource = [
  {
    key: '1',
    name: (
      <div className='flex items-center gap-[10px]'>
        <img src={Marcus} alt='marcus' className='w-8 h-8' />
        <p className='truncate'>Marcus Bergson</p>
      </div>
    ),
    date: (
      <p className='text-neutral-500 dark:text-neutral-200'>Nov 15, 2023</p>
    ),
    amount: (
      <p className='text-slate-900 dark:text-slate-200 font-medium'>
        $80,000
      </p>
    ),
    status: <p className='text-primary'>Paid</p>,
    invoice: 'View',
  },
  {
    key: '2',
    name: (
      <div className='flex items-center gap-[10px]'>
        <img src={Jaydon} alt='jaydon' className='w-8 h-8' />
        <p className='truncate'>Jaydon Vaccaro</p>
      </div>
    ),
    date: (
      <p className='text-neutral-500 dark:text-neutral-200'>Nov 15, 2023</p>
    ),
    amount: (
      <p className='text-slate-900 dark:text-slate-200 font-medium'>
        $150,000
      </p>
    ),
    status: <p className='text-[#ED544E]'>Refund</p>,
    invoice: 'View',
  },
  {
    key: '3',
    name: (
      <div className='flex items-center gap-[10px]'>
        <img src={Corey} alt='corey' className='w-8 h-8' />
        <p className='truncate'>Corey Shleifer</p>
      </div>
    ),
    date: (
      <p className='text-neutral-500 dark:text-neutral-200'>Nov 14, 2023</p>
    ),
    amount: (
      <p className='text-slate-900 dark:text-slate-200 font-medium'>
        $87,000
      </p>
    ),
    status: <p className='text-primary'>Paid</p>,
    invoice: 'View',
  },
  {
    key: '4',
    name: (
      <div className='flex items-center gap-[10px]'>
        <img src={Cooper} alt='cooper' className='w-8 h-8' />
        <p className='truncate'>Cooper Press</p>
      </div>
    ),
    date: (
      <p className='text-neutral-500 dark:text-neutral-200'>Nov 14, 2023</p>
    ),
    amount: (
      <p className='text-slate-900 dark:text-slate-200 font-medium'>
        $100,000
      </p>
    ),
    status: <p className='text-[#ED544E]'>Refund</p>,
    invoice: 'View',
  },
  {
    key: '5',
    name: (
      <div className='flex items-center gap-[10px]'>
        <img src={Phillip} alt='phillip' className='w-8 h-8' />
        <p className='truncate'>Phillip Lubin</p>
      </div>
    ),
    date: (
      <p className='text-neutral-500 dark:text-neutral-200'>Nov 13, 2023</p>
    ),
    amount: (
      <p className='text-slate-900 dark:text-slate-200 font-medium'>
        $78,000
      </p>
    ),
    status: <p className='text-primary'>Paid</p>,
    invoice: 'View',
  },
  {
    key: '6',
    name: (
      <div className='flex items-center gap-[10px]'>
        <img src={Marcus} alt='marcus' className='w-8 h-8' />
        <p className='truncate'>Alex Lubin</p>
      </div>
    ),
    date: (
      <p className='text-neutral-500 dark:text-neutral-200'>Nov 12, 2023</p>
    ),
    amount: (
      <p className='text-slate-900 dark:text-slate-200 font-medium'>
        $95,000
      </p>
    ),
    status: <p className='text-primary'>Paid</p>,
    invoice: 'View',
  },
];