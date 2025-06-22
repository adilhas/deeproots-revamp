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

//TODO: to be removed
export const AcademyTopicsData: IAcademyTopics[] = [
  {
    title: 'New To Deeproots?',
    description:
      'Explore Foundation knowledge about Deeproots Ecosystem. Learn about our solution and how we make Web3 solve real problems',
    topics: [
      {
        name: 'What is Deeproots?',
        description:
          'We Launched Deeproots to provide a all in one solution on the first dynamic blockchain',
        image: '/academy/what-is-deeproots.png',
        url: '#',
      },
      {
        name: 'What is dRC?',
        description:
          'The dRC token powers the DeepRoots ecosystem. Its the backbone of finance, security and structure',
        image: '/academy/what-is-drc.png',
        url: '#',
      },
      {
        name: 'Gas Fees on dRC',
        description: `In Deep Roots, gas fees aren't a barrier — they're a gateway to affordable blockchain access.`,
        image: '/academy/what-is-deeproots.png',
        url: '#',
      },
    ],
    topicCardBg: '#C7D2FE',
    topicListBg: '#EEF2FF',
    borderColor: '#A5B4FC',
  },
  {
    title: 'Build on Deeproots?',
    description:
      'Build on DeepRoot: Smart Contracts, SDK, APIs. Learn about how Deeproot Works right fro its infrastructure.',
    topics: [
      {
        name: 'DeWorld Networks',
        description: `Two Networks, One Ecosystem. Whether building publicly or privately, you're part of the same growing DeWorld.`,
        image: '/academy/deworld-network.jpg',
        url: '#',
      },
      {
        name: 'Smart Contracts',
        description: `In Deep Roots, smart contracts aren't just tools. They are self-executing agreements of trust designed to protect, empower, and scale a decentralized world.`,
        image: '/academy/smart-contract.jpeg',
        url: '#',
      },
      {
        name: 'What is Deeproots?',
        description:
          'We Launched Deeproots to provide a all in one solution on the first dynamic blockchain',
        image: '/academy/what-is-deeproots.png',
        url: '#',
      },
    ],
    topicCardBg: '#FED7AA',
    topicListBg: '#FFF7ED',
    borderColor: '#FDBA74',
  },

  {
    title: 'Creators',
    description:
      'Learn to be a creator on the Deep Root Ecosystem. Launch NFTs on Ocean Bazaar, build a community and experience creators Opportunities',
    topics: [
      {
        name: 'What is Deeproots?',
        description:
          'We Launched Deeproots to provide a all in one solution on the first dynamic blockchain',
        image: '/academy/what-is-deeproots.png',
        url: '#',
      },
      {
        name: 'What is Deeproots?',
        description:
          'We Launched Deeproots to provide a all in one solution on the first dynamic blockchain',
        image: '/academy/what-is-deeproots.png',
        url: '#',
      },
      {
        name: 'What is Deeproots?',
        description:
          'We Launched Deeproots to provide a all in one solution on the first dynamic blockchain',
        image: '/academy/what-is-deeproots.png',
        url: '#',
      },
    ],
    topicCardBg: '#E9D5FF',
    topicListBg: '#FAF5FF',
    borderColor: '#D8B4FE',
  },
];
