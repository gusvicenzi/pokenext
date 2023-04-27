import Layout from '@/components/Layout'
import { queryClient } from '@/hooks/useAPI'
import { QueryClientProvider } from '@tanstack/react-query'
import { PokemonProvider } from '@/store/PokemonContext'
import '@/styles/globals.sass'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PokemonProvider>
    </QueryClientProvider>
  )
}

