import React from "react";
import About from "./components/about/about";
import Aboutwe from "./components/aboutwe/aboutwe";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Location from "./components/location/location";
import Workers from "./components/workers/workers";

const Component = () => {
  return (
    <div>
      <Header />
      <About />
      <Aboutwe />
      <Workers />
      <Location />
      <Footer />
    </div>
  );
};

export default Component;
