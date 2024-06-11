export interface GetLikeData {
  storeName: string;
}

export type GetLike = {
  result: string;
  userId: string;
  data: GetLikeData[];
};
