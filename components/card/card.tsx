import { Box, Flex } from '@chakra-ui/layout';
import { FC } from 'react';

interface IPropsDetails {
  title: string;
  desc: string;
}

interface IProps {
  info: IPropsDetails;
}

const Card: FC<IProps> = ({ info }) => (
  <Flex flexDirection="column">
    <Box h="100px" w="100%" border="1px solid red">
      image here
    </Box>
    <Box p={5} border="1px solid red">
      <Box>{info.title}</Box>

      <Box>{info.desc}</Box>
    </Box>
  </Flex>
);

export default Card;
