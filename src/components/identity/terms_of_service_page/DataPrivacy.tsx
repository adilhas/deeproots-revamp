'use client';

import { useTranslation } from 'next-i18next';
import { Lock } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DataPrivacy = () => {
  const { t } = useTranslation('identity/terms_of_service');

  return (
    <section className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-shrink-0 bg-[#ad1aaf]/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center">
          <Lock className="w-8 h-8 text-[#ad1aaf]" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('dataPrivacy.title')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {t('dataPrivacy.description.part1')}{' '}
            <Link
              href="/identity/privacy-policy"
              className="text-[#0085a8] dark:text-[#ad1aaf] hover:underline"
            >
              {t('dataPrivacy.description.link')}
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataPrivacy;
