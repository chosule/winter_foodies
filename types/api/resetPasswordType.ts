
export interface ResetPasswordRequestType {
    userId?:string;
    newPassword?:string;
}

export interface ResetPasswordResponeseType{
    status:string;
    data:string;
}