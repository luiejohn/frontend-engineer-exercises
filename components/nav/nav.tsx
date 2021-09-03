import { Avatar, Box, Button, Container, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { BiBell } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from 'redux/login/login';
import { RootState } from 'redux/store';
import { ROUTES } from '../Layout/Layout';

const Nav: FC = () => {
  const { isLogin } = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();
  const router = useRouter();
  const Logout = (): void => {
    dispatch(setLogout());
  };
  const isWithProducts = ROUTES.includes(router.pathname);

  return (
    <Flex flex="0" bgColor="#fff" boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)">
      <Container display="flex" flexDirection="column" maxWidth="1220px">
        <Flex justifyContent="space-between" height="64px">
          <Flex alignItems="stretch">
            <Flex fontSize="23px" fontWeight="700" mr={5} alignSelf="center">
              <Link href="/">
                <Image src="/static/logo.JPG" alt="me" width="135px" height="35px" />
              </Link>
            </Flex>
            <Flex alignItems="center" borderBottom={isWithProducts ? '2px solid #6366F1' : '2px solid transparent'}>
              <Link href="/products">Products</Link>
            </Flex>
          </Flex>

          <Flex alignItems="center">
            {isLogin ? (
              <Flex alignItems="center">
                <BiBell color="#9CA3AF" fontSize="23px" />
                <Box onClick={Logout} cursor="pointer" ml="15px">
                  <Avatar
                    size="sm"
                    name="User"
                    src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png"
                  />
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
