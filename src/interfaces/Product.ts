export interface ItemData {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

export interface ProductListProps {
  data: ItemData;
}
export type CartItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
};
export type CartNewItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity:number;
}