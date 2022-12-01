import React from "react";

const BuyFromUs = () => {
  return (
    <div className="mt-5 lg:mt-16">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 -left-5 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d9d7687a-355f-4502-8ec4-7945db034688"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)" width="52" height="24" />
              </svg>
              <span className="relative underline text-red-500 ">WHY BUY FROM US</span>
            </span>{" "}
          </h2>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-5 duration-300 transform bg-white border rounded-lg shadow-lg hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            
            <img className="w-2/3" src="https://www.cars24.com/js/6f751a9d48793a9685f4a1313fed19ab.svg" alt="" />
            </div>
            <h6 className="mb-2 font-bold leading-5 text-xl">Easy Financing Options</h6>
            <p className="text-sm text-gray-900">
              Become eligible for Zero Down Payment via EMIs of up to 72 months and instant loans.
            </p>
          </div>

          <div className="p-5 duration-300 transform bg-white border rounded-lg shadow-lg hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <img className="w-2/3" src="https://www.cars24.com/js/72ee8594f9a2e0d3f78d675ff84c0333.svg" alt="" />
            </div>
            <h6 className="mb-2 font-bold leading-5 text-xl">12-Month Warranty</h6>
            <p className="text-sm text-gray-900">
              Enjoy peace of mind with our 12-Month Warranty that is standard across all cars that
              we sell.
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded-lg shadow-lg hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <img className="w-2/3" src="https://www.cars24.com/js/7f7b7d5596e5e520b606dd534be627b0.svg" alt="" />
            </div>
            <h6 className="mb-2 font-bold leading-5 text-xl">140-Quality Checks</h6>
            <p className="text-sm text-gray-900">
              Inspected across 140 parameters and refurbished by auto-experts, our cars are ready
              for the road.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyFromUs;
