import React from 'react';
import { useGetAllProductsQuery } from '../API/getProducts';
import Footer from '../components/footer/Footer/index';
import ProductItem from '../components/productItem/ProductItem/index';
import Loader from '../components/loader/Loader/index';

const Catalog: React.FC = () => {
  const { data, error, isLoading } = useGetAllProductsQuery(null);

  if (isLoading) return <Loader />;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <div className=" mt-8 flex items-center justify-center text-3xl font-bold">Products</div>
      <div className="grid grid-cols-6 gap-2 place-items-center md: mt-6 w-full max-w-[1750px] mx-auto ">
        {data?.products.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
