import { gql } from "@apollo/client";

export const BUY_STOCK = gql`
  mutation BuyStock($user: Int!, $stock: Int!, $amount: Int!) {
    buyStock(user: $user, stock: $stock, amount: $amount) {
      ok
      message
    }
  }
`;

export const SELL_STOCK = gql`
  mutation SellStock($user: Int!, $stock: Int!, $amount: Int!) {
    sellStock(user: $user, stock: $stock, amount: $amount) {
      ok
      message
    }
  }
`;
