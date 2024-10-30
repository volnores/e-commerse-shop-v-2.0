import React from 'react';
import { useGetProductsQuery } from '../../../API/getProducts';
import ProductItem from '../../productItem/ProductItem/index';
import { ItemsList } from '../../../interfaces/itemsList';
import { useNavigate } from 'react-router-dom';
import Loader from '../../loader/Loader/index';

const index: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery<ItemsList>(null);
  const navigate = useNavigate();

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

export default index;
