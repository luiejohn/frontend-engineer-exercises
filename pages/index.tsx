import Layout from '@components/Layout';
import Login from '@components/login/login';
import PageTransitionSpinner from '@components/transitionSpinner/Spinner';
import Router from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

type IRedirectFunc = () => void;

const Home: FC = () => {
  const { isLogin } = useSelector((state: RootState) => state.login);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    //Eslint no floating promise
    const redirect: IRedirectFunc = async () => {
      await Router.push('/products');
    };

    if (isLogin) {
      redirect();
    } else {
      setLoading(false);
    }
  }, [isLogin]);

  if (loading) {
    return <PageTransitionSpinner />;
  } else {
    return (
      <Layout>
        <Login />
      </Layout>
    );
  }
};

// export const getServerSideProps = async () => {
//   const res = await fetch('https://.../data')
//   const data: Data = await res.json()

//   return {
//     props: {
//       data,
//     },
//   }
// }

export default Home;
