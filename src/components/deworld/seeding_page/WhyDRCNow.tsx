import { CheckCircle, Rocket } from 'lucide-react';

const WhyDRCNow = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <Rocket className="w-8 h-8 text-[#ad1aaf] mr-3" />
        Why Seed dRC Now?
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          'Lifetime Rewards from every project built on DEEPROOTS',
          '12% Passive Income (APY) + WarpAround layered earnings',
          '365-Day Referral Program – multi-level income system',
          'Full Ecosystem Access – staking, launchpad, NFTs, DEX, GameFi',
          'GameFi Advantage – early entry into the $1M+ RootOpia prize pool',
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
            <p className="text-gray-700 dark:text-gray-300">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDRCNow;
