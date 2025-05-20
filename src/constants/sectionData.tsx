import { MenuSection } from '@/components/navbar/types';
import {
  ShoppingCart,
  Paintbrush,
  User,
  ShieldCheck,
  Smartphone,
  Sparkles,
  SlidersVertical,
  ShieldAlert,
  DollarSign,
  BadgeX,
  Hourglass,
  Lock,
  Globe,
  Zap,
  Eye,
  Link,
  Handshake,
  RefreshCcw,
  Wand,
  PiggyBank,
  Users,
  Clock3,
  Gamepad2,
  Wallet,
  GraduationCap,
  FlaskConical,
  Fingerprint,
  CheckCircle,
  ThumbsUp,
  Rocket,
} from 'lucide-react';

import { IFooter } from '@/components/footer/types';

export const menuSection: MenuSection[] = [
  {
    name: 'RootAcademy',
    subitems: [
      {
        title: 'What is Deep Roots?',
        description: `Deep Roots is not just a blockchain. It's a movement.`,

        link: '/academy/about',
      },
      {
        title: 'Share Value (Learn & Earn)',
        description: 'Learn, Create, Innovate – A DeWorld Education Hub.',

        link: ' https://sharevalue.earth',
      },
      {
        title: 'White Paper',
        description: "Explore DeWorld's white paper.",

        link: '/academy/whitepaper',
      },
      {
        title: 'Roadmap',
        description: 'Explore the roadmap',

        link: '/academy/roadmap',
      },
      {
        title: 'What is dRC (Native Currency)?',
        description: 'The foundational layer of DeWorld',
        link: '/academy/drc',
      },
      {
        title: 'Our Story',
        description:
          'We began with one mission: make blockchain simple and powerful.',

        link: '/our-story',
      },
    ],
  },
  {
    name: 'Rootlab',
    subitems: [
      {
        title: 'InnoFi',
        description: 'VOTE & FUND DeWorld',

        link: 'https://innofi.earth',
      },
      {
        title: 'InnoLaunch',
        description:
          'Empowering DeWorld Projects on the Deep Roots Blockchain.',

        link: 'https://innolaunch.earth',
      },
      {
        title: 'InnoFarm',
        description: 'The Web3 Job Marketplace.',

        link: 'https://innofarm.earth',
      },
      {
        title: 'Seeding',
        description: 'From Vision to Ownership',
        link: '/deworld/seeding',
      },
      {
        title: 'Internal Hackathon',
        description: 'Where Ideas Take Root',
        link: '/lab/internal-hackathon',
      },
    ],
  },
  {
    name: 'DeWorld',
    subitems: [
      {
        title: 'The Address Wallet',
        description: 'Warp Around Wealth - 21 Layers of Dynamic Finance.',
        link: 'https://theaddress.earth',
      },
      {
        title: 'TelexCoin DEX',
        description: 'Unlock the future of Finance.',
        link: 'https://telexcoin.earth',
      },
      {
        title: 'Foundation',
        description: 'Join The Movement',
        link: '#',
      },
      {
        title: 'DeepAssets',
        description: 'Transforming Real-World Assets into Digital Value.',
        link: 'https://deepassets.earth',
      },

      {
        title: 'MetaFabric',
        description: 'Blockchain to Runway Your Style.',
        link: 'https://metafabric.earth',
      },
      {
        title: 'GiveFi',
        description: 'Empowering Non-profits through transparent giving',
        link: 'https://givefi.earth',
      },
    ],
  },
  {
    name: 'RootIdentity',
    subitems: [
      {
        title: 'OceanBazaar',
        description: 'The NFT Marketplace',
        link: 'https://oceanbazaar.earth',
      },
      {
        title: 'RootScan',
        description: 'Deep Roots Blockchain Explorer',
        link: 'https://rootscan.earth',
      },

      {
        title: 'RootChat',
        description: 'The First Hybrid CALL & Messaging App',
        link: 'https://rootchat.earth',
      },

      {
        title: 'Privacy Policy',
        description: `At Deep Roots, privacy is not a feature — it's a right.`,
        link: '/identity/privacy-policy',
      },
    ],
  },
  {
    name: 'RootConnect',
    subitems: [
      {
        title: 'Saxophone',
        description: 'Live Podcast For Blockchain Insights',
        link: 'https://saxophone.earth',
      },
      {
        title: 'Volunteer Program',
        description: 'Explore Volunteer program',

        link: '/connect/volunteer',
      },
      {
        title: 'Events & Meetups',
        description:
          'Deep Roots events are your chance to connect, learn, and grow with the community.',

        link: '/connect/events',
      },
      {
        title: 'Social Media',
        description: 'Be part of the team with creativity and collaboration.',

        link: '#',
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
    title: 'Get dRC Token (Deeproots Coin):',
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

export const deepAssetsFeatures = [
  {
    title: 'Tokenization',
    description: 'Convert real-world value into digital ownership.',
  },
  {
    title: 'DeFi Access',
    description: 'Unlock global financial.',
  },
  {
    title: 'Secure Transactions',
    description: 'Powering real estate, supply transaction.',
  },
  {
    title: 'Transparency & Trust',
    description: 'Ensure authenticity in every transaction.',
  },
  {
    title: 'Digital Identity',
    description: 'Secure, verifiable records for a trusted future',
  },
];

export const useCasesData = [
  {
    title: 'High-Frequency Trading & DEX',
    description: 'Lightning-fast execution.',
    icon: (
      <svg
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"></path>
      </svg>
    ),
  },
  {
    title: 'Asset Tokenization',
    description: 'Trade fractional real-world assets.',
    icon: (
      <svg
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"></path>
      </svg>
    ),
  },
  {
    title: 'Low-Cost Transactions',
    description: 'Micro-payments with minimal fees.',
    icon: (
      <svg
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 640 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z"></path>
      </svg>
    ),
  },
  {
    title: 'Truly Dynamic Blockchain',
    description: 'Borderless, scalable, and adaptable.',
    icon: (
      <svg
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
      </svg>
    ),
  },
  {
    title: 'GameFi with Rootopia',
    description: 'Elevating blockchain gaming.',
    icon: (
      <svg
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 640 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"></path>
      </svg>
    ),
  },
  {
    title: 'Seeding & Foundation',
    description: 'Fueling ecosystem growth.',
    icon: (
      <svg
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"></path>
      </svg>
    ),
  },
  {
    title: 'Referral & Rewards',
    description: 'Earn by expanding the network.',
    icon: (
      <svg
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 640 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
      </svg>
    ),
  },
  {
    title: 'Secure Digital Wallet',
    description: 'Manage dRC, RWA & more.',
    icon: (
      <svg
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
      </svg>
    ),
  },
  {
    title: 'Limited Coin Utility',
    description: 'Exclusive access & governance.',
    icon: (
      <svg
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"></path>
      </svg>
    ),
  },
  {
    title: 'Cross-Border Payments',
    description: 'Fast, low-cost global transfers.',
    icon: (
      <svg
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 496 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
      </svg>
    ),
  },
  {
    title: 'Education & AI Tools',
    description: 'Learning, AI solutions, and tools.',
    icon: (
      <svg
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 640 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"></path>
      </svg>
    ),
  },
  {
    title: 'NFTs & Fashion',
    description: 'Digital art, trends, and style.',
    icon: (
      <svg
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M133.3 33.41L77.89 47.25 34.6 148.3l33.29 22.2 27.46-54.9 17.05 4.9-15.07 150.1H245.2l9.2-87.9.9-8.1h4.5l-5.4-54.1 17.1-4.9 27.4 54.9 33.3-22.2-43.3-101.05-55.4-13.84c-5.5 3.87-12.2 6.21-19.5 7.95-9.4 2.21-20 3.24-30.6 3.24-10.6 0-21.2-1.03-30.6-3.24-7.3-1.74-14-4.07-19.5-7.95zM271.5 192.6l-1.5 14h178.8l-1.5-14zm-3.4 32l-26.7 254h62.7l46.5-216.9h17.6l46.5 216.9h62.7l-26.7-254z"></path>
      </svg>
    ),
  },
  {
    title: 'DeWorld Show',
    description: 'Web3 discussions and insights.',
    icon: (
      <svg
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 18V20H17V22H7V20H11V18H3C2.44772 18 2 17.5523 2 17V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V17C22 17.5523 21.5523 18 21 18H13ZM4 5V16H20V5H4ZM10 7.5L15 10.5L10 13.5V7.5Z"></path>
      </svg>
    ),
  },
  {
    title: 'Fuel Innovation & More',
    description: 'Tech, creativity, and growth.',
    icon: (
      <svg
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M422.559,159.71a27.379,27.379,0,0,0-13.866-23.337,26.42,26.42,0,0,0-26.211.133L73.943,314.647V176.261a11.955,11.955,0,0,1,6.047-10.34L218.066,86.208a12.153,12.153,0,0,1,11.922.025l32.656,18.853L112.581,191.723v56L359.642,105.086,241.129,36.679c-10.992-6.129-22.3-6.255-33.8-.27l-164.6,95.026c-10.634,6.12-16.771,16.39-17.29,29.124l0,191.5c.17,10.135,5.08,18.672,13.474,23.428a27.037,27.037,0,0,0,26.736-.045L374.057,197.376V335.657a11.976,11.976,0,0,1-5.92,10.368L230.025,425.77a12.175,12.175,0,0,1-11.937.062l-32.723-18.9,150.051-86.627v-56L88.367,406.932l118.794,68.583a33.88,33.88,0,0,0,34.25-.327l164.527-94.995c10.746-6.631,16.649-17.118,16.624-29.528Z"></path>
      </svg>
    ),
  },
  {
    title: 'Vote & Fund',
    description: 'Support, invest, and decide',
    icon: (
      <svg
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m9 12 2 2 4-4"></path>
        <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"></path>
        <path d="M22 19H2"></path>
      </svg>
    ),
  },
];

export const innofiFeatures = [
  {
    icon: <Users className="text-9xl text-[#fb7087]" />,
    title: 'Community-Driven Innovation',
    description: 'Fund and vote on projects shaping DeWorld’s future.',
  },
  {
    icon: <CheckCircle className="text-9xl text-[#fb7087]" />,
    title: 'Milestone-Based Funding',
    description: 'Support projects at key stages and track progress.',
  },
  {
    icon: <ThumbsUp className="text-9xl text-[#fb7087]" />,
    title: 'Democratic Approval',
    description: 'Community votes to approve or reject innovative ideas.',
  },
  {
    icon: <Rocket className="text-9xl text-[#fb7087]" />,
    title: 'Empowering Creators',
    description: 'Back innovators and help bring their projects to life.',
  },
  {
    icon: <Eye className="text-9xl text-[#fb7087]" />,
    title: 'Transparency & Control',
    description:
      'Manage investments and influence project outcomes with full transparency.',
  },
  {
    icon: <Wallet className="text-9xl text-[#fb7087]" />,
    title: 'Secure Wallet Integration',
    description:
      'Seamlessly connect your wallet for secure funding and voting.',
  },
];

export const metafabricFeatures = [
  {
    icon: <ShoppingCart className="text-blue-500 w-12 h-12 mr-3" />,
    text: 'NFT Marketplace: Buy, sell, and trade digital art designed for fashion.',
  },
  {
    icon: <Paintbrush className="text-[#ee49fc] w-12 h-12 mr-3" />,
    text: 'Custom Printing: Transform your NFTs into wearable fashion on clothes, accessories, and more.',
  },
  {
    icon: <User className="text-green-500 w-12 h-12 mr-3" />,
    text: 'Designer Collaboration: Connect with top designers to create custom fashion pieces.',
  },
  {
    icon: <ShieldCheck className="text-yellow-500 w-12 h-12 mr-3" />,
    text: 'Fashion Meets Blockchain: Own unique fashion that’s verified and secured on the blockchain.',
  },
  {
    icon: <Smartphone className="text-[#9a37f0] w-12 h-12 mr-3" />,
    text: 'Seamless Experience: Shop, design, and print directly from the MetaFabric platform.',
  },
  {
    icon: <Sparkles className="text-red-500 w-12 h-12 mr-3" />,
    text: 'Lifestyle Redefined: Wear your creativity and show off your digital art in the real world.',
  },
];

export const centralizedFeatures = [
  { icon: <SlidersVertical />, label: 'Controlled' },
  { icon: <ShieldAlert />, label: 'Limited' },
  { icon: <DollarSign />, label: 'Risky' },
  { icon: <BadgeX />, label: 'Corruptible' },
  { icon: <DollarSign />, label: 'Expensive' },
  { icon: <Hourglass />, label: 'Inefficient' },
  { icon: <Lock />, label: 'Exclusive' },
];

export const decentralizedFeatures = [
  { icon: <Zap />, label: 'Empowered' },
  { icon: <Eye />, label: 'Transparent' },
  { icon: <Lock />, label: 'Secure' },
  { icon: <Link />, label: 'Trustless' },
  { icon: <Globe />, label: 'Global' },
  { icon: <Handshake />, label: 'Inclusive' },
  { icon: <RefreshCcw />, label: 'Resilient' },
];

export const foundationSeatsFeatures = [
  {
    icon: <Wand size={40} className="text-[#0085a5]" />,
    title: 'Earn from Every Project',
    description: 'Get a percentage of all new projects.',
  },
  {
    icon: <PiggyBank size={40} className="text-[#0085a5]" />,
    title: 'Passive Rewards (12%)',
    description: 'Automatically earn ecosystem rewards.',
  },
  {
    icon: <Users size={40} className="text-[#0085a5]" />,
    title: 'Referral Rewards',
    description: 'Earn by inviting users to join with multi-user referrals.',
  },
  {
    icon: <Clock3 size={40} className="text-[#0085a5]" />,
    title: 'Early Access',
    description: 'Exclusive whitelist and private project opportunities.',
  },
  {
    icon: <Gamepad2 size={40} className="text-[#0085a5]" />,
    title: 'RootOpia Game',
    description: 'Play and win BIG blockchain rewards.',
  },
  {
    icon: <Wallet size={40} className="text-[#0085a5]" />,
    title: 'Full Wallet Access',
    description: 'Unlock staking, launchpad, and ecosystem updates.',
  },
];

export const aboutItems = [
  {
    question: `Deeproot's Story`,
    link: '/our-story',
  },
  { question: 'What is DeepRoots?', link: '/academy/about' },
  {
    question: 'What is deWorld?',
    link: '/',
  },
  {
    question: 'What is dRC Native Currency',
    link: '/academy/drc',
  },
  {
    question: 'Deeproots Foundation Seats',
    link: '/',
  },
  {
    question: 'DeepRoots Whitepaper',
    link: '/',
  },
  {
    question: 'DeepRoots Roadmap',
    link: '/',
  },
];

export const footerLinks: IFooter[] = [
  {
    title: 'RootAcademy',
    icon: <GraduationCap color="#34D399" size={44} />,
    link: '/academy',
    links: [
      { label: 'What is Deep Roots?', href: '/academy/about' },
      { label: 'What is dRC (Native Currency)?', href: '/academy/drc' },
      { label: 'White Paper', href: '#' },
      { label: 'Learn & Earn – ShareValue', href: 'https://sharevalue.earth' },
      { label: 'RootOpia GameFi', href: '#' },
      { label: 'DeEducation', href: '#' },
      { label: 'AI Tools', href: '/academy/ai-tools' },
      { label: 'Smart Contracts', href: '/academy/smart-contract' },
      { label: 'Gas Fees', href: '/academy/gas-fees' },
      { label: 'Roadmap', href: '/academy/roadmap' },
    ],
    hoverColor: 'hover:text-green-300',
  },
  {
    title: 'RootLab',
    icon: <FlaskConical color="#60A5FA" size={44} />,
    link: '/lab',
    links: [
      { label: 'InnoFi – Fund & Vote', href: 'https://innofi.earth' },
      { label: 'InnoLaunch – IDO Platform', href: 'https://innolaunch.earth' },
      { label: 'InnoFarm – Web3 Jobs', href: 'https://innofarm.earth' },
      { label: 'Internal Hackathon', href: '/lab/internal-hackathon' },
      { label: 'Foundation Seats', href: '/lab/foundation-seats' },
      { label: 'RootOpia Reward System', href: '#' },
      { label: 'Token', href: '/lab/tokenomics' },
      { label: 'Smart Contract', href: '#' },
      { label: 'DeVote', href: '#' },
    ],
    hoverColor: 'hover:text-blue-300',
  },
  {
    title: 'DeWorld',
    icon: <Globe color="#ad1aaf" size={44} />,
    link: '/dewrold',
    links: [
      { label: 'Deep Roots Foundation', href: '#' },
      { label: 'The Address Wallet', href: 'https://theaddress.earth' },
      { label: 'Telexcoin DEX', href: 'https://telexcoin.earth' },
      { label: 'RootScan Explorer', href: 'https://rootscan.earth' },
      { label: 'RootChat – Web3 Messaging', href: 'https://rootchat.earth' },
      // {
      //   label: 'DeepAssets – RWA Tokenization',
      //   href: 'https://deepassets.earth',
      // },
      // {
      //   label: 'OceanBazaar – NFT Marketplace',
      //   href: 'https://oceanbazaar.earth',
      // },
      // { label: 'MetaFabric – Wearable NFTs', href: 'https://metafabric.earth' },
      // { label: 'DEFI', href: '/deworld/defi' },
      { label: 'SEEDING Deworld', href: '/deworld/seeding' },
      { label: 'DeWorld Public Network', href: '/deworld/deworld-network' },
      { label: 'DeWorld Private Network', href: '/deworld/deworld-network' },
    ],
    hoverColor: 'hover:text-[#ad1aaf]',
  },
  {
    title: 'RootIdentity',
    icon: <Fingerprint color="#F87171" size={44} />,
    link: '/identity',
    links: [
      { label: 'MetaFabric – Style & ID', href: 'https://metafabric.earth' },
      { label: 'DeepAssets – Ownership', href: 'https://deepassets.earth' },
      { label: 'GiveFi – On-Chain Donations', href: 'https://givefi.earth' },
      { label: 'RootIdentity (DID coming soon)', href: '/identity/did' },
      { label: 'Ocean Bazaar NFT', href: 'https://oceanbazaar.earth' },
      { label: 'RWA', href: '/identity/assets' },
      { label: 'Privacy Policy', href: '/identity/privacy-policy' },
      { label: 'Terms of Service', href: '/identity/terms-of-service' },
    ],
    hoverColor: 'hover:text-[#F87171]',
  },
  {
    title: 'RootConnect',
    icon: <Link color="#FBBF24" size={44} />,
    link: '/connect',
    links: [
      { label: 'Saxophone – Podcast & News', href: 'https://saxophone.earth' },
      { label: 'Volunteer Program', href: '/connect/volunteer' },
      { label: 'Events & Meetups', href: '/connect/events' },
      { label: 'RootConnect (Community App)', href: '/connect/community' },
      { label: 'Social Media', href: '#' },
      { label: 'DeFashion', href: '#' },
      { label: 'Contact Us', href: '/connect/contact-us' },
    ],
    hoverColor: 'hover:text-[#FBBF24]',
  },
];
