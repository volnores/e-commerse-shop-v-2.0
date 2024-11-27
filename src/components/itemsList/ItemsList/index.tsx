import React from 'react';
import { useGetProductsQuery } from '../../../API/getProducts';
import ProductItem from '../../productItem/ProductItem/index';
import { useNavigate } from 'react-router-dom';
import Loader from '../../loader/Loader/index';

const Index: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery(null);
  const navigate = useNavigate();

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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center mt-6 w-full max-w-[1300px] mx-auto">
        {newData?.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button
          className="bg-gray-100 px-4 py-3 rounded-sm hover:bg-blue-100"
          onClick={() => navigate('/products')}>
          See All Products
        </button>
      </div>
    </div>
  );
};

export default Index;
