import React, { FC } from 'react';
import { Box, Text, Flex, Heading, Button } from '@chakra-ui/react';

import { Header } from '../../components/header';

export const HomePage: FC = () => {
  console.log('HomePage');

  return (
    <Flex h="100vh">
      <Box w="30%" h="vh" flex={1} />
      <Box w="70%" h="vh" bg="tertiary.default">
        <Header />
      </Box>
      <Flex
        position="absolute"
        top="0px"
        right="0px"
        bottom="0px"
        left="0px"
        alignItems="center"
        pl="10%"
      >
        <Box>
          <Heading size="3xl">LOREM IPSUM</Heading>
          <Heading size="3xl">ONE PAGE</Heading>
          <Heading size="3xl" mb="24px">
            SITE
          </Heading>
          <Text mb="24px">
            It is a long established fact that a reader will be distracted by.
          </Text>
          <Button
            size="lg"
            bg="primary.default"
            color="text.default"
            rounded="full"
          >
            Click me
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
