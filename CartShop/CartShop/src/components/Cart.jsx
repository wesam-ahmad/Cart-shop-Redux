import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border p-2 mt-2">
              <img src={item.image} alt={item.title} className="h-16" />
              <p>{item.title} (x{item.quantity})</p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="text-lg font-bold mt-4">Total: ${totalAmount.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
