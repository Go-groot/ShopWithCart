import React from 'react'
import { PRODUCTS } from '../../products'
import ProCard from './ProCard.'

const Shop = () => {
  return (
    <div className='flex flex-col items-center gap-10 w-full'>
        <div className='py-5 my-2 w-full text-center'>
            <h1 className='text-4xl font-bold'>Shop Collection</h1>
        </div>
        <div className='grid grid-cols-1 felx flex-shrink-8 md:grid-cols-3 gap-5 items-center px-[5%] py-[3%]'>
            {
                PRODUCTS.map(product => <ProCard key={product.id} id={product.id} name={product.productName} image={product.productImage} price={product.price}/>)
            }
        </div>
    </div>
  )
}

export default Shop
