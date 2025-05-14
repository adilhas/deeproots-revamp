import { CheckCircle, Landmark } from 'lucide-react';

const FoundationSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start mb-6">
        <div className="bg-purple-100 dark:bg-purple-500/10 p-3 rounded-lg mb-4 sm:mb-0 sm:mr-4">
          <Landmark className="w-8 h-8 text-purple-600 dark:text-purple-400" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-1">
          The Foundation of dRC
        </h2>
      </div>

      <div className="pl-0 sm:pl-14">
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
          Holding dRC means more than just owning tokens—it means owning a stake
          in the Foundation, the heart of Deep Roots.
        </p>

        <div className="bg-purple-100 dark:bg-gradient-to-r dark:from-purple-900/40 dark:to-blue-900/40 p-5 sm:p-6 rounded-xl mb-8 border border-purple-200 dark:border-purple-500/30">
          <p className="text-neutral-800 dark:text-white font-medium text-center text-base sm:text-lg">
            Anyone who holds dRC becomes part of the Foundation by default.
          </p>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
          Foundation Benefits:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            'High-Yield Passive Rewards',
            'Launchpad Share Allocation',
            'Foundation Voting Seats',
            'Multi-tier Referral Bonuses',
            'Enhanced GameFi Rewards',
            'Exclusive Ecosystem Access',
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-green-100 dark:bg-green-500/10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-gray-200 dark:bg-gray-700/50 p-4 sm:p-5 rounded-xl border-l-4 border-purple-500">
          <p className="text-gray-900 dark:text-white font-medium text-base sm:text-lg">
            Your tokens aren&apos;t just coins — they are keys to a powerful
            earning system and governance framework.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
