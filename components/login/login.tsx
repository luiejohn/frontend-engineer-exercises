import { useMutation } from '@apollo/client';
import { Box, Button, Divider, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setLogin } from 'redux/login/login';
import * as yup from 'yup';
import { USER_LOGIN } from '../../graphql/queries';

const schema = yup.object().shape({
  emailAddress: yup.string().required('This field is required'),
  password: yup.string().required('This field is required'),
});

interface IFormDataProps {
  emailAddress: string;
  password: string;
}

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const [userLogin] = useMutation(USER_LOGIN);

  const onSubmit: SubmitHandler<IFormDataProps> = async (formData) => {
    try {
      const { data } = await userLogin({ variables: { input: formData } });
      const { authenticate } = data;
      dispatch(setLogin(authenticate.token));
      localStorage.setItem('token', authenticate.token);
    } catch (error) {}

    return;
  };

  return (
    <Flex justifyContent="center" alignItems="center" w="100%" height="100%">
      <Flex
        width="600px"
        height="437px"
        bgColor="#fff"
        borderRadius="10px"
        flexDirection="column"
        boxShadow="0 1px 3px rgba(0,0,0,0.14), 0 1px 3px rgba(0,0,0,0.20)"
      >
        <Flex justifyContent="center" pt={7} pb={5} fontSize="30px" lineHeight="36px" fontWeight="700">
          Login
        </Flex>
        <Divider orientation="horizontal" />
        <Flex padding={7} flexDirection="column" justifyContent="space-between" height="100%">
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
          >
            <Flex flexDirection="column">
              <FormControl mb={5}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="example@email.com" {...register('emailAddress')} />
                {errors.emailAddress && (
                  <Box fontSize="12px" position="absolute" left="3px" bottom="-19px" color="#ff6666">
                    {errors.emailAddress.message}
                  </Box>
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="**********" {...register('password')} />
                <Flex justifyContent="flex-end" mt={2}>
                  {errors.password && (
                    <Box fontSize="12px" position="absolute" left="3px" bottom="-14px" color="#ff6666">
                      {errors.password?.message}
                    </Box>
                  )}{' '}
                </Flex>
              </FormControl>
              <Flex color="#805AD5" fontSize="14px" lineHeight="20px" fontWeight="600" justifyContent="flex-end">
                Forgot Password
              </Flex>
            </Flex>

            <Button variant="solid" width="100%" bgColor="#805AD5" color="#fff" height="48px" type="submit">
              Login
            </Button>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
