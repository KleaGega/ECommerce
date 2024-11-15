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