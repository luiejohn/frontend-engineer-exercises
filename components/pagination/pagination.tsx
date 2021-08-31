import { Box } from '@chakra-ui/layout';
import { Divider, Flex } from '@chakra-ui/react';
import { FC } from 'react';

interface IProps {
  pageDetails?: {
    endCursor: string;
    startCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

const Pagination: FC<IProps> = () => {
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
