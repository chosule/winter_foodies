export interface TAddNewProductRequest {
  itemId: string;
  itemName: string;
  quantity: number;
  price: number;
}

export interface TAddNewProductResponse {
  success: boolean;
}
