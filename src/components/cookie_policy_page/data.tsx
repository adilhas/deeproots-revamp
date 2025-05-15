import { Check, Cookie, Lock, Settings, Shield } from 'lucide-react';

export const cookieUses = [
  {
    icon: <Settings className="w-6 h-6 text-[#0085a8]" />,
    text: 'Remember your preferences (like dark mode or language)',
  },
  {
    icon: <Lock className="w-6 h-6 text-[#ad1aaf]" />,
    text: 'Secure your session if you log in',
  },
  {
    icon: <Shield className="w-6 h-6 text-[#0085a8]" />,
    text: 'Understand site performance (basic analytics, privacy-respecting)',
  },
  {
    icon: <Cookie className="w-6 h-6 text-[#ad1aaf]" />,
    text: 'Simplify navigation across DeWorld products',
  },
];

export const cookieDontData = [
  'No third-party marketing cookies',
  'No data resale or behavioral tracking',
  'No personalized ads or invasive profiling',
];

export const cookirUserControlData = [
  {
    icon: <Check className="w-6 h-6 text-[#0085a8]" />,
    text: 'Accept/decline non-essential cookies anytime',
  },
  {
    icon: <Settings className="w-6 h-6 text-[#ad1aaf]" />,
    text: 'Clear or block cookies via browser settings',
  },
  {
    icon: <Lock className="w-6 h-6 text-[#0085a8]" />,
    text: 'Use site with only required cookies',
  },
];
