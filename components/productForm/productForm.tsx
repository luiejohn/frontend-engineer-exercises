import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Textarea } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BiImageAdd } from 'react-icons/bi';
import * as yup from 'yup';

interface IFormDataProps {
  title: string;
  description: string;
}

interface IProps {
  onSubmit: SubmitHandler<IFormDataProps>;
  isAdd?: boolean;
  isEdit?: boolean;
  data?: {
    node: {
      description: string;
      id: string;
      name: string;
    };
  };
}

const schema = yup.object().shape({
  name: yup.string().required('This field is required'),
  description: yup.string().required('This field is required'),
});

const ProductForm: FC<IProps> = ({ onSubmit, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Flex
      mt={90}
      flexDirection="column"
      boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
      bgColor="#fff"
    >
      <Flex p={7}>
        <Box>
          <Box mb={3}>Photo</Box>
          <Flex
            width="393px"
            height="300px"
            border="2px dashed #ccc"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box>
              <BiImageAdd fontSize="45px" color="#9CA3AF" />
            </Box>
            <Box>
              <span style={{ color: '#6B46C1' }}>Upload a file</span> or drag and drop
            </Box>
            <Text fontSize="12px">PNG, JPG, GIF, up to 10MB</Text>
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
                <Input type="text" placeholder="Enter title" {...register('name')} defaultValue={data?.node.name} />
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
                <Textarea
                  placeholder="Enter description"
                  {...register('description')}
                  defaultValue={data?.node.description}
                />
                {errors.description && (
                  <Box fontSize="12px" position="absolute" left="3px" bottom="-19px" color="#ff6666">
                    {errors.description.message}
                  </Box>
                )}
              </FormControl>
            </Box>
          </Box>
          <Flex justifyContent="flex-end">
            <Link href="/products">
              <Button marginRight={4} w="175px">
                Cancel
              </Button>
            </Link>

            <Button w="175px" bgColor="#805AD5" color="#fff" p="10px 0" type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default ProductForm;
