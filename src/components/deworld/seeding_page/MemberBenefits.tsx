import { CheckCircle, Gift } from 'lucide-react';

const MemberBenefits = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <Gift className="w-8 h-8 text-[#0085a8] mr-3" />
        Your Foundation Member Benefits
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          'Lifetime Yield – 12% APY on your seeded dRC',
          'Multi-layer Referrals – active for 365 days',
          'Early Access – private deals, whitelists, testnets',
          'RootOpia GameFi – leaderboard status, exclusive NFTs',
          'Wallet Dashboard – live tracking of assets, rewards & referrals',
          'NFT Rare & Trading Access – directly inside your wallet',
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <CheckCircle className="w-6 h-6 text-[#ad1aaf] mr-3 mt-0.5" />
            <p className="text-gray-700 dark:text-gray-300">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemberBenefits;
