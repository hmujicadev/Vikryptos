import '@fontsource/roboto-condensed'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'
import { defaultTheme } from '../styles/themes'
import { NextPageWithLayout } from '../types/page'

type MyAppProps = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
