import React from "react";
import CardServices from "../components/cardService";
import { dataServices } from "../data/dataServices";

const Services = () => {
  return (
    <section className="bg-[#fafeff] pb-20 pt-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-6 items-start">
          <span className="relative pl-6 inline-block text-sm font-semibold text-blue-600 before:absolute before:content-[''] before:h-5 before:w-[2px] before:bg-blue-600 before:left-0 before:top-1/2 before:-translate-y-1/2">
            WELCOME TO MEDHEAL
          </span>
          <h2 className="text-[38px] md:text-6xl lg:text-6xl lg:w-[850px] font-medium text-gray-800 leading-tight">
            Our Comprehensive Healthcare Services for Your Well-Being
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16">
          <CardServices propsServices={dataServices}/>
        </div>
      </div>
    </section>
  );
};

export default Services;
