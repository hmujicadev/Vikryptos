import dynamic from 'next/dynamic'

export const DynamicHome = dynamic(
  () => import('../DashboardHome/DashboardHome'),
  {
    ssr: false,
  }
)

export const DynamicVikings = dynamic(() => import('../Vikings/Vikings'), {
  ssr: false,
})

export const DynamicBoats = dynamic(() => import('../Boats/Boats'), {
  ssr: false,
})

export const DynamicClans = dynamic(() => import('../Clans/Clans'), {
  ssr: false,
})

export const DynamicFinance = dynamic(() => import('../Finance/Home/Home'), {
  ssr: false,
})
export const DynamicMarketplaceVikings = dynamic(
  () => import('../Marketplace/MarketplaceVikings/MarketplaceVikings'),
  {
    ssr: false,
  }
)

export const DynamicMarketplaceBoats = dynamic(
  () => import('../Marketplace/MarketplaceBoats/MarketplaceBoats'),
  {
    ssr: false,
  }
)

export const DynamicMarketplaceClans = dynamic(
  () => import('../Marketplace/MarketplaceClans/MarketplaceClans'),
  {
    ssr: false,
  }
)
