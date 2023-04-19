export interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
  amount: number;
}
