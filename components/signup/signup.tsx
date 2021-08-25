import { Box, Button, Divider, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const SignupSchema = yup.object().shape({
  firstName: yup.string().required('This field is required'),
  lastName: yup.string().required('This field is required'),
  email: yup.string().required('This field is required'),
  password: yup.string().required('This field is required').min(6),
});

const SignupPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Flex justifyContent="center" alignItems="center" w="100%" height="100%">
      <Flex
        width="600px"
        bgColor="#fff"
        borderRadius="10px"
        flexDirection="column"
        boxShadow="0 1px 3px rgba(0,0,0,0.14), 0 1px 3px rgba(0,0,0,0.20)"
      >
        <Flex justifyContent="center" pt={7} pb={5} fontSize="30px" lineHeight="36px" fontWeight="700">
          Sign up
        </Flex>
        <Divider orientation="horizontal" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex padding={7} flexDirection="column" justifyContent="space-between" height="100%">
            <Flex flexDirection="column">
              <FormControl mb={5} position="relative">
                <FormLabel>First Name</FormLabel>
                <Input {...register('firstName')} type="text" placeholder="Enter First Name" />
                {errors.firstName && (
                  <Box fontSize="12px" position="absolute" left="3px" bottom="-19px" color="#ff6666">
                    {errors.firstName.message}
                  </Box>
                )}
              </FormControl>
              <FormControl mb={5} position="relative">
                <FormLabel>Last Name</FormLabel>
                <Input {...register('lastName')} type="text" placeholder="Enter Last Name" />
                {errors.lastName && (
                  <Box fontSize="12px" position="absolute" left="3px" bottom="-19px" color="#ff6666">
                    {errors.lastName.message}
                  </Box>
                )}
              </FormControl>
              <FormControl mb={5} position="relative">
                <FormLabel>Email</FormLabel>
                <Input {...register('email')} type="email" placeholder="example@email.com" />
                {errors.email && (
                  <Box fontSize="12px" position="absolute" left="3px" bottom="-19px" color="#ff6666">
                    {errors.email.message}
                  </Box>
                )}
              </FormControl>
              <FormControl mb={5} position="relative">
                <FormLabel>Password</FormLabel>
                <Input {...register('password')} type="password" placeholder="**********" />
                {errors.password && (
                  <Box fontSize="12px" position="absolute" left="3px" bottom="-19px" color="#ff6666">
                    {errors.password.message}
                  </Box>
                )}
              </FormControl>
              <FormControl mb={5} position="relative">
                <FormLabel>Confirm Password</FormLabel>
                <Input {...register('password')} type="password" placeholder="**********" />
              </FormControl>
            </Flex>

            <Button variant="solid" width="100%" bgColor="#805AD5" color="#fff" height="48px" type="submit">
              Signup
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

// export const getStaticProps = async () => {
//   const { data, loading } = await client.query({
//     query: signUp,
//     variables: {
//       emailAddress: 'test.232@gmail.com',
//       firstname: 'testing',
//       lastname: 'thelastname',
//       password: '12345678',
//     },
//   });
//   console.log(loading);
//   console.log(data);

//   return {
//     props: {
//     },
//   };
// };

export default SignupPage;
