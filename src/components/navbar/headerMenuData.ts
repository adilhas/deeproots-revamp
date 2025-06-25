import { TFunction } from 'i18next';
import { MenuSection } from './types';

export const getMenuSectionData = (t: TFunction): MenuSection[] => [
  {
    name: 'RootAcademy',
    link: '/academy',
    subitems: [
      {
        title: t('header_menu.rootAcademy.whatIsDeepRoots'),
        description: t('header_menu.rootAcademy.whatIsDeepRoots_desc'),
        link: '/academy/about',
      },
      {
        title: t('header_menu.rootAcademy.whatIsFullseat'),
        description: t('header_menu.rootAcademy.whatIsFullseat_desc'),
        link: '/academy/what-is-fullseat',
      },
      {
        title: t('header_menu.rootAcademy.whatIsDrc'),
        description: t('header_menu.rootAcademy.whatIsDrc_desc'),
        link: '/academy/drc',
      },
      {
        title: t('header_menu.rootAcademy.whitePaper'),
        description: t('header_menu.rootAcademy.whitePaper_desc'),
        link: '/academy/whitepaper',
      },
      {
        title: t('header_menu.rootAcademy.tokenomics'),
        description: t('header_menu.rootAcademy.tokenomics_desc'),
        link: '',
      },
      {
        title: t('header_menu.rootAcademy.roadmap'),
        description: t('header_menu.rootAcademy.roadmap_desc'),
        link: '/academy/roadmap',
      },
    ],
  },
  {
    name: 'Rootlab',
    link: '#',
    subitems: [
      {
        title: t('header_menu.rootlab.smartContract'),
        description: t('header_menu.rootlab.smartContract_desc'),
        link: '/academy/smart-contract',
      },
      // {
      //   title: t('header_menu.rootlab.developerTools'),
      //   description: t('header_menu.rootlab.developerTools_desc'),
      //   link: '',
      // },
      {
        title: 'Security & Bug Bounty',
        description: 'Find Bugs in any of these severity and get rewarded',
        link: '/lab/security-bug-bounty',
      },
      {
        title: t('header_menu.rootlab.gasFee'),
        description: t('header_menu.rootlab.gasFee_desc'),
        link: '/academy/gas-fees',
      },
      // {
      //   title: t('header_menu.rootlab.documentation'),
      //   description: t('header_menu.rootlab.documentation_desc'),
      //   link: '',
      // },
      {
        title: 'Ecosystem',
        description: 'Master the DeepRoots Ecosystem',
        link: '/academy',
      },
    ],
  },
  {
    name: 'DeWorld',
    link: '/deworld/ecosystem',
    subitems: [
      {
        title: t('header_menu.deWorld.theAddressWallet'),
        description: t('header_menu.deWorld.theAddressWallet_desc'),
        link: 'https://theaddress.earth',
      },
      {
        title: t('header_menu.deWorld.telexCoin'),
        description: t('header_menu.deWorld.telexCoin_desc'),
        link: 'https://telexcoin.earth',
      },
      {
        title: t('header_menu.deWorld.oceanBazaar'),
        description: t('header_menu.deWorld.oceanBazaar_desc'),
        link: 'https://oceanbazaar.earth',
      },
      {
        title: t('header_menu.deWorld.rootopia'),
        description: t('header_menu.deWorld.rootopia_desc'),
        link: 'https://www.rootopia.earth/',
      },
    ],
  },
  {
    name: 'RootIdentity',
    link: '#',
    subitems: [
      {
        title: t('header_menu.rootIdentity.whoWeAre'),
        description: t('header_menu.rootIdentity.whoWeAre_desc'),
        link: '/identity/who-we-are',
      },
      {
        title: t('header_menu.rootIdentity.whatIsSeeding'),
        description: t('header_menu.rootIdentity.whatIsSeeding_desc'),
        link: '/identity/what-is-seeding',
      },
      {
        title: t('header_menu.rootIdentity.foundationFullSeat'),
        description: t('header_menu.rootIdentity.foundationFullSeat_desc'),
        link: '/seeding/foundation',
      },
      {
        title: t('header_menu.rootIdentity.rootScan'),
        description: t('header_menu.rootIdentity.rootScan_desc'),
        link: 'https://www.rootscan.earth/',
      },
    ],
  },
  {
    name: 'RootConnect',
    link: '#',
    subitems: [
      {
        title: t('header_menu.rootConnect.socialMedia'),
        description: t('header_menu.rootConnect.socialMedia_desc'),
        link: '#',
      },
      {
        title: t('header_menu.rootConnect.eventsAndMeetups'),
        description: t('header_menu.rootConnect.eventsAndMeetups_desc'),
        link: '/connect/events',
      },
      {
        title: t('header_menu.rootConnect.volunteerProgram'),
        description: t('header_menu.rootConnect.volunteerProgram_desc'),
        link: '/connect/volunteer',
      },
      {
        title: t('header_menu.rootConnect.career'),
        description: t('header_menu.rootConnect.career_desc'),
        link: '/career',
      },
    ],
  },
];
