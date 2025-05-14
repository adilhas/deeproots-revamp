import { Sprout } from 'lucide-react';

const TermsFinalNote = () => {
  return (
    <section className="bg-gradient-to-r from-[#0085a8]/10 to-[#ad1aaf]/10 dark:from-[#0085a8]/20 dark:to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30 text-center">
      <div className="flex flex-col items-center">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-md mb-4">
          <Sprout className="w-8 h-8 text-[#0085a8] dark:text-[#ad1aaf]" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Final Note
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
          Deep Roots is more than a service — it&apos;s a movement. By joining,
          you&apos;re part of something bigger. Use it wisely. Grow with it
          wildly.
        </p>
      </div>
    </section>
  );
};

export default TermsFinalNote;
