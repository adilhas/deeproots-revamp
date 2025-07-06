'use client';
import React from 'react';
import { Trans, useTranslation } from 'next-i18next';

const NoteSection = () => {
  const { t } = useTranslation('connect/private_seed');

  return (
    <div className="rounded-[10px] mt-10 mx-auto bg-white dark:bg-[#0E0E0E] border border-[#A1A1A1] dark:border-[#3F3F3F] px-4 py-3 shadow-sm max-w-[996px]">
      <div className="text-sm text-[#3B82F6] dark:text-[#BFDBFE] font-semibold mb-1">
        {t('form.note_title')}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
        {t('form.note_line1')}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        {t('form.note_line2')}
      </p>
      <ul className="list-disc ml-4 text-sm text-gray-700 dark:text-gray-300">
        <li>{t('form.note_points.discount')}</li>
        <li>{t('form.note_points.access')}</li>
        <li>{t('form.note_points.profit')}</li>
      </ul>
      <p className="mt-2 text-sm dark:text-gray-300">
        <Trans
          i18nKey="form.note_line3"
          t={t}
          components={{ 1: <span className="font-semibold" /> }}
        />
      </p>
    </div>
  );
};

export default NoteSection;
