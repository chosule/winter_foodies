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

// export const favoriteStata = selectorFamily({
//   key: "getFavoriteState",
//   get:
//     (id) =>
//     ({ get }) => {
//       const getFavorite = get(nearbyDataState);
//       return getFavorite?.data?.find((item) => item.id === id);
//       // return matchingId.favorite;
//     },
// });

export const favoriteStata = selector({
  key: "getFavoriteState",
  get: ({ get }) => {
    const getFavorite = get(nearbyDataState);
    return getFavorite;
  },
});

export default selector;
