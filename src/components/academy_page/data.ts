import { TFunction } from 'next-i18next';

interface ITopic {
  name: string;
  url: string;
  description: string;
  image: string;
}

export interface IAcademyTopics {
  title: string;
  description: string;
  topics: ITopic[];
  topicCardBg?: string;
  topicListBg?: string;
  borderColor?: string;
}

export const getAcademyTopicsData = (t: TFunction): IAcademyTopics[] => [
  {
    title: t('academy.sections.new.title'),
    description: t('academy.sections.new.description'),
    topics: [
      {
        name: t('academy.sections.new.topics.0.name'),
        description: t('academy.sections.new.topics.0.description'),
        image: '/academy/what-is-deeproots.png',
        url: '#',
      },
      {
        name: t('academy.sections.new.topics.1.name'),
        description: t('academy.sections.new.topics.1.description'),
        image: '/academy/what-is-drc.png',
        url: '#',
      },
      {
        name: t('academy.sections.new.topics.2.name'),
        description: t('academy.sections.new.topics.2.description'),
        image: '/academy/what-is-deeproots.png',
        url: '#',
      },
    ],
    topicCardBg: '#C7D2FE',
    topicListBg: '#EEF2FF',
    borderColor: '#A5B4FC',
  },
  {
    title: t('academy.sections.build.title'),
    description: t('academy.sections.build.description'),
    topics: [
      {
        name: t('academy.sections.build.topics.0.name'),
        description: t('academy.sections.build.topics.0.description'),
        image: '/academy/deworld-network.jpg',
        url: '#',
      },
      {
        name: t('academy.sections.build.topics.1.name'),
        description: t('academy.sections.build.topics.1.description'),
        image: '/academy/smart-contract.jpeg',
        url: '#',
      },
      {
        name: t('academy.sections.build.topics.2.name'),
        description: t('academy.sections.build.topics.2.description'),
        image: '/academy/what-is-deeproots.png',
        url: '#',
      },
    ],
    topicCardBg: '#FED7AA',
    topicListBg: '#FFF7ED',
    borderColor: '#FDBA74',
  },
  {
    title: t('academy.sections.creators.title'),
    description: t('academy.sections.creators.description'),
    topics: [
      {
        name: t('academy.sections.creators.topics.0.name'),
        description: t('academy.sections.creators.topics.0.description'),
        image: '/academy/what-is-deeproots.png',
        url: '#',
      },
      {
        name: t('academy.sections.creators.topics.1.name'),
        description: t('academy.sections.creators.topics.1.description'),
        image: '/academy/what-is-deeproots.png',
        url: '#',
      },
      {
        name: t('academy.sections.creators.topics.2.name'),
        description: t('academy.sections.creators.topics.2.description'),
        image: '/academy/what-is-deeproots.png',
        url: '#',
      },
    ],
    topicCardBg: '#E9D5FF',
    topicListBg: '#FAF5FF',
    borderColor: '#D8B4FE',
  },
];
