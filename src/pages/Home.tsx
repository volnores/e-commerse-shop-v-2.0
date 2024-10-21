import React from "react";
import NavBar from "../components/header/NavBar";
import Carousel from "../components/carousel/Carousel/index";
import Advantages from "../components/advantages/Advantages";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Advantages />
    </div>
  );
};

export default Home;
