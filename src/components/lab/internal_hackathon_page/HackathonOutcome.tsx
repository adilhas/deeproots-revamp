import React from 'react';
import { Code2, Gamepad2, ShieldPlus, Sparkles } from 'lucide-react';
import { ReactNode } from 'react';
import { useTranslation } from 'next-i18next';

interface IHackathonOutcome {
  icon: ReactNode;
  key: string;
}

const HackathonOutcome = () => {
  const { t } = useTranslation('connect/internal_hackathon');

  const HackathonOutcomeData: IHackathonOutcome[] = [
    {
      icon: <Gamepad2 className="w-5 h-5 text-[#0085a8]" />,
      key: 'game',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#ad1aaf]" />,
      key: 'referral',
    },
    {
      icon: <Code2 className="w-5 h-5 text-[#0085a8]" />,
      key: 'ai',
    },
    {
      icon: <ShieldPlus className="w-5 h-5 text-[#ad1aaf]" />,
      key: 'nft',
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-800/90 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          {t('outcome.title')}
        </span>
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {HackathonOutcomeData.map((outcome, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4"
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${
                index % 2 === 0 ? 'bg-[#0085a8]/10' : 'bg-[#ad1aaf]/10'
              }`}
            >
              {outcome.icon}
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {t(`outcome.${outcome.key}`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HackathonOutcome;
