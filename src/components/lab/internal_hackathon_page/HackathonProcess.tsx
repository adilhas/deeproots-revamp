import useLocaleDirection from '@/hooks/useLocaleDirection';
import { Puzzle } from 'lucide-react';
import { useTranslation } from 'next-i18next';

const HackathonProcess = () => {
  const { t } = useTranslation('connect/internal_hackathon');
  const { isArabic } = useLocaleDirection();

  const steps = [
    {
      strong: t('process.step1.strong'),
      text: t('process.step1.text'),
    },
    {
      strong: t('process.step2.strong'),
      text: t('process.step2.text'),
    },
    {
      strong: t('process.step3.strong'),
      text: t('process.step3.text'),
    },
    {
      strong: t('process.step4.strong'),
      text: t('process.step4.text'),
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#0085a8]/10 to-[#ad1aaf]/10 dark:from-[#0085a8]/20 dark:to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30 shadow-xl">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-shrink-0 bg-white dark:bg-gray-800 p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-md">
          <Puzzle className="w-8 h-8 text-[#0085a8] dark:text-[#ad1aaf]" />
        </div>
        <div>
          <h2
            className={`text-3xl  text-center font-bold text-gray-900 dark:text-white mb-4 ${isArabic ? 'text-right' : 'text-left'}`}
          >
            {t('process.title')}
          </h2>
          <ul className="grid grid-cols-1 md:grid-flow-col md:grid-rows-2 gap-4 text-gray-700 dark:text-gray-300">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span
                  className={`${
                    index % 2 === 0
                      ? 'bg-[#0085a8]/10 text-[#0085a8]'
                      : 'bg-[#ad1aaf]/10 text-[#ad1aaf]'
                  } rounded-full w-6 h-6 flex items-center justify-center mx-3 mt-0.5 flex-shrink-0`}
                >
                  {index + 1}
                </span>
                <span>
                  <strong>{step.strong}</strong> {step.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HackathonProcess;
