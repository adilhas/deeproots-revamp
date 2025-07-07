const products = [
  'TheAddress.earth – Decentralized Wallet',
  'TeleXcoin.earth – Decentralized Exchange',
  'DeepAssets.earth – RWA Tokenization',
  'ShareValue.earth – Learn & Earn Platform',
  'InnoFi.earth – Vote & Fund',
  'InnoLaunch.earth – IDO Platform',
  'InnoFarm.earth – Web3 Job Marketplace',
  'MetaFabric.earth – Fashion NFT Protocol',
  'GiveFi.earth – Donation Infrastructure',
  'Saxophone.earth – Podcast & Media Platform',
  'RootOpia.earth – GameFi Platform',
  'OceanBazaar.earth – NFT Marketplace',
  'RootScan.earth – Blockchain Explorer',
  'RootChat – Decentralized Messaging',
  'CopyMe AI Agent',
  'DEEPROOTS.earth – Main Ecosystem Interface',
];

const ProductList = () => (
  <ul className="list-disc pl-6 space-y-1 mb-6">
    {products.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

export default ProductList;
