import { TFunction } from 'next-i18next';
import Image from 'next/image';

export const getFeaturesCardItems = (t: TFunction) => [
  {
    title: t('features.address_wallet.title'),
    description: t('features.address_wallet.description'),
    icon: (
      <Image
        src="/landing/address-feature.svg"
        alt="address feature"
        width={60}
        height={60}
      />
    ),
    lightIcon: (
      <Image
        src="/landing/address-feature-light.svg"
        alt="address feature"
        width={60}
        height={60}
      />
    ),
  },
  {
    title: t('features.get_drc_token.title'),
    description: t('features.get_drc_token.description'),
    icon: (
      <Image
        src="/landing/get-drc-feature.svg"
        alt="drc feature"
        width={60}
        height={60}
      />
    ),
    lightIcon: (
      <Image
        src="/landing/get-drc-feature-light.svg"
        alt="drc feature"
        width={60}
        height={60}
      />
    ),
  },
  {
    title: t('features.telexcoin.title'),
    description: t('features.telexcoin.description'),
    icon: (
      <Image
        src="/landing/telexcoin-feature.svg"
        alt="telexcoin feature"
        width={60}
        height={60}
      />
    ),
    lightIcon: (
      <Image
        src="/landing/telexcoin-feature-light.svg"
        alt="telexcoin feature"
        width={60}
        height={60}
      />
    ),
  },
  {
    title: t('features.deeproots_network.title'),
    description: t('features.deeproots_network.description'),
    icon: (
      <Image
        src="/landing/deeproots-network-feature.svg"
        alt="network feature"
        width={60}
        height={60}
      />
    ),
    lightIcon: (
      <Image
        src="/landing/deeproots-network-feature-light.svg"
        alt="network feature"
        width={60}
        height={60}
      />
    ),
  },
];
