import { selector } from "recoil";
import { nearbyState } from "./atom";

export const nearbySelectors = selector({
  key: "nearbyDataState",
  get: ({ get }) => {
    const id = get(nearbyState);
    const nearbyStateNumber = parseInt(id);
    return nearbyStateNumber;
  },
});

export default nearbySelectors;
