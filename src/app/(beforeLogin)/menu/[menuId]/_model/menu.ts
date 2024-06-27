export interface GetMenuData {
  distance: number;
  review: number;
  rating: number;
  position: string;
  store: string;
  sales: number;
  image: string;
}
export interface GetMenus {
  result: string;
  data: GetMenuData[];
  store: string;
}
