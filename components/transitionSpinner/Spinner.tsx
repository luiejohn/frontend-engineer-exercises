import { Flex, Spinner } from '@chakra-ui/react';
import { FC } from 'react';

const pageTransitionSpinner: FC = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height={'100vh'} width="100%">
      <Spinner color="red.500" size={'xl'} />
    </Flex>
  );
};

export default pageTransitionSpinner;
