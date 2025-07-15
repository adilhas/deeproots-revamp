import {
  Zap,
  Shield,
  Coins,
  User,
  Link,
  Gem,
  CircleDollarSign,
  Gauge,
  Sparkles,
  RefreshCw,
  Rocket,
  Leaf,
} from 'lucide-react';

//TODO this file to be removed
export const UtilityData = [
  {
    icon: <Zap className="w-8 h-8 text-[#0085a8]" />,
    title: 'Gas Fees — Powering DeWorld for Everyone',
    body: [
      'We believe access to the blockchain should be affordable, predictable, and fair.',
      "That's why our gas fees are fixed at just 0.0002  — no spikes, no surprises, no limits to what you can build or use.",
    ],
    iconBg: 'bg-[#0085a8]/10',
  },
  {
    icon: <CircleDollarSign className="w-8 h-8 text-[#ad1aaf]" />,
    title: 'Why 0.0002 Matters',
    grid: [
      {
        icon: <Coins className="w-6 h-6 text-[#0085a8]" />,
        title: 'Ultra Low-Cost',
        desc: 'Anyone can transact, no matter their wallet size',
      },
      {
        icon: <Shield className="w-6 h-6 text-[#ad1aaf]" />,
        title: 'Fair & Transparent',
        desc: 'No sudden surges or hidden costs',
      },
      {
        icon: <Gauge className="w-6 h-6 text-[#0085a8]" />,
        title: 'Easy for Builders',
        desc: 'Deploy and scale without worrying about fees',
      },
      {
        icon: <User className="w-6 h-6 text-[#ad1aaf]" />,
        title: 'Frictionless UX',
        desc: 'One price, across every smart contract, game, or app',
      },
      {
        icon: <Sparkles className="w-6 h-6 text-[#0085a8]" />,
        title: 'Encourages Growth',
        desc: 'More users, more actions, more possibilities',
      },
    ],
    iconBg: 'bg-[#ad1aaf]/10',
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-[#0085a8]" />,
    title: 'How It Works',
    list: [
      {
        icon: <div className="text-xl font-bold text-[#0085a8]">0.0002</div>,
        text: 'Fixed per transaction',
      },
      {
        icon: <Link className="w-5 h-5 text-[#ad1aaf]" />,
        text: 'Applies across the entire DeWorld ecosystem',
      },
      {
        icon: <Gem className="w-5 h-5 text-[#0085a8]" />,
        text: 'Collected in dRC, your native token',
      },
      {
        icon: <Zap className="w-5 h-5 text-[#ad1aaf]" />,
        text: 'Fuels smart contracts, staking, NFTs, trading, and more',
      },
      {
        icon: <Rocket className="w-5 h-5 text-[#0085a8]" />,
        text: 'Redirected to support rewards, seeding, and foundation income',
      },
    ],
    iconBg: 'bg-[#0085a8]/10',
  },
  {
    icon: <Leaf className="w-8 h-8 text-[#ad1aaf]" />,
    title: 'Built for the Future',
    body: [
      'While other chains compete over gas mechanics, DEEPROOTS keeps it simple, stable, and user-first.',
      'You focus on creating. We keep it moving.',
    ],
    iconBg: 'bg-[#ad1aaf]/10',
    highlight: true,
  },
  {
    icon: <Coins className="w-8 h-8 text-[#0085a8]" />,
    title: 'No Burn. No Waste.',
    body: [
      "In our first stage, there's no token burning — only circulation, utility, and fair redistribution.",
    ],
    iconBg: 'bg-[#0085a8]/10',
    specialBox: true,
  },
];
