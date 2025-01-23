import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopcontext';
import { assets } from '../assets/assets';

const product = () => {

    const { productId } = useParams();
    const {products,currency,addToCart} = useContext(ShopContext);
    const [productData,setProductData] = useState(false);
    const [image,setImage] = useState('')
    const [shades,setShades] = useState('')

    const fetchProductData = async() => {

      products.map((item)=>{
        if (item._id === productId) {
          setProductData(item)
          setImage(item.image[0])
          return null;
        }
      })

    }

    useEffect(()=>{
      fetchProductData();
    },[productId, products])

    return productData ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-betwee sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt='' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt='' />
          </div>
        </div>


        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.staricon} alt="" className="w-3 5" />
              <img src={assets.staricon} alt="" className="w-3 5" />
              <img src={assets.staricon} alt="" className="w-3 5" />
              <img src={assets.staricon} alt="" className="w-3 5" />
              <img src={assets.staricon} alt="" className="w-3 5" />
              <p className='pl-2 '>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5 text-justify'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Shade</p>
              <div className='flex gap-2'>
                {productData.shades.map((item,index)=>(
                <button onClick={()=>setShades(item)} className={`border py-2 px-4 bg-pink-50 ${item === shades ? 'border-pink-500' : '' }`} key={index}>{item}</button>
              ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,shades)} className='bg-black text-white px-8 py-3 text-sm active:bg-pink-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1 '>
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
      </div>

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
        </div>
      </div>
      <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
        <p>Welcome to Love Bline, where beauty meets passion! We are a premier cosmetic brand dedicated to empowering individuals to express their unique style through high-quality beauty products. Love Bline offers a diverse range of shades and finishes that cater to every mood, occasion, and skin tone.</p>
      </div>

    </div>
  ) : <div className='opacity-0'></div>
}

export default product