import { MenuSection } from '@/components/navbar/types';
import {
  BriefcaseIcon,
  CpuChipIcon,
  DocumentCheckIcon,
  FolderMinusIcon,
  InboxArrowDownIcon,
  MapIcon,
  PuzzlePieceIcon,
  ShareIcon,
  ShieldCheckIcon,
  UsersIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';

export const menuSection: MenuSection[] = [
  {
    name: 'Discover',
    subitems: [
      {
        title: 'Overview of Deep Roots',
        description: 'Deep Roots Overview.',
        icon: UsersIcon,
      },
      {
        title: 'The Address Wallet – Your Earning Machine',
        description: 'Learn how to earn with The Address Wallet.',
        icon: WalletIcon,
      },
      {
        title: 'The Foundation Seat Member',
        description: 'Be Part of the Foundation.',
        icon: ShieldCheckIcon,
      },
      {
        title: 'White Paper',
        description: "Explore DeWorld's white paper.",
        icon: ShareIcon,
      },
      {
        title: 'Roadmap',
        description: "Check out DeWorld's roadmap.",
        icon: MapIcon,
      },
      {
        title: 'How to Get Started (Guides for New Users & Investors)',
        description: 'Guides for beginners and investors.',
        icon: BriefcaseIcon,
      },
    ],
  },
  {
    name: 'Innovate',
    subitems: [
      {
        title: 'Truly Dynamic Blockchain',
        description: 'The Next-Gen Blockchain.',
        icon: CpuChipIcon,
      },
      {
        title: 'Transforming Real-World Assets into Digital Value.',
        description: 'Explore digitized real assets.',
        icon: DocumentCheckIcon,
      },
      {
        title: 'InnoFi: Milestone Vote Hub for DeWorld Funding',
        description: 'Vote for DeWorld funding milestones.',
        icon: InboxArrowDownIcon,
      },
      {
        title:
          'MetaFabric: From Blockchain to Runway – Your Style, Your NFT DeWorld',
        description: 'Customize your style with MetaFabric NFTs.',
        icon: PuzzlePieceIcon,
      },
      {
        title: 'RootOpia: Where the Biggest Pool Race Meets DeWorld Gaming',
        description: 'Join the pool race in DeWorld Gaming.',
        icon: FolderMinusIcon,
      },
      {
        title:
          'SHARE VALUE: Learn, Create, Innovate – A DeWorld Education Tool for All',
        description: 'Education hub for learning and innovation.',
        icon: '',
      },
    ],
  },
  {
    name: 'DeWorld',
    subitems: [
      {
        title: 'DeWorld Currency to Wallet to DEX to Build Ecosystem',
        description: 'The next-gen dynamic blockchain.',
        icon: '',
      },
      {
        title: 'Transforming Real-World Assets into Digital Value',
        description: 'Explore digitized real assets.',
        icon: '',
      },
      {
        title: 'AI Tools',
        description: 'AI Tools are Easy to Use and Simple to Learn for DeWorld',
        icon: '',
      },
      {
        title:
          'MetaFabric: From Blockchain to Runway – Your Style, Your NFT DeWorld',
        description: 'Customize your style with MetaFabric NFTs.',
        icon: '',
      },
      {
        title: 'RootOpia: Where the Biggest Pool Race Meets DeWorld Gaming',
        description: 'Join the pool race in DeWorld Gaming.',
        icon: '',
      },
      {
        title:
          'SHARE VALUE: Learn, Create, Innovate – A DeWorld Education Tool for All',
        description: 'Education hub for learning and innovation.',
        icon: '',
      },
    ],
  },
  {
    name: 'Solution',
    subitems: [
      {
        title: 'Truly Dynamic Blockchain – Scalable and Secure',
        description: 'Next-gen blockchain with borderless scalability.',
        icon: '',
      },
      {
        title: 'Tokenomics – Long-Term Value',
        description: 'Limited supply over 41 years.',
        icon: '',
      },
      {
        title: 'The Address Wallet – Asset Management & Earnings Growth',
        description: 'Manage assets and grow earnings with DeWorld.',
        icon: '',
      },
      {
        title: 'Deep Assets RWA – Tokenized Real-World Assets',
        description: 'Fractional trading of tokenized real-world assets.',
        icon: '',
      },
      {
        title:
          'MetaFabric: From Blockchain to Runway – Your Style, Your NFT DeWorld',
        description: 'Customize your style with MetaFabric NFTs.',
        icon: '',
      },
      {
        title: 'Education - AI tools',
        description:
          'To learn, create, innovate, vote, fund, and launch the next big thing in DeWorld.',
        icon: '',
      },
      {
        title: 'HFT & DEX – Fast & Low-Cost Trading',
        description: 'Instant trades with low slippage and minimal fees.',
        icon: '',
      },
    ],
  },
  {
    name: 'Community',
    subitems: [
      {
        title: 'Saxophone Podcast – Where Blockchain Meets the Beat',
        description: 'Tune into blockchain insights with Saxophone Podcast.',
        icon: '',
      },
      {
        title:
          'MetaFabric: From Blockchain to Runway – Your Style, Your NFT DeWorld',
        description: 'Customize your style with MetaFabric NFTs.',
        icon: '',
      },
      {
        title: 'News & Events – Stay Updated',
        description: 'Get the latest news and upcoming events.',
        icon: '',
      },
      {
        title: 'Careers & Fun – Join the Movement',
        description: 'Be part of the team with creativity and collaboration.',
        icon: '',
      },
      {
        title: 'Social Media – Stay Connected',
        description: 'Connect for rewards, updates, and exclusive education.',
        icon: '',
      },
    ],
  },
];
