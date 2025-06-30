import React from "react";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section
      id="beranda"
      className="min-h-screen bg-[#fafeff] pb-12 px-4"
    >
      <div className="mx-auto grid lg:grid-cols-2 gap-12 items-center lg:max-w-[1200px]">
        {/* Left - Text */}
        <div className="space-y-6">
          <span className="relative pl-6 inline-block text-sm font-semibold text-blue-600 before:absolute before:content-[''] before:h-5 before:w-[2px] before:bg-blue-600 before:left-0 before:top-1/2 before:-translate-y-1/2">
            WELCOME TO MEDHEAL
          </span>

          <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-6xl font-medium text-gray-800 leading-tight">
            Advanced <br /> Healthcare <br /> Services for All
          </h1>

          <p className="text-[#9fa1a1] text-base sm:text-lg">
            Kami memberikan layanan medis profesional dengan teknologi modern
            dan dokter terbaik.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="bg-blue-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-normal transition">
              Get Started
            </button>
            <button className="bg-gray-800 text-white px-4 py-3 rounded-md hover:bg-blue-500 hover:scale-[0.9] transition-all duration-200 font-normal">
              Get Started
            </button>
          </div>
          <div className="pt-2 flex gap-4">
            <CountUp start={0} end={17} delay={0} duration={5}>
              {({ countUpRef, start }) => (
                <div>
                  <span ref={countUpRef} className="text-4xl font-medium" />
                  <button onClick={start} className="text-4xl font-medium pl-1">
                    +
                  </button>
                  <p className="text-[16px] font-medium">Years Experience</p>
                </div>
              )}
            </CountUp>
            <CountUp start={0} end={17} delay={0} duration={5}>
              {({ countUpRef, start }) => (
                <div>
                  <span ref={countUpRef} className="text-4xl font-medium" />
                  <button onClick={start} className="text-4xl font-medium pl-1">
                    +
                  </button>
                  <p className="text-[16px] font-medium">Years Experience</p>
                </div>
              )}
            </CountUp>
            <CountUp start={0} end={17} delay={0} duration={5}>
              {({ countUpRef, start }) => (
                <div>
                  <span ref={countUpRef} className="text-4xl font-medium" />
                  <button onClick={start} className="text-4xl font-medium pl-1">
                    +
                  </button>
                  <p className="text-[16px] font-medium">Years Experience</p>
                </div>
              )}
            </CountUp>
          </div>
        </div>

        {/* Right - Images */}
        <div className="flex justify-center lg:justify-end gap-5">
          <img
            src="/doctor-hospital.jpg"
            alt="Dokter Profesional"
            className="w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px] h-[650px] rounded-lg object-cover object-center"
          />
          <img
            src="/doctor-hospital.jpg"
            alt="Dokter Profesional"
            className="hidden md:block w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px] h-[650px] rounded-lg object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
