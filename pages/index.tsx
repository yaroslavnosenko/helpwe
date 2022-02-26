import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '../components/hero'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Helpwe</title>
        <meta name="description" content="Helpwe - portal pomoci pre" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main">
        <Hero />
      </Box>

      <footer></footer>
    </>
  )
}

export default HomePage
