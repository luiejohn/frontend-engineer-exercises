import { Container, Flex } from '@chakra-ui/react';
import Footer from '@components/footer/footer';
import Nav from '@components/nav/nav';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface IProps {
  minHeight?: string;
}

const ROUTES_TO_RETAIN_FOOTER = ['/products', '/products/[handle]', '/products/add', '/products/edit/[handle]'];

const Layout: FC<IProps> = ({ children }) => {
  const router = useRouter();
  const isRetainableRoute = ROUTES_TO_RETAIN_FOOTER.includes(router.pathname);

  return (
    <Flex height="100vh" bgColor="#f7fafc" flexDirection="column" overflowY="scroll" alignItems="stretch">
      <Nav />
      <Flex flex="1">
        <Container maxWidth="1220px" height="100%">
          {children}
        </Container>
      </Flex>
      <Flex bgColor="#fff">{isRetainableRoute && <Footer />}</Flex>
    </Flex>
  );
};

export default Layout;
