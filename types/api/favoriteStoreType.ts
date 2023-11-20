export interface FavoriteStoreData {
    status:string;
    data: FavoriteStoreType[];
}

export interface FavoriteStoreType {
    id?:number,
    storeName?:string,
    address?:string,
    distance?:number,
    rating?:number,
    pictureUrl?:string
}
export type TFavoriteStoreResponse = FavoriteStoreData;