import React from "react";
import { useNavigate } from "react-router-dom";

function Order({ order }) {
  const navigate = useNavigate();

  const { orderNumber, shippingInformation, product, totalPrice } = order;

  return (
    <div className="container mx-auto py-8 px-8 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">
        🎉 Thank You for Your Order!
      </h2>
      <p>
        Your order has been placed successfully. You will receive a confirmation
        email with the details of your order shortly.
      </p>
      <div className="mt-6 border rounded-lg p-3 bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Order Summery</h3>
        <p>Order number: {orderNumber}</p>
        <div className="mt-4">
          <h2 className="text-md font-semibold mb-2">Shipping Information</h2>
          <p>{shippingInformation.address}</p>
          <p>{shippingInformation.city}</p>
          <p>{shippingInformation.zip}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-md font-semibold mb-2">Items Ordered</h3>
          {product.map((product) => (
            <div key={product.id} className="flex justify-between mt-2">
              <p>
                {product.name} (x{product.quantity})
              </p>
              <p>{product.price * product.quantity}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <span>Total Price:</span>
          <span className="font-semibold">{totalPrice.toFixed(2)}</span>
        </div>
        <div className="mt-6 ">
          <button className="bg-green-500 sm:w-auto w-full text-white py-2 px-4 rounded hover:bg-green-600">
            Order tracking
          </button>
          <button
            onClick={() => navigate('/')}
            className="sm:ml-4 mt-3 sm:w-auto bg-red-600 w-full text-white py-2 px-4 rounded hover:bg-red-800"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
