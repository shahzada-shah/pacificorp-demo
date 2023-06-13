import React from "react";
import {
    UilYoutube,
    UilLinkedin,
    UilInstagram,
    UilTwitter,
} from "@iconscout/react-unicons";

const Footer = () => {
    return (
        <div className="w-full mt-24 bg-slate-900 text-gray-300 px-2">
            <div className="max-w-[1240px] mx-auto grid grid-cols-3 md:grid-cols-5 border-b-2 border-gray-600 py-6 text-center">
                <div>
                    <h6 className="font-semibold uppercase pt-2 pb-1">About Us</h6>
                    <ul>
                        <li className="py-1 font-extralight text-gray-400 cursor-pointer hover:text-gray-200">Careers</li>
                        <li className="py-1 font-extralight text-gray-400 cursor-pointer hover:text-gray-200">
                            Leadership Team
                        </li>
                        <li className="py-1 font-extralight text-gray-400 cursor-pointer hover:text-gray-200">
                            Employee Commitment
                        </li>
                        <li className="py-1 font-extralight text-gray-400 cursor-pointer hover:text-gray-200">
                            Customer Service
                        </li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-semibold uppercase pt-2 pb-1">Energy</h6>
                    <ul>
                        <li className="py-1 font-extralight text-gray-400 cursor-pointer hover:text-gray-200">
                            Wind and solar
                        </li>
                        <li className="py-1 font-extralight text-gray-400 cursor-pointer hover:text-gray-200">Hydro</li>
                        <li className="py-1 font-extralight text-gray-400 cursor-pointer hover:text-gray-200">
                            Thermal energy
                        </li>
                        <li className="py-1 font-extralight text-gray-400 cursor-pointer hover:text-gray-200">Transmission</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-semibold uppercase pt-2 pb-1">COMMUNITY</h6>
                    <ul>
                        <li className="py-1 font-extralight text-gray-400 cursor-pointer hover:text-gray-200">
                            Washington CEIP
                        </li>
                        <li className="py-1 font-extralight text-gray-400 cursor-pointer hover:text-gray-200">Oregon DSP</li>
                        <li className="py-1 font-extralight text-gray-400 cursor-pointer hover:text-gray-200">
                            Oregon Clean Energy Plan
                        </li>
                        <li className="py-1 font-extralight text-gray-400 cursor-pointer hover:text-gray-200">Oregon CBIAG</li>
                    </ul>
                </div>

                <div className="col-span-3 pt-8 md:pt-2 md:col-span-2">
                    <p className="font-semibold uppercase">Subscribe to our newsletter</p>
                    <p className="font-extralight text-gray-400 py-4">
                        The latest news, articles and resources, sent to your inbox monthly.
                    </p>
                    <form className="flex flex-col sm:flex-row">
                        <input className="w-full p-2 mr-2 mb-4 rounded-md" type="email" />
                        <button className="text-white border mb-4 p-2 bg-red-600 border-red-600 hover:bg-transparent hover:text-red-600 rounded-md">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
                <p className="py-4">
                    © 2023 PacifiCorp, a 
                    <span className="font-semibold cursor-pointer hover:text-gray-300"> Berkshire Hathaway Energy </span>subsidiary.
                </p>
                <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                    <UilLinkedin className='cursor-pointer hover:text-gray-300'/>
                    <UilTwitter className='cursor-pointer hover:text-gray-300'/>
                    <UilInstagram className='cursor-pointer hover:text-gray-300'/>
                    <UilYoutube className='cursor-pointer hover:text-gray-300'/>
                </div>
            </div>
        </div>
    );
};

export default Footer;