import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 499,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 299,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
  ]);

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handle item removal
  const handleRemove = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  // Handle quantity change
  const handleQuantityChange = (id, quantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
    );
    setCartItems(updatedItems);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-xl text-center text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gray-300 py-4"
            >
              {/* Product Image */}
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />

              {/* Product Details */}
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-500">Price: ₹{item.price}</p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="px-3 py-1 text-gray-700 bg-gray-200 rounded-l hover:bg-gray-300"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className="w-12 text-center border border-gray-300 p-1"
                />
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="px-3 py-1 text-gray-700 bg-gray-200 rounded-r hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-600 hover:text-red-800 ml-4"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="mt-6 text-right">
            <h2 className="text-2xl font-bold text-gray-800">
              Total: ₹{totalPrice}
            </h2>
            <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
