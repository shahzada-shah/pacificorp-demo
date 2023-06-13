import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleClick = () => setNav(!nav);

  useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // If the screen transitions to medium view or larger, close the menu
        setNav(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-screen h-16 bg-zinc-200 fixed shadow-lg z-50">
      <div className="px-2 flex justify-between items-center h-full">
        {/* Brand */}
        <h1 className="mr-4 cursor-pointer">
          <img
            src="https://www.pacificorp.com/content/dam/pcorp/logos/pacificorp-logo.svg"
            alt="Logo"
            className="h-8 sm:h-10"
          />
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          <li className="cursor-pointer hover:bg-red-500 hover:text-white rounded-md transition-all  px-4 py-2">
            ENERGY
          </li>
          <li className="cursor-pointer hover:bg-red-500 hover:text-white rounded-md transition-all  px-4 py-2">
            TRANSMISSION
          </li>
          <li className="cursor-pointer hover:bg-red-500 hover:text-white rounded-md transition-all  px-4 py-2">
            ENVIRONMENT
          </li>
          <li className="cursor-pointer hover:bg-red-500 hover:text-white rounded-md transition-all  px-4 py-2">
            COMMUNITY
          </li>
        </ul>

        {/* Sign In and Sign Up Buttons (Desktop) */}
        <div className="hidden md:flex pr-4 ">
          <button className="font-medium font-Roboto text-black border-none bg-transparent border-red-600 hover:bg-transparent hover:text-red-600 hover:font-semibold rounded-md mr-4">
            SIGN IN
          </button>
          <button
            className="font-medium text-white border px-6 py-1.5 bg-red-600 border-red-600 hover:border-2
-black hover:border-black hover:font-semibold hover:bg-transparent hover:text-black rounded-md"
          >
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
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          ENERGY
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          TRANSMISSION
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          ENVIRONMENT
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          COMMUNITY
        </li>

        {/* Sign In and Sign Up Buttons (Mobile) */}
        <div className="flex flex-col my-4">
          <button className="font-semibold text-red-600 border-2 border-red-600 hover:border-black hover:text-black hover:border-2-black rounded-md px-8 py-2 mb-4 outline-none focus:outline-solid focus:outline-blue-600">
            SIGN IN
          </button>
          <button className="font-semibold text-white border-2 px-6 py-1.5 bg-red-600 border-red-600 hover:bg-transparent hover:text-red-600 rounded-md">
            JOIN US
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
