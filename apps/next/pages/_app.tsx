import 'raf/polyfill'

const fixReanimatedIssue = () => {
  // FIXME remove this once this reanimated fix gets released
  // https://github.com/software-mansion/react-native-reanimated/issues/3355
  if (process.browser) {
    // @ts-ignore
    window._frameTimestamp = null
  }
}

fixReanimatedIssue()

import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'

import '../global.css'
import { AppProps } from 'next/app'
import Nav from 'app/modules/layout/templates/nav'
import { MobileMenuProvider } from 'app/lib/context/mobile-menu-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Acme</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider>
        <MobileMenuProvider>
          <Nav />
          <Component {...pageProps} />
        </MobileMenuProvider>
      </Provider>
    </>
  )
}

export default MyApp
