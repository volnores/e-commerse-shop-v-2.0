import React from 'react';
import { useGetAllProductsQuery } from '../API/getProducts';
import Footer from '../components/footer/Footer/index';
import ProductItem from '../components/productItem/ProductItem/index';
import Loader from '../components/loader/Loader/index';

const Catalog: React.FC = () => {
  const { data, error, isLoading } = useGetAllProductsQuery(null);
  const newData = data?.products;

  if (isLoading) return <Loader />;
  if (error) {
    if ('status' in error && 'data' in error) {
      return <h1>{`Ошибка ${error.status}: ${JSON.stringify(error.data)}`}</h1>;
    }
  }

  return (
    <div>
      <div className="mt-8 flex items-center justify-center text-3xl font-bold">Products</div>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1300px] mx-auto mb-4">
        <div className="min-w-[100%] md:min-w-[285px] mb-4 md:mb-0">
          <select className="h-12 w-full bg-white border border-gray-300 rounded-md p-2">
            <option value="">Select Category</option>
          </select>
        </div>
        <div className="min-w-[100%] md:min-w-[285px]">
          <input
            type="text"
            className="h-12 w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-[1300px] mx-auto">
        {newData?.map((item: any) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
