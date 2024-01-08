import {
  GetCartData,
  OrderItemRequestType,
  OrderResultData,
} from "@/types/api/getCartType";
import { TMenuResponse } from "@/types/api/menuType";
import { atom } from "recoil";
import { v1 } from "uuid";

export const userState = atom<string>({
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
  default: {
    status: "",
    imageUrl: "",
    cookingTime: 0,
    storeName: "",
    itemCount: 0,
    data: [],
  },
});

//가까운순
export const nearbyDataState = atom<TMenuResponse | undefined>({
  key: `nearDataState/${v1()}`,
  default: {
    status: "",
    data: [],
  },
});


export const heartState = atom({
  key:`heartState/${v1()}`,
  default:""
})