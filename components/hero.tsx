import { Box, Button, Container, Heading, HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'

export const Hero = () => {
  return (
    <Box position="relative" bg="black">
      <Container maxW="container.lg" position="relative" zIndex="1" py="24">
        <Heading color="white" mb="4">
          HELPWE.SK
        </Heading>
        <Heading fontSize="2xl" as="p" color="white">
          A platform that unites needy people from Ukraine who suffered as a
          result of the war and all whose hearts are open to help.
        </Heading>
        <HStack mt="8" wrap="wrap">
          <Link href="/requests">
            <a>
              <Button colorScheme="blue">I want to help</Button>
            </a>
          </Link>
          <Link href="/volonteers">
            <a>
              <Button colorScheme="yellow">I need a help</Button>
            </a>
          </Link>
        </HStack>
      </Container>
      <Box
        position="absolute"
        background="url('/cover.jpg')"
        py="24"
        w="100%"
        h="100%"
        top="0"
        zIndex="0"
        backgroundSize="cover"
        backgroundPosition="bottom"
        filter={''}
      />
      <Box
        zIndex="0"
        w="100%"
        h="100%"
        top="0"
        position="absolute"
        bg="blackAlpha.500"
      />
    </Box>
  )
}
