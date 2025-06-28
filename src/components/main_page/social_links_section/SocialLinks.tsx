import { getSocialLinksData } from '@/constants/socialLinksData';
import { useThemeContext } from '@/context/ThemeContext';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface SocialLinksProps {
  className?: string;
  socialCardClassName?: string;
  variant?: 'default' | 'rootopia';
}

const VARIANT_CLASSES = {
  default: {
    sectionBg: 'bg-[#D2D5DB] dark:bg-primary-dark',
    cardBg: 'bg-white dark:bg-[#1F2937]',
    iconBg: 'bg-[#F1F5F9] dark:bg-[#0F172A]',
    subTextColor: 'text-gray-700 dark:text-gray-400',
  },
  rootopia: {
    sectionBg: 'bg-[#361E03] dark:bg-[#361E03] text-white',
    cardBg: 'bg-[#4E2B04]',
    iconBg: 'bg-[#0F172A]',
    subTextColor: 'text-gray-400',
  },
};

const SocialLinks = ({
  className,
  socialCardClassName,
  variant = 'default',
}: SocialLinksProps) => {
  const { isDark } = useThemeContext();
  const { t } = useTranslation('common');
  const socialLinks = getSocialLinksData(t);

  const currentVariant = VARIANT_CLASSES[variant];

  return (
    <section
      id="social-links"
      className={clsx(
        'py-20 px-4',
        className?.includes('bg-') ? className : currentVariant.sectionBg
      )}
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-orbitron bg-gradient-to-r from-[#9E2CA9] to-[#3B82A4] w-fit mx-auto text-transparent bg-clip-text">
          {t('social.title')}
        </h2>
        <p className={clsx('mt-2 font-sans', currentVariant.subTextColor)}>
          {t('social.subtitle')}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {socialLinks.map(
          ({
            name,
            username,
            description,
            href,
            Icon,
            brandColor,
            iconColor,
          }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                socialCardClassName?.includes('bg-')
                  ? socialCardClassName
                  : currentVariant.cardBg,
                'flex flex-col items-start rounded-2xl p-5 transition-all duration-300'
              )}
              style={{ boxShadow: `0px 12px 24px 0px #0000001A` }}
            >
              <div className="flex items-center justify-between space-x-2 text-lg font-semibold w-full">
                <div className="flex flex-row items-center gap-3">
                  <div className={` ${currentVariant.iconBg} p-2 rounded-xl`}>
                    <Icon
                      className="text-2xl"
                      style={{
                        color:
                          variant === 'rootopia'
                            ? '#ffffff'
                            : iconColor === '#000000' && isDark
                              ? '#fff'
                              : iconColor,
                      }}
                    />
                  </div>
                  <span
                    className="text-lg font-orbitron"
                    style={{
                      color:
                        isDark || variant === 'rootopia' ? '#fff' : brandColor,
                    }}
                  >
                    {name}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{username}</span>
              </div>
              <p className={`${currentVariant.subTextColor} text-sm mt-3`}>
                {description}
              </p>
            </a>
          )
        )}
      </div>
    </section>
  );
};

export default SocialLinks;
