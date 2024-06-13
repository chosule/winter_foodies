export interface OrdersData {
  id: string;
  price: number;
  totalPrice: number;
  quantity: number;
}

export interface GetOrdersData {
  id: string;
  store: string;
  createAt: string;
  data: OrdersData[];
}

export type GetOrders = {
  result: string;
  orders: GetOrdersData[];
};
