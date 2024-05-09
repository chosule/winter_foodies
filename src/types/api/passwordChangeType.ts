

export type TChangePwResponse = {
    status:string;
    data:string;
}


export type TChangePwRequest = {
    userId:string;
    newPassword:string
}