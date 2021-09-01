import { BellIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from 'redux/login/login';
import { RootState } from 'redux/store';

const Nav: FC = () => {
  const { isLogin } = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  const Logout = (): void => {
    dispatch(setLogout());
  };

  return (
    <Flex flex="0" bgColor="#fff" boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)">
      <Container display="flex" flexDirection="column" maxWidth="1220px">
        <Flex justifyContent="space-between" height="64px">
          <Flex alignItems="center">
            <Flex fontSize="23px" fontWeight="700" mr={5}>
              <Link href="/">
                <Image src="/logo.jpg" alt="me" width="135px" height="35px" />
              </Link>
            </Flex>
            <Flex>
              <Link href="/products">Products</Link>
            </Flex>
          </Flex>

          <Flex alignItems="center">
            {isLogin ? (
              <Flex alignItems="center">
                <BellIcon w={5} h={5} mr="15px" />
                <Box onClick={Logout} cursor="pointer">
                  Logout
                </Box>
              </Flex>
            ) : (
              <>
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
              </>
            )}
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Nav;
