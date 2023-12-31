import '../lib/dayjs'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { GlobalStyles } from '../styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/react-query'
import { DefaultSeo } from 'next-seo'

GlobalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt-BR',
            url: 'https://www.ignitecall.thiago-pratti.com.br',
            siteName: 'Ignite Call',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
