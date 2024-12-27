import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout({ setOrder }) {
  const [isBillingOpen, setIsBillingOpen] = useState(true);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [PaymentMethod, setPaymentMethod] = useState("cod"); // cod -> cash on delivery
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: ""
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleOrder = () => {
    const newOrder = {
      product: cart.products,
      orderNumber: "12344",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice
    };
    setOrder(newOrder);
    navigate("/order-confirmation");
    
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>

      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Left Section */}
        <div className="md:w-2/3 space-y-6">
          {/* Billing Information */}
          <div className="border rounded-lg p-4 shadow-md">
            <div
              onClick={() => setIsBillingOpen(!isBillingOpen)}
              className="flex items-center justify-between cursor-pointer"
            >
              <h3 className="text-lg font-semibold">Billing Information</h3>
              {!isBillingOpen ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`mt-4 space-y-4 ${isBillingOpen ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Name"
                  name="name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Phone</label>
                <input
                  type="number"
                  name="phone"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="border rounded-lg p-4 shadow-md">
            <div
              onClick={() => setIsShippingOpen(!isShippingOpen)}
              className="flex items-center justify-between cursor-pointer"
            >
              <h3 className="text-lg font-semibold">Shipping Information</h3>
              {!isShippingOpen ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`mt-4 space-y-4 ${isShippingOpen ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Address"
                  name="address"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                  

                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter City"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      city: e.target.value
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Zip Code</label>
                <input
                  type="number"
                  name="zipcode"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Zip Code"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      zip: e.target.value
                    })
                  }
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border rounded-lg p-4 shadow-md">
            <div
              onClick={() => setIsPaymentOpen(!isPaymentOpen)}
              className="flex items-center justify-between cursor-pointer"
            >
              <h3 className="text-lg font-semibold">Payment Method</h3>
              {!isPaymentOpen ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`mt-4 space-y-4 ${isPaymentOpen ? "" : "hidden"}`}>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  checked={PaymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="ml-2 text-gray-700">Cash on Delivery</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  checked={PaymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="ml-2 text-gray-700">Debit Card</label>
              </div>

              {PaymentMethod === "dc" && (
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter card number"
                      className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter card holder name"
                      className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Expire Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="CVV"
                        className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md mt-8 md:mt-0">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <img
                    src={product.image}
                    className="w-16 h-16 object-contain rounded-lg"
                    alt={product.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">
                      ${product.price.toFixed(2)} x {product.quantity}
                    </p>
                  </div>
                </div>
                <span className="text-gray-700 font-semibold">
                  ${(product.price * product.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between items-center font-semibold">
              <span>Total Price:</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleOrder}
              className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
