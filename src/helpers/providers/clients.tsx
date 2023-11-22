import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import fetch from "isomorphic-fetch";

import { getUser } from "@services/auth";

import { createResolvers } from "./resolvers";

const API_URL = process.env.API_URL;
const token = getUser().token;

export const apollo = new ApolloClient({
  link: ApolloLink.from([
    setContext((_, { headers, ...context }) => {
      return {
        headers: {
          ...headers,
          ...(token ? { authorization: `Bearer ${token}` } : {}),
        },
        ...context,
      };
    }),
    new HttpLink({
      uri: `${API_URL}`,
      fetch,
    }),
  ]),
  cache: new InMemoryCache(),
  resolvers: createResolvers(),
});
