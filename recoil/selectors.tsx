import { selector } from "recoil";
import { getCartState } from "./atom";

// export const getCartDataSelector = selector({
//   key: "cartDataSelector",
//   get: ({ get }) => {
//     const getCart = get(getCartState);
//     const getCartData = getCart.data;
//     return { getCartData };
//   },
//   set: ({ set }, newValue) => {
//     set(getCartState, newValue);
//   },
// });
