import { useQuery } from '@apollo/client';
import { Divider, Heading } from '@chakra-ui/layout';
import { Button, Flex, Grid, Spinner } from '@chakra-ui/react';
import Card from '@components/card/card';
import Layout from '@components/Layout';
import Pagination from '@components/pagination/pagination';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { GET_PRODUCTS } from '../../graphql/queries';

export interface IProduct {
  id?: string;
  name: string;
  description: string;
}
export interface IProductEdge {
  cursor: string;
  node: IProduct;
}

const Products: FC = () => {
  const [products, setProducts] = useState<IProductEdge[]>([]);
  const [currentPage, setCurrentPage] = useState(undefined);
  const { isLogin } = useSelector((state: RootState) => state.login);

  const { data } = useQuery(GET_PRODUCTS, { fetchPolicy: 'cache-and-network', variables: { first: 12 } });

  useEffect(() => {
    if (data) {
      setProducts(data.products.edges);
      setCurrentPage(data.products.pageInfo);
    }
  }, [data]);

  return (
    <Layout>
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

      {products.length === 0 ? (
        <Flex justifyContent="center" alignItems="center" w="100%" h="100%">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Grid gridTemplateColumns="repeat(4, 1fr)" gridGap={5} mb={10}>
          {products.map((item, index) => (
            <Card key={index} info={item} />
          ))}
        </Grid>
      )}

      <Pagination pageDetails={currentPage} />
    </Layout>
  );
};

export default Products;
