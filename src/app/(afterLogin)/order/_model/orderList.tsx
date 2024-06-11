export interface GetOrderData {
  id: string;
  price: number;
  totalPrice: number;
}

export type GetOrder = {
  result: string;
  store: string;
  data: GetOrderData[];
};
