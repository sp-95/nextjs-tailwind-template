import type { AppProps } from 'next/app'
import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}
export default MyApp
