import type { CoffeeCardProps } from "../config/CoffeeCardProps";

export type CartItem = CoffeeCardProps & { quantity: number };

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export type Review = {
    id: string;
    userId: string;
    name: string;
    rating: number;
    comment: string;
    date: string;
}