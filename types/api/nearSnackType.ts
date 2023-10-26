export type TNearSnackRequest = {
  lat: number;
  lon: number;
};
export type TNearSnackResponse = {
  ranking: number;
  storeId: string;
  name: string;
  address: string;
  phone: string;
  distance: number;
  lat: number;
  lon: number;
};
