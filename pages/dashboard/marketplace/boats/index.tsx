import Head from 'next/head'
import { ReactElement } from 'react'
import DashboardLayout from '../../../../components/dashboardLayout/DashboardLayout'
import { DynamicMarketplaceBoats } from '../../../../components/dashboardLayout/DynamicContent'
import MarketplaceLayout from '../../../../components/Marketplace/MarketplaceLayout'

const MarketplaceBoatsPage = () => {
  return (
    <>
      <Head>
        <title>Vykripto | Marketplace Boats</title>
      </Head>
      <DynamicMarketplaceBoats />
    </>
  )
}

export default MarketplaceBoatsPage

MarketplaceBoatsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>
      <MarketplaceLayout>{page}</MarketplaceLayout>
    </DashboardLayout>
  )
}
