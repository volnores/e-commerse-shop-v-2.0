import React from "react";
import NavBar from "../components/header/NavBar";
import Carousel from "../components/carousel/Carousel/index";

const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
    </div>
  );
};

export default Home;
