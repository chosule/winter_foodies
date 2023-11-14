import { atom } from "recoil";
import { v1 } from "uuid";

export const userState = atom<string | null>({
  key: `authState/${v1()}`,
  default: "",
});

export const cartState = atom<string | null>({
  key: `cartState/${v1()}`,
  default: "",
});
