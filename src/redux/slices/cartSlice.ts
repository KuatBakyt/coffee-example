import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CoffeeCardProps {
  id: number
  title: string
  price: number
  imageUrl?: string
}


interface CartState {
    items: CoffeeCardProps[]
}

const initialState: CartState = {
    items: JSON.parse(localStorage.getItem("cart") || '[]'),

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CoffeeCardProps>) {
            state.items.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state.items))
        }, 
        deleteFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        clearCart(state) {
            state.items = []
            localStorage.removeItem('cart')
        },
    }
})

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
