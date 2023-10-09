import { ReactElement } from 'react'

import { GetStaticPropsContext } from 'next/types'
import { NextPageWithLayout } from '../../../types/page'
import { DynamicFinance } from '../../../components/dashboardLayout/DynamicContent'
import DashboardLayout from '../../../components/dashboardLayout/DashboardLayout'
// import { TRANSLATIONS } from '../../../utils/translations'

const FinancePage: NextPageWithLayout = () => {
  return <DynamicFinance />
}

export default FinancePage

FinancePage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  let localeString: string = locale || 'en'
  return {
    props: {
      // messages: TRANSLATIONS[localeString],
    },
  }
}
