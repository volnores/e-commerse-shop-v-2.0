import React from 'react';
import Carousel from '../components/carousel/Carousel/index';
import Advantages from '../components/advantages/Advantages';
import GridCategories from '../components/categories/GridCategories/index';
import BrandsSlider from '../components/brandsSlider/BrandsSlider/index';
import Footer from '../components/footer/Footer/index';
import ItemsList from '../components/itemsList/ItemsList/index';

const Home: React.FC = () => {
  return (
    <div>
      <Carousel />
      <Advantages />
      <GridCategories />
      <ItemsList />
      <BrandsSlider />
      <Footer />
    </div>
  );
};

export default Home;
