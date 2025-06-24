import { ReactNode } from 'react';
import { CheckCircle2, Compass, AlertTriangle } from 'lucide-react';

interface ITermItem {
  icon: ReactNode;
  title: string;
  items: string[];
}
// TODO remove this file
export const termSections: ITermItem[] = [
  {
    icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
    title: 'What You Can Expect from Us',
    items: [
      'Access to decentralized tools designed to empower you',
      'Transparent communication and open updates',
      'Secure, permissionless infrastructure',
      'No hidden fees, trackers, or control mechanisms',
      'A commitment to innovation and user ownership',
    ],
  },
  {
    icon: <Compass className="w-6 h-6 text-blue-500" />,
    title: 'What We Expect from You',
    items: [
      'Use Deep Roots services respectfully and legally',
      "Don't exploit the network or other users",
      "Don't reverse-engineer or copy protected logic or code",
      'Respect the decentralized spirit — no spam, scams, or manipulation',
      'Understand that blockchain actions are final and non-reversible',
    ],
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    title: 'Important Disclaimers',
    items: [
      "We don't offer financial or legal advice",
      'All blockchain transactions are at your own risk',
      'Smart contract performance is subject to on-chain limitations',
      'Features and services may evolve without notice',
    ],
  },
];
