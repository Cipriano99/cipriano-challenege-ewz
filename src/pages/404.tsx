import { Stack, Heading, Text, Button } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Stack gap={4} align='center' textAlign="center" py={10} px={6}>
      <Heading
        as="h2"
        size="4xl"
        bgGradient="linear(to-r, ewz.500, ewz.400)"
        backgroundClip="text">
        404
      </Heading>
      <Heading as='h3'>
        Página não encontrada!
      </Heading>
      <Text color={'ewz.200'} mb={6}>
        A página que você procura talvez não exista.
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, ewz.500, ewz.400)"
        color="white"
        variant="solid"
      >
        Voltar ao início
      </Button>
    </Stack>
  );
}