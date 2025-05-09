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

export const heroSectionWords = [
  'FROM',
  'IMPOSSIBLE',
  'TO',
  'POSSIBLE',
  '-',
  'A',
  'PLATFORM',
  'FOR',
  'INNOVATIVE',
  'DEWORLD',
  'APPS',
  'ON',
  'THE',
  'FIRST',
  'TRULY',
  'DYNAMIC',
  'BLOCKCHAIN',
  'NETWORK.',
];

export const featuresCardItems = [
  {
    title: 'The Address Wallet:',
    description: 'Register now, Manage assets, build wealth.',
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        className="w-14 h-14 m-3 dark:text-[#ad1aa0]/80 text-[#0085a8]/80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Wallet">
          <g>
            <path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm1.5,9.93h-6.42a2,2,0,0,1,0-4h6.42Zm-6.42-5a3,3,0,0,0,0,6h6.42v2.44a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V6.565a1.5,1.5,0,0,1,1.5-1.5h14.87a1.5,1.5,0,0,1,1.5,1.5v2.43Z" />
            <circle cx="14.519" cy="11.996" r="1" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: 'Get DRC Token (Deeproots Coin):',
    description: 'Limited Supply, Distributed Over 41 Years - Here to Stay.',
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        className="w-14 h-14 m-3 dark:text-[#ad1aa0]/80 text-[#0085a8]/80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.288 7.908h-1.715v3.38h2.697v1.415h-2.697v3.38h1.799c.462 0 3.794.052 3.789-3.933-.005-3.984-3.232-4.242-3.873-4.242zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.472 18.481H8.126v-5.778H6.594v-1.415h1.532V5.511h3.73c.882 0 6.727-.183 6.727 6.594-.001 6.888-6.111 6.376-6.111 6.376z" />
      </svg>
    ),
  },
  {
    title: 'TelexCoin:',
    description: 'Join and grow the future of trading.',
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-14 h-14 m-3 dark:text-[#ad1aa0]/80 text-[#0085a8]/80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 8l.553 -.276a1 1 0 0 1 1.447 .894v6.382a2 2 0 0 0 2 2h.5a2.5 2.5 0 0 0 2.5 -2.5v-.5h-1" />
        <path d="M8 11h7" />
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      </svg>
    ),
  },
  {
    title: 'DeepRoots Network.',
    description:
      'The First Truly Dynamic, Scalable, and Borderless Blockchain.',
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 32 32"
        className="w-14 h-14 m-3 dark:text-[#ad1aa0]/80 text-[#0085a8]/80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 13 4 L 13 6 L 9 6 C 7.355469 6 6 7.355469 6 9 L 6 13 L 4 13 L 4 19 L 10 19 L 10 13 L 8 13 L 8 9 C 8 8.433594 8.433594 8 9 8 L 13 8 L 13 10 L 19 10 L 19 4 Z M 15 6 L 17 6 L 17 8 L 15 8 Z M 20 6 L 20 8 L 23 8 C 23.566406 8 24 8.433594 24 9 L 24 13 L 22 13 L 22 19 L 28 19 L 28 13 L 26 13 L 26 9 C 26 7.355469 24.644531 6 23 6 Z M 6 15 L 8 15 L 8 17 L 6 17 Z M 24 15 L 26 15 L 26 17 L 24 17 Z M 6 20 L 6 23 C 6 24.644531 7.355469 26 9 26 L 13 26 L 13 28 L 19 28 L 19 22 L 13 22 L 13 24 L 9 24 C 8.433594 24 8 23.566406 8 23 L 8 20 Z M 24 20 L 24 23 C 24 23.566406 23.566406 24 23 24 L 20 24 L 20 26 L 23 26 C 24.644531 26 26 24.644531 26 23 L 26 20 Z M 15 24 L 17 24 L 17 26 L 15 26 Z" />
      </svg>
    ),
  },
];
