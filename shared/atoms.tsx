import { atom } from "recoil";

export const userState = atom<string | null>({
  key: "authState",
  default: "",
});
