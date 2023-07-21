import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';

const Product = ({ item }) => {
  const [readMore, setReadMore] = useState(true);
  const cartItems = useSelector((state) => state.cart); // Assuming your cart state is stored under "cart" in the Redux store
  const dispatch = useDispatch();

  function clickHandler() {
    setReadMore((prev) => !prev);
  }

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Product is added");
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Product is removed");
  };

  return (
    <div className="container w-full hover:scale-105 transition-all duration-750 max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-10">
      <img src={item.image} alt={item.title} className="w-full h-56 object-cover object-center" loading='lazy' />
      <div className="p-4">
        <h3 className="text-gray-900 font-bold text-xl mb-2">{item.title}</h3>
        <div className="text-gray-700 text-base mb-4">
          {/* Use ternary expression to conditionally render content */}
          {readMore ? (
            <div className='cursor-pointer'>
              {item.description.substr(0, 100)}
              <span onClick={clickHandler} className='text-blue-700'>...read more</span>
            </div>
          ) : (
            <div>
              {item.description}
              <span onClick={clickHandler} className='text-blue-700'>less more</span>
            </div>
          )}
        </div>
        <p className="text-indigo-500 font-semibold text-lg">{item.category} <span className='ml-6 text-black'>${item.price}</span></p>
        
        <div>
          {cartItems.some((p) => p.id === item.id) ? (
            <button onClick={removeFromCart} className="mt-4 bg-red-600 hover:bg-red-200 text-white py-2 px-4 rounded">
              Remove From Cart
            </button>
          ) : (
            <button onClick={addToCart} className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
