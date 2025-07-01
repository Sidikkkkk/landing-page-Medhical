// App.jsx
import React from "react";
import "../index.css";
import Hero from "./Hero";
import About from "./About.jsx";
import Services from "./Services";
import Doctors from "./Doctors";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Cta from "./Cta.jsx";

export default function Home() {
  return (
    <main className="pt-[20px]">
      <Hero />
      <About />
      <Services />
      <Cta />
      <Doctors />
      <Testimonials />
      <Contact />
    </main>
  );
}
