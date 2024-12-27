import React from "react";
import ProductCart from "../components/ProductCart";
import { useSelector } from "react-redux";

function Shop({slice}) {
  const products = useSelector((state) => state.product);

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-4">PRODUCTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.products.slice(0, slice).map((item) => (
          <ProductCart key={item.name} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
