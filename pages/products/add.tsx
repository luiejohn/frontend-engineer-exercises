import { useMutation } from '@apollo/client';
import Layout from '@components/Layout';
import ProductForm from '@components/productForm/productForm';
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

  const onSubmit: SubmitHandler<IFormDataProps> = async (formData) => {
    try {
      await addProduct({ variables: { input: formData } });
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
      {/* <Flex
        mt={90}
        flexDirection="column"
        boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
        bgColor="#fff"
      >
        <Flex p={7}>
          <Box>
            <Box mb={3}>Photo</Box>
            <Flex width="393px" height="300px" border="2px dashed #ccc" justifyContent="center" alignItems="center">
              <FileUpload accept={'image/*'} multiple />
            </Flex>
          </Box>

          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              marginLeft: '30px',
            }}
          >
            <Box>
              <Box mb={5}>
                <FormControl>
                  <FormLabel mb={3}>Title</FormLabel>
                  <Input type="text" placeholder="Enter title" {...register('name')} />
                  {errors.name && (
                    <Box fontSize="12px" position="absolute" left="3px" bottom="-19px" color="#ff6666">
                      {errors.name.message}
                    </Box>
                  )}
                </FormControl>
              </Box>
              <Box mb={5}>
                <FormControl>
                  <FormLabel mb={3}>Description</FormLabel>
                  <Textarea placeholder="Enter description" {...register('description')} />
                  {errors.description && (
                    <Box fontSize="12px" position="absolute" left="3px" bottom="-19px" color="#ff6666">
                      {errors.description.message}
                    </Box>
                  )}
                </FormControl>
              </Box>
            </Box>
            <Flex justifyContent="flex-end">
              <Button marginRight={4} w="175px">
                Cancel
              </Button>
              <Button w="175px" bgColor="#805AD5" color="#fff" p="10px 0" type="submit">
                Submit
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex> */}
    </Layout>
  );
};
export default AddItemPage;
