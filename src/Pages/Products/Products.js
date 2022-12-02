import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";
import ProductCart from "./ProductCart";

const Products = () => {
  const allProducts = useLoaderData();
  const [car, setCar] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 gap-10">
        {allProducts.map((products) => (
          <ProductCart key={products._id} products={products} setCar={setCar}></ProductCart>
        ))}
      </div>
      {car && <BookingModal car={car}></BookingModal>}
    </div>
  );
};

export default Products;
