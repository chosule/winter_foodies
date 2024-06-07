export interface GetLatLngData {
  lat: number;
  lng: number;
  store: string;
  star: number;
  index: number;
}

export type GetLatLng = {
  result: string;
  data: GetLatLngData[];
};
