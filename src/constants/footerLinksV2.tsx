import {
  Globe,
  Link,
  GraduationCap,
  FlaskConical,
  Fingerprint,
} from 'lucide-react';
import { TFunction } from 'next-i18next';

export const getfooterLinks = (t: TFunction) => [
  {
    title: t('footer.RootAcademy._title'),
    icon: <GraduationCap color="#04B95F" size={32} />,
    link: '/academy',
    links: [
      { label: t('footer.RootAcademy.WhatIsDeepRoot'), href: '/academy/about' },
      { label: t('footer.RootAcademy.WhatIsDRC'), href: '/academy/drc' },
      {
        label: t('footer.RootAcademy.WhatIsFullseat'),
        href: '/academy/what-is-fullseat',
      },
      {
        label: t('footer.RootAcademy.Whitepaper'),
        href: '/deeproots-whitepaper.pdf',
      },
      {
        label: t('footer.RootAcademy.WhatIsWeb3'),
        href: '/academy/what-is-web3',
      },
      {
        label: t('footer.RootAcademy.Tokenomics'),
        href: '/academy/tokenomics',
      },
      { label: t('footer.RootAcademy.RoadMap'), href: '/academy/roadmap' },
    ],
    hoverColor: 'hover:text-[#04B95F]',
  },
  {
    title: t('footer.RootLab._title'),
    icon: <FlaskConical color="#1B75FF" size={30} />,
    link: '/lab',
    links: [
      {
        label: t('footer.RootLab.DeepRootsNetwork'),
        href: '/lab/deeproots-network',
      },
      {
        label: t('footer.RootLab.SecurityBugBounty'),
        href: '/lab/security-bug-bounty',
      },

      { label: t('footer.RootLab.SmartContract'), href: '/lab/smart-contract' },
      { label: t('footer.RootLab.GasFee'), href: '/lab/gas-fees' },
      {
        label: t('footer.RootLab.DecentralizedWorld'),
        href: '/deworld/ecosystem',
      },
      { label: t('footer.RootLab.Ecosystem'), href: '/academy' },
      {
        label: t('footer.RootLab.RootOpiaReward'),
        href: '/lab/rootopia-reward-system',
      },
    ],
    hoverColor: 'hover:text-[#1B75FF]',
  },
  {
    title: t('footer.DeWorld._title'),
    icon: <Globe color="#9F2BA9" size={30} />,
    link: '/deworld/ecosystem',
    links: [
      {
        label: t('footer.DeWorld.AddressWallet'),
        href: 'https://www.theaddress.earth',
      },
      {
        label: t('footer.DeWorld.TeleXcoin'),
        href: 'https://www.telexcoin.earth',
      },
      {
        label: t('footer.DeWorld.ShareValue'),
        href: 'https://www.sharevalue.earth',
      },
      { label: t('footer.DeWorld.InnoFi'), href: 'https://www.innofi.earth' },
      {
        label: t('footer.DeWorld.InnoLaunch'),
        href: 'https://www.innolaunch.earth',
      },
      {
        label: t('footer.DeWorld.MetaFabric'),
        href: 'https://www.metafabric.earth',
      },
      { label: t('footer.DeWorld.GiveFi'), href: 'https://www.givefi.earth' },
      {
        label: t('footer.DeWorld.Saxophone'),
        href: 'https://www.saxophone.earth',
      },
      {
        label: t('footer.DeWorld.OceanBazaar'),
        href: 'https://www.oceanbazaar.earth',
      },
      { label: t('footer.DeWorld.CopyMe'), href: '#' },
      {
        label: t('footer.DeWorld.Rootopia'),
        href: 'https://www.rootopia.earth',
      },
      { label: t('footer.DeWorld.Foundation'), href: '/lab/foundation-seats' },
      {
        label: t('footer.DeWorld.InnoFarm'),
        href: 'https://www.innofarm.earth',
      },
      {
        label: t('footer.DeWorld.DeepAssets'),
        href: 'https://www.deepassets.earth',
      },
      {
        label: t('footer.DeWorld.RootChat'),
        href: 'https://www.rootchat.earth',
      },
    ],
    hoverColor: 'hover:text-[#9F2BA9]',
  },
  {
    title: t('footer.RootIdentity._title'),
    icon: <Fingerprint color="#FF635D" size={30} />,
    link: '/identity',
    links: [
      {
        label: t('footer.RootIdentity.WhoWeAre'),
        href: '/identity/who-we-are',
      },
      {
        label: t('footer.RootIdentity.ContactUs'),
        href: '/identity/contact-us',
      },
      {
        label: t('footer.RootIdentity.WhatIsSeeding'),
        href: '/identity/what-is-seeding',
      },
      {
        label: t('footer.RootIdentity.FoundationFullSeat'),
        href: '/seeding/foundation',
      },
      {
        label: t('footer.RootIdentity.RootScan'),
        href: 'https://www.rootscan.earth',
      },
    ],
    hoverColor: 'hover:text-[#FF635D]',
  },
  {
    title: t('footer.RootConnect._title'),
    icon: <Link color="#FFB501" size={30} />,
    link: '/connect',
    links: [
      {
        label: t('footer.RootConnect.PrivateSeedAccess'),
        href: '/connect/private-seed',
      },
      { label: t('footer.RootConnect.Socials'), href: '/#social-links' },
      { label: t('footer.RootConnect.Events'), href: '/connect/events' },
      { label: t('footer.RootConnect.Career'), href: '/connect/career' },
      {
        label: t('footer.RootConnect.VolunteerProgram'),
        href: '/connect/volunteer',
      },
      {
        label: t('footer.RootConnect.Hackathons'),
        href: '/connect/internal-hackathon',
      },
    ],
    hoverColor: 'hover:text-[#FFB501]',
  },
];
