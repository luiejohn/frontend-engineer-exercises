import { useMutation, useQuery } from '@apollo/client';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Image,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';
import DeleteModal from '@components/deleteModal/deleteModal';
import Layout from '@components/Layout';
import { DELETE_PRODUCT, GET_PRODUCTS_BYID } from 'graphql/queries';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { BiCartAlt, BiEdit, BiTrash } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

type DeleteFn = () => Promise<void>;
const ItemPage: FC = () => {
  const { isLogin } = useSelector((state: RootState) => state.login);
  const [isModal, setModal] = useState(false);
  const router = useRouter();
  const { handle } = router.query;
  const { data } = useQuery(GET_PRODUCTS_BYID, { variables: { id: handle } });
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const toast = useToast();
  const handleDeleteProduct: DeleteFn = async () => {
    try {
      await deleteProduct({ variables: { input: { id: handle } } });
      toast({
        title: `Successfully deleted the product!`,
        isClosable: true,
        status: 'success',
        position: 'top-right',
      });
      setModal(false);
      await Router.push('/products');
    } catch (error) {
      toast({
        title: error.message,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

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

              <Button leftIcon={<BiCartAlt />} bgColor="#FAF5FF" color="#553C9A" mt={5} p="10px 0" w="100%">
                Add to cart
              </Button>
            </Box>

            <Box ml={5} flex="1">
              <Box mb={5}>
                <Flex justifyContent="space-between" alignItems="center">
                  <Box fontSize="30px" fontWeight="700" borderRadius="6px">
                    {data?.node.name}
                  </Box>
                  {isLogin && (
                    <Flex>
                      <Link href={`/products/edit/${handle}`}>
                        <Box mr={4} p={4} bgColor="#EDF2F7" borderRadius="6px" cursor="pointer">
                          <BiEdit />
                        </Box>
                      </Link>

                      <Box
                        p={4}
                        bgColor="#EDF2F7"
                        borderRadius="6px"
                        cursor="pointer"
                        onClick={(): void => setModal(true)}
                      >
                        <BiTrash />
                      </Box>
                    </Flex>
                  )}
                </Flex>
              </Box>
              <Box mb={5}>{data?.node.description}</Box>
            </Box>
            <DeleteModal isModal={isModal} setModal={setModal} submitFunc={handleDeleteProduct} />
          </Flex>
        </Flex>
      )}
    </Layout>
  );
};

export default ItemPage;
