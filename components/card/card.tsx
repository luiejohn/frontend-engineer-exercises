import { Box, Flex } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { Button, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
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

const Card: FC<IProps> = ({ info }) => {
  const { isLogin } = useSelector((state: RootState) => state.login);

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
          width="100%"
          height="100%"
          src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="card-image"
        />
        {isLogin && (
          <Box position="absolute" top={5} right={5}>
            <Menu>
              <MenuButton as={Button} borderRadius="50%" fontSize="23px" fontWeight="800">
                ⋮
              </MenuButton>
              <MenuList w="100px">
                <MenuItem>Edit</MenuItem>
                <MenuItem>Delete</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        )}
      </Box>
      <Flex p={5} flexDirection="column" justifyContent="space-between" flex="1">
        <Box>
          <Link key={info.node.id} href={`/products/${info.node.id}`}>
            <Box fontSize="18px" fontWeight="700">
              {info.node.name}
            </Box>
          </Link>
          <Box>
            <Text noOfLines={5}>{info.node.description}</Text>
          </Box>
        </Box>

        <Button bgColor="#FAF5FF" p="8px 0" borderRadius="5px" color="#553C9A" fontWeight="600" lineHeight="24px">
          Add Cart
        </Button>
      </Flex>
    </Flex>
  );
};

export default Card;
