

export interface OrderItemRequestType{
    items:OrderItems[];
    totalPrice:number;
}

export interface OrderItems {
    userId: number;
    productId: number;
    itemName: string;
    price: number;
    quantity: number;
}

// export interface OrderItemsResponseType{
//     status:
// }