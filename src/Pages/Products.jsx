import React, { useEffect, useState } from 'react';
import { apiUrl } from '../Data';
import Product from '../Components/Product';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const Items = await fetch(apiUrl);
      const mainItems = await Items.json();
      setData(mainItems);
    } catch (error) {
      console.log('There is an error', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  

  return (
    <div>
      {
        loading?<div className='loading mt-80 mx-auto'></div>:
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full w-full'>{
        data.map((item)=>{
          return(
            <Product item={item} key={item.id}/>
          )
        })
      }</div>
      }
    </div>
  )
};

export default Products;
