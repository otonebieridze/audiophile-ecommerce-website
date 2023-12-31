/// <reference types="vite/client" />

type CartProduct = {
  id?: number;
  image?: string;
  name?: string;
  shortName?: string;
  price?: number;
  quantity?: number;
};

type ContextProps = {
  cart: boolean;
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
  cartProducts: CartProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
  ordered: boolean;
  setOrdered: React.Dispatch<React.SetStateAction<boolean>>;
  submit: boolean;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};
