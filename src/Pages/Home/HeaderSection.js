import React from "react";
import carImg from "./car-img.jpg";

const HeaderSection = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10 flex flex-col justify-center">
            <h5 className="mb-5 text-4xl font-extrabold  ">
              Your Dream Car
              <br className="hidden md:block" />
              Just One Click
              <br className="hidden md:block" />
              <span className="inline-block text-deep-purple-accent-400 mt-2">Away!</span>
            </h5>
            <p className="mb-6 text-gray-900">
              Schedule a test drive from
              <br className="hidden md:block" />
              the wide range of our car collection
            </p>
            <button className="btn border-none myBtn rounded-full w-1/2 lg:w-1/3">
              See Used Cars
            </button>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-xl sm:h-96"
              src={carImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
