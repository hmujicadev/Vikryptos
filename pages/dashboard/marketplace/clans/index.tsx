import Head from 'next/head'
import { ReactElement } from 'react'
import DashboardLayout from '../../../../components/dashboardLayout/DashboardLayout'

const MarketplaceClansPage = () => {
  return (
    <>
      <Head>
        <title>Vykripto | Marketplace Clans</title>
      </Head>
      Marketplace Clans Page
    </>
  )
}

export default MarketplaceClansPage

MarketplaceClansPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}
