import { Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

const Nav: FC = () => (
  <Flex flex="0" flexDirection="column" bgColor="#fff" boxShadow="0 3px 4px -1px rgba(0,0,0,0.14);">
    <Flex justifyContent="space-between" height="64px" mr={28} ml={28}>
      <Flex alignItems="center">
        <Flex fontSize="20px" fontWeight="700" mr={4}>
          <Link href="/">workflow</Link>
        </Flex>
        <Flex>
          <Link href="/products">Products</Link>
        </Flex>
      </Flex>

      <Flex alignItems="center">
        <Link href="/">
          <Button variant="outline" height="40px" borderColor="#ccc" mr={5}>
            Login
          </Button>
        </Link>
        <Link href="/signup">
          <Button variant="solid" bgColor="#805AD5" color="#fff" height="40px">
            SignUp
          </Button>
        </Link>
      </Flex>
    </Flex>
  </Flex>
);

export default Nav;
