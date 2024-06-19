export interface StoreMenu {
  price: number;
  id: string;
}

export interface StoreInfo {
  distance: string;
  intro: string;
  notice: string;
  operating: { end: number; open: number };
}

export interface GetStoreMenu {
  result: string;
  data: StoreMenu[];
}

export type GetStoreInfo = {
  result: string;
  data: StoreInfo;
};
