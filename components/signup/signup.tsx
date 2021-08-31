import { useMutation } from '@apollo/client';
import { Box, Button, Divider, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setLogin } from 'redux/login/login';
import * as yup from 'yup';
import { USER_SIGN_UP } from '../../graphql/queries';

const SignupSchema = yup.object().shape({
  firstname: yup.string().required('This field is required'),
  lastname: yup.string().required('This field is required'),
  emailAddress: yup.string().required('This field is required'),
  password: yup.string().required('This field is required').min(6),
});

interface IFormDataProps {
  firstname: string;
  lastname: string;
  emailAddress: string;
  password: string;
  confirmPassword?: string;
}

const SignupPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const dispatch = useDispatch();
  const [userSignUp] = useMutation(USER_SIGN_UP);

  const onSubmit: SubmitHandler<IFormDataProps> = async (signupData) => {
    try {
      delete signupData.confirmPassword;
      const { data } = await userSignUp({ variables: { input: signupData } });
      const { signUp } = data;
      dispatch(setLogin(signUp.token));
    } catch (error) {}
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
                <Input {...register('firstname')} type="text" placeholder="Enter First Name" />
                {errors.firstname && (
                  <Box fontSize="12px" position="absolute" left="3px" bottom="-19px" color="#ff6666">
                    {errors.firstname.message}
                  </Box>
                )}
              </FormControl>
              <FormControl mb={5} position="relative">
                <FormLabel>Last Name</FormLabel>
                <Input {...register('lastname')} type="text" placeholder="Enter Last Name" />
                {errors.lastname && (
                  <Box fontSize="12px" position="absolute" left="3px" bottom="-19px" color="#ff6666">
                    {errors.lastname.message}
                  </Box>
                )}
              </FormControl>
              <FormControl mb={5} position="relative">
                <FormLabel>Email</FormLabel>
                <Input {...register('emailAddress')} type="email" placeholder="example@email.com" />
                {errors.emailAddress && (
                  <Box fontSize="12px" position="absolute" left="3px" bottom="-19px" color="#ff6666">
                    {errors.emailAddress.message}
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
                <Input {...register('confirmPassword')} type="password" placeholder="**********" />
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

export default SignupPage;
