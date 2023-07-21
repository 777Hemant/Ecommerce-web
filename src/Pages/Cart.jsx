import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import {  remove } from '../redux/slices/CartSlice';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const handleRemoveItem = (id) => {
    dispatch(remove(id));
    toast.success('Product is removed');
  };

  return (
    <div className="p-4">
      {cart.length === 0 ? (
        <div className="text-gray-600 py-8 my-40 text-3xl flex text-center ml-[500px]">
          There is no product added to the cart.
        </div>
      ) : (
        <div className="w-[1200px] grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cart.map((post) => (
            <div key={post.id} className="p-4 border border-gray-300 rounded-lg shadow-md">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <h3 className="text-gray-900 font-semibold text-xl my-2">{post.title}</h3>
              <div className="text-2xl text-red-800">${post.price}</div>
              <AiOutlineDelete size={30} onClick={() => handleRemoveItem(post.id)} />
            </div>
          ))}
          <div className="container bg-green-200 text-black w-full text-2xl p-10">
            <p className="font-serif text-black">
              Total items you have bought:<span className="ml-8 bg-slate-400 font-serif">{cart.length}</span>
            </p>
            <br />
            <br />
            <p className="font-weight font-serif text-green-800">
              You should have to pay: <div className="ml-8 text-black">${totalAmount}</div>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
