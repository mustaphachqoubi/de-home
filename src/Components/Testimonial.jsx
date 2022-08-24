import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="flex flex-col p-10 mt-10">
      <div className="flex justify-left items-center gap-2">
        <div className="border-t-2 border-sky-500 w-5"></div>
        <h3 className="text-sm md:text-md text-slate-600">Testimonial</h3>
      </div>
      <h2 className="font-semibold text-lg md:text-2xl">
        What Customer Say About Us
      </h2>

      <div className="flex items-center -space-x-40 justify-center mt-10 ">
        <div className="z-40 bg-stone-200 md:max-w-2xl h-full rounded-xl p-8">
          <p className="font-medium text-slate-700 leading-loose tracking-wide">
            <FaQuoteRight className="text-sky-500 text-lg md:text-3xl float-right m-1" />
            This is the best property app that I ever have. I download De'Home
            before I decide to move my house from Bandung to Jakarta. And now I
            found my dream house because this app. Discover appartment is easy
            now.
          </p>
          <div className="flex mt-5 gap-4 leading-relaxed items-center">
              <img
                className="w-16 h-16 rounded-xl"
                src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/cache/3.JPG-nggid03125-ngg0dyn-591x591-00f0w010c010r110f110r010t010.JPG"
                alt=""
              />
              <span>
                <h3 className="font-bold">Lauren</h3>
                <h3 className="text-slate-500">Sudirman, South Jakarta</h3>
              </span>
            </div>
        </div>

        <div className="rounded-xl overflow-hidden lg:shrink-0 max-w-xl md:max-w-3xl md:max-h-screen hidden lg:block">
          <img
            className="w-full object-cover"
            src="https://www.kitchenarchitect.co.uk/wp-content/uploads/2020/01/IMG_0342-1024x683.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
