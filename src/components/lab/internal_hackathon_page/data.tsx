import {
  Code2,
  FlaskConical,
  Gamepad2,
  Lightbulb,
  Rocket,
  ShieldPlus,
  Sparkles,
  Users,
} from 'lucide-react';
import { ReactNode } from 'react';

interface IHackathonFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface IHackathonOutcome {
  icon: ReactNode;
  text: string;
}

export const HackathonFeaturesData: IHackathonFeature[] = [
  {
    icon: <Lightbulb className="w-6 h-6 text-[#0085a8]" />,
    title: 'Unlock Hidden Ideas',
    description: 'Discover solutions already within our team',
  },
  {
    icon: <Users className="w-6 h-6 text-[#ad1aaf]" />,
    title: 'Cross-Functional Teams',
    description: 'Form instantly around shared visions',
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-[#0085a8]" />,
    title: 'Test & Learn Fast',
    description: 'Rapid iteration with real user focus',
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#ad1aaf]" />,
    title: 'From Spark to System',
    description: 'Turn concepts into working demos in 48 hours',
  },
];

// TODO this file to be removed

export const HackathonOutcomeData: IHackathonOutcome[] = [
  {
    icon: <Gamepad2 className="w-5 h-5 text-[#0085a8]" />,
    text: 'Game prototypes',
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#ad1aaf]" />,
    text: 'Referral systems',
  },
  {
    icon: <Code2 className="w-5 h-5 text-[#0085a8]" />,
    text: 'AI chat modules',
  },
  {
    icon: <ShieldPlus className="w-5 h-5 text-[#ad1aaf]" />,
    text: 'NFT utilities',
  },
];
