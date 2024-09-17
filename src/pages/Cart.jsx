import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";


const Cart = () => {
  const{cart}=useSelector((state)=>state);
  console.log("printing cart")
  console.log(cart)


  const[totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce( (acc,curr)=> acc + curr.price,0));
  },[cart])

  return (
    <div className="flex items-start justify-center max-w-6xl mx-auto p-8 mt-24" >
       <div >
        {
          cart.length> 0 ?
          (
            <div className="flex flex-col lg:flex-row w-full">
              <div className="flex-1 lg:max-h-screen overflow-y-auto no-scrollbar pr-4">
              {
                cart.map((item,index)=>{
                  return <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
                })
              }
              </div>
            </div>
          )
          :
          (
            <div>
              <h1>Cart Empty</h1>
              <Link to={"/"}>
                <button className="mt-4 bg-green-600 text-white py-2 px-4 w-full rounded-none hover:bg-green-700 transition duration-300">Shop Now</button>
              </Link> 
            </div>
          )
        } 
       </div>

      {
        cart.length> 0 &&
        <div className="flex flex-col justify-between">
          <div >
            <div className="font-semibold uppercase text-sm text-green-700">Your Cart</div>
            <div className="text-4xl uppercase -mt-1 text-green-700 font-bold">Summary</div>
            <p className="text-lg mt-3 text-[16px]">
              <span className="font-semibold text-gray-700">Total Items: {cart.length}</span>
            </p>        
          </div>

          <div className="text-lg text-gray-700 font-semibold">
            <p className="mb-1">Total Amount :<strong  className="text-black"></strong> ${totalAmount.toFixed(2)}</p>
            <button
            className="mt-4 bg-green-600 text-white py-2 px-4 w-full rounded-none hover:bg-green-700 transition duration-300">
              Checkout Now
            </button>
          </div>   

        </div>

      }
      
    </div>
    
  )
};

export default Cart;
