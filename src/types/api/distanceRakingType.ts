export type TDistanceRankRequest = {
  lat: number;
  lon: number;
};

export type TDistanceRankResponse = {
  id: string;
  name: string;
  address: string;
  phone: string;
  distance: number;
  lat: number;
  lon: number;
};
