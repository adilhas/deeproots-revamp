import {
  Globe,
  Lock,
  Users,
  Zap,
  BookOpen,
  CircleDollarSign,
  Gamepad,
  Rocket,
  Gift,
  Mic,
} from 'lucide-react';
import { TFunction } from 'next-i18next';
export const getProductData = (t: TFunction) => [
  {
    icon: <CircleDollarSign className="w-6 h-6" />,
    name: t('products.address'),
  },
  {
    icon: <Globe className="w-6 h-6" />,
    name: t('products.telex'),
  },
  {
    icon: <Gamepad className="w-6 h-6" />,
    name: t('products.rootopia'),
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    name: t('products.innolaunch'),
  },
  {
    icon: <Globe className="w-6 h-6" />,
    name: t('products.deworld'),
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    name: t('products.sharevalue'),
  },
  {
    icon: <CircleDollarSign className="w-6 h-6" />,
    name: t('products.deepassets'),
  },
  {
    icon: <Zap className="w-6 h-6" />,
    name: t('products.innofi'),
  },
  {
    icon: <Users className="w-6 h-6" />,
    name: t('products.innofarm'),
  },
  {
    icon: <Users className="w-6 h-6" />,
    name: t('products.metafabric'),
  },
  {
    icon: <Gift className="w-6 h-6" />,
    name: t('products.givefi'),
  },
  {
    icon: <Globe className="w-6 h-6" />,
    name: t('products.oceanbazaar'),
  },
  {
    icon: <Mic className="w-6 h-6" />,
    name: t('products.saxophone'),
  },
  {
    icon: <Lock className="w-6 h-6" />,
    name: t('products.rootchat'),
  },
];
