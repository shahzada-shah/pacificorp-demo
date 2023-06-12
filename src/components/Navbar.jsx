import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-16 bg-zinc-200 fixed shadow-lg">
      <div className="px-2 flex justify-between items-center h-full">
        {/* Brand */}
        <h1 className="mr-4">
          <img
            src="https://www.pacificorp.com/content/dam/pcorp/logos/pacificorp-logo.svg"
            alt="Logo"
            className="h-8 sm:h-10"
          />
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          <li>ENERGY</li>
          <li>TRANSMISSION</li>
          <li>ENVIRONMENT</li>
          <li>COMMUNITY</li>
        </ul>

        {/* Sign In and Sign Up Buttons (Desktop) */}
        <div className="hidden md:flex pr-4 ">
          <button className="font-[500] font-Roboto text-black border-none bg-transparent border-red-600 hover:bg-transparent hover:text-red-600 rounded-md mr-4">
            SIGN IN
          </button>
          <button className="text-white border px-6 py-1.5 bg-red-600 border-red-600 hover:bg-transparent hover:text-red-600 rounded-md">
            JOIN US
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden" onClick={toggleClick}>
          {!nav ? (
            <MenuIcon className="w-5 cursor-pointer" />
          ) : (
            <XIcon className="w-5 cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">ENERGY</li>
        <li className="border-b-2 border-zinc-300 w-full">TRANSMISSION</li>
        <li className="border-b-2 border-zinc-300 w-full">ENVIRONMENT</li>
        <li className="border-b-2 border-zinc-300 w-full">COMMUNITY</li>

        {/* Sign In and Sign Up Buttons (Mobile) */}
        <div className="flex flex-col my-4">
          <button className="text-red-600 border border-red-600 hover:bg-transparent hover:bg-red-600 hover:text-white rounded-md px-8 py-2 mb-4 outline-none focus:outline-solid focus:outline-blue-600">
            SIGN IN
          </button>
          <button className="text-white border px-6 py-1.5 bg-red-600 border-red-600 hover:bg-transparent hover:text-red-600 rounded-md">
            JOIN US
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
