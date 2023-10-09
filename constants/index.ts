import {
  TOKENOMIC_ITEM,
  REQUIREMENTS,
  MYSTATISTICS,
  INVESTMENT,
  TRANSACTIONS,
  VILLAGES_TABLE,
  SURVIVOR_TABLE,
  DOUBLE_TABLE,
  TRIPLE_TABLE,
  RAGNAROK_TABLE,
} from '../types/global'

import VikingIcon from '../public/images/icon-vikings.svg'
import BoatsIcon from '../public/images/icon-boats.svg'
import ClansIcon from '../public/images/icon-clans.svg'

const APP = {
  projectName: 'Vykriptos',
}

export const TOKENOMICS: TOKENOMIC_ITEM[] = [
  {
    id: 'rewards',
    bgColor: '#1d488e',
    amount: 50,
    text: 'Rewards',
  },
  {
    id: 'ecosystem',
    bgColor: '#e88237',
    amount: 4,
    text: 'Ecosystem',
  },
  {
    id: 'team',
    bgColor: '#30307a',
    amount: 15,
    text: 'Team',
  },
  {
    id: 'private-sale',
    bgColor: '#ebce47',
    amount: 6,
    text: 'Private sale',
  },
  {
    id: 'marketing',
    bgColor: '#7c1541',
    amount: 10,
    text: 'Marketing',
  },
  {
    id: 'public-sale',
    bgColor: '#017e48',
    amount: 5,
    text: 'Public sale',
  },
  {
    id: 'investors',
    bgColor: '#b32c39',
    amount: 5,
    text: 'Investors',
  },
  {
    id: 'liquidity',
    bgColor: '#01575f',
    amount: 5,
    text: 'Liquidity',
  },
]

export const GAMER_OPTIONS = [
  { label: 'Home', isAdmin: false, link: '/dashboard' },
  { label: 'Villages', isAdmin: false, link: '/dashboard/villages/vikings' },
  // { label: 'Shrines', isAdmin: false, link: '/dashboard/shrines' },
  // { label: 'Admin', isAdmin: true, link: '/dashboard/admin' },
]
export const OPERATIONAL_OPTIONS = [
  {
    label: 'Marketplace',
    isAdmin: false,
    link: '/dashboard/marketplace/vikings',
  },
  { label: 'Finance', isAdmin: false, link: '/dashboard/finance/home' },
  // { label: 'Whitepaper', isAdmin: false, link: '#' },
]
export const MARKETPLACE_NAV_ITEMS = [
  {
    label: 'Vikings',
    isAdmin: false,
    link: '/dashboard/marketplace/vikings',
    icon: VikingIcon,
  },
  {
    label: 'Boats',
    isAdmin: false,
    link: '/dashboard/marketplace/boats',
    icon: BoatsIcon,
  },
  {
    label: 'Clans',
    isAdmin: false,
    link: '/dashboard/marketplace/clans',
    icon: ClansIcon,
  },
]

export const TEMPORAL_REQUIREMENTS: REQUIREMENTS[] = [
  {
    id: 1,
    type: 'Claim',
    actual: 65,
    required: 75,
    status: 0,
  },
  {
    id: 2,
    type: 'Survivor',
    actual: 1,
    required: 1,
    status: 1,
  },
  {
    id: 3,
    type: 'Double',
    actual: 1,
    required: 3,
    status: 0,
  },
  {
    id: 4,
    type: 'Triple',
    actual: 1,
    required: 3,
    status: 0,
  },
  {
    id: 5,
    type: 'Ragnarok',
    actual: 1,
    required: 1,
    status: 1,
  },
]
export const TEMPORAL_MYSTATISTICS: MYSTATISTICS[] = [
  {
    id: 1,
    type: 0,
    mints: 30,
    buys: 20,
    sells: 10,
  },
  {
    id: 2,
    type: 1,
    mints: 60,
    buys: 20,
    sells: 5,
  },
]

export const TEMPORAL_INVESTMENT: INVESTMENT[] = [
  {
    id: 1,
    coin: 1,
    deposit: 30,
    withdraw: 20,
    available: 10,
  },
  {
    id: 2,
    coin: 0,
    deposit: 30,
    withdraw: 20,
    available: 10,
  },
]

export const TEMPORAL_TRANSACTIONS: TRANSACTIONS[] = [
  {
    id: 0,
    type: 0,
    coin: 0,
    date: '22/08/2023',
    available: 1554,
    percentaje: 25,
    amount: 1550,
    status: 0,
  },
  {
    id: 1,
    type: 1,
    coin: 1,
    date: '23/08/2023',
    available: 1554,
    percentaje: 25,
    amount: 1550,
    status: 2,
  },
]

export const TEMPORAL_VILLAGES: VILLAGES_TABLE[] = [
  {
    id: 0,
    village: 'Caracas',
    date: '22/08/2022',
    award: 50,
    stars: 3,
    clan: 'Berserkers',
  },
  {
    id: 0,
    village: 'Maracaibo',
    date: '23/08/2022',
    award: 50,
    stars: 3,
    clan: 'Berserkers',
  },
]

export const TEMPORAL_SURVIVOR: SURVIVOR_TABLE[] = [
  {
    id: 0,
    character: 0,
    lottery: '22/08/2022 A',
    price: 1,
    winner: 1,
    award: 0,
    status: 0,
  },
  {
    id: 0,
    character: 2,
    lottery: '22/08/2022 A',
    price: 1,
    winner: 3,
    award: 0,
    status: 0,
  },
]

export const TEMPORAL_DOUBLE: DOUBLE_TABLE[] = [
  {
    id: 0,
    numbers: [58, 63],
    lottery: '22/08/2022 A',
    price: 1,
    winner: 1,
    award: 0,
    status: 0,
  },
  {
    id: 0,
    numbers: [21, 58],
    lottery: '22/08/2022 A',
    price: 1,
    winner: 65,
    award: 0,
    status: 0,
  },
]

export const TEMPORAL_TRIPLE: TRIPLE_TABLE[] = [
  {
    id: 0,
    numbers: [588, 635],
    lottery: '22/08/2022 A',
    price: 1,
    winner: 897,
    award: 0,
    status: 0,
  },
  {
    id: 0,
    numbers: [217, 584],
    lottery: '22/08/2022 A',
    price: 1,
    winner: 674,
    award: 0,
    status: 0,
  },
]
export const TEMPORAL_RAGNAROK: RAGNAROK_TABLE[] = [
  {
    id: 0,
    side: 0,
    lottery: '22/08/2022 A',
    price: 1,
    winner: 0,
    award: 0,
    status: 0,
  },
  {
    id: 0,
    side: 1,
    lottery: '22/08/2022 A',
    price: 1,
    winner: 0,
    award: 0,
    status: 0,
  },
]


export const LANGUAJES_OPTIONS = ['EN', 'ES', 'BR', 'FI', 'FR', 'CH']

export default APP
