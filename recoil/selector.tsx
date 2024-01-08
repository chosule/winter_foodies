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


export const favoriteState = selectorFamily({
  key: "favoriteState",
  get: (id) =>  ({ get }) => {
    const nearbyState = get(nearbyDataState);
    const findId = nearbyState?.data?.filter((item) => {
      item.id == id
    });
    // console.log('findid',findId[0].favorite)
    return findId;
    // return findId[0].favorite
  },
  set: (id) => ({ set, get }, newValue) => {
    const nearbyState = get(nearbyDataState);
    const updatedData = nearbyState?.data?.map((item) => {
      if (item.id === id) {
        return { ...item, favorite: newValue };
      }
      return item;
    });

    set(nearbyDataState, { ...nearbyDataState, data: updatedData });
  },
});


export default selector;
