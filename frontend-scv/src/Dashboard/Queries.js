import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($id: Int!) {
    getUser(id: $id) {
      id
      username
      savings
    }
  }
`;

export const GET_STOCKS = gql`
  query GetStocks {
    getStocks {
      id
      name
      current_price
    }
  }
`;

export const GET_USER_STOCKS = gql`
  query GetStocks($id: Int!) {
    getUserStocks(id: $id) {
      stock {
        id
        name
        current_price
      }
      quantity
    }
  }
`;
