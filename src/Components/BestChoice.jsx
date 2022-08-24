import React from "react";
import { MdLocationOn } from "react-icons/md";

const BestChoice = () => {
  return (
    <div className="flex flex-col p-10 mt-20 md:mt-60 lg:mt-0">
      <div className="flex justify-left items-center gap-2">
        <div className="border-t-2 border-sky-500 w-5"></div>
        <h3 className="text-sm md:text-md text-slate-600">Best Choise</h3>
      </div>
      <h2 className="font-semibold text-lg md:text-2xl">Popular Residences</h2>

      <div className="gap-6 flex flex-wrap justify-center mt-10">
        <div className="block sm:flex md:block overflow-hidden bg-white max-w-2xl md:max-w-md shadow-lg hover:shadow-sm cursor-pointer ease-in duration-300 rounded-lg">
          <div className="shrink-0 h-48 md:h-64">
            <div className="z-40 float-right absolute mt-4 ml-4  bg-slate-900 text-white font-semibold py-2 px-4 rounded-full">
              For Sell
            </div>
            <img
              src="https://profiles.sulekha.com/mstore/24036103/albums/default/thumbnailfull/flats.jpg"
              className="h-full w-full sm:w-48 md:w-full md:w-full object-cover md:h-full "
              alt="residence 1"
            />
          </div>

          <div className="p-5 space-y-3">
            <div className="flex items-center space-x-2">
              <h3 className="line-through decoration-red-500 font-semibold text-md">
                $ 20,000
              </h3>
              <h3 className="font-semibold text-xl">$ 15,000</h3>
            </div>

            <h3 className="font-semibold text-md text-slate-500">
              Grand Permai Residences
            </h3>

            <p className="gap-2 text-gray-500 flex max-w-xs tracking-wide leading-loose">
              <MdLocationOn className="text-cyan-500 text-3xl" />
              South Jakarta, Kemang, Tebet, Pulo Gadung, DKI Jakarta
            </p>
          </div>
        </div>

        <div className="block sm:flex md:block overflow-hidden bg-white max-w-2xl md:max-w-md shadow-lg hover:shadow-sm cursor-pointer ease-in duration-300 rounded-lg">
          <div className="shrink-0 h-48 md:h-64">
            <div className="z-40 float-right absolute mt-4 ml-4 bg-slate-900 text-white font-semibold py-2 px-4 rounded-full">
              For Rent
            </div>
            <img
              src="https://static.dezeen.com/uploads/2022/04/schmidt-hammer-lassen-architects-rocked-tiger-switzerland-residential-architecture-hero_dezeen_2364_col_0.jpg"
              className="h-full w-full sm:w-48 md:w-full md:w-full object-cover"
              alt="residence 1"
            />
          </div>

          <div className="p-5 space-y-3">
            <div className="flex items-center space-x-2">
              <h3 className="line-through decoration-red-500 font-semibold text-md">
                $ 17,000
              </h3>
              <h3 className="font-semibold text-xl">$ 12,000</h3>
            </div>

            <h3 className="font-semibold text-md text-slate-500">
              Grand Permai Residences
            </h3>

            <p className="gap-2 text-gray-500 flex max-w-xs tracking-wide leading-loose">
              <MdLocationOn className="text-cyan-500 text-3xl" />
              South Jakarta, Kemang, Tebet, Pulo Gadung, DKI Jakarta
            </p>
          </div>
        </div>

        <div className="block sm:flex md:block overflow-hidden bg-white max-w-2xl md:max-w-md shadow-lg hover:shadow-sm cursor-pointer ease-in duration-300 rounded-lg">
          <div className="shrink-0 h-48 md:h-64">
            <div className="z-40 float-right absolute mt-4 ml-4  bg-slate-900 text-white font-semibold py-2 px-4 rounded-full">
              For Sell
            </div>
            <img
              src="https://www.globalconstructionreview.com/wp-content/uploads/2021/08/x021120_Tallhouse-Generate-Exterior-03_2.pagespeed.ic_.SFyd4GVc-8.jpg"
              className="h-full w-full sm:w-48 md:w-full md:w-full object-cover md:h-full "
              alt="residence 1"
            />
          </div>

          <div className="p-5 space-y-3">
            <div className="flex items-center space-x-2">
              <h3 className="line-through decoration-red-500 font-semibold text-md">
                $ 18,000
              </h3>
              <h3 className="font-semibold text-xl">$ 12,300</h3>
            </div>

            <h3 className="font-semibold text-md text-slate-500">
              Grand Permai Residences
            </h3>

            <p className="gap-2 text-gray-500 flex max-w-xs tracking-wide leading-loose">
              <MdLocationOn className="text-cyan-500 text-3xl" />
              South Jakarta, Kemang, Tebet, Pulo Gadung, DKI Jakarta
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BestChoice;
