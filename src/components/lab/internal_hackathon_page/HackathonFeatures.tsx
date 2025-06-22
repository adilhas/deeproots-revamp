import { FlaskConical, Lightbulb, Rocket, Users } from 'lucide-react';
import { ReactNode } from 'react';
import { useTranslation } from 'next-i18next';

interface IHackathonFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

const HackathonFeatures = () => {
  const { t } = useTranslation('connect/internal_hackathon');

  const HackathonFeaturesData: IHackathonFeature[] = [
    {
      icon: <Lightbulb className="w-6 h-6 text-[#0085a8]" />,
      title: t('features.unlock'),
      description: t('features.unlock_desc'),
    },
    {
      icon: <Users className="w-6 h-6 text-[#ad1aaf]" />,
      title: t('features.cross'),
      description: t('features.cross_desc'),
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-[#0085a8]" />,
      title: t('features.test'),
      description: t('features.test_desc'),
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#ad1aaf]" />,
      title: t('features.spark'),
      description: t('features.spark_desc'),
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          {t('features.title')}
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {HackathonFeaturesData.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl border ${
              index % 2 === 0 ? 'border-[#0085a8]/30' : 'border-[#ad1aaf]/30'
            } bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
          >
            <div className="flex items-start mb-3">
              <div className="mx-3 mt-0.5">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mx-9">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HackathonFeatures;
