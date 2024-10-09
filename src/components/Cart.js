import { useDispatch, useSelector } from "react-redux";
import CartUi from "./CartUi";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
 
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cartItems.length === 0 && (
        <h1 className="text-2xl">Cart is empty.Add items to the cart</h1>
      )}
      <button
        onClick={handleClearCart}
        className="m-2 p-2 bg-black text-white rounded-lg absolute right-10 top-[130px] 
             hover:bg-gray-800 transition-colors duration-300 ease-in-out shadow-lg"
      >
        Clear Cart
      </button>
     
      <div>
        <CartUi items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
