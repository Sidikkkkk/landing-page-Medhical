import { CalendarDays, PhoneOutgoing } from "lucide-react";
import React from "react";

export function ListTime() {
  const listItems = [
    {
      title: "Hubungi kami",
      date: "12.00 - 15.00",
      colorIcon: "#ff6200",
      iconCta: CalendarDays,
    },
    {
      title: "Hubungi kami",
      date: "12.00 - 15.00",
      colorIcon: "#66e8ff",
      iconCta: CalendarDays,
    },
    {
      title: "Hubungi kami",
      date: "12.00 - 15.00",
      colorIcon: "#ff6ef8",
      iconCta: CalendarDays,
    },
  ];
  return (
    <ul className="mt-6 space-y-6">
      {listItems.map((listItem, index) => {
        const Icon = listItem.iconCta;
        return (
          <li
            key={index}
            className="relative flex justify-start gap-4 text-[#9fa1a1] text-[16px] font-medium"
          >
            <Icon style={{color: listItem.colorIcon}}/>
            {listItem.title}
            <span className="right-0 absolute">{listItem.date}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default function Cta() {
  return (
    <section
      className="relative w-full bg-no-repeat bg-cover py-20 px-4"
      style={{
        backgroundImage: "url('/CTA.jpg')",
        backgroundPosition: "right top",
      }}
    >
      <div className="bg-[#1f1f1f] px-12 py-10 border-[10px] border-solid border-[#e8e8e8] rounded-lg max-w-[100%] lg:max-w-[528px] lg:translate-x-40">
        <span className="relative pl-6 inline-block text-sm font-semibold text-white before:absolute before:content-[''] before:h-5 before:w-[2px] before:bg-blue-600 before:left-0 before:top-1/2 before:-translate-y-1/2">
          CONVENIENT VISITING
        </span>
        <h2 className="text-[38px] md:text-6xl lg:text-6xl font-normal text-white leading-tight mt-6">
          Our Clinic Working Hours Schedule
        </h2>
        <p className="text-[#9fa1a1] text-base sm:text-lg mt-6">
          Quality healthcare services with a patient-centered approach, ensuring
          the well-being.
        </p>
        <ListTime />
        <a
          href="#"
          className="py-4 px-4 bg-blue-400 mt-10 inline-flex gap-2 justify-center items-center w-full text-center rounded-lg text-white font-normal text-lg"
        >
          <PhoneOutgoing /> <span>Call 1271217676</span>
        </a>
      </div>
    </section>
  );
}
