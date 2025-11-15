import React from 'react'
import type { CartItem } from '../../types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

type CoffeeCardProps = {
  item: CartItem;
}

const CoffeeCard = ({ item }: CoffeeCardProps) => {
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(addToCart(item))
  }
  return (
    <div className='travel-card'>
      <img src={item.imageUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {item.price && <p><strong>{item.price} $</strong></p>}
      <button onClick={handleAdd}>Добавить в корзину</button>
    </div>
  )
}

export default CoffeeCard