import React, { useEffect, useState } from "react";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {data.map((car) => (
            <CategoryCard car={car}></CategoryCard>
          ))}
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident modi dolores eveniet quisquam aliquam, nam quae aspernatur odit exercitationem ea non laudantium. At, maxime molestias illo error eveniet quia dolor.</p>
    </div>
  );
};

export default Home;
