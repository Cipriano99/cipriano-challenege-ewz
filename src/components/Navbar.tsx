import { HStack, Link, Text } from "@chakra-ui/react"

export const Navbar = () => {
  return (
    <HStack h={20} w='full' bg='ewz.700' justify='space-between' px={76}>
      <Text fontSize={18} fontWeight='bold'>TodoTest</Text>
      <HStack>
        <Link fontSize={14} href="/">todos</Link>
        <Link fontSize={14} href="/usuarios">usuários</Link>
      </HStack>
    </HStack>
  )
}