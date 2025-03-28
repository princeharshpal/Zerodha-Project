import React, { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/allpositions`
        );

        // console.log(res.data);

        setPositions(res.data);
      } catch (error) {
        console.error("Error fetching holdings:", error);
      }
    };
    fetchPositions();
  }, []);

  return (
    <div className="p-8 w-full">
      <h2 className="my-4 font-semibold">Positions ({positions.length})</h2>

      <div className="overflow-x-auto text-sm border border-gray-300">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Instrument</th>
              <th className="px-4 py-2">Qty.</th>
              <th className="px-4 py-2">Avg.</th>
              <th className="px-4 py-2">LTP</th>
              <th className="px-4 py-2">P&L</th>
              <th className="px-4 py-2">Chg.</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-green-500" : "text-red-500";
              const dayClass = stock.isLoss ? "text-red-500" : "text-green-500";

              return (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-4 py-2">{stock.product}</td>
                  <td className="px-4 py-2">{stock.name}</td>
                  <td className="px-4 py-2">{stock.qty}</td>
                  <td className="px-4 py-2">{stock.avg.toFixed(2)}</td>
                  <td className="px-4 py-2">{stock.price.toFixed(2)}</td>
                  <td className={`px-4 py-2 font-semibold ${profClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`px-4 py-2 ${dayClass}`}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
