import React from 'react';
import TopicCard from './TopicCard';
import { useThemeContext } from '@/context/ThemeContext';

const Data = {
  title: 'Learn More',
  description: '',
  topics: [
    {
      name: 'What is Deeproots?',
      description:
        'We Launched Deeproots to provide a all in one solution on the first dynamic blockchain',
      image: '/academy/what-is-deeproots.png',
      url: '#',
      cardBg: '#C7D2FE',
      cardDarkBg: '#312E81',
    },
    {
      name: 'What is dRC?',
      description:
        'The dRC token powers the DeepRoots ecosystem. Its the backbone of finance, security and structure',
      image: '/academy/what-is-drc.png',
      url: '#',
      cardBg: '#FED7AA',
      cardDarkBg: '#7C2D12',
    },
    {
      name: 'Gas Fees on dRC',
      description: `In Deep Roots, gas fees aren't a barrier — they're a gateway to affordable blockchain access.`,
      image: '/academy/what-is-deeproots.png',
      url: '#',
      cardBg: '#E9D5FF',
      cardDarkBg: '#581C87',
    },
    {
      name: 'What is Deeproots?',
      description:
        'We Launched Deeproots to provide a all in one solution on the first dynamic blockchain',
      image: '/academy/what-is-deeproots.png',
      url: '#',
      cardBg: '#C7D2FE',
      cardDarkBg: '#312E81',
    },
  ],
};

const LearnMore = () => {
  const { isDark } = useThemeContext();
  return (
    <div className="bg-[#F1F5F9] dark:bg-[#3F3F3F]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between py-8 gap-3 rounded-2xl">
        <div className="text-[#303030] dark:text-[#F8FAFC] w-[250px] p-4">
          <h2 className="text-2xl font-semibold font-orbitron">Learn More</h2>
        </div>
        <div className="flex flex-row flex-nowrap overflow-x-auto gap-4 pl-2 hide-scrollbar">
          {Data.topics.map((topic) => (
            <div
              key={topic.name}
              className="max-w-[282px] w-full flex-shrink-0"
            >
              <TopicCard
                name={topic.name}
                description={topic.description}
                image={topic.image}
                url={topic.url}
                className={`h-full dark:text-[#F8FAFC]`}
                titleClassName="dark:text-[#F8FAFC] text-[#303030]"
                style={{
                  background: !isDark ? topic.cardBg : topic.cardDarkBg,
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
