import { Box, Container, Flex } from '@chakra-ui/layout';
import { FC } from 'react';
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: FC = () => (
  <Container maxWidth="1220px">
    <Flex justifyContent="space-between" p={5} alignItems="center" fontSize="16px">
      <Box color="#9CA3AF">2020 HOV Onboarding. All rights reserved.</Box>
      <Flex>
        <Box ml="22px">
          <FaFacebook color="#9CA3AF" fontSize="20px" />
        </Box>
        <Box ml="22px">
          <FaInstagram color="#9CA3AF" fontSize="20px" />
        </Box>
        <Box ml="22px">
          <FaTwitter color="#9CA3AF" fontSize="20px" />
        </Box>
        <Box ml="22px">
          <FaGithub color="#9CA3AF" fontSize="20px" />
        </Box>
        <Box ml="22px">
          <FaDribbble color="#9CA3AF" fontSize="20px" />
        </Box>
      </Flex>
    </Flex>
  </Container>
);

export default Footer;
