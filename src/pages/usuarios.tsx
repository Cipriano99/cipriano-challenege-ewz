import { Avatar, Box, Flex, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react"
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { IUsers } from "../types"
import axios from '../api/axios'
import { SeeMoreButton } from "../components/controlled/SeeMoreButton"

type Props = {
  users: IUsers[],
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data: users } = await axios.get('/users')

  if (!users) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      users,
    }
  }
}

const Usuarios: NextPage<Props> = ({ users }) => {
  return (
    <Stack minH='100vh' align='center' pb={{ base: 16, lg: 32 }}>
      <Head>
        <title>Usuários | Desafio EWZ - Cipriano</title>
        <meta name="description" content="Projeto desenvolvido por Samuel Cipriano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Stack gap={6} pt={{ sm: 8, lg: 24 }} px={4}>
        <Heading textAlign='start'>Usuários</Heading>

        <Grid
          templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)', }}
          maxW={{ sm: 'xl', md: '2xl', lg: '4xl', xl: '7xl' }}
          gap={4}
        >
          {users.map(user => (
            <GridItem w='100%' minH={24} bg='ewz.700' display='flex' flexDirection='column' gap={6} rounded={8} py={18} px={4} key={user.id}>

              <Flex gap={{ base: 2, md: 4 }}>
                <Avatar />
                <Box>
                  <Text>{user.name}</Text>
                  <Text fontWeight='bold'>{user.website}</Text>
                </Box>
              </Flex>

              <Stack align='center'>
                <Text>
                  <strong>E-mail: </strong>
                  {user.email}
                </Text>
                <Text>
                  <strong>Telefone: </strong>
                  {user.phone}
                </Text>
                <Text>
                  <strong>Rua: </strong>
                  {user.address.street}
                </Text>
                <Text>
                  <strong>Cidade: </strong>
                  {user.address.city}
                </Text>
              </Stack>

              <SeeMoreButton />
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </Stack>
  )
}

export default Usuarios
