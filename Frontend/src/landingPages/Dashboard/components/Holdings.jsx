import React, { useEffect, useState } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/allholdings`
        );

        // console.log(res.data);

        setAllHoldings(res.data);
      } catch (error) {
        console.error("Error fetching holdings:", error);
      }
    };
    fetchHoldings();
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="p-8 w-full">
      <h2 className="my-4 font-semibold">Holdings ({allHoldings.length})</h2>

      <div className="overflow-x-auto text-sm mb-12">
        <table className="w-full border border-gray-300 text-center">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2">Instrument</th>
              <th className="px-4 py-2">Qty.</th>
              <th className="px-4 py-2">Avg. cost</th>
              <th className="px-4 py-2">LTP</th>
              <th className="px-4 py-2">Cur. val</th>
              <th className="px-4 py-2">P&L</th>
              <th className="px-4 py-2">Net chg.</th>
              <th className="px-4 py-2">Day chg.</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-green-500" : "text-red-500";
              const dayClass = stock.isLoss ? "text-red-500" : "text-green-500";

              return (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-4 py-2">{stock.name}</td>
                  <td className="px-4 py-2">{stock.qty}</td>
                  <td className="px-4 py-2">{stock.avg.toFixed(2)}</td>
                  <td className="px-4 py-2">{stock.price.toFixed(2)}</td>
                  <td className="px-4 py-2">{curValue.toFixed(2)}</td>
                  <td className={`px-4 py-2 font-semibold ${profClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`px-4 py-2 ${profClass}`}>{stock.net}</td>
                  <td className={`px-4 py-2 ${dayClass}`}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-around mb-10">
        <div className="text-center">
          <h5 className="text-xl font-semibold">
            29,875.<span className="text-sm">55</span>
          </h5>
          <p className="text-gray-500">Total investment</p>
        </div>

        <div className="text-center">
          <h5 className="text-xl font-semibold">
            31,428.<span className="text-sm">95</span>
          </h5>
          <p className="text-gray-500">Current value</p>
        </div>

        <div className="text-center">
          <h5 className="text-xl font-semibold text-green-500">
            1,553.40 <span className="text-sm">( +5.20% )</span>
          </h5>
          <p className="text-gray-500">P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </div>
  );
};

export default Holdings;
