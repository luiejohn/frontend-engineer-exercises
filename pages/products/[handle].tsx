import { Box, Flex } from '@chakra-ui/react';
import Layout from '@components/Layout';
import { FC } from 'react';

const ItemPage: FC = () => (
  <Layout>
    <Flex mt={90} flexDirection="column" flex="1">
      <Box>Products ReactJS</Box>
      <Flex border="1px solid red">
        <Box>
          <Box width="393px" height="300px" border="1px solid green">
            Image
          </Box>
          <Box>Cart Button</Box>
        </Box>

        <Box ml={5}>
          <Box mb={5} fontSize="30px" fontWeight="700">
            Title
          </Box>
          <Box>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptate vero? Itaque laborum cumque
            autem tenetur neque aliquid magni animi quam soluta, voluptatum, ullam iure est veniam illo numquam sint?
          </Box>
        </Box>
      </Flex>
    </Flex>
  </Layout>
);
export default ItemPage;
