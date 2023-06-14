/// <reference types="vite/client" />

type CartProduct = {
  id?: number;
  image?: string;
  name?: string;
  price?: number;
  quantity?: number;
};

type ContextProps = {
  cart: boolean;
  setCart(cart: boolean): void;
  cartProducts: CartProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
};
