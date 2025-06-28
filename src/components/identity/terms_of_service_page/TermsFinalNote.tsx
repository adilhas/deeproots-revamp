'use client';

import { useTranslation } from 'next-i18next';
import { Sprout } from 'lucide-react';

const TermsFinalNote = () => {
  const { t } = useTranslation('identity/terms_of_service');

  return (
    <section className="bg-gradient-to-r from-[#0085a8]/10 to-[#ad1aaf]/10 dark:from-[#0085a8]/20 dark:to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30 text-center">
      <div className="flex flex-col items-center">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-md mb-4">
          <Sprout className="w-8 h-8 text-[#0085a8] dark:text-[#ad1aaf]" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t('finalNote.title')}
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
          {t('finalNote.description')}
        </p>
      </div>
    </section>
  );
};

export default TermsFinalNote;
