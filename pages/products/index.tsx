import { useQuery } from '@apollo/client';
import { SmallAddIcon } from '@chakra-ui/icons';
import { Divider, Heading } from '@chakra-ui/layout';
import { Box, Button, Flex, Grid, Spinner } from '@chakra-ui/react';
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
  imageUrl?: string;
  imageAlt?: string;
}

export interface IProductEdge {
  cursor: string;
  node: IProduct;
}

const setProductPages = (products: IProductEdge[]): Array<IProductEdge[]> => {
  let limit = 1,
    productPage: Array<IProductEdge> = [],
    productPages: Array<IProductEdge[]> = [];

  products.map((product: IProductEdge, i: number) => {
    productPage = [...productPage, product];

    if (limit === 12) {
      productPages = [...productPages, productPage];
      productPage = [];
      limit = 0;
    }

    if (products.length === i + 1 && limit < 12) {
      productPages = [...productPages, productPage];
    }

    limit++;
  });

  return productPages;
};

const Products: FC = () => {
  const { isLogin } = useSelector((state: RootState) => state.login);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<Array<IProductEdge[]>>([[]]);

  const { data } = useQuery(GET_PRODUCTS, { fetchPolicy: 'cache-and-network', variables: { first: 1000 } });

  useEffect(() => {
    if (data) {
      setProducts(setProductPages(data.products.edges));
    }
  }, [data]);

  return (
    <Layout>
      <Flex flexDirection="column" alignItems="stretch">
        <Flex justifyContent="space-between" mt={39}>
          <Heading mb={5}>Products</Heading>

          {isLogin ? (
            <Flex mb={2} alignSelf="flex-end">
              <Link href="/products/add">
                <Button bgColor="#805AD5" color="#fff" leftIcon={<SmallAddIcon fontSize="22px" />}>
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
              {products[currentPage - 1].map((item, index) => (
                <Card key={index} info={item} />
              ))}
            </Grid>
            <Pagination
              total={data ? data.products.edges.length : 0}
              onPageNumber={(pageNumber: number): void => setCurrentPage(pageNumber)}
            />
          </Box>
        )}
      </Flex>
    </Layout>
  );
};

export default Products;
