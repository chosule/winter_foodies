export interface GetCartData {
  status: string;
  imageUrl: string;
  cookingTime: number;
  storeName: string;
  itemCount:string;
  data: GetCartDataDetailType[];
}
//주문하기 req 
export interface OrderItemRequestType{
  items:GetCartDataDetailType[];
  totalPrice:number;
}

export interface GetCartDataDetailType {
  itemId?: number;
  userId?: number;
  productId?: number;
  itemName: string;
  price: number;
  quantity: number;
}


export interface OrderResultResponse{
  status:string;
  data: OrderResultData[];
}


export interface OrderResultData{
  id:number;
  storeId:number; 
  storeName:string; 
  storeImage?:string; 
  storeRating?:number; 
  orderTime:string; 
  totalPrice:number;
  userId:number;
  hasReview?:boolean;
  items: GetCartDataDetailType[];
}