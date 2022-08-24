import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState("hidden");
  return (
    <nav className="-z-50 flex items-center justify-between p-8 text-white">
      <div className="cursor-pointer">
        <h3 className="font-bold md:text-2xl text-xl">De'Home</h3>
      </div>

      <div
        onClick={() => {
          if (open === "hidden") {
            setOpen("");
          }
           else {
            setOpen("hidden");
          }
        }}
        className="z-50 bg-white text-slate-700 p-3 text-lg  rounded-full hover:bg-slate-300 hover:text-slate-700 cursor-pointer flex lg:hidden"
      >
        {open === "hidden" ? <GiHamburgerMenu /> : <GrClose />}
      </div>

      <div className="hidden space-x-12 lg:flex">
        <ul className="flex gap-10">
          {[
            ["Home", "/home"],
            ["Features", "/features"],
            ["About Us", "/aboutus"],
            ["Contact", "/contact"],
          ].map(([title, url]) => (
            <a
            key={title}
              href={url}
              className="ease-in duration-300 rounded-lg px-3 py-2 font-medium hover:bg-white hover:text-slate-900"
            >
              {title}
            </a>
          ))}
        </ul>

        <span className="border-l-2 items-center border-white"></span>

        <div className="flex gap-10 ">
          <button className="rounded-lg px-5 py-2 font-medium hover:bg-white hover:text-slate-900 ease-in duration-300">
            Login
          </button>
          <button className="rounded-lg px-3 py-2 font-medium bg-hidden border border-white hover:bg-white hover:text-slate-900 ease-in duration-300">
            Sign Up
          </button>
        </div>
      </div>

      <div
        className={`${open} bg-slate-500/30 backdrop-blur-xl lg:hidden h-screen w-[50%] z-40 absolute top-0 right-0 shadow-lg py-20 px-5 space-y-6`}
      >
        <ul className="pt-8 space-y-6">
          <li className="hover:backdrop-blur-2xl p-4 text-center cursor-pointer">
            Home
          </li>
          <li className="hover:backdrop-blur-2xl p-4 text-center cursor-pointer">
            Features
          </li>
          <li className="hover:backdrop-blur-2xl p-4 text-center cursor-pointer">
            About Us
          </li>
          <li className="hover:backdrop-blur-2xl p-4 text-center cursor-pointer">
            Contact
          </li>
        </ul>

        <div className="space-y-6 p-4 text-center">
          <button className="rounded-lg w-full h-12 font-medium border-2 bg-hidden border-white hover:bg-white hover:text-slate-900 ease-in duration-300">
            Login
          </button>
          <button className="rounded-lg w-full h-12 font-medium bg-sky-500  hover:bg-white hover:text-slate-900 ease-in duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
