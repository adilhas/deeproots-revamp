import { useEffect } from 'react';
import { useRouter } from 'next/router';
type Direction = 'ltr' | 'rtl';

export default function useLocaleDirection(forcedDir?: Direction) {
  const { locale } = useRouter();
  const lang = locale ?? 'en';
  const dir = forcedDir ?? (lang === 'ar' ? 'rtl' : 'ltr');

  const isArabic = lang === 'ar';
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return { lang, dir, isArabic };
}
