import {
  GetCartDataDetailType,
  TGetCartResponse,
} from "@/types/api/getCartType";
import { atom, selector } from "recoil";
import { v1 } from "uuid";

interface CartState {
  items: GetCartDataDetailType[];
  totalPrice: number;
}

export const userState = atom<string | null>({
  key: `authState/${v1()}`,
  default: "",
});

//주문하기 보낼때
export const cartState = atom<CartState>({
  key: `cartState/${v1()}`,
  default: {
    items: [],
    totalPrice: 0,
  },
});

//카트 조회 담겨있는 state
export const getCartState = atom({
  key: `getCartState/${v1()}`,
  default: [],
});

export const heartState = atom({
  key: `heartState/${v1()}`,
  default: "true",
});
