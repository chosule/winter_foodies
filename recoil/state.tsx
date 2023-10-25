import { atom } from "recoil";

export const userState = atom<string | null>({
  key: "authState",
  default: "",
});

export const nearbyState = atom({
  key: "nearbyDataState",
  default: null,
});

export const menuId = atom({
  key: "menuIdState",
  default: null,
});
