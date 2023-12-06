import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/global'

GlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
