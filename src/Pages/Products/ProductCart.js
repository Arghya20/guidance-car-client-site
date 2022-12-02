import React from "react";

const ProductCart = ({ products }) => {
  const { carName, image, originalPrice, resalePrice, owner, color, kilometer, fuelType, dec } =
    products;
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-lg">
        <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72" />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-wide text-blue-900">{carName}</h2>
            <p className="">
              {" "}
              <span className="font-bold text-red-900">Original price: $ </span> {originalPrice}
            </p>
            <p className="">
              {" "}
              <span className="font-bold text-red-900">Resale price: $ </span> {resalePrice}
            </p>
            <p className="">
              {" "}
              <span className="font-bold text-red-900">Owner :</span> {owner}
            </p>
            <p className="">
              {" "}
              <span className="font-bold text-red-900">Color : </span> {color}
            </p>
            <p className="">
              {" "}
              <span className="font-bold text-red-900">Kilo-Meter: </span> {kilometer}
            </p>
            <p className="">
              {" "}
              <span className="font-bold text-red-900"> Fuel-Type :</span> {fuelType}
            </p>
            <p className="">
              {" "}
              <span className="font-bold text-red-900">ADDITIONAL INFO : </span> {dec}
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-full myBtn text-white"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
