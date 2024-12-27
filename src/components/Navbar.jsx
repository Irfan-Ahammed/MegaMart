import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Model from "./Model";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/productSlice";

function Navbar() {
  const products = useSelector((state) => state.cart.products);
  const [isModelopen, setIsModelopen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data")
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelopen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelopen(true);
  };
  return (
    <nav className="bg-white shadow-md">
      <div
        className="container flex mx-auto px-4 md:px-16 lg:px-24  
       py-5 justify-between"
      >
        <div className="font-bold text-lg flex items-center ">
          <Link to="/">MegaMart</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              className="w-full border py-2 px-4"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white rounded-full h-4 w-4 flex justify-center items-center text-xs">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block"
            onClick={() => setIsModelopen(true)}
          >
            Login | Register
          </button>
          <button
            className="block md:hidden"
            onClick={() => setIsModelopen(true)}
          >
            <FaUser />
          </button>
        </div>
      </div>
      <div
        className="uppercase flex justify-center
      items-center space-x-10 font-bold text-sm py-4"
      >
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline">
          shop
        </Link>
        <Link to="/contact" className="hover:underline">
          contact
        </Link>
        <Link to="/about" className="hover:underline">
          about
        </Link>
      </div>
      <Model isModelopen={isModelopen} setIsModelopen={setIsModelopen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Model>
    </nav>
  );
}

export default Navbar;
