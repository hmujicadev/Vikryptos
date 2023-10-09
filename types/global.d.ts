// TODO: Add global types and interfaces

export type TOKENOMIC_ITEM = {
  id: string
  bgColor: string
  amount: number
  text: string
}

export type RouteItemT = {
  id: string
  name: string
  href: string
  private?: boolean
}

export type RoutesT = {
  [key: string]: RouteItemT
}

export type REQUIREMENTS = {
  id: number
  type: string
  actual: number
  required: number
  status: number
}
export type MYSTATISTICS = {
  id: number
  type: number
  mints: number
  buys: number
  sells: number
}
export type INVESTMENT = {
  id: number
  coin: number
  deposit: number
  withdraw: number
  available: number
}
export type TRANSACTIONS = {
  id: number
  type: number
  coin: number
  date: string
  available: number
  percentaje: number
  amount: number
  status: number
}
export type VILLAGES_TABLE = {
  id: number
  village: string
  date: string
  award: number
  stars: number
  clan: string
}
export type SURVIVOR_TABLE = {
  id: number
  character: number
  lottery: string
  price: number
  winner: number
  award: number
  status: number
}
export type DOUBLE_TABLE = {
  id: number
  numbers: array<number>
  lottery: string
  price: number
  award: number
  winner: number
  status: number
}
export type TRIPLE_TABLE = {
  id: number
  numbers: array<number>
  lottery: string
  price: number
  award: number
  winner: number
  status: number
}
export type RAGNAROK_TABLE = {
  id: number
  side: number
  lottery: string
  price: number
  award: number
  winner: number
  status: number
}

