import { useMutation, useQuery } from '@apollo/client';
import { useToast } from '@chakra-ui/react';
import Layout from '@components/Layout';
import ProductForm from 'components/productForm/productForm';
import { EDIT_PRODUCT, GET_PRODUCTS_BYID } from 'graphql/queries';
import Router, { useRouter } from 'next/router';
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';

interface IFormDataProps {
  title: string;
  description: string;
}

const AddItemPage: FC = () => {
  const [editProduct] = useMutation(EDIT_PRODUCT);

  const router = useRouter();
  const { handle } = router.query;
  const { data } = useQuery(GET_PRODUCTS_BYID, { variables: { id: handle } });
  const toast = useToast();
  const onSubmit: SubmitHandler<IFormDataProps> = async (formData) => {
    const data = {
      id: handle,
      body: formData,
    };

    try {
      await editProduct({ variables: { input: data } });
      toast({
        title: `Successfully updated the product!`,
        isClosable: true,
        status: 'success',
        position: 'top-right',
      });
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
      <ProductForm onSubmit={onSubmit} isEdit data={data} />
    </Layout>
  );
};
export default AddItemPage;
