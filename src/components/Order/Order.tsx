import type { OrderProps } from "../../config/OrderProps"
import { FaTrash } from 'react-icons/fa'

const Order: React.FC<OrderProps> = ({ item, deleteOrder }) => {
  
  return (
    <>
      {<div className='order'>
        <img src={item.imageUrl} />
        <div> <h4>{item.title}</h4>
          <b>{item.price} T</b></div>
        <FaTrash className="delete_icon" size={30} onClick={() => deleteOrder(item.id)}/>
      </div>
      
      }
      
    </>
  )
}

export default Order