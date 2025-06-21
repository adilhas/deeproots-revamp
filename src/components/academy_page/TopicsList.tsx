import React, { useRef } from 'react';
import TopicCard from './TopicCard';
import { ArrowRight } from 'lucide-react';
import { useThemeContext } from '@/context/ThemeContext';
import { IAcademyTopics } from './data';

const TopicsList = (props: IAcademyTopics) => {
  const { isDark } = useThemeContext();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="relative border  my-4 flex flex-col md:flex-row justify-between py-4 gap-3 rounded-2xl"
      style={{
        backgroundColor: isDark ? '#323336' : props.topicListBg,
        borderColor: isDark ? '#323336' : props.borderColor,
      }}
    >
      <div className="text-[#4B5563] dark:text-white w-[250px] p-4">
        <h2 className="text-3xl font-semibold font-orbitron">{props.title}</h2>
        <p className="mt-2 dark:text-[#E2E8F0]">{props.description}</p>
      </div>
      <div
        ref={scrollRef}
        className="flex flex-row flex-nowrap overflow-x-auto gap-4 pl-2 hide-scrollbar"
      >
        {props.topics.map((topic) => (
          <div key={topic.name} className="max-w-[282px] w-full flex-shrink-0">
            <TopicCard
              name={topic.name}
              description={topic.description}
              image={topic.image}
              url={topic.url}
              className={`h-full`}
              titleClassName="text-[#0F172A]"
              descriptionClassName="text-[#4B5563]"
              style={{ background: props.topicCardBg }}
            />
          </div>
        ))}
      </div>

      <div className="bg-white w-fit h-fit p-2 rounded-md cursor-pointer absolute top-[65%] md:top-1/2 md:-translate-y-1/2 right-5">
        <ArrowRight onClick={scrollRight} className="w-4 h-4 text-black" />
      </div>
    </div>
  );
};

export default TopicsList;
