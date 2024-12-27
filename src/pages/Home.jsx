import React, { useEffect } from "react";
import { banners, categories, mockData } from "../assets/mockData";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../components/ProductCart";
import Shop from "./Shop";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product); // Access products array

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);
 
  return (
    <div>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col md:flex-row gap-4">
          {/* Categories Section */}
          <div className="w-full md:w-3/12 bg-gray-100 rounded-lg shadow-md p-4">
            <h2 className="bg-red-600 text-white text-sm font-bold px-2 py-2.5 rounded-md uppercase">
              Shop by Categories
            </h2>
            <ul className="mt-4 space-y-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="text-gray-700 hover:text-slate-500 cursor-pointer text-sm font-medium"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero/Banner Section */}
          <div className="w-full  md:w-9/12 relative">
            <div className="relative w-full bg-black rounded-xl h-96">
              <img
                src={banners[0].image}
                alt="Hero"
                className="w-full opacity-80 h-full object-cover rounded-lg shadow-md"
              />
              <div className="absolute top-1/3 left-8 text-white space-y-4">
                <p className="text-lg font-medium uppercase">
                  Welcome to E-Shop
                </p>
                <h2 className="text-4xl font-bold">
                  Discover the Latest Gadgets
                </h2>
                <p className="text-sm">Millions+ Products</p>
                <button className="mt-4 px-6 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transform transition duration-300 hover:scale-105">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySection />
        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
            {products.products.slice(0, 5).map((item) => (
              <ProductCart key={item.name} product={item} />
            ))}
          </div>
        </div>
      </div>
      <Shop slice={10} />
    </div>
  );
}

export default Home;
