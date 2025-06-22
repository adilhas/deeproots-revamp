import {
  Zap,
  Coins,
  Vote,
  Network,
  Gamepad,
  Image as ImageIcon,
} from 'lucide-react';
import { TFunction } from 'i18next';

export const getDrcUtilities = (t: TFunction) => [
  {
    icon: <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    title: t('utilities.items.0.title'),
    desc: t('utilities.items.0.desc'),
  },
  {
    icon: <Coins className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
    title: t('utilities.items.1.title'),
    desc: t('utilities.items.1.desc'),
  },
  {
    icon: <Vote className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    title: t('utilities.items.2.title'),
    desc: t('utilities.items.2.desc'),
  },
  {
    icon: <Network className="w-6 h-6 text-green-600 dark:text-green-400" />,
    title: t('utilities.items.3.title'),
    desc: t('utilities.items.3.desc'),
  },
  {
    icon: <Gamepad className="w-6 h-6 text-red-600 dark:text-red-400" />,
    title: t('utilities.items.4.title'),
    desc: t('utilities.items.4.desc'),
  },
  {
    icon: <ImageIcon className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
    title: t('utilities.items.5.title'),
    desc: t('utilities.items.5.desc'),
  },
];
