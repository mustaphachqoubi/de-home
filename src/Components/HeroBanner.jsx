import React from "react";

const HeroBanner = () => {
  return (
    <div className="text-white p-8 space-y-5 ">
      <h1 className="md:text-5xl text-2xl font-bold md:max-w-3xl max-w-md leading-tight">
        Find Real Estate That Suits You.
      </h1>
      <p className="md:max-w-3xl max-w-md md:text-md text-xs leading-tight text-gray-200">
        No need to worry if you want to rent an apartment, we provide all the
        types you want.
      </p>
      <button className="text-sm md:text-lg hover:bg-white hover:text-black border-2 py-3 px-5 rounded-lg font-bold ease-in duration-300 ">
        Get Started
      </button>

      <div className="flex gap-10">
        <div>
          <h3 className="font-semibold md:text-xl lg:text-black xl:text-white">
            200{" "}
            <span className="text-gray-300 lg:text-black xl:text-gray-300">
              +
            </span>
          </h3>
          <span className="font-sm text-xs md:text-sm text-gray-300 lg:text-black xl:text-gray-300">
            Google Reviews
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-xl md:text-xl lg:text-black xl:text-white">
            10{" "}
            <span className="text-gray-300 lg:text-black xl:text-gray-300">
              +
            </span>
          </h3>
          <span className="font-sm text-xs md:text-sm text-gray-300 lg:text-black xl:text-gray-300">
            Years Experience
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-xl md:text-xl lg:text-black xl:text-white">
            10{" "}
            <span className="text-gray-300 lg:text-black xl:text-gray-300">
              +
            </span>
          </h3>
          <span className="font-sm text-xs md:text-sm text-gray-300 lg:text-black xl:text-gray-300">
            Award Winning
          </span>
        </div>
      </div>

      <div className="bg-white max-w-lg md:max-w-3xl xl:max-w-5xl shadow-lg rounded-lg m-auto overflow-hidden p-8 space-y-4">
        <h2 className="text-zinc-900 font-medium md:font-semibold text-md md:text-lg">
          Search the type what you looking for
        </h2>
        <div className="md:flex items-center space-y-4  md:space-x-5">
          <input
            placeholder="Location"
            type="text"
            className="py-3 border border-zinc-900 bg-stone-50 p-2 mt-4 h-full rounded-lg outline-sky-500 w-full placeholder:pl-1 bg-[url('https://www.iconpacks.net/icons/2/free-location-pointer-icon-2961-thumb.png')] bg-[length:20px_20px] bg-no-repeat bg-right bg-[center_right_0.5rem] text-black"
          />
          <input
            placeholder="Type"
            type="text"
            className="py-3 border border-zinc-900 bg-stone-50 p-2 h-full rounded-lg outline-sky-500 w-full placeholder:pl-1 bg-[url('https://cdn-icons-png.flaticon.com/512/25/25694.png')] bg-[length:20px_20px] bg-no-repeat bg-right bg-[center_right_0.5rem] text-black"
          />
          <input
            placeholder="Budget"
            type="text"
            className="py-3 border border-zinc-900 bg-stone-50 p-2 h-full rounded-lg outline-sky-500 w-full placeholder:pl-1 bg-[url('https://cdn3.iconfinder.com/data/icons/glypho-money-and-finance/64/money-dollar-circle-512.png')] bg-[length:20px_20px] bg-no-repeat bg-right bg-[center_right_0.5rem] text-black"
          />
          <button className="text-white bg-zinc-900 hover:bg-zinc-800 p-3 h-full w-full rounded-lg">
            Search Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
