import React, { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Productdetails() {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const findProduct = products.find((item) => item.id === parseInt(id, 10));
    setProduct(findProduct);
  }, [id, products]);

  if (!product) {
    return (
      <div className="text-center text-lg text-red-500 mt-10">
        Product not found!
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4 lg:px-16">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="md:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-6">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              This is a placeholder for the product description. Update it with
              detailed information about the product.
            </p>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <input
              type="number"
              id="quantity"
              className="border rounded px-3 py-2 w-20 text-center text-gray-700"
              defaultValue="1"
            />
            <button className="bg-red-600 text-white rounded-lg py-2 px-6 hover:bg-red-700 transition-all">
              Add to Cart
            </button>
          </div>

          {/* Additional Info */}
          <div className="space-y-4">
            <p className="flex items-center text-gray-700">
              <FaCarSide className="mr-2 text-red-600" />
              <span>Delivery & Returns</span>
            </p>
            <p className="flex items-center text-gray-700">
              <FaQuestion className="mr-2 text-red-600" />
              <span>Ask a Question</span>
            </p>
          </div>
        </div>
      </div>

      {/* Product Description Section */}
      <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold mb-4">Product Description</h3>
        <p className="text-gray-700 leading-relaxed">
          This is where the full product description goes. You can highlight its
          features, specifications, and any additional information that might
          help the customer make an informed decision.
        </p>
      </div>
    </div>
  );
}

export default Productdetails;
