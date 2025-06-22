import React from 'react';
import { ShieldCheck, Code2, Smile, Globe } from 'lucide-react';
import { useTranslation } from 'next-i18next';

const icons = [
  <ShieldCheck key="shield" className="w-6 h-6 text-[#0085a8]" />,
  <Code2 key="code" className="w-6 h-6 text-[#ad1aaf]" />,
  <Smile key="smile" className="w-6 h-6 text-[#0085a8]" />,
  <Globe key="globe" className="w-6 h-6 text-[#ad1aaf]" />,
];

const COHPledge = () => {
  const { t } = useTranslation('code_of_honor');
  const pledges = t('pledges.items', { returnObjects: true }) as string[];

  return (
    <section className="mb-20 bg-gradient-to-br from-[#0085a8]/10 to-[#ad1aaf]/10 dark:from-[#0085a8]/20 dark:to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          {t('pledges.title')}
        </span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pledges.map((text, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800/70 p-4 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center"
          >
            <div className="mx-3">{icons[index]}</div>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              {text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-4">
          &quot;{t('pledges.quote')}&quot;
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          {t('pledges.subtext')}
        </p>
      </div>
    </section>
  );
};

export default COHPledge;
