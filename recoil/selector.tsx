import { selector } from "recoil";
import { getCartState } from "./atom";

export const getCartSelector = selector({
  key: "getCartSelector",
  get:
    ({ get }) =>
    (itemId) => {
      const getData = get(getCartState);
      const deletedGetData = getData?.data?.filter((item) => {
        return item.itemId !== itemId;
      });
      return { ...getData, data: deletedGetData };
    },
  // set: ({ set }, newValue) => {
  //   set(itemId, newValue);
  // },
});

export default selector;
