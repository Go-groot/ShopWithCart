import React ,{useContext} from 'react'
import { ShopContext } from '../../context/Shop-Context'

const CartItem = ({data}) => {

    const {cartItems,addToCart,removeFromCart} = useContext(ShopContext);    
  return (
    <div className='flex flex-col md:flex-row gap-5 items-center justify-between w-full border-2 shadow-lg rounded-md px-9 py-5'>
        <div className='mr-5'>
            <img className='w-[15rem]' src={data.productImage} alt={data.productName} />
        </div>
        <div className='flex flex-col items-center gap-1 my-2 md:mx-7'>
            <h2 className='text-xl font-medium whitespace-nowrap capitalize'>{data.productName}</h2>
            <h3>${data.price}</h3>
        </div>
        <div className='group flex gap-3 border items-center min-w-[8rem]'>
            <button className='bg-black px-2 text-xl w-1/3 text-white' onClick={()=>removeFromCart(data.id)}>-</button>
            <h4 className='bg-white text-center w-1/3 font-mono'>{cartItems[data.id]}</h4>
            <button className='bg-black px-2 text-xl w-1/3 text-white' onClick={()=>addToCart(data.id)}>+</button>
        </div>
    </div>
  )
}

export default CartItem
