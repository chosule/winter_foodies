import {
  GetCartDataDetailType,
  TGetCartResponse,
} from "@/types/api/getCartType";
import { atom } from "recoil";
import { v1 } from "uuid";

interface CartState {
  items: GetCartDataDetailType[];
  totalPrice: number;
}
export const userState = atom<string | null>({
  key: `authState/${v1()}`,
  default: "",
});

export const cartState = atom<CartState>({
  key: `cartState/${v1()}`,
  default: {
    items: [],
    totalPrice: 0,
  },
});

export const checkState = atom({
  key: `checkState/${v1()}`,
  default: "",
});
