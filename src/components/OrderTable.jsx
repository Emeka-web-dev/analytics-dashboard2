import { Modal, Table, Tooltip } from 'antd';
import View from '../assets/view.svg';
import Marcus from '../assets/marcus.svg';
import Jaydon from '../assets/jaydon.svg';
import Corey from '../assets/corey.svg';
import Cooper from '../assets/cooper.svg';
import Phillip from '../assets/phillip.svg';
import { useState } from 'react';
import OrderModal from './OrderModal';

const OrderTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dataSource = [
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
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // fixed: 'left',
      ellipsis: {
        showTitle: false,
      },
      render: (name) => (
        <Tooltip placement='topLeft' title={name}>
          {name}
        </Tooltip>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      sorter: (a, b) => {
        const amountA = parseFloat(
          a.amount.props.children.replace(/[^0-9.-]+/g, '')
        );
        const amountB = parseFloat(
          b.amount.props.children.replace(/[^0-9.-]+/g, '')
        );
        return amountA - amountB;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filters: [
        {
          text: 'Paid',
          value: 'Paid',
        },
        {
          text: 'Refund',
          value: 'Refund',
        },
      ],
      onFilter: (value, record) =>
        record.status.props.children.indexOf(value) === 0,
      sorter: (a, b) =>
        a.status.props.children.length - b.status.props.children.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Invoice',
      dataIndex: '',
      key: 'x',
      fixed: 'right',
      width: 100,
      render: () => (
        <div
          onClick={showModal}
          className='cursor-pointer flex hover:text-primary transition ease-in-out duration-300 items-center gap-[6px] text-sm'>
          <img src={View} alt='view icon' className='w-4 h-4 header-icon' />
          <span>View</span>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
          hideOnSinglePage: true,
        }}
        scroll={{
          y: 300,
          x: 700,
        }}
      />
      <OrderModal handleOk={handleOk} isModalOpen={isModalOpen} handleCancel={handleCancel} />
    </>
  );
};

export default OrderTable;
