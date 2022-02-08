import React, { FC } from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';

export const Header: FC = () => {
  console.log('Header');

  return (
    <Flex p="16px" alignContent="center" justifyContent="space-between">
      <Flex>
        <Text fontSize="24px" fontWeight="black" color="text.default">
          Maac
        </Text>
        <Text fontSize="24px" fontWeight="light" color="text.default" mr="24px">
          .studio
        </Text>
      </Flex>
      <HStack alignContent="center" spacing="24px">
        <Text color="text.default" fontWeight="medium">
          Section 1
        </Text>
        <Text color="text.default" fontWeight="medium">
          Section 2
        </Text>
        <Text color="text.default" fontWeight="medium">
          Section 3
        </Text>
        <Text color="text.default" fontWeight="medium">
          Section 4
        </Text>
      </HStack>
    </Flex>
  );
};
