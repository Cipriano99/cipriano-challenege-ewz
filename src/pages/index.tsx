import { Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Stack minH='100vh'>
      <Head>
        <title>Desafio EWZ - Cipriano</title>
        <meta name="description" content="Projeto desenvolvido por Samuel Cipriano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Stack>
  )
}

export default Home
