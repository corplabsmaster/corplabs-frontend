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
  productsConnection: gql`
    query productsConnection($where: JSON, $start: Int, $limit: Int) {
      productsConnection(where: $where, start: $start, limit: $limit) {
        values {
          id
          name
          price
          des
          star
          brand {
            name
          }
          category {
            name
          }
        }
        aggregate {
          count
          totalCount
        }
      }
    }
  `,
  product: gql`
    query product($id: ID!) {
      product(id: $id) {
        id
        name
        price
        des
        star
        brand {
          name
        }
        category {
          name
        }
      }
    }
  `,
  variationSugars: gql`
    query variationSugars {
      variationSugars {
        id
        name
      }
    }
  `,
  variationIces: gql`
    query variationIces {
      variationIces {
        id
        name
      }
    }
  `,
  categories: gql`
    query categories {
      categories {
        id
        name
      }
    }
  `,
  brands: gql`
    query brands {
      brands {
        id
        name
      }
    }
  `,
  user: gql`
    query user($id: ID!) {
      user(id: $id) {
        id
        created_at
        updated_at
        username
        email
        provider
        confirmed
        blocked
        role {
          id
          type
          name
        }
        address
        contact
      }
    }
  `,
  carts: gql`
    query carts($where: JSON, $start: Int, $limit: Int) {
      carts(where: $where, start: $start, limit: $limit) {
        id
        variation_ice {
          id
          name
        }
        variation_sugar {
          id
          name
        }
        quantity
        product {
          id
          name
          price
        }
      }
    }
  `,
  wishlists: gql`
    query wishlists($where: JSON, $start: Int, $limit: Int) {
      wishlists(where: $where, start: $start, limit: $limit) {
        id
        product {
          id
          name
          price
        }
      }
    }
  `,
  blogs: gql`
    query blogs($where: JSON, $start: Int, $limit: Int) {
      blogs(where: $where, start: $start, limit: $limit) {
        id
        title
        content
        published_at
        img {
          url
        }
      }
    }
  `,
  blog: gql`
    query blog($id: ID!) {
      blog(id: $id) {
        id
        title
        content
        published_at
        img {
          url
        }
      }
    }
  `,
  ssoLogin: gql`
    query ssoLogin($token: String!, $provider: String!) {
      ssoLogin(token: $token, provider: $provider) @client {
        jwt
        user {
          id
          username
        }
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
