import type { CoffeeCardProps } from "../redux/slices/cartSlice";


export interface HeaderProps {
    cart: CoffeeCardProps[];
    deleteOrder: (id: number) => void;
}