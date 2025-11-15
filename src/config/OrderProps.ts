import type { CoffeeCardProps } from "./CoffeeCardProps";

export interface OrderProps {
    item: CoffeeCardProps;
    deleteOrder: (id: number) => void;
}