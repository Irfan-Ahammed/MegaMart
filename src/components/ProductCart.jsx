import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function ProductCart({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="flex w-full flex-col items-center bg-white rounded-lg shadow-md p-4 xs:w-60">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-contain rounded-md"
        />
        <div className="flex relative items-end w-full justify-between">
          <div>
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-300" />
            </div>
          </div>
          <div
            className="bg-red-600 absolute bottom-0 right-0 rounded-full text-white flex items-center w-8 h-8 group text-sm hover:w-32 hover:bg-red-700 transition-all justify-center"
          >
            <span className="group-hover:hidden text-2xl">+</span>
            <span
              onClick={(e) => handleAddToCart(e, product)}
              className="hidden group-hover:block font-semibold"
            >
              Add to Cart
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCart;
