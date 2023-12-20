import {
  GetCartData,
  OrderItemRequestType,
  OrderResultData,
} from "@/types/api/getCartType";
import { atom } from "recoil";
import { v1 } from "uuid";

export const userToken = atom({
  key: `tokenState/${v1()}`,
  default: "",
});

export const userState = atom<string | null>({
  key: `authState/${v1()}`,
  default: "",
});

//주문하기 보낼때
export const orderDataState = atom<OrderItemRequestType>({
  key: `orderData/${v1()}`,
  default: {
    items: [],
    totalPrice: 0,
  },
});

//주문하기 후 결과 담기
export const orderResultDataState = atom({
  key: `orderResultState/${v1()}`,
  default: {},
});

//카트 조회 담겨있는 state
export const getCartState = atom<GetCartData>({
  key: `getCartState/${v1()}`,
  default: [],
});
