import { useQuery } from '@apollo/client';
import { Divider, Heading } from '@chakra-ui/layout';
import { Box, Button, Flex, Grid, Spinner } from '@chakra-ui/react';
import Card from '@components/card/card';
import Layout from '@components/Layout';
import Pagination from '@components/pagination/pagination';
import Link from 'next/link';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { GET_PRODUCTS } from '../../graphql/queries';

const Products: FC = () => {
  const { isLogin } = useSelector((state: RootState) => state.login);

  const { data } = useQuery(GET_PRODUCTS, { fetchPolicy: 'cache-and-network', variables: { first: 12 } });

  return (
    <Layout>
      <Flex flexDirection="column" alignItems="stretch">
        <Flex justifyContent="space-between" mt={39}>
          <Heading mb={5}>Products</Heading>

          {isLogin ? (
            <Flex mb={2} alignSelf="flex-end">
              <Link href="/products/add">
                <Button bgColor="#805AD5" color="#fff">
                  Add Products
                </Button>
              </Link>
            </Flex>
          ) : null}
        </Flex>

        <Divider mb={13} bgColor="#E2E8F0" />

        {!data ? (
          <Flex flex="1" flexDirection="column" justifyContent="center" alignItems="center">
            <Spinner size="xl" />
          </Flex>
        ) : (
          <Box>
            <Grid gridTemplateColumns="repeat(4, 1fr)" gridGap={5} mb={10}>
              {data.products.edges.map((item, index) => (
                <Card key={index} info={item} />
              ))}
            </Grid>

            <Pagination pageDetails={data.products.pageInfo} />
          </Box>
        )}
      </Flex>
    </Layout>
  );
};

export default Products;
