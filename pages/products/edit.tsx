import { useMutation } from '@apollo/client';
import Layout from '@components/Layout';
import ProductForm from '@components/productForm/productForm';
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { EDIT_PRODUCT } from '../../graphql/queries';

interface IFormDataProps {
  title: string;
  description: string;
}

const AddItemPage: FC = () => {
  const [editProduct] = useMutation(EDIT_PRODUCT);

  const onSubmit: SubmitHandler<IFormDataProps> = async (formData) => {
    try {
      await editProduct({ variables: { input: formData } });
      // toast({
      //   title: `Successfully created a product!`,
      //   status: 'success',
      //   position: 'top-right',
      //   isClosable: true,
      // });
      // await Router.push('/products');
    } catch (error) {
      // toast({
      //   title: error.message,
      //   status: 'error',
      //   position: 'top',
      //   isClosable: true,
      // });
    }
  };

  return (
    <Layout>
      <ProductForm onSubmit={onSubmit} />
    </Layout>
  );
};
export default AddItemPage;
