'use client';

import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';
import { CheckCircle2, Compass, AlertTriangle } from 'lucide-react';

interface ITermItem {
  icon: ReactNode;
  title: string;
  items: string[];
}

const TermsSection = () => {
  const { t } = useTranslation('identity/terms_of_service');

  const youCanExpectItems = t('terms.youCanExpect.items', {
    returnObjects: true,
  });
  const weExpectFromYouItems = t('terms.weExpectFromYou.items', {
    returnObjects: true,
  });
  const disclaimersItems = t('terms.disclaimers.items', {
    returnObjects: true,
  });

  const termSections: ITermItem[] = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
      title: t('terms.youCanExpect.title'),
      items: Array.isArray(youCanExpectItems)
        ? (youCanExpectItems as string[])
        : [],
    },
    {
      icon: <Compass className="w-6 h-6 text-blue-500" />,
      title: t('terms.weExpectFromYou.title'),
      items: Array.isArray(weExpectFromYouItems)
        ? (weExpectFromYouItems as string[])
        : [],
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
      title: t('terms.disclaimers.title'),
      items: Array.isArray(disclaimersItems)
        ? (disclaimersItems as string[])
        : [],
    },
  ];

  return (
    <>
      {termSections.map((section, index) => (
        <section
          key={index}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <div className="flex items-center mb-6">
            <div className="mx-3">{section.icon}</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {section.title}
            </h2>
          </div>
          <ul className="space-y-4 grid md:grid-cols-2">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                <div className="mx-3 mt-0.5">
                  {index === 0 ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : index === 1 ? (
                    <Compass className="w-5 h-5 text-blue-500" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300">{item}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
};

export default TermsSection;
