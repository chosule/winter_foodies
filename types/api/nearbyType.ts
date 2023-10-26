export type TMenuDetailRequest = {
  id: number;
};
export type TMenuDetailResponse = {
  id: number;
  storeId: string;
  name: string;
  address: string;
  latitude: number;
  longitud: number;
  category: string;
  placeUrl: null;
  distance: number;
  categoryId: number;
  rating: number;
  salesVolume: number;
  reviewCount: number;
  imageUrl: string;
  menu: {
    치즈어묵: 4000;
    어묵: 1000;
    슈크림어묵: 2000;
    팥어묵: 3000;
  };
  users: string[];
  storeInfos: string[];
  reviews: string[];
  ranking: number;
};
