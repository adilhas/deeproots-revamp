import { Puzzle } from 'lucide-react';

const HackathonProcess = () => {
  return (
    <section className="bg-gradient-to-br from-[#0085a8]/10 to-[#ad1aaf]/10 dark:from-[#0085a8]/20 dark:to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30 shadow-xl">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-shrink-0 bg-white dark:bg-gray-800 p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-md">
          <Puzzle className="w-8 h-8 text-[#0085a8] dark:text-[#ad1aaf]" />
        </div>
        <div>
          <h2 className="text-3xl text-center md:text-left font-bold text-gray-900 dark:text-white mb-4">
            What Happens
          </h2>
          <ul className="grid grid-cols-1 md:grid-flow-col md:grid-rows-2 gap-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="bg-[#0085a8]/10 text-[#0085a8] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                1
              </span>
              <span>
                <strong>One weekend</strong> with a central challenge theme
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#ad1aaf]/10 text-[#ad1aaf] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                2
              </span>
              <span>
                <strong>Teams form organically</strong> across all disciplines
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#0085a8]/10 text-[#0085a8] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                3
              </span>
              <span>
                <strong>User-focused building</strong> with working demos
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#ad1aaf]/10 text-[#ad1aaf] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                4
              </span>
              <span>
                <strong>Best ideas go live</strong> in the DeWorld ecosystem
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HackathonProcess;
