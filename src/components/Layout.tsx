import { ReactNode } from 'react'

import Head from 'next/head'

import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta
          name='description'
          content='PokeNext is a pokedex made with Next.js'
        />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className='main-container'>{children}</main>
      <Footer />
    </>
  )
}
