import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Model from "../components/Model";
import ChangeAdress from "../components/ChangeAdress";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [address, setAddress] = useState("Main Street, 0012");
  const [isModelopen, setIsModelopen] = useState(false);

  return (
    <div className="container mx-auto py-8 min-h-screen px-4 md:px-8 lg:px-16">
      {cart.products.length > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>
          <div className="flex flex-col md:flex-row md:space-x-10">
            {/* Products Section */}
            <div className="md:w-2/3">
              <div className="hidden md:flex justify-between border-b pb-2 mb-4 text-sm font-bold text-gray-700">
                <p>Product</p>
                <div className="flex space-x-8">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                  <p>Remove</p>
                </div>
              </div>
              {cart.products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row items-center justify-between p-4 border-b"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                  </div>
                  <div className="flex space-x-8 items-center mt-4 md:mt-0">
                    <p className="text-gray-700">${product.price.toFixed(2)}</p>
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() => dispatch(decrementQuantity(product.id))}
                        className="px-3 py-1 border-r text-gray-700 hover:bg-gray-200"
                      >
                        -
                      </button>
                      <p className="px-4 py-1">{product.quantity}</p>
                      <button
                        onClick={() => dispatch(incrementQuantity(product.id))}
                        className="px-3 py-1 text-gray-700 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-gray-700">
                      $
                      {(
                        product.quantity * product.price
                      ).toFixed(2)}
                    </p>
                    <button
                      onClick={() => dispatch(removeFromCart(product.id))}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md mt-6 md:mt-0">
              <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
              <div className="flex justify-between mb-4 border-b pb-2 text-sm">
                <span>Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4">
                <p className="text-sm">Shipping Address:</p>
                <p className="text-sm font-bold">{address}</p>
                <button
                  className="text-blue-500 text-sm hover:underline mt-2"
                  onClick={() => setIsModelopen(true)}
                >
                  Change Address
                </button>
              </div>
              <div className="flex justify-between mb-4 text-sm">
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-800"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          {/* Address Change Modal */}
          <Model isModelopen={isModelopen} setIsModelopen={setIsModelopen}>
            <ChangeAdress
              setAddress={setAddress}
              setIsModelopen={setIsModelopen}
            />
          </Model>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <img
            className="w-56 mb-6"
            src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
            alt="Empty Cart"
          />
          <p className="text-lg text-gray-600">Your cart is empty</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
