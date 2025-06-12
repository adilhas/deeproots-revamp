import Image from 'next/image';

export const featuresCardItems = [
  {
    title: 'The Address Wallet:',
    description: 'Register now, Manage assets, build wealth.',
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
    title: 'Get dRC Token (Deeproots Coin):',
    description: 'Limited Supply, Distributed Over 41 Years - Here to Stay.',
    icon: (
      <Image
        src="/landing/get-drc-feature.svg"
        alt="address feature"
        width={60}
        height={60}
      />
    ),
    lightIcon: (
      <Image
        src="/landing/get-drc-feature-light.svg"
        alt="address feature"
        width={60}
        height={60}
      />
    ),
  },
  {
    title: 'TelexCoin:',
    description: 'Join and grow the future of trading.',
    icon: (
      <Image
        src="/landing/telexcoin-feature.svg"
        alt="address feature"
        width={60}
        height={60}
      />
    ),
    lightIcon: (
      <Image
        src="/landing/telexcoin-feature-light.svg"
        alt="address feature"
        width={60}
        height={60}
      />
    ),
  },
  {
    title: 'DeepRoots Network.',
    description:
      'The First Truly Dynamic, Scalable, and Borderless Blockchain.',
    icon: (
      <Image
        src="/landing/deeproots-network-feature.svg"
        alt="address feature"
        width={60}
        height={60}
      />
    ),
    lightIcon: (
      <Image
        src="/landing/deeproots-network-feature-light.svg"
        alt="address feature"
        width={60}
        height={60}
      />
    ),
  },
];
