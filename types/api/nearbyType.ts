export type TMenuDetailRequest = {
  id: number;
};
export type TMenuDetailResponse = {
  picture?: string;
  name?: string;
  rating?: number;
  address?: string;
  distance?: number;
  ranking?: number;
  reviewCount?: number;
  salesVolume?: number;
};
