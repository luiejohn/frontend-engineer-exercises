import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
);

export default App;
