import { Box, GridItem, Text } from "@chakra-ui/react"
import { ITodo } from '../types'

export const CardTodo = ({ todo }: { todo: ITodo }) => {
  return (
    <GridItem w='100%' minH={24} display='flex' flexDirection='column' gap={[2, 4]} bg='ewz.700' rounded={8} py={18} px={4}>
      <Box w={10} h={1.5} rounded={4} bg={todo.completed ? 'ewz.500' : 'ewz.400'}></Box>
      <Text fontSize={14} ><strong>Título: </strong> {todo.title}</Text>
      <Text fontSize={14} ><strong>Responsável: </strong> {todo.author} </Text>
    </GridItem>
  )
}