import {
  Zap,
  Coins,
  Vote,
  Network,
  Gamepad,
  Image as ImageIcon,
} from 'lucide-react';

export const drcUtilities = [
  {
    icon: <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: 'Gas for the Chain',
    desc: 'Every smart contract, DApp, or token transfer runs on dRC.',
  },
  {
    icon: <Coins className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
    title: 'Staking & Seeding',
    desc: 'Earn 12% APY, unlock Foundation rewards, and fuel the ecosystem.',
  },
  {
    icon: <Vote className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: 'Governance',
    desc: 'Vote on major decisions, upgrades, and platform initiatives.',
  },
  {
    icon: <Network className="w-6 h-6 text-green-600 dark:text-green-400" />,
    title: 'Referral System',
    desc: 'Multi-level reward trees designed for mass adoption.',
  },
  {
    icon: <Gamepad className="w-6 h-6 text-red-600 dark:text-red-400" />,
    title: 'GameFi Utility',
    desc: 'RootOpia and other products use dRC as core in-game currency.',
  },
  {
    icon: <ImageIcon className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
    title: 'NFT Marketplace',
    desc: 'Buy, sell, and trade NFTs directly with dRC.',
  },
];
