import { Grid, Heading, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { ITodo, IUsers } from '../types'
import { CardTodo } from '../components/CardTodo'
import axios from '../api/axios'

type Props = {
  todos: ITodo[],
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data: todos } = await axios.get('/todos')

  if (!todos) {
    return {
      notFound: true,
    }
  }

  todos.length = 15

  todos.map(async (todo: ITodo) => {
    const author = await axios.get(`/users/${todo.userId}`) as IUsers
    todo.author = author?.name
    return todo
  })

  return {
    props: {
      todos,
    }
  }
}


const Home: NextPage<Props> = ({ todos }) => {
  return (
    <Stack minH='100vh' align='center' pb={32}>
      <Head>
        <title>Todos | Desafio EWZ - Cipriano</title>
        <meta name="description" content="Projeto desenvolvido por Samuel Cipriano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Stack gap={6} pt={{ sm: 8, lg: 24 }} px={{ base: 2, md: 4 }}>
        <Heading textAlign='start'>Todos os todos</Heading>

        <Grid
          templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)', }}
          maxW={{ sm: 'lg', md: 'xl', lg: '4xl', xl: '7xl' }}
          gap={4}
        >
          {todos.map(todo => (
            <CardTodo todo={todo} key={todo.id} />
          ))}
        </Grid>

      </Stack>
    </Stack>
  )
}

export default Home
