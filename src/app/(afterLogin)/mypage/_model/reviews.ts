import { OrdersData } from "./orderLists";

export interface GetReviewData {
  id: string;
  imageUrl: string;
  rating: number;
  reviewText: string;
  storeName: string;
  userId: string;
  createdAt: {
    _seconds: number;
    _nanoseconds: number;
  };
  orderCreatedAt?: {
    _seconds: number;
    _nanoseconds: number;
  };
  orderData?: OrdersData[];
}

export type GetReviews = {
  result: string;
  reviews: GetReviewData[];
};
