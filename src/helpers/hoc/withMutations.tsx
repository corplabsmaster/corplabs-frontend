import React from "react";
import { useMutation } from "@apollo/client";
import { mutation } from "@helpers/queryStrings";

export const withMutateAddCart =
  (ComponentToWrap: any) =>
  (props: any): Promise<void> => {
    const [cart, cartData] = useMutation(mutation.createCart);

    return <ComponentToWrap {...props} cartData={cartData} cart={cart} />;
  };

export const withMutateUpdateCart =
  (ComponentToWrap: any) =>
  (props: any): Promise<void> => {
    const [cartUpdate, cartUpdateData] = useMutation(mutation.updateCart);

    return (
      <ComponentToWrap
        {...props}
        cartUpdateData={cartUpdateData}
        cartUpdate={cartUpdate}
      />
    );
  };

export const withMutateDeleteCart =
  (ComponentToWrap: any) =>
  (props: any): Promise<void> => {
    const [cartDelete, cartDeleteData] = useMutation(mutation.deleteCart);

    return (
      <ComponentToWrap
        {...props}
        cartDeleteData={cartDeleteData}
        cartDelete={cartDelete}
      />
    );
  };

export const withMutateAddWishlist =
  (ComponentToWrap: any) =>
  (props: any): Promise<void> => {
    const [wishlist, wishlistData] = useMutation(mutation.createWishlist);

    return (
      <ComponentToWrap
        {...props}
        wishlistData={wishlistData}
        wishlist={wishlist}
      />
    );
  };

export const withMutateUpdateWishlist =
  (ComponentToWrap: any) =>
  (props: any): Promise<void> => {
    const [wishlistUpdate, wishlistUpdateData] = useMutation(
      mutation.updateWishlist
    );

    return (
      <ComponentToWrap
        {...props}
        wishlistUpdateData={wishlistUpdateData}
        wishlistUpdate={wishlistUpdate}
      />
    );
  };

export const withMutateDeleteWishlist =
  (ComponentToWrap: any) =>
  (props: any): Promise<void> => {
    const [wishlistDelete, wishlistDeleteData] = useMutation(
      mutation.deleteWishlist
    );

    return (
      <ComponentToWrap
        {...props}
        wishlistDeleteData={wishlistDeleteData}
        wishlistDelete={wishlistDelete}
      />
    );
  };

export const withMutateUpdateUserDetails =
  (ComponentToWrap: any) =>
  (props: any): Promise<void> => {
    const [userDetailsUpdate, userDetailsUpdateData] = useMutation(
      mutation.updateUser
    );

    return (
      <ComponentToWrap
        {...props}
        userDetailsUpdateData={userDetailsUpdateData}
        userDetailsUpdate={userDetailsUpdate}
      />
    );
  };

export const withMutateCreatePurchase =
  (ComponentToWrap: any) =>
  (props: any): Promise<void> => {
    const [createPurchase, createPurchaseData] = useMutation(
      mutation.createPurchase
    );

    return (
      <ComponentToWrap
        {...props}
        createPurchaseData={createPurchaseData}
        createPurchase={createPurchase}
      />
    );
  };
