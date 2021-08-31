import { useMutation } from '@apollo/client';
import { useToast } from '@chakra-ui/react';
import Layout from '@components/Layout';
import ProductForm from '@components/productForm/productForm';
import Router from 'next/router';
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
// import * as yup from 'yup';
import { CREATE_PRODUCT } from '../../graphql/queries';

// const schema = yup.object().shape({
//   name: yup.string().required('This field is required'),
//   description: yup.string().required('This field is required'),
// });

interface IFormDataProps {
  title: string;
  description: string;
}

const AddItemPage: FC = () => {
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({
  //     resolver: yupResolver(schema),
  //   });

  const [addProduct] = useMutation(CREATE_PRODUCT);
  const toast = useToast();

  const onSubmit: SubmitHandler<IFormDataProps> = async (formData) => {
    try {
      await addProduct({ variables: { input: formData } });
      toast({
        title: `Successfully created a product!`,
        status: 'success',
        position: 'top-right',
        isClosable: true,
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
      <ProductForm onSubmit={onSubmit} />
    </Layout>
  );
};
export default AddItemPage;
