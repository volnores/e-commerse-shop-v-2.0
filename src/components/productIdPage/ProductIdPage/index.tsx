import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductsIdPageQuery } from '../../../API/getProducts';
import { RightOutlined } from '@ant-design/icons';
import Footer from '../../footer/Footer/index';
import Loader from '../../loader/Loader/index';
import { useAppDispatch } from '../../../store/hooks';
import { addProduct } from '../../../store/slices/CartSlice';
import { ProductItem } from '../../../interfaces/productItem';

const index: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct(data?.product));
    navigate('/cart');
  };

  interface Api {
    data?: ProductItem | undefined;
    error: string[];
    isLoading: boolean;
  }

  const { data, error, isLoading } = useGetProductsIdPageQuery<Api>(id);
  const product = data?.product;

  if (isLoading) return <Loader />;
  if (error) {
    if ('status' in error && 'data' in error) {
      return <h1>{`Ошибка ${error.status}: ${JSON.stringify(error.data)}`}</h1>;
    }
  }

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
      <ul className="flex justify-start md: mt-8 w-full max-w-[1750px] mx-auto rounded-sm gap-2 text-xl ">
        <li className="flex ml-4 items-center gap-1 ">
          <div onClick={() => navigate('/')} className="cursor-pointer hover:text-blue-600">
            Home
          </div>
          {<RightOutlined />}
        </li>
        <li className="flex items-center gap-1 ">
          <div
            onClick={() => navigate('/products')}
            className="cursor-pointer hover:text-blue-600">{`products`}</div>
          {<RightOutlined />}
        </li>
        <li className="flex items-center justify-center mt-0.5">{product.model}</li>
      </ul>
      <div className="flex justify-start md: mt-8 w-full max-w-[1750px] mx-auto rounded-sm gap-16">
        <div className="border-1 p-16 rounded-sm bg-gray-50">
          <img src={product.image} alt="img" className="w-96  rounded-sm gap-6" />
        </div>
        <div className="grid grid-rows-8 gap-4">
          <h1 className="text-3xl font-semibold">{product.model}</h1>
          <div className="inline-flex gap-2 text-xl">
            Brand:
            <div>{product.brand}</div>
          </div>
          <div className="inline-flex gap-2 text-xl">
            Category:
            <div>{product.category}</div>
          </div>
          <div className="inline-flex gap-2 text-xl">
            Color:
            <div> {product.color}</div>
          </div>
          <div className="inline-flex gap-2 text-xl">
            Price:
            <div>{`$${product.price}`}</div>
          </div>
          <div className="flex justify-start gap-4">
            <button
              className="bg-gray-100 px-8 py-2 rounded-sm hover:bg-blue-100 text-lg"
              onClick={handleAddToCart}>
              Buy now
            </button>
            <button
              className="bg-gray-100 px-8 py-2 rounded-sm hover:bg-blue-100 text-lg"
              onClick={() => dispatch(addProduct(product))}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
