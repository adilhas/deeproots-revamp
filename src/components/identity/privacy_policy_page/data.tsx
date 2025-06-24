import { Lock, Shield, User, Key, Code, Check, X } from 'lucide-react';
import { ReactNode } from 'react';

interface IPrivacyItem {
  icon: ReactNode;
  text: string;
}
// TODO remove this file
export const dontDoList: IPrivacyItem[] = [
  {
    icon: <X className="w-5 h-5 text-red-500" />,
    text: "We don't track your behavior",
  },
  {
    icon: <X className="w-5 h-5 text-red-500" />,
    text: "We don't sell your data",
  },
  {
    icon: <X className="w-5 h-5 text-red-500" />,
    text: "We don't store personal information without your consent",
  },
  {
    icon: <X className="w-5 h-5 text-red-500" />,
    text: "We don't allow third-party tracking on our core products",
  },
];

export const doList: IPrivacyItem[] = [
  {
    icon: <Check className="w-5 h-5 text-green-500" />,
    text: "Store only what's needed — and only if you allow it",
  },
  {
    icon: <Check className="w-5 h-5 text-green-500" />,
    text: 'Use encrypted systems across all platforms',
  },
  {
    icon: <Check className="w-5 h-5 text-green-500" />,
    text: 'Offer anonymous or wallet-based access wherever possible',
  },
  {
    icon: <Check className="w-5 h-5 text-green-500" />,
    text: 'Let you manage your own data through decentralized identity (DID) tools',
  },
  {
    icon: <Check className="w-5 h-5 text-green-500" />,
    text: 'Use AI responsibly — with transparency, not intrusion',
  },
];

export const dataPractices: IPrivacyItem[] = [
  {
    icon: <Lock className="w-5 h-5 text-[#0085a8]" />,
    text: 'End-to-end encryption',
  },
  {
    icon: <Shield className="w-5 h-5 text-[#0085a8]" />,
    text: 'Minimal metadata',
  },
  {
    icon: <User className="w-5 h-5 text-[#0085a8]" />,
    text: 'Optional login across platforms',
  },
  {
    icon: <Code className="w-5 h-5 text-[#0085a8]" />,
    text: 'Open-source audits and smart contract transparency',
  },
  {
    icon: <Key className="w-5 h-5 text-[#0085a8]" />,
    text: 'Future DID and self-sovereign profile integration',
  },
];
