export interface GetCartData {
  status: string;
  imageUrl: string;
  cookingTime: number;
  storeName: string;
  data: GetCartDataDetailType[];
}
export interface GetCartDataDetailType {
  itemId: string;
  itemName: string;
  price: number;
  quantity: number;
  userId: number;
}

export type TGetCartResponse = GetCartData;
