import React ,{useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/Shop-Context'
import CartItem from './cart-item';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems,getTotalPrice} = useContext(ShopContext);
  const amount = getTotalPrice();

  const navigate = useNavigate();
  return (
    <div className='flex px-[5%] flex-col gap-11'>
      <div className='w-full p-5 text-center my-2'>
        <h2 className='text-4xl font-bold'>Cart Items</h2>
      </div>
        {
          PRODUCTS.map(product => {
            if(cartItems[product.id] !== 0)
              return <CartItem data={product}/>
          })
        }
        {
          amount > 0 ?(
          <div className='p-3 flex flex-col items-center w-full'>
            <h2 className='text-xl my-1'>Subtotal- <span className='font-medium'>${amount}</span></h2>
            <div className='flex my-3 gap-5'>
              <button onClick={()=>navigate('/')} className='p-2 hover:bg-white hover:text-black border-2 border-black whitespace-nowrap transition-colors duration-300 ease-linear rounded-md bg-black text-white'>Continue Shopping</button>
              <button title='not Functioning' className='p-2 hover:bg-white hover:text-black border-2 border-black whitespace-nowrap transition-colors duration-300 ease-linear rounded-md bg-black text-white'>Checkout</button>
            </div>
          </div>
          ) :(
            <div className='flex items-center justify-center'>
                <h1 className='text-2xl underline underline-offset-8 font-bold text-red-500'>Empty Cart!!! :(</h1>
            </div>
          )
        }
    </div>
  )
}

export default Cart
