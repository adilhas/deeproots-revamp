import { Wallet } from 'lucide-react';
import { tokenSupplyTableData } from './data';

const TokenSupplyOverview = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <Wallet className="w-8 h-8 text-[#0085a8] mr-3" />
        DEEPROOTS Token Supply Overview
      </h2>
      <div className="overflow-x-auto bg-white dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
        {/* Table layout for medium screens and up */}
        <table className="hidden md:table w-full text-left text-sm text-gray-700 dark:text-gray-300">
          <thead>
            <tr className="border-b text-lg border-gray-300 dark:border-gray-600">
              <th className="py-2 font-semibold">Allocation</th>
              <th className="py-2 font-semibold">Amount</th>
              <th className="py-2 font-semibold">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {tokenSupplyTableData.map(([name, amount, purpose], i) => (
              <tr
                key={i}
                className="border-t border-gray-200 dark:border-gray-700"
              >
                <td className="py-2">{name}</td>
                <td className="py-2">{amount}</td>
                <td className="py-2">{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile-friendly stacked cards */}
        <div className="md:hidden space-y-4">
          {tokenSupplyTableData.map(([name, amount, purpose], i) => (
            <div
              key={i}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300"
            >
              <div className="mb-1">
                <span className="font-semibold">Allocation: </span>
                {name}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Amount: </span>
                {amount}
              </div>
              <div>
                <span className="font-semibold">Purpose: </span>
                {purpose}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenSupplyOverview;
