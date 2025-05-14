export interface InterestOption {
  key: keyof Interests;
  label: string;
}

export interface Interests {
  web3: boolean;
  gamefi: boolean;
  nfts: boolean;
  governance: boolean;
  updates: boolean;
}
export const interestsList: InterestOption[] = [
  { key: 'web3', label: 'Web3 / DeFi' },
  { key: 'gamefi', label: 'GameFi / RootOpia' },
  { key: 'nfts', label: 'NFTs / OceanBazaar' },
  { key: 'governance', label: 'Governance / Foundation' },
  { key: 'updates', label: 'General Community Updates' },
];
