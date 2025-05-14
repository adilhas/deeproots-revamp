import {
  Globe,
  Users,
  Code,
  Rocket,
  Shield,
  Key,
  BarChart2,
  EyeOff,
} from 'lucide-react';
import { ReactNode } from 'react';

interface NetworkFeature {
  icon: ReactNode;
  text: string;
}

export const publicFeatures: NetworkFeature[] = [
  {
    icon: <Users className="w-5 h-5" />,
    text: 'Everyday users (wallets, staking, GameFi, NFTs)',
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    text: 'Creators launching tokens, games, or digital assets',
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    text: 'Projects seeking visibility and adoption',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    text: 'Seamless onboarding without technical barriers',
  },
];

export const privateFeatures: NetworkFeature[] = [
  {
    icon: <Code className="w-5 h-5" />,
    text: 'Project teams managing smart contracts and token logic',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    text: 'Company admins using compliance tools',
  },
  {
    icon: <EyeOff className="w-5 h-5" />,
    text: 'Secure testing and audit environments',
  },
  {
    icon: <Key className="w-5 h-5" />,
    text: 'Identity systems before going public',
  },
];
