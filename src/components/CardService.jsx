import React from "react";

const CardServices = ({ propsServices }) => {
  return (
    <>
      {propsServices.map((service, index) => {
        const Icon = service.icon;
        const IconLink = service.link;
        return (
          <div
            key={index}
            className="bg-[#1f1f1f] px-6 py-8 border-[10px] border-solid border-[#e8e8e8] rounded-lg space-y-6"
          >
            <div className="p-6 max-w-[88px] rounded-lg" style={{backgroundColor: service.bgColor}}>
              <Icon color="black" height="40" width="40" />
            </div>
            <div className="space-y-2">
              <h3 className="text-[#fafeff] font-semibold text-[24px]">
                {service.title}
              </h3>
              <p className="text-[#e9e9e9] font-normal text-[16px]">{service.description}</p>
              <a href="#" className="text-[#fe6c1a] inline-flex pt-4 gap-1">Learn More <span><IconLink /></span></a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardServices;
