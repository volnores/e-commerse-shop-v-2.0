import React from "react";
import NavBar from "../components/header/NavBar";
import Carousel from "../components/carousel/Carousel/index";
import Advantages from "../components/advantages/Advantages";
import ItemsSlider from "../components/slider/ItemsSlider/index";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Advantages />
      <ItemsSlider />
    </div>
  );
};

export default Home;
