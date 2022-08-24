import React from "react";

const Questions = () => {
  return (
    <div className="flex flex-col p-10 mt-10">
      <div className="flex justify-left items-center gap-2">
        <div className="border-t-2 border-sky-500 w-5"></div>
        <h3 className="text-sm md:text-md text-slate-600">Question</h3>
      </div>
      <h2 className="font-semibold text-lg md:text-2xl">
        Frequently Asked Question
      </h2>

      <div className="md:flex mt-10 justify-between gap-10">
        <div className="space-y-6">
          <p className="text-slate-500 max-w-md">
            Are you worried about problems while living here? here are all the
            solutions to your problem.
          </p>

          <button className="bg-sky-500 hover:bg-sky-700 py-3 px-6 text-white rounded-xl font-semibold">
            See More
          </button>
        </div>

        <div className="mt-8 md:mt-0 grid grid-cols-1 devide-solid divide-y-2 divide-gray-300 max-w-xl">
          <div className="space-y-4 py-2">
            <h3 className="font-semibold tracking-wide text-lg">
              Do you offer unit apartment loa services?
            </h3>
            <p className="text-gray-500 text-md font-medium">
              Yes. Wenavetie-uos with some of the leac such as the IND Bank, The
              BDG Bank, the A
            </p>
          </div>

          <div className="space-y-4 py-2">
            <h3 className="font-semibold tracking-wide text-lg">
              What are Capital Gains on propi purchase?
            </h3>
          </div>

          <div className="space-y-4 py-2">
            <h3 className="font-semibold tracking-wide text-lg">
              What kind of properties are liste website?
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
