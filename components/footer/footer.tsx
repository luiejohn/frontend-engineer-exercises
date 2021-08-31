import { Box, Container, Flex } from '@chakra-ui/layout';
import { FC } from 'react';

const Footer: FC = () => (
  <Container maxWidth="1220px">
    <Flex justifyContent="space-between" p={5}>
      <Box>2020 HOV Onboarding. All rights reserved.</Box>
      <Box>Social media here.</Box>
    </Flex>
  </Container>
);

export default Footer;
