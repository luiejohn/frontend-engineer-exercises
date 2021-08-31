import { Box, Button, Flex } from '@chakra-ui/react';
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
          {isLogin ? (
            <Box onClick={Logout}>Logout</Box>
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
    </Flex>
  );
};

export default Nav;
