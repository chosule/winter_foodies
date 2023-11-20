export type TNearSnackRequest = {
  lat: number;
  lon: number;
};
export type TNearSnackResponse = {
  categoryName: string;
  picture: string;
  name: string;
  rating: number;
  address: string;
  distance: number;
  ranking: number;
  reviewCount: number;
  salesVolume: number;
  id: number;
};
