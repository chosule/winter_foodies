import { atom } from "recoil";
import { v1 } from "uuid";

export const userState = atom<string | null>({
  key: `authState/${v1()}`,
  default: "",
});

// export const nearbyState = atom<string[]>({
//   key: `nearbyDataState/${v1()}`,
//   default: [],
// });
