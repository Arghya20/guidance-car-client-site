import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import errorImg from "../DisplayError/404.jpg";

const DisplayError = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center flex-col">
        <img className="w-9/12 " src={errorImg} alt="" />
        <div className="my-6 text-center">
          <h2 className="text-4xl uppercase text-green-600 font-bold">
            seems like you've hit the wall
          </h2>
          <p className="text-lg"> we could not find the page you were looking for</p>
        </div>
        <Link to="/">
          <button className="btn border-none shadow-xl myBtn rounded-full">
            <span className="text-xl mr-2">
              <FaArrowAltCircleLeft />
            </span>{" "}
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DisplayError;
