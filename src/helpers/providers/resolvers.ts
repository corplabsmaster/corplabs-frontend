/**
 * Copyright 2021 Design Barn Inc.
 */

import { ApolloCache, Resolvers as BaseResolvers } from "@apollo/client";
import { providers, providersQuery } from "@helpers/const";

export type ResolverFn = (
  parent: any,
  args: any,
  cache: { cache: ApolloCache<any> }
) => any;

export interface ResolverMap {
  [field: string]: ResolverFn;
}

export interface Resolvers extends BaseResolvers {
  Mutation: ResolverMap;
  Query: ResolverMap;
}

export type CreateResolversFn = () => Resolvers;

const API_AUTH = process.env.API_AUTH;
const API2_URL = process.env.API2_URL;

export const createResolvers: CreateResolversFn = () => {
  return {
    Query: {
      ssoLogin: async (
        _: any,
        { token, provider }: { token: string; provider: string }
      ) => {
        try {
          const response = await fetch(
            `${API_AUTH}/${provider}/callback?${
              provider === providers.google
                ? providersQuery.google
                : providersQuery.facebook
            }=${token}`,
            {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          return {
            jwt: data.jwt,
            user: {
              id: data.user.id,
              username: data.user.username,
            },
            __typename: "SsoLogin",
          };
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      },
      couponValidity: async (
        _: any,
        { code, grandTotal }: { code: string; grandTotal: number }
      ) => {
        try {
          const response = await fetch(`${API2_URL}/coupon`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ code, grandTotal }),
          });
          const { coupon_validity, amount } = await response.json();
          return {
            coupon_validity,
            amount,
            __typename: "CouponValidity",
          };
        } catch (err) {
          console.log(err);
        }
      },
    },
  };
};
