export interface MenuData {
  storeName: string;
  rating: number;
  favorites: boolean;
  imageUrl: string;
  data: MenuDetailData[];
}
export interface MenuDetailData {
  foodId: string;
  menuName: string;
  price: number;
}
export type TMenuResponse = MenuData;

export type TMenuRequest = number;
