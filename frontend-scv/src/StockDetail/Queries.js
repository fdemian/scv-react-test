import { gql } from "@apollo/client";

export const GET_STOCK_DETAIL = gql`
  query GetStockDetail($user: Int!, $stock: Int!) {
    getStockDetail(user: $user, stock: $stock) {
      stock {
        id
        name
        current_price
      }
      quantity
    }
  }
`;
