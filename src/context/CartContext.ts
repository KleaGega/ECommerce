import React, { createContext } from "react";
import { CartItem } from "../interfaces/Product";

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  totalQuantity: number;
  handleCartClick: () => void;
  handleIncrease:(id:string)=>void;
  handleDecrease:(id:string)=>void;
  handleRemove:(id:string)=>void;
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;  
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
  title:string;
  price:number;
  description:string;
  saveProduct:()=> void;
  handleTitleFilterChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredProduct : CartItem[];
  titleFilter:string;
  totalItem: (cartItems: CartItem[]) => number; 
  totalPrice: (cartItems: CartItem[]) => number;
  priceFilter:number;
  handlePriceFilterChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDetails:(id:string)=>void
  updateQuantityEdit: (id: string, updates: { title?: string; price?: number }) => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);