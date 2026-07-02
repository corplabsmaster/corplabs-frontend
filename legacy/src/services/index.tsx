import { find } from "lodash";

type cartItemExistParams = {
  arr: Array;
  itemID: any;
  varIceID: any;
  varSugarID: any;
};
export const cartItemExist = ({
  arr,
  itemID,
  varIceID = null,
  varSugarID = null,
}: cartItemExistParams): Object => {
  // console.log(arr);
  // console.log(
  //   find(arr, res => {
  //     return (
  //       res.product?.id === itemID &&
  //       (res.variation_ice === varIceID || res.variation_ice.id === varIceID)
  //     );
  //   })
  // );
  // console.log(
  //   find(arr, res => {
  //     return (
  //       res.product?.id === itemID &&
  //       (res.variation_sugar === varIceID ||
  //         res.variation_sugar.id === varIceID)
  //     );
  //   })
  // );

  if (arr)
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].product?.id === itemID &&
        (arr[i].variation_ice?.id === varIceID ||
          arr[i].variation_ice === varIceID) &&
        (arr[i].variation_sugar?.id === varSugarID ||
          arr[i].variation_sugar === varSugarID)
      )
        return { flag: true, id: arr[i].id, quantity: arr[i].quantity };
    }
  return { flag: false };
};

type isWishlistAddedParams = {
  arr: Array;
  itemID: any;
};
export const isWishlistAdded = ({
  arr,
  itemID,
}: isWishlistAddedParams): Object => {
  if (arr) {
    if (
      find(arr, res => {
        return res.product?.id === itemID;
      }) !== undefined
    ) {
      return { flag: false };
    }
  }

  return { flag: true };
};
