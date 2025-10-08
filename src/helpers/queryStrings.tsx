import { gql } from "@apollo/client";

export const queries = {
  me: gql`
    query me {
      me {
        id
        username
        email
        role {
          id
          type
          name
        }
      }
    }
  `,
  notionJob: gql`
    query notionJob {
      notionJob @client {
        data
      }
    }
  `,
  couponValidity: gql`
    query couponValidity($code: String!, $grandTotal: Number!) {
      couponValidity(code: $code, grandTotal: $grandTotal) @client {
        coupon_validity
        amount
      }
    }
  `,
  purchasesConnection: gql`
    query purchasesConnection($where: JSON, $start: Int, $limit: Int) {
      purchasesConnection(where: $where, start: $start, limit: $limit) {
        values {
          id
          sum
          created_at
        }
        aggregate {
          count
          totalCount
        }
      }
    }
  `,
  purchase: gql`
    query purchase($id: ID!) {
      purchase(id: $id) {
        id
        sum
        created_at
        user {
          username
        }
        delivery_address
        contact
        sum
        purchase {
          id
          product {
            id
            name
            price
            des
          }
          quantity
        }
        coupon {
          discount_percentage
        }
      }
    }
  `,
};

export const mutation = {
  login: gql`
    mutation login($input: UsersPermissionsLoginInput!) {
      login(input: $input) {
        jwt
        user {
          id
          username
        }
      }
    }
  `,
  register: gql`
    mutation register($input: UserInput!) {
      register(input: $input) {
        jwt
        user {
          id
          username
        }
      }
    }
  `,
  createCart: gql`
    mutation createCart($input: createCartInput) {
      createCart(input: $input) {
        cart {
          id
        }
      }
    }
  `,
  updateCart: gql`
    mutation updateCart($input: updateCartInput) {
      updateCart(input: $input) {
        cart {
          id
        }
      }
    }
  `,
  deleteCart: gql`
    mutation deleteCart($input: deleteCartInput) {
      deleteCart(input: $input) {
        cart {
          id
        }
      }
    }
  `,
  createWishlist: gql`
    mutation createWishlist($input: createWishlistInput) {
      createWishlist(input: $input) {
        wishlist {
          id
        }
      }
    }
  `,
  updateWishlist: gql`
    mutation updateWishlist($input: updateWishlistInput) {
      updateWishlist(input: $input) {
        wishlist {
          id
        }
      }
    }
  `,
  deleteWishlist: gql`
    mutation deleteWishlist($input: deleteWishlistInput) {
      deleteWishlist(input: $input) {
        wishlist {
          id
        }
      }
    }
  `,
  updateUser: gql`
    mutation updateUser($input: updateUserInput) {
      updateUser(input: $input) {
        user {
          id
        }
      }
    }
  `,
  createPurchase: gql`
    mutation createPurchase($input: createPurchaseInput) {
      createPurchase(input: $input) {
        purchase {
          id
        }
      }
    }
  `,
};
