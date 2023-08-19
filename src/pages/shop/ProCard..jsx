import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop-Context'

const ProCard = ({id,name,image,price}) => {

    const {addToCart,cartItems} = useContext(ShopContext);

  return (
    <div className='card w-[20rem] border-2 mb-11 min-h-[20rem] justify-between items-center flex flex-col shadow-lg p-2 rounded-md'>
      <img className='w-full h-[15rem] object-contain' src={image} alt={name} />
      <div className='p-4 font-medium text-lg'>
            <h2 className='capitalize'>{name}</h2>
            <h3 className='text-center'>${price}</h3>
      </div>
      <button onClick={()=>addToCart(id)} className='py-2 px-4 my-2 hover:bg-white hover:text-black border-2 border-black whitespace-nowrap rounded-md bg-black text-white'>Add to Cart <span>{cartItems[id] > 0 ? `(${cartItems[id]})` : null}</span></button>
    </div>
  )
}

export default ProCard
