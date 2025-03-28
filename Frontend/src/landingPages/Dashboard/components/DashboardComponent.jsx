import React from "react";

const DashboardComponent = () => {
  return (
    <div className="p-8">
      <h1 className="border-b py-5 text-xl border-gray-300 text-gray-500 mb-10">
        Hi, User!
      </h1>

      <h2 className="text-lg text-gray-500">Equity</h2>

      <div className="w-ful border-b border-gray-300 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-3/4 text-xl  text-gray-500 py-14">
          <div className="flex-col space-y-5 lg:border-r-2 border-gray-300 flex items-center justify-center">
            <p className="text-4xl">3.74k</p>
            <p className="text-xs">Margin available</p>
          </div>

          <div className="text-xs space-y-2 flex items-center justify-center flex-col">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-lg text-gray-500">Holdings(13)</h2>

      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-3/4 text-xl text-gray-500 py-14">
          <div className="flex-col space-y-5 lg:border-r-2 border-gray-300 flex items-center justify-center">
            <p className="flex items-center justify-center text-green-500">
              <span className="text-4xl">1.55k</span>
              <span className="text-xs">+5.20%</span>
            </p>
            <p className="text-xs">P&L</p>
          </div>

          <div className="text-xs space-y-2 flex items-center justify-center flex-col">
            <p>Current value 31.43k</p>
            <p>Investment 29.88k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
