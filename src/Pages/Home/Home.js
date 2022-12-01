import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BuyFromUs from "./BuyFromUs";
import CategoryCard from "./CategoryCard";
import HeaderSection from "./HeaderSection";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <HeaderSection></HeaderSection>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="text-4xl uppercase font-semibold text-center my-8 text-red-500 underline">
          Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {data.map((car) => (
            <Link to={`/products/${car.categoryName}`}>
              <CategoryCard car={car}></CategoryCard>
            </Link>
          ))}
        </div>
      </div>
      <BuyFromUs></BuyFromUs>
    </div>
  );
};

export default Home;
