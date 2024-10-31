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
      <div className="flex items-center justify-between max-w-[1750px] mx-auto">
        <div className="min-w-[285px]">
          <select className="h-12">
            <option value="">rererere</option>
          </select>
        </div>
        <div className="min-w-[285px]">
          <input
            type="text"
            className="h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
      </div>
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
