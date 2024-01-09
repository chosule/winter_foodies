export interface orderDetailResponse {
  status: string;
  data: orderDetailData[];
}

export interface orderDetailData {
  id: number;
  storeId: number;
  storeName: string;
  storeImage: string;
  storeRating: number;
  orderTime: string;
  totalPrice: number;
  hasReview: boolean;
  items: orderDetailItems[];
}

export interface orderDetailItems {
  itemId: number;
  itemName: string;
  quantity: number;
}
