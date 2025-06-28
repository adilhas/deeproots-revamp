'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type Direction = 'ltr' | 'rtl';

export default function useLocaleDirection(forcedDir?: Direction) {
  const { locale } = useRouter();
  const [lang, setLang] = useState<string | null>(null);
  const [dir, setDir] = useState<Direction>('ltr');

  useEffect(() => {
    const resolvedLang = locale ?? 'en';
    const resolvedDir = forcedDir ?? (resolvedLang === 'ar' ? 'rtl' : 'ltr');

    setLang(resolvedLang);
    setDir(resolvedDir);

    document.documentElement.lang = resolvedLang;
    document.documentElement.dir = resolvedDir;
  }, [locale, forcedDir]);

  const isArabic = lang === 'ar';

  return { lang, dir, isArabic };
}
