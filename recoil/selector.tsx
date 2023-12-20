import { selector, selectorFamily } from "recoil";
import { getCartState, getOrderListDataState } from "./atom";

export const cartDeletedState = selectorFamily({
  key: "getCartSelector",
  get:
    (itemId) =>
    ({ get }) => {
      const getData = get(getCartState);
      const getDatafilter = getData?.data?.filter(
        (item) => item.itemId !== itemId
      );
      return getDatafilter;
    },
});

export default selector;
