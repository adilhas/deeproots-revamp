export interface Quiz {
  id: string;
  title: string;
  subtitle: string;
  questions: {
    question: string;
    options: string[];
    correct: number;
  }[];
}

export const quizzes: Quiz[] = [
  {
    id: 'ecosystem',
    title: 'Quiz 1 – DEEPROOTS Ecosystem',
    subtitle:
      'Test your knowledge of the movement reshaping the digital world.',
    questions: [
      {
        question: 'What is DEEPROOTS?',
        options: [
          'A farming project',
          'A blockchain ecosystem',
          'A wallet app',
          'A clothing brand',
        ],
        correct: 1,
      },
      {
        question: 'What is dRC?',
        options: [
          'A smart contract',
          'A decentralized chatroom',
          'The DEEPROOTS token',
          'RootOpia item',
        ],
        correct: 2,
      },
      {
        question: 'What is DeWorld?',
        options: [
          'A video game',
          'A DeFi protocol',
          'The decentralized platform of DEEPROOTS',
          'NFT store',
        ],
        correct: 2,
      },
      {
        question: 'What is seeding in DEEPROOTS?',
        options: [
          'Growing plants',
          'Token staking for rewards',
          'Voting mechanism',
          'Quiz reward',
        ],
        correct: 1,
      },
      {
        question: 'What is meant by Full Seat Foundation?',
        options: [
          'Voting seat in parliament',
          'DEEPROOTS board-level access + rewards',
          'Discord role',
          'NFT',
        ],
        correct: 1,
      },
      {
        question: 'How many core products are in the DEEPROOTS ecosystem?',
        options: ['5', '10', '14', '20'],
        correct: 3,
      },
      {
        question: 'What is the name of the DEEPROOTS wallet?',
        options: ['RootWallet', 'Web3Bag', 'The Address', 'DEXBase'],
        correct: 2,
      },
      {
        question: 'Which product focuses on Real World Assets?',
        options: ['ShareValue', 'DeepAssets', 'GiveFi', 'OceanBazaar'],
        correct: 1,
      },
      {
        question: 'Which platform supports decentralized donations?',
        options: ['InnoLaunch', 'GiveFi', 'MetaFabric', 'CopyMe'],
        correct: 1,
      },
      {
        question: 'What is the main domain for DEEPROOTS?',
        options: [
          'deeproots.xyz',
          'deeworld.com',
          'deeproots.earth',
          'rootopinet',
        ],
        correct: 2,
      },
    ],
  },
  {
    id: 'blockchain-defi',
    title: 'Quiz 2 – Blockchain & DeFi Basics',
    subtitle:
      'Master the foundations of Web3, consensus, staking, and smart dat',
    questions: [
      {
        question: 'What does DRVM stand for?',
        options: [
          'DEEPROOTS Value Model',
          'DEEPROOTS Virtual Mechanism',
          'DEEPROOTS Virtual Machine',
          'DEEP Eco Virtual Market',
        ],
        correct: 2,
      },
      {
        question: 'What type of consensus does DEEPROOTS use?',
        options: ['PoW', 'PoS', 'PoZ', 'dPoS'],
        correct: 2,
      },
      {
        question: 'What is staking?',
        options: [
          'Playing a game',
          'Sending NFTs',
          'Locking tokens to earn rewards',
          'Deleting a wallet',
        ],
        correct: 2,
      },
      {
        question: 'What’s a DEX?',
        options: [
          'Decentralized Exchange',
          'Deep Earth Exchange',
          'Digital Extension',
          'Data Export Chain',
        ],
        correct: 0,
      },
      {
        question: 'Which tool lets you track blockchain data?',
        options: ['CopyMe', 'RootScan', 'DeepAssets', 'MetaScan'],
        correct: 1,
      },
    ],
  },
  {
    id: 'seeding-tokenomics',
    title: 'Quiz 3 – Seeding & Tokenomics',
    subtitle: 'Test your knowledge of DEEPROOTS token economics and rewards.',
    questions: [
      {
        question: 'What’s the name of DEEPROOTS’ token?',
        options: ['DRT', 'dRC', 'ROOT', 'SEED'],
        correct: 1,
      },
      {
        question: 'How much is the total supply of dRC?',
        options: ['10M', '100M', '1B', '500M'],
        correct: 1,
      },
      {
        question: 'How long is dRC distributed for?',
        options: ['10 years', '20 years', '41 years', 'Forever'],
        correct: 2,
      },
      {
        question: 'What’s the annual yield for staking?',
        options: ['5%', '8%', '12%', '20%'],
        correct: 2,
      },
      {
        question: 'How many Foundation Rounds are there?',
        options: ['2', '3', '4', '5'],
        correct: 3,
      },
    ],
  },
  {
    id: 'rootopia-gamefi',
    title: 'Quiz 4 – RootOpia GameFi',
    subtitle:
      'Learn about the game world, its rewards, and the call to heroes.',
    questions: [
      {
        question: 'What is RootOpia?',
        options: [
          'NFT store',
          'Web3 animation game',
          'Token swapper',
          'Voting platform',
        ],
        correct: 1,
      },
      {
        question: 'Which faction leads the warriors?',
        options: [
          'Winterfang Clan',
          'Jaguar Fleet',
          'Warrior Vanguard',
          'Hyena Riders',
        ],
        correct: 2,
      },
      {
        question: 'What is the prize pool range in RootOpia?',
        options: ['$1K–$10K', '1M–20M USDT', '500–5K tokens', '100 NFTs'],
        correct: 1,
      },
      {
        question: 'How can players earn rewards?',
        options: [
          'Watching ads',
          'Completing quizzes',
          'Referrals, battles, leaderboards',
          'Voting only',
        ],
        correct: 2,
      },
      {
        question: 'What type of game style is RootOpia?',
        options: [
          '2D Web3 full-animation',
          '3D Sandbox',
          'Card Game',
          'Text-based RPG',
        ],
        correct: 0,
      },
    ],
  },
  {
    id: 'privacy-decentralization',
    title: 'Quiz 5 – Privacy, Security & Decentralization',
    subtitle:
      'Understand how DEEPROOTS protects users and promotes decentralized power.',
    questions: [
      {
        question: 'What’s DEEPROOTS’ privacy commitment?',
        options: [
          'Sell data to partners',
          'Use invasive cookies',
          'Privacy by design',
          'Save everything',
        ],
        correct: 2,
      },
      {
        question: 'What kind of cookies are used by default?',
        options: [
          'Marketing cookies',
          'Tracking cookies',
          'Essential only',
          'All cookies',
        ],
        correct: 2,
      },
      {
        question: 'What is a white hat hacker?',
        options: [
          'Malicious attacker',
          'Platform owner',
          'Ethical security tester',
          'AI assistant',
        ],
        correct: 2,
      },
      {
        question: 'What does decentralization mean?',
        options: [
          'Power to few entities',
          'Controlled by one admin',
          'Distributed control & ownership',
          'No security',
        ],
        correct: 2,
      },
      {
        question: 'What tool tracks all on-chain data in DEEPROOTS?',
        options: ['DeepVault', 'MetaTrack', 'RootScan', 'TokenSpy'],
        correct: 2,
      },
    ],
  },
];
