import React from "react";

const CategoryCard = ({ car }) => {
  const { categoryName, image } = car;
  return (
    <div className="border flex flex-col justify-center items-center rounded-xl shadow-xl p-4 cursor-pointer hover:outline outline-red-300">
      <img className="w-6/12" src={image} alt="" />
      <h2 className="text-2xl font-bold">{categoryName}</h2>
    </div>
  );
};

export default CategoryCard;
