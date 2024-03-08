import React from "react";
import { Box, Container, Heading, Text, Image, Link, VStack, HStack, IconButton, useColorMode, useColorModeValue, Flex } from "@chakra-ui/react";
import { FaSun, FaMoon, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bg} color={color}>
      <Container maxW="container.md" pt={10}>
        <Flex justifyContent="space-between" alignItems="center" mb={8}>
          <Heading as="h1" size="xl">
            Harrison Ford
          </Heading>
          <IconButton icon={colorMode === "light" ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} variant="ghost" />
        </Flex>
        <VStack spacing={4} as="section" mb={12}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1602373896898-81f728fd6389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxIYXJyaXNvbiUyMEZvcmR8ZW58MHx8fHwxNzA5ODk2OTcyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Harrison Ford" mb={4} />
          <Heading as="h2" size="md">
            Actor | Pilot | Environmental Activist
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Known for roles in iconic films like Indiana Jones and Star Wars, Harrison Ford is not just a legendary actor but also a passionate pilot and environmental advocate.
          </Text>
        </VStack>
        <Box as="section" mb={12}>
          <Heading as="h3" size="lg" mb={4}>
            Connect with me
          </Heading>
          <HStack spacing={4}>
            <Link href="https://twitter.com/harrisonford" isExternal>
              <IconButton icon={<FaTwitter />} aria-label="Twitter" />
            </Link>
            <Link href="https://instagram.com/harrisonford" isExternal>
              <IconButton icon={<FaInstagram />} aria-label="Instagram" />
            </Link>
            <Link href="https://linkedin.com/in/harrisonford" isExternal>
              <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" />
            </Link>
          </HStack>
        </Box>
        <Box as="footer" textAlign="center" py={10}>
          <Text>&copy; {new Date().getFullYear()} Harrison Ford. All rights reserved.</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
