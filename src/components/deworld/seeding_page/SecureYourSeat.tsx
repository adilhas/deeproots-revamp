import { Lock } from 'lucide-react';

const SecureYourSeat = () => {
  return (
    <section className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm mb-12">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="bg-[#0085a8]/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center">
          <Lock className="w-8 h-8 text-[#0085a8]" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Secure Your Foundation Seat
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Be More Than an Investor — Be a Core Builder of DeWorld. Foundation
            Seats are limited and reserved for long-term builders shaping the
            decentralized future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecureYourSeat;
