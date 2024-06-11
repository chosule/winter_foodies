export interface GetCartData {
  id: string;
  price: number;
  quantity: number;
}

export type GetCart = {
  result: string;
  storeName: string;
  id: string;
  data: GetCartData[];
};
