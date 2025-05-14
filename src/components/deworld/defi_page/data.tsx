import {
  Coins,
  RefreshCw,
  Layers,
  Users,
  Zap,
  Gift,
  Banknote,
  Globe,
  Clock,
} from 'lucide-react';
import { ReactNode } from 'react';

interface IDeFiFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface IDeFiBenefit {
  icon: ReactNode;
  text: string;
}

export const DeFiFeaturesData: IDeFiFeature[] = [
  {
    icon: <Coins className="w-6 h-6 text-[#0085a8]" />,
    title: 'Stake & Earn',
    description: 'Automatic rewards with dRC staking',
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-[#ad1aaf]" />,
    title: 'Secure Swaps',
    description: 'Token exchanges in seconds',
  },
  {
    icon: <Layers className="w-6 h-6 text-[#0085a8]" />,
    title: 'Liquidity Mining',
    description: 'Share in network growth',
  },
  {
    icon: <Users className="w-6 h-6 text-[#ad1aaf]" />,
    title: 'Referral Earnings',
    description: 'Profit from community activity',
  },
  {
    icon: <Zap className="w-6 h-6 text-[#0085a8]" />,
    title: 'Early Access',
    description: 'Support projects pre-launch',
  },
  {
    icon: <Gift className="w-6 h-6 text-[#ad1aaf]" />,
    title: 'Seed Innovation',
    description: 'Earn from early-stage support',
  },
];

export const DeFiBenefitData: IDeFiBenefit[] = [
  {
    icon: <Banknote className="w-5 h-5 text-[#0085a8]" />,
    text: "Tools banks don't offer",
  },
  {
    icon: <Coins className="w-5 h-5 text-[#ad1aaf]" />,
    text: 'Rewards in your hands',
  },
  {
    icon: <Globe className="w-5 h-5 text-[#0085a8]" />,
    text: 'Global opportunities',
  },
  { icon: <Clock className="w-5 h-5 text-[#ad1aaf]" />, text: '24/7 access' },
];
