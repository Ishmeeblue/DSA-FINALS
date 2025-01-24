import React, { useContext, useEffect, useState } from 'react';
import Title from '../components/title';
import ProductItem from '../components/ProductItem';
import { ShopContext } from '../context/shopcontext';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 2));
  }, [products]); 

  return (
    <div className='flex-1'>
      <div className='flex justify-center text-base sm:text-2xl mt-10 mb-4'>
        <Title text1={'ALL '} text2={'COLLECTION'} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 justify-center'>
        {
          latestProducts.map((item, index) => (
            <ProductItem key={index} _id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </div>
  );
}

export default Collection;