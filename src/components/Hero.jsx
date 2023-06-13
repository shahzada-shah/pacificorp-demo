import React from "react";
import {
  UilBoltAlt,
  UilCarSideview,
  UilCog,
  UilCloudDatabaseTree,
} from "@iconscout/react-unicons";
import "@dotlottie/player-component";
import heroanimation from '../animations/heroanimation.lottie';

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Energy plan advances a</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Net-Zero Future
          </h1>
          <p className="text-2xl">
            Our long-term plan advances a net-zero energy future with safe,
            low-cost, reliable, and sustainable power for our customers and
            communities.
          </p>
          <button className="my-4 py-3 text-white font-semibold hover:text-black border px-6 bg-red-600 border-red-600 hover:border-black hover:border-2 hover:bg-transparent rounded-md sm:w-[40%]">
            See Our Progress
          </button>
        </div>
        <div>
        <dotlottie-player src={heroanimation} autoplay loop />
        </div>
        <div className="absolute flx flex-col py-8 md:min-w-[800px] bottom-[2%] mx-2 mr-2 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <p className="m-2">Empowering Renewable Solutions</p>
          <div className="flex justify-center flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <UilBoltAlt className="h-6 text-red-600 mr-2" />
              Renewable Energy
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <UilCarSideview className="h-6 text-red-600 mr-2" />
              Clean Transportation
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <UilCog className="h-6 text-red-600 mr-2" />
              Grid Innovation
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <UilCloudDatabaseTree className="h-6 text-red-600 mr-2" />
              Cloud Data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
