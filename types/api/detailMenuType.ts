export type DetailMenuType = {
  status: string;
  data: {
    storeName: string;
    rating: string;
    favorites: boolean;
    imageUrl: string;
    menu: MenuType[];
  };
};

export type MenuType = {
  foodId: number;
  menuName: string;
  itemId?: number;
  itemName?: string;
  quantity?: number;
  price: number;
};
