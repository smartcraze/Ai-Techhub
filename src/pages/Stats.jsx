import React from "react";

function Stats() {
  return (
    <div className="bg-slate-950 py-12 sm:py-16 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12">Trusted by</h1>
        <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <dt className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-300">Transactions every 24 hours</dt>
            <dd className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2">44 million</dd>
          </div>
          <div className="flex flex-col items-center">
            <dt className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-300">Assets under holding</dt>
            <dd className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2">$119 trillion</dd>
          </div>
          <div className="flex flex-col items-center">
            <dt className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-300">New users annually</dt>
            <dd className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2">46,000</dd>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
