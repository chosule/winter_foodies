export interface GetCartData {
  status?: string;
  storeName?: string;
  imageUrl?: string;
  cookingTime?: number;
  itemCount?:string;
  data?: GetCartDataDetailType[];
}
export interface GetCartDataDetailType {
  itemId?: string;
  itemName?: string;
  price?: number;
  quantity?: number;
  userId?: number;
}


