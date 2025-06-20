import { useTranslation } from 'react-i18next';

const ShareValueHeader = () => {
  const { t } = useTranslation('landing_page');
  return (
    <>
      <h1 className="font-extrabold text-2xl lg:text-4xl font-orbitron bg-gradient-to-r from-[#E07C76] to-[#52b797] bg-clip-text text-transparent">
        {t('share_value_section.title')}
      </h1>
      <h2 className="font-bold text-xl mt-3 font-orbitron bg-gradient-to-r from-[#E07C76] to-[#52b797] bg-clip-text text-transparent">
        {t('share_value_section.subtitle')}
      </h2>
    </>
  );
};

export default ShareValueHeader;
