import { Box } from '@chakra-ui/layout';
import { Divider, Flex } from '@chakra-ui/react';
import { FC } from 'react';

const Pagination: FC = () => {
  return (
    <Box>
      <Divider />
      <Flex justifyContent="space-between" p={4} mb={23}>
        <Box>Prev</Box>
        <Box>1 2 3 4 5</Box>
        <Box>Next</Box>
      </Flex>
    </Box>
  );
};

export default Pagination;
