import create, { StateCreator } from "zustand";
import { PersistOptions, persist } from "zustand/middleware";

interface CartItem {
  id: string;
  price: number;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  setInitialCartItems: (items: CartItem[]) => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  totalPrice: () => number;
}

const useCartStore = create<CartState>(
  persist(
    (set, get) => ({
      cartItems: [],
      setInitialCartItems: (items: CartItem[]) =>
        set(() => ({
          cartItems: items,
        })),
      addItem: (item: CartItem) =>
        set((state) => {
          const existingItem = state.cartItems.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              cartItems: state.cartItems.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
        }),

      removeItem: (id: string) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
      incrementQuantity: (id: string) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),
      decrementQuantity: (id: string) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        })),
      totalPrice: () => {
        const state = get();
        return state.cartItems.reduce(
          (total, item) => total + item.quantity * item.price,
          0
        );
      },
    }),
    {
      name: "cart-storage", // localStorage에 저장될 키
      getStorage: () => localStorage, // (선택 사항) 기본값은 localStorage
    } as PersistOptions<CartState>
  ) as StateCreator<CartState>
);

export { useCartStore };
