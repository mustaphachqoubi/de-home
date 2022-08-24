import React from "react";

const OurServices = () => {

  return (
    <div className="flex flex-col p-10 mt-10">
      <div className="flex justify-left items-center gap-2">
        <div className="border-t-2 border-sky-500 w-5"></div>
        <h3 className="text-sm md:text-md text-slate-600">Our Services</h3>
      </div>
      <h2 className="font-semibold text-lg md:text-2xl">
        Your Comfort Is Our Happiness
      </h2>

      <div className="md:gap-6 flex flex-col md:flex-row justify-between mt-5 md:mt-0 items-center">
        <div className="space-y-6 ">
          <p className="max-w-lg md:max-w-sm text-slate-500 text-sm md:text-lg">
            No need to worry about our services, we provide all our best
            services for you.
          </p>

          <div className="flex justify-center gap-8 leading-loose tracking-wide ml-4">
            <ul className="list-disc text-sm md:text-md 3xl:text-lg space-y-4">
              <li>Premium national marketing</li>
              <li>Free, no obligation valuations</li>
            </ul>

            <ul className="list-disc text-sm md:text-md 3xl:text-lg space-y-4">
              <li>Managed viewings</li>
              <li>Local area knowledge</li>
            </ul>
          </div>

          <div className="flex justify-center md:block">
          <button className="bg-sky-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-sky-700">See More</button>
          </div>

        </div>
        <iframe className="mt-6 w-80 h-80 sm:w-[640px] md:h-[360px] rounded-xl " src="https://player.vimeo.com/video/314165193?h=b1a1322c01" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default OurServices;
