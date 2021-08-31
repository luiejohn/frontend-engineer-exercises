import { gql } from '@apollo/client';

export const USER_SIGN_UP = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      token
    }
  }
`;

// test.123@gmail.com
// 12345678

export const USER_LOGIN = gql`
  mutation authLogin($input: AuthenticateInput!) {
    authenticate(input: $input) {
      token
    }
  }
`;

export const GET_PRODUCTS = gql`
  query Products(
    $first: Int
    $after: Binary
    $last: Int
    $before: Binary
    $filter: ProductsFilter
    $sort: ProductSortInput
  ) {
    products(first: $first, after: $after, last: $last, before: $before, filter: $filter, sort: $sort) {
      edges {
        cursor
        node {
          ... on Product {
            id
            name
            description
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export const GET_PRODUCTS_BYID = gql`
  query getProduct($id: Binary!) {
    node(id: $id) {
      ... on Product {
        id
        name
        description
      }
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
      name
      description
      owner {
        id
      }
      createdAt
      updatedAt
    }
  }
`;

export const EDIT_PRODUCT = gql`
  mutation EditProduct($input: UpdateProductInput!) {
    updateProduct(input: $input) {
      id
      name
      description
      owner {
        id
      }
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($input: DeleteProductInput!) {
    deleteProduct(input: $input)
  }
`;
