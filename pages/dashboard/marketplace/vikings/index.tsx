import Head from 'next/head'
import { ReactElement } from 'react'
import DashboardLayout from '../../../../components/dashboardLayout/DashboardLayout'
import { DynamicMarketplaceVikings } from '../../../../components/dashboardLayout/DynamicContent'
import MarketplaceLayout from '../../../../components/Marketplace/MarketplaceLayout'

const MarketplaceVikingsPage = () => {
  return (
    <>
      <Head>
        <title>Vykripto | Marketplace Vikings</title>
      </Head>
      <DynamicMarketplaceVikings />
    </>
  )
}

export default MarketplaceVikingsPage

MarketplaceVikingsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>
      <MarketplaceLayout>{page}</MarketplaceLayout>
    </DashboardLayout>
  )
}
