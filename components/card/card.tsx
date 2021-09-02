import { useMutation } from '@apollo/client';
import { Box, Flex } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import {
  Button,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from '@chakra-ui/react';
import { DELETE_PRODUCT, GET_PRODUCTS } from 'graphql/queries';
import Link from 'next/link';
import { FC, useState } from 'react';
import { BiCartAlt, BiDotsVerticalRounded } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

interface IProductDetails {
  id?: string;
  name: string;
  description: string;
}
interface IPropsDetails {
  cursor: string;
  node: IProductDetails;
}

interface IProps {
  info: IPropsDetails;
}

type DeleteFn = () => Promise<void>;

const Card: FC<IProps> = ({ info }) => {
  const { isLogin } = useSelector((state: RootState) => state.login);
  const [isModal, setModal] = useState(false);
  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    refetchQueries: [GET_PRODUCTS, 'Products'],
  });

  const toast = useToast();
  const handleDeleteProduct: DeleteFn = async () => {
    try {
      await deleteProduct({ variables: { input: { id: info.node.id } } });
      toast({
        title: `Successfully deleted the product!`,
        isClosable: true,
        status: 'success',
        position: 'top-right',
      });
      setModal(false);
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
    <Flex
      overflow="hidden"
      flexDirection="column"
      height="424px"
      borderRadius="8px"
      bgColor="#fff"
      boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
    >
      <Box h="170px" w="100%" position="relative">
        <Image
          fallbackSrc="https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png"
          width="100%"
          height="100%"
          src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="card-image"
        />
        {isLogin && (
          <Box position="absolute" top={5} right={5}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<BiDotsVerticalRounded fontSize={20} />}
                isRound
                fontWeight="800"
                bgColor="#EDF2F7"
              />

              <MenuList>
                <Link href={`products/edit/${info.node.id}`}>
                  <MenuItem>Edit</MenuItem>
                </Link>
                <MenuItem onClick={(): void => setModal(true)}>Delete</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        )}
      </Box>
      <Flex p={5} flexDirection="column" justifyContent="space-between" flex="1">
        <Box>
          <Link key={info.node.id} href={`/products/${info.node.id}`}>
            <Box fontSize="18px" fontWeight="700" cursor="pointer">
              {info.node.name}
            </Box>
          </Link>
          <Box>
            <Text noOfLines={5}>{info.node.description}</Text>
          </Box>
        </Box>

        <Button
          leftIcon={<BiCartAlt />}
          bgColor="#FAF5FF"
          p="8px 0"
          borderRadius="5px"
          color="#553C9A"
          fontWeight="600"
          lineHeight="24px"
        >
          Add Cart
        </Button>

        <Modal isOpen={isModal} onClose={(): void => setModal(false)} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Are you sure you want to delete this product? You can't undo this afterwards</ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={(): void => setModal(false)}>
                Close
              </Button>
              <Button variant="solid" onClick={handleDeleteProduct} bgColor="#E53E3E" color="#fff">
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
};

export default Card;
