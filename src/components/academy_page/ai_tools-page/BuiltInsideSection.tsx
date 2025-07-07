import { BrainCircuit } from 'lucide-react';
import { BuiltInsideData } from './constant';

const BuiltInsideSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#0085a8]/10 to-[#ad1aaf]/10 dark:from-[#0085a8]/20 dark:to-[#ad1aaf]/20 p-8 rounded-3xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30 shadow-xl">
      <div className="flex flex-col md:flex-row gap-8 items-center w-fit mx-auto">
        <div className="flex-shrink-0 bg-white dark:bg-gray-800 p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-md">
          <BrainCircuit className="w-8 h-8 text-[#0085a8] dark:text-[#ad1aaf]" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Built Inside DeWorld
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            You&apos;ll find AI helping across every layer of DEEPROOTS:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {BuiltInsideData.map((item) => (
              <div key={item.text} className="flex items-center">
                <div className="mr-2">{item.icon}</div>
                <span className="text-gray-700 dark:text-gray-300">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 font-medium">
            Wherever you are — AI works quietly in the background, making things
            smoother, faster, and more personal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuiltInsideSection;
