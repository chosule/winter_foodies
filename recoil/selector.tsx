import { selector } from "recoil";
import { getCartState } from "./atom";

export const getCartSelector = selector({
  key: "cartDatSelector",
  get: ({ get }) => {
    const getCart = get(getCartState);
    return getCart;
  },
});



export default selector;
