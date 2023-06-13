import React from "react";
import { UilWindSun, UilWaterGlass, UilFire, UilTachometerFast } from '@iconscout/react-unicons'

const AllInOne = () => {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">Diverse Generation Resources</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          With a diverse mix of wind, solar, hydro, and thermal energy sources, PacificCorp is driving sustainable generation. Our innovative demand-side management strategies ensure efficient energy usage while reducing environmental footprint. Join us in our commitment to a greener future.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">

          <div className="flex">
            <div>
              <UilWindSun className="w-8 mr-3 text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Wind and solar</h3>
              <p className="text-lg pt-2 pb-4 text-gray-600">
                PacifiCorp owns 2,254 megawatts of wind capacity and is adding more renewable resources to serve customers.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <UilWaterGlass className="w-8 mr-3 text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Hydro</h3>
              <p className="text-lg pt-2 pb-4 text-gray-600">
                Nearly 40 hydroelectric facilities help supply the electricity needs of customers and meet peak demands.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <UilFire className="w-8 mr-3 text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Thermal energy</h3>
              <p className="text-lg pt-2 pb-4 text-gray-600">
                The company’s thermal electric units generate electricity from coal, geothermal or natural gas resources.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <UilTachometerFast className="w-8 mr-3 text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Demand-side management</h3>
              <p className="text-lg pt-2 pb-4 text-gray-600">
                Growing participation in energy efficiency programs conserves resources to manage demand in peak periods.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default AllInOne;