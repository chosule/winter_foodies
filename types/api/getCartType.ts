export interface GetCartData {
  status: string;
  imageUrl: string;
  cookingTime: number;
  storeName: string;
  data: GetCartDataDetailType[];
}
export interface GetCartDataDetailType {
  userId: number;
  itemId: string;
  itemName: string;
  quantity: number;
  price: number;
}

export type TGetCartResponse = GetCartData;
