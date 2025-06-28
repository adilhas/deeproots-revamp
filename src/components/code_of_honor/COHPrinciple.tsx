import React from 'react';
import {
  Shield,
  Eye,
  Users,
  Zap,
  Lock,
  Star,
  CircleDollarSign,
} from 'lucide-react';
import { useTranslation } from 'next-i18next';
import useLocaleDirection from '@/hooks/useLocaleDirection';

const icons = [
  <Users key="users" className="w-8 h-8 text-[#0085a8]" />,
  <Eye key="eye" className="w-8 h-8 text-[#ad1aaf]" />,
  <Zap key="zap" className="w-8 h-8 text-[#0085a8]" />,
  <Shield key="shield" className="w-8 h-8 text-[#ad1aaf]" />,
  <Star key="star" className="w-8 h-8 text-[#0085a8]" />,
  <Lock key="lock" className="w-8 h-8 text-[#ad1aaf]" />,
  <CircleDollarSign key="dollar" className="w-8 h-8 text-[#0085a8]" />,
];

const COHPrinciple = () => {
  const { t } = useTranslation('code_of_honor');
  const { isArabic } = useLocaleDirection();
  const rawPrinciples = t('principles', { returnObjects: true });
  const principles: { title: string; description: string }[] = Array.isArray(
    rawPrinciples
  )
    ? (rawPrinciples as { title: string; description: string }[])
    : [];

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          {t('principles_section_title')}
        </span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {principles.map((principle, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className={`${isArabic ? 'ml-4' : 'mr-4'}`}>
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {principle.title}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 ml-12">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default COHPrinciple;
