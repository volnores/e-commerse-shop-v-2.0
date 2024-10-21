import React from "react";
import NavBar from "../components/header/NavBar";
import Carousel from "../components/carousel/Carousel/index";
import Advantages from "../components/advantages/Advantages";
import ItemsSlider from "../components/slider/ItemsSlider/index";
import GridCategories from "../components/categories/GridCategories/index";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Advantages />
      <ItemsSlider />
      <GridCategories />
    </div>
  );
};

export default Home;
