export interface MenuData {
  status: string;
  data: MenuDetailData[];
}
export interface MenuDetailData {
  categoryName?: string;
  picture: string;
  name: string;
  rating: number;
  address: string;
  distance: number;
  ranking?: number;
  reviewCount?: number;
  salesVolume?: number;
  favorite: boolean;
  id?: number;
}
export type TMenuResponse = Partial<MenuData>;
export type MenuDetailDataPartial = Partial<MenuDetailData>;
