import { Modal } from 'antd';
import Logo from '../assets/logo.svg';

const OrderModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return (
    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div class='flex items-center justify-between mb-8'>
        <div class='flex items-center'>
          <img class='h-8 w-8 mr-2' src={Logo} alt='Logo' />
          <div class='text-gray-700 dark:text-gray-200 font-semibold text-lg'>
            Analytical Co.
          </div>
        </div>
        <div class='text-gray-700 dark:text-gray-200'>
          <div class='font-bold text-xl mb-2'>INVOICE</div>
          <div class='text-sm'>Date: {currentDate}</div>
          <div class='text-sm'>Invoice #: INV12345</div>
        </div>
      </div>
      <div class='border-b-2 border-gray-300 pb-8 mb-8'>
        <h2 class='text-2xl font-bold mb-4'>Bill To:</h2>
        <div class='text-gray-700 dark:text-gray-200 mb-2'>Justin Bergson</div>
        <div class='text-gray-700 dark:text-gray-200'>Justin@gmail.com</div>
      </div>
      <table class='w-full text-left mb-8'>
        <thead>
          <tr>
            <th class='text-gray-700 dark:text-gray-200 font-bold uppercase py-2'>
              Description
            </th>
            <th class='text-gray-700 dark:text-gray-200 font-bold uppercase py-2'>
              Quantity
            </th>
            <th class='text-gray-700 dark:text-gray-200 font-bold uppercase py-2'>
              Price
            </th>
            <th class='text-gray-700 dark:text-gray-200 font-bold uppercase py-2'>
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class='py-4 text-gray-700 dark:text-gray-200'>Product 1</td>
            <td class='py-4 text-gray-700 dark:text-gray-200'>1</td>
            <td class='py-4 text-gray-700 dark:text-gray-200'>$100.00</td>
            <td class='py-4 text-gray-700 dark:text-gray-200'>$100.00</td>
          </tr>
          <tr>
            <td class='py-4 text-gray-700 dark:text-gray-200'>Product 2</td>
            <td class='py-4 text-gray-700 dark:text-gray-200'>2</td>
            <td class='py-4 text-gray-700 dark:text-gray-200'>$50.00</td>
            <td class='py-4 text-gray-700 dark:text-gray-200'>$100.00</td>
          </tr>
        </tbody>
      </table>
      <div class='flex justify-end mb-8'>
        <div class='text-gray-700 dark:text-gray-200 mr-2'>Subtotal:</div>
        <div class='text-gray-700 dark:text-gray-200'>$200.00</div>
      </div>
      <div class='text-right mb-8'>
        <div class='text-gray-700 dark:text-gray-200 mr-2'>Tax:</div>
        <div class='text-gray-700 dark:text-gray-200'>$25.50</div>
      </div>
      <div class='flex justify-end mb-8'>
        <div class='text-gray-700 dark:text-gray-200 mr-2'>Total:</div>
        <div class='text-gray-700 dark:text-gray-200 font-bold text-xl'>
          $225.50
        </div>
      </div>
      <div class='border-t-2 border-gray-300 pt-8 mb-8'>
        <div class='text-gray-700 dark:text-gray-200 mb-2'>
          Credit:{' '}
          <a
            href='https://tailwindflex.com/@007-davis'
            target='_blank'
            rel='noreferrer'>
            Elijah Davis
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default OrderModal;
