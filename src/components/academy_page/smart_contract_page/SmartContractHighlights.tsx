import { Cpu } from 'lucide-react';
import { highlights } from './constant';

const SmartContractHighlights = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 backdrop-blur-sm p-6 sm:p-10 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start mb-6">
        <div className="bg-[#ad1aaf]/10 dark:bg-[#ad1aaf]/20 p-3 rounded-lg mr-4 self-center mb-2 sm:mb-0">
          <Cpu className="w-8 h-8 text-[#ad1aaf]" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
          What Makes Our Smart Contracts Different?
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 pl-0 md:pl-14">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-5 rounded-xl border border-gray-200 dark:border-gray-600 transition-all duration-300"
          >
            <div className="flex items-center mb-2">
              <div className="mr-3 self-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 ml-9">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SmartContractHighlights;
