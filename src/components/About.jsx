import React from "react";

const About = () => {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            As a wind power leader, we’re finding new way
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            PacifiCorp's 2023 Integrated Resource Plan (IRP) builds upon our
            significant progress toward the goals laid out in the 2019 and 2021
            IRPs and identifies investments in modernized transmission, renewable
            energy, storage, demand response, and advanced nuclear resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-lg hover:bg-gray-100 transition-colors duration-300">
            <p className="text-6xl text-red-500 font-bold">100%</p>
            <p className="text-gray-400 mt-2">ENERGY VISION</p>
          </div>
          <div className="border py-8 rounded-xl shadow-lg hover:bg-gray-100 transition-colors duration-300">
            <p className="text-6xl text-red-500 font-bold">24/7</p>
            <p className="text-gray-400 mt-2">GRID MODERNIZATION</p>
          </div>
          <div className="border py-8 rounded-xl shadow-lg hover:bg-gray-100 transition-colors duration-300">
            <p className="text-6xl text-red-500 font-bold">100K</p>
            <p className="text-gray-400 mt-2">ELECTRIC VEHICLE PROJECTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;