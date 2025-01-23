import React, {useContext} from 'react'
import { ShopContext } from '../context/shopcontext'
import {Link} from 'react-router-dom'

const ProductItem = ({_id,image,name,price}) => {

const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/products/${_id}`}>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt='' />
      </div>
      <p className='pt-3 pb-1 text-2xl text-pink-800 font-extrabold'>{name}</p>
      <p className='text-xl font-medium text-black font-medium font-black'>{currency} {price}</p>
    </Link>
  )
}

export default ProductItem