import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice"

const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
    <div className="flex flex-col items-center justify-between mb-6 p-4 bg-white shadow rounded-lg">

      <div className="w-[120px] mr-4">
        <img className="w-full h-full object-cover" src={item.image} alt={item.title}></img>
      </div>

      <div className="flex-1 ml-5">
        <h1 className="text-xl font-semibold ">{item.title}</h1>
        <h1 className="text-gray-600">{item.description}</h1>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-green-500 font-bold">{item.price.toFixed(2)}</p>
        <div onClick={removeFromCart}
        className="text-red-500 cursor-pointer p-2 rounded-full bg-red-100 hover:bg-red-200 transition duration-300">
          <FcDeleteDatabase></FcDeleteDatabase>
        </div>
      </div>

    </div>
  )
};

export default CartItem;
