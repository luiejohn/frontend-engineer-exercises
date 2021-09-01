import { useQuery } from '@apollo/client';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import Layout from '@components/Layout';
import { GET_PRODUCTS_BYID } from 'graphql/queries';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const ItemPage: FC = () => {
  const router = useRouter();
  const { handle } = router.query;
  const { data } = useQuery(GET_PRODUCTS_BYID, { variables: { id: handle } });

  return (
    <Layout>
      {!data ? (
        <Flex justifyContent="center" alignItems="center" w="100%" h="100%">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Flex mt={90} flexDirection="column" flex="1">
          <Breadcrumb separator={<ChevronRightIcon color="gray.500" width={6} height={10} />}>
            <BreadcrumbItem>
              <Link href="/products">
                <Text color="gray.400" fontWeight={500} cursor="pointer">
                  Products
                </Text>
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" color="gray.400" fontWeight={500}>
                {data?.node.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex>
            <Box>
              <Box width="393px" height="300px">
                <Image
                  borderRadius="8px"
                  width="100%"
                  height="100%"
                  src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="card-image"
                />
              </Box>

              <Button bgColor="#FAF5FF" color="#553C9A" mt={5} w="100%">
                Cart Button
              </Button>
            </Box>

            <Box ml={5} flex="1">
              <Box mb={5}>
                <Flex justifyContent="space-between" alignItems="center">
                  <Box fontSize="30px" fontWeight="700" borderRadius="6px">
                    {data?.node.name}
                  </Box>
                  <Flex>
                    <Link href={`/products/edit/${handle}`}>
                      <Box mr={4} p={3} bgColor="#EDF2F7">
                        Edit
                      </Box>
                    </Link>

                    <Box p={3} bgColor="#EDF2F7" borderRadius="6px">
                      Delete
                    </Box>
                  </Flex>
                </Flex>
              </Box>
              <Box mb={5}>{data?.node.description}</Box>
            </Box>
          </Flex>
        </Flex>
      )}
    </Layout>
  );
};

export default ItemPage;
