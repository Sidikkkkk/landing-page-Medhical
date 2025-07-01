import React from "react";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section className="bg-[#f5f8fa] py-20 px-4">
      <div className="mx-auto grid lg:grid-cols-2 max-w-[1200px] gap-16 items-center">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="relative">
            <span className="flex gap-2 items-center absolute py-2 bg-white px-4 bottom-7 ml-8 text-[16px] rounded-[4px]">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              Expert Doctors
            </span>
            <img
              src="/doctor-hospital.jpg"
              alt=""
              className="w-full h-[600px] rounded-lg object-cover object-center"
            />
          </div>
          <div className="grid lg:grid-cols-1 gap-4">
            <div className="relative">
              <span className="flex gap-2 items-center absolute py-2 bg-white px-4 mt-56 ml-8 text-[16px] rounded-[4px]">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                Exper Doctors
              </span>
              <img
                src="/doctor-hospital.jpg"
                alt=""
                className="h-[292px] w-full rounded-lg object-cover object-top"
              />
            </div>
            <div className="relative">
              <span className="flex gap-2 items-center absolute py-2 bg-white px-4 mt-56 ml-8 text-[16px] rounded-[4px]">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                Exper Doctors
              </span>
              <img
                src="/doctor-hospital.jpg"
                alt=""
                className="h-[292px] w-full rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start">
          <span className="relative pl-6 inline-block text-sm font-semibold text-blue-600 before:absolute before:content-[''] before:h-5 before:w-[2px] before:bg-blue-600 before:left-0 before:top-1/2 before:-translate-y-1/2 z-10 before:z-0">
            EXCELLENCE IN CARE
          </span>
          <h2 className="text-6xl font-medium">
            About Medheal Hospital and Clinic
          </h2>
          <p className="text-[16px] text-[#9fa1a1] font-base">
            Medheal – Hospital And Medical Clinic is dedicated to providing
            top-quality healthcare services with a patient-centered approach,
            ensuring the well-being and comfort of every patient.
          </p>
          <div className="flex gap-6 flex-1">
            <div className="space-y-6 max-w-[50%]">
              <h6 className="text-3xl">Our Vision</h6>
              <p className="text-[#9fa1a1] max-w-[80%]">
                To be a leading healthcare provider, recognized for our
                compassionate and innovative care, ensuring.
              </p>
            </div>
            <div className="space-y-6 max-w-[50%]">
              <h6 className="text-3xl">Our Mission</h6>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <p className="text-[#9fa1a1]">Deliver exceptional, patient</p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <p className="text-[#9fa1a1]">Deliver exceptional, patient</p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <p className="text-[#9fa1a1]">Deliver exceptional, patient</p>
                </li>
              </ul>
            </div>
          </div>
          <button className="bg-gray-800 text-white px-4 py-3 rounded-md hover:bg-blue-700 font-base">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
