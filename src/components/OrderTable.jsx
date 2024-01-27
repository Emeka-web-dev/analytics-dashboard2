import { Table, Tooltip } from 'antd';
import { useState } from 'react';
import OrderModal from './OrderModal';
import { dataSource } from '../data/table';
import View from '../assets/view.svg';

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
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
