import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/dashboard/fetch-orders`
        );
        setOrders(res.data);
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div
      className={`w-full flex flex-col space-y-4 items-center ${
        orders.length > 0 ? "py-10" : "py-32"
      }`}
    >
      {orders.length > 0 ? (
        <div className="overflow-x-auto text-sm mb-6 lg:mb-12">
          <table className="w-full border border-gray-300 text-center">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="px-4 py-2">Name or Uid</th>
                <th className="px-4 py-2">Qty.</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Mode</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {orders.map((order, idx) => {
                return (
                  <tr>
                    <td className="p-1">{order.name}</td>
                    <td className="p-1">{order.qty}</td>
                    <td className="p-1">{order.price}</td>
                    <td className="p-1">{order.mode}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <p className="text-gray-700">You haven't placed any orders today</p>
          <button className="px-6 py-2 bg-blue-500 rounded-md cursor-pointer text-white">
            Get started
          </button>
        </>
      )}
    </div>
  );
};

export default Orders;
