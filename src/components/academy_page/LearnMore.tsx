'use client';

import React from 'react';
import TopicCard from './TopicCard';
import { useThemeContext } from '@/context/ThemeContext';
import { useTranslation } from 'next-i18next';

const LearnMore = () => {
  const { isDark } = useThemeContext();
  const { t } = useTranslation('learn_more');

  const rawTopics = t('learnMore.topics', { returnObjects: true });
  const topics: { name: string; description: string }[] = Array.isArray(
    rawTopics
  )
    ? (rawTopics as { name: string; description: string }[])
    : [];

  const colors = [
    {
      cardBg: '#C7D2FE',
      cardDarkBg: '#312E81',
      image: '/academy/what-is-deeproots.png',
    },
    {
      cardBg: '#FED7AA',
      cardDarkBg: '#7C2D12',
      image: '/academy/what-is-drc.png',
    },
    {
      cardBg: '#E9D5FF',
      cardDarkBg: '#581C87',
      image: '/academy/what-is-deeproots.png',
    },
    {
      cardBg: '#C7D2FE',
      cardDarkBg: '#312E81',
      image: '/academy/what-is-deeproots.png',
    },
  ];

  return (
    <div className="bg-[#F1F5F9] dark:bg-[#3F3F3F]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between py-8 gap-3 rounded-2xl">
        <div className="text-[#303030] dark:text-[#F8FAFC] w-[250px] p-4">
          <h2 className="text-2xl font-semibold font-orbitron">
            {t('learnMore.title')}
          </h2>
        </div>

        <div className="flex flex-row flex-nowrap overflow-x-auto gap-4 pl-2 hide-scrollbar">
          {topics.map((topic, index) => (
            <div key={index} className="max-w-[282px] w-full flex-shrink-0">
              <TopicCard
                name={topic.name}
                description={topic.description}
                image={colors[index]?.image || ''}
                url={'#'}
                className="h-full dark:text-[#F8FAFC]"
                titleClassName="dark:text-[#F8FAFC] text-[#303030]"
                style={{
                  background: !isDark
                    ? colors[index]?.cardBg
                    : colors[index]?.cardDarkBg,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
