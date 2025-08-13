import { create } from "zustand";

interface CartState {
  cartId: string | null;
  setCartId: (id: string) => void;
  resetCartId: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartId: null,
  setCartId: (id) => set({ cartId: id }),
  resetCartId: () => set({ cartId: null }),
}));
