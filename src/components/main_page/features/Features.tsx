import { getFeaturesCardItems } from '@/constants/featuresSectionData';
import { useThemeContext } from '@/context/ThemeContext';
import { useTranslation } from 'next-i18next';

const Features = () => {
  const { isDark } = useThemeContext();
  const { t } = useTranslation('landing_page');

  const features = getFeaturesCardItems(t);

  return (
    <main className="relative py-10 md:py-20 flex flex-col items-center dark:bg-[#161616] bg-[#e8e8e9] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl px-4 w-fit">
        {features.map((card, index) => (
          <div key={index} className="flex items-center space-x-4 p-4">
            <div className="flex-shrink-0">
              {isDark ? card.icon : card.lightIcon}
            </div>
            <div>
              <h2 className="font-orbitron text-lg font-bold bg-gradient-to-r from-[#AD1AAF] via-[#0085a8] to-neutral-500 dark:to-neutral-500 bg-clip-text text-transparent">
                {card.title}
              </h2>
              <p className="text-lg font-sans text-neutral-700 dark:text-neutral-300 mt-1">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Features;
