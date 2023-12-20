export interface FavoriteRequest{
    favorite:boolean;
    storeId:number
}

export interface FavoriteResponse{
    status:string;
    data: FavoriteData[];
}

export type FavoriteData = {
    message:string;
    isFavorite:boolean;
}