import {
  Zap,
  Settings,
  Coins,
  Vote,
  Network,
  Gamepad,
  Image as ImageIcon,
} from 'lucide-react';

const Data = [
  {
    icon: <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Gas for the Chain',
    desc: 'Every smart contract, DApp, or token transfer runs on dRC.',
  },
  {
    icon: <Coins className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
    title: 'Staking & Seeding',
    desc: 'Earn 12% APY, unlock Foundation rewards, and fuel the ecosystem.',
  },
  {
    icon: <Vote className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: 'Governance',
    desc: 'Vote on major decisions, upgrades, and platform initiatives.',
  },
  {
    icon: <Network className="w-6 h-6 text-green-600 dark:text-green-400" />,
    title: 'Referral System',
    desc: 'Multi-level reward trees designed for mass adoption.',
  },
  {
    icon: <Gamepad className="w-6 h-6 text-red-600 dark:text-red-400" />,
    title: 'GameFi Utility',
    desc: 'RootOpia and other products use dRC as core in-game currency.',
  },
  {
    icon: <ImageIcon className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
    title: 'NFT Marketplace',
    desc: 'Buy, sell, and trade NFTs directly with dRC.',
  },
];
const UtilitySection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start mb-6">
        <div className="bg-blue-100 dark:bg-blue-500/10 p-3 rounded-lg mb-4 sm:mb-0 sm:mr-4">
          <Settings className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-1">
          Designed for Purpose, Not Pump
        </h2>
      </div>
      <div className="pl-0 sm:pl-14">
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
          dRC isn&apos;t just a coin — it&apos;s a complete financial engine for
          a decentralized world with multiple utilities:
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {Data.map((item) => (
            <div
              key={item.title}
              className="bg-gray-200 dark:bg-gray-700/30 hover:bg-gray-300 dark:hover:bg-gray-700/50 p-4 sm:p-5 rounded-xl border border-gray-300 dark:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-center mb-2">
                <div className="mr-3 flex-shrink-0">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-400 ml-9 text-sm sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UtilitySection;
