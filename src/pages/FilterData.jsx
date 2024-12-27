import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "../components/ProductCart";

function FilterData() {
  const filterProducts = useSelector((state) => state.product.filteredData);
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-4">PRODUCTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterProducts.map((item) => (
              <ProductCart key={item.name} product={item} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
            <img src="https://www.sterisonline.com//assets/img/No_Product_Found.png" alt="" />
        </div>
      )}
    </div>
  );
}

export default FilterData;
