import React from "react";

const Orders = () => {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center py-32">
      <p className="text-gray-700">You haven't placed any orders today</p>
      <button className="px-6 py-2 bg-blue-500 rounded-md cursor-pointer text-white">
        Get started
      </button>
    </div>
  );
};

export default Orders;
