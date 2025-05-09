import React from "react";
import Hero from "../components/Hero";
import ImageSlider from "../components/Slider";
import Counter from "../components/Counter";
import Services from "./Service";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <ImageSlider />
      <Hero />
      {/* <Counter /> */}
      <Services />
      <Footer />
    </>
  );
};

export default Home;
