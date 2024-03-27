import React from "react";
import { useQuery } from "@apollo/client";
import { queries } from "@helpers/queryStrings";
import { getUser } from "@services/auth";

export const withQueryCarts =
  (ComponentToWrap: any) =>
  (props: any): Promise<void> => {
    const { id } = getUser();
    const { data, loading, refetch } = useQuery(queries.carts, {
      variables: {
        where: {
          user: id,
        },
        // limit: 10,
      },
    });

    return (
      <ComponentToWrap
        {...props}
        cartsQueryData={data && data.carts}
        cartsQueryDataCounts={data && data.carts.length}
        loading={loading}
        refetchCartQuery={refetch}
      />
    );
  };

export const withQueryWishlists =
  (ComponentToWrap: any) =>
  (props: any): Promise<void> => {
    const { id } = getUser();

    const { data, loading, refetch } = useQuery(queries.wishlists, {
      variables: {
        where: {
          user: id,
        },
        // limit: 10,
      },
    });

    return (
      <ComponentToWrap
        {...props}
        wishlistsQueryData={data && data.wishlists}
        wishlistsQueryDataCounts={data && data.wishlists.length}
        loading={loading}
        refetchWishlistQuery={refetch}
      />
    );
  };

export const withQueryPurchases =
  (ComponentToWrap: any) =>
  (props: any): Promise<void> => {
    const { id } = getUser();

    const { data, loading, refetch } = useQuery(queries.purchasesConnection, {
      variables: {
        where: {
          user: id,
        },
        // limit: 10,
      },
    });

    return (
      <ComponentToWrap
        {...props}
        purchasesQueryData={data && data.purchasesConnection.values}
        purchasesQueryDataCounts={
          data && data.purchasesConnection.values.length
        }
        loading={loading}
        refetchPurchasesQuery={refetch}
      />
    );
  };
