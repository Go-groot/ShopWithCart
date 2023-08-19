import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

const Navbar = () => {
  return (
    <div className='navbar flex flex-row items-center bg-black text-white gap-5 py-4 px-11 text-2xl font-medium justify-end'>
        <Link to={'/'}>Shop</Link>
        <Link to={'/cart'}> <ShoppingCart size={40}/></Link>
    </div>
  )
}

export default Navbar
