import {
  Globe,
  Link,
  GraduationCap,
  FlaskConical,
  Fingerprint,
} from 'lucide-react';

import { IFooter } from '@/components/footer/types';

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

export const footerLinks: IFooter[] = [
  {
    title: 'RootAcademy',
    icon: <GraduationCap color="#34D399" size={44} />,
    link: '/academy',
    links: [
      { label: 'What is DEEPROOTS?', href: '/academy/about' },
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
      { label: 'DEEPROOTS Foundation', href: '#' },
      { label: 'The Address Wallet', href: 'https://theaddress.earth' },
      { label: 'Telexcoin DEX', href: 'https://telexcoin.earth' },
      { label: 'RootScan Explorer', href: 'https://rootscan.earth' },
      { label: 'RootChat – Web3 Messaging', href: 'https://rootchat.earth' },
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
