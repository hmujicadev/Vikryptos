import { ReactElement } from 'react'

import { GetStaticPropsContext } from 'next/types'
import { DynamicHome } from '../../components/dashboardLayout/DynamicContent'
import DashboardLayout from '../../components/dashboardLayout/DashboardLayout'
import { NextPageWithLayout } from '../../types/page'
// import { TRANSLATIONS } from '../../../utils/translations'

const DashboardPage: NextPageWithLayout = () => {
  return <DynamicHome />
}

export default DashboardPage

DashboardPage.getLayout = function getLayout(page: ReactElement) {
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
