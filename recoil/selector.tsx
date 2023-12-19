import { selector } from "recoil";
import { getCartState, heartState } from "./atom";

export const getCartSelector = selector({
  key: "cartDatSelector",
  get: ({ get }) => {
    const getCart = get(getCartState);
    return getCart;
  },
});

export const getHeartState = selector({
  key: "heartStateTrueOrFalse",
  get: ({ get }) => {
    const getState = get(heartState);
    return getState;
  },
});

export default selector;
