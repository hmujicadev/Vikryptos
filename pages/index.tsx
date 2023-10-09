import Head from 'next/head'
import Home from '../components/Home/Home'
import { useTranslation, useLanguageQuery } from 'next-export-i18n'

const HomePage = () => {
  const { t } = useTranslation()
  const [query] = useLanguageQuery()
  return (
    <>
      <Head>
        <title>{t('home.title')}</title>
      </Head>
      <Home />
    </>
  )
}

export default HomePage
