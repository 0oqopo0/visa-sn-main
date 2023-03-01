import React from 'react';
import { Header } from '../components';

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-3 md:m-3 mt-24 p-2 md:p-10 bg-gray-400 rounded-3xl">
      <Header category="Page" title="Orders" />
    </div>
  );
};
export default Orders;
