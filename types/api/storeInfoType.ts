
export interface StoreInfoRequestType{
    id:number
}

export interface StoreInfoData {
    address: string,
    ownerComment: string,
    businessHours: string,
    cookingTime: string,
    description: string,
    favorite: boolean
}

export type StoreResponseType ={
    status:string,
    data: StoreInfoData[];
} 
