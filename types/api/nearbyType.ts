export interface MenuDetailData {
  status?: string;
  data: MenuDetailResponse[];
}
export interface MenuDetailResponse {
  categoryName?: string;
  picture?: string;
  name?: string;
  rating?: number;
  address?: string;
  distance?: number;
  ranking?: number;
  reviewCount?: number;
  salesVolume?: number;
  id?: number;
}
