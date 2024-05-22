export interface GetCartData {
  status: string;
  imageUrl: string;
  cookingTime: number;
  storeName: string;
  itemCount: number;
  data: GetCartDataDetailType[];
}

//주문하기 req
export interface OrderItemRequestType {
  items: GetCartDataDetailType[];
  totalPrice: number;
}

export interface GetCartDataDetailType {
  itemId: number;
  userId: number;
  productId: number;
  itemName: string;
  price: number;
  quantity: number;
}

//주문하기 res값 type
export type OrderResultData = {
  id: number;
  userId: number;
  orderTime: string;
  storeName: string;
  storeId: number;
  totalPrice: number;
  items: OrderResultItems[];
};
export type OrderResultItems = {
  itemId: number;
  itemName: string;
  quantity: number;
  price: number;
};

//모든 주문내역
export interface OrderResultAllResponse {
  status: string;
  data: OrderResultAllData[];
}



export interface OrderResultAllData {
  id: number;
  storeId: number;
  storeName: string;
  storeImage: string;
  storeRating: number;
  orderTime: string;
  totalPrice: number;
  userId: number;
  hasReview: boolean;
  items: GetCartDataDetailType[];
}
