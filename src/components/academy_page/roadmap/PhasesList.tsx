import React from 'react';
import PhaseCard from './PhaseCard';
import { useTranslation } from 'react-i18next';

const phaseStyles = [
  {
    bg: 'bg-[#E9D5FF]',
    border: 'border-[#C084FC]',
    titleBg: 'bg-[#F3E8FF] border-[#C084FC]',
    y: 'lg:translate-y-[10px]',
  },
  {
    bg: 'bg-[#D1E9FF]',
    border: 'border-[#53B1FD]',
    titleBg: 'bg-[#EFF8FF] border-[#84CAFF]',
    y: 'lg:translate-y-[110px]',
  },
  {
    bg: 'bg-[#BBF7D0]',
    border: 'border-[#34D399]',
    titleBg: 'bg-[#D1FAE5] border-[#34D399]',
    y: 'lg:translate-y-[110px]',
  },
  {
    bg: 'bg-[#FBCFE8]',
    border: 'border-[#8F8F8F]',
    titleBg: 'bg-[#FFE3F2] border-[#F472B6]',
    y: 'lg:translate-y-[100px]',
  },
  {
    bg: 'bg-[#FED7AA]',
    border: 'border-[#8F8F8F]',
    titleBg: 'bg-[#FFEDD5] border-[#FB923C]',
    y: 'lg:translate-y-[200px]',
  },
];

const PhasesList: React.FC = () => {
  const { t } = useTranslation('academy/roadmap');

  return (
    <section className="relative pt-32 lg:pb-16 px-3 max-w-[1200px] mx-auto z-10 lg:min-h-[3100px]">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold font-orbitron text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text w-fit mx-auto">
          {t('roadmap.title')}
        </h1>
        <div className="text-3xl font-bold font-orbitron text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text w-fit mx-auto mt-2">
          {t('roadmap.timeline')}
        </div>
      </div>

      <div className="flex justify-center lg:justify-end lg:max-w-[1000px] z-10">
        <div className="w-fit">
          {phaseStyles.map((styles, index) => {
            const phaseNum = index + 1;
            const isCurrent = phaseNum === 1;

            const data = t(`roadmap.phases.${phaseNum}`, {
              returnObjects: true,
            }) as {
              phase: string;
              title: string;
              subtitle: string;
              timeline: string;
              items: string[];
            };

            return (
              <PhaseCard
                key={phaseNum}
                className={`${styles.bg} my-8 lg:my-20 ${styles.y}`}
                innerContainerClassname={`border-1 ${styles.border} `}
                titleContainerClassname={styles.titleBg}
                phase={data.phase}
                title={data.title}
                subtitle={data.subtitle}
                timeline={data.timeline}
                items={data.items}
                isCurrent={isCurrent}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhasesList;
