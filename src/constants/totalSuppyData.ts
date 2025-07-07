// export const totalSupplyData = [
//   {
//     name: 'Over 41 Years',
//     value: 60,
//     color: '#9E2CA9',
//     dot: '#9E2CA9',
//     desc: 'Long-term reward emissions',
//     amount: '60M',
//   },
//   {
//     name: 'Vesting 3—5 Years',
//     value: 20,
//     color: '#3B82A4',
//     dot: '#3B82A4',
//     desc: 'Team/Partner allocations',
//     amount: '20M',
//   },
//   {
//     name: 'Seed & GameFi',
//     value: 4,
//     color: '#F29C0C',
//     dot: '#F29C0C',
//     desc: 'Early gameplay + user growth',
//     amount: '4M',
//   },
//   {
//     name: 'Dev & Innovation',
//     value: 6,
//     color: '#F03F5E',
//     dot: '#F03F5E',
//     desc: 'Technical development & upgrades',
//     amount: '6M',
//   },
//   {
//     name: 'Community & Partnerships',
//     value: 2,
//     color: '#D3D3D4',
//     dot: '#D3D3D4',
//     desc: 'Earning , strategic collaborations',
//     amount: '2M',
//   },
//   {
//     name: 'Foundation',
//     value: 2,
//     color: '#389EA5',
//     dot: '#389EA5',
//     desc: 'Governance and rewards set fund',
//     amount: '2M',
//   },
//   {
//     name: 'AI Development',
//     value: 4,
//     color: '#AB7FF8',
//     dot: '#AB7FF8',
//     desc: 'AI-native tool funding',
//     amount: '4M',
//   },
//   {
//     name: 'Reserved',
//     value: 2,
//     color: '#FA7E02',
//     dot: '#FA7E02',
//     desc: 'Cold reserves for future expansion',
//     amount: '2M',
//   },
// ];

import { TFunction } from 'i18next';

export const getTotalSupplyData = (t: TFunction) => [
  {
    key: 'over-years',
    name: t('drc.total-supply.over-years.name'),
    desc: t('drc.total-supply.over-years.desc'),
    value: 60,
    color: '#9E2CA9',
    dot: '#9E2CA9',
    innerShadowColor: '#F9BDFF',
    amount: '60M',
  },
  {
    key: 'vesting',
    name: t('drc.total-supply.vesting.name'),
    desc: t('drc.total-supply.vesting.desc'),
    value: 20,
    color: '#3B82A4',
    dot: '#3B82A4',
    innerShadowColor: '#BDEAFF',

    amount: '20M',
  },
  {
    key: 'dev',
    name: t('drc.total-supply.dev.name'),
    desc: t('drc.total-supply.dev.desc'),
    value: 6,
    color: '#F03F5E',
    dot: '#F03F5E',
    innerShadowColor: '#FF96A8',

    amount: '6M',
  },
  {
    key: 'seed',
    name: t('drc.total-supply.seed.name'),
    desc: t('drc.total-supply.seed.desc'),
    value: 4,
    color: '#F29C0C',
    dot: '#F29C0C',
    innerShadowColor: '#FFE19A',

    amount: '4M',
  },
  {
    key: 'ai',
    name: t('drc.total-supply.ai.name'),
    desc: t('drc.total-supply.ai.desc'),
    value: 4,
    color: '#AB7FF8',
    dot: '#AB7FF8',
    innerShadowColor: '#C09CFF',

    amount: '4M',
  },
  {
    key: 'community',
    name: t('drc.total-supply.community.name'),
    desc: t('drc.total-supply.community.desc'),
    value: 2,
    color: '#D3D3D4',
    dot: '#D3D3D4',
    innerShadowColor: '#C9C9C9',

    amount: '2M',
  },
  {
    key: 'foundation',
    name: t('drc.total-supply.foundation.name'),
    desc: t('drc.total-supply.foundation.desc'),
    value: 2,
    color: '#389EA5',
    dot: '#389EA5',
    innerShadowColor: '#99FAFF',

    amount: '2M',
  },

  {
    key: 'reserved',
    name: t('drc.total-supply.reserved.name'),
    desc: t('drc.total-supply.reserved.desc'),
    value: 2,
    color: '#FA7E02',
    dot: '#FA7E02',
    innerShadowColor: '#FFCE9D',

    amount: '2M',
  },
];
