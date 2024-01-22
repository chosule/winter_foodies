import { selector, selectorFamily } from "recoil";
import { getCartState, nearbyDataState } from "./atom";

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

export const favoriteState = selectorFamily<boolean , number>({
  key: "favoriteState",
  get:
    (id) =>
    ({ get }) => {
      const nearbyState = get(nearbyDataState);
      const findItem = nearbyState?.data?.find((item) => {
        return item.id == id;
      });
      return findItem?.favorite || false;
    },
  set:
    (id) =>
    ({ set, get }, newValue) => {
      const nearbyState = get(nearbyDataState);
      console.log('nearbystate',nearbyState)
      const updatedData = nearbyState?.data?.map((item) => {
        if (item.id == id) {
          return { ...item, favorite: newValue };
        }
        return item;
      });

      set(nearbyDataState, { ...nearbyDataState, data: updatedData });
    },
});

export default selector;
