import React from "react";
import Hero from "./components/Hero";
import Awards from "./components/Awards";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import OpenAccount from "../../components/OpenAccount";
import Education from "./components/Education";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Stats />
      <Education />
      <OpenAccount />
    </div>
  );
};

export default HomePage;
