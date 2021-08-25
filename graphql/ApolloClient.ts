import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://frontend-engineer-onboarding-api-thxaa.ondigitalocean.app/graphql',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});
