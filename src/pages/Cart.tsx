import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { ProductItem } from '../interfaces/productItem';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import {
  clearCart,
  decrementCount,
  deleteProduct,
  incrementCount,
} from '../store/slices/CartSlice';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer/Footer/index';
import CartEmpty from '../../public/images/cartImages/cartEmpty.jpg';

const Cart: React.FC = () => {
  const product = useAppSelector((state) => state.cart.products);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const totalCost = () => {
    const sum = product.reduce(
      (acc: number, item: ProductItem) => item.price * (item.quantity ?? 1) + acc,
      0,
    );
    return sum;
  };

  console.log(product);

  return (
    <div className="relative bg-white text-black dark:bg-gray-800 dark:text-white">
      {product.length > 0 ? (
        <div>
          <div className="flex flex-col gap-12 items-center justify-center mt-8 relative ">
            {product.map((item: ProductItem) => (
              <div className="md: border rounded-sm w-full flex flex-col sm:flex-row items-center justify-between max-w-[1230px] mx-auto px-8 ">
                <img
                  src={item.image}
                  alt="img"
                  className="max-h-36 m-4 p-2 rounded-sm bg-gray-100 cursor-pointer"
                  onClick={() => navigate(`/products/${item.id}`)}
                />
                <div className="flex flex-col sm:flex-row  justify-between  items-center basis-3/4">
                  <div className="flex flex-col items-start gap-6 m-4  basis-1/3">
                    <div className="text-xl font-semibold items-start">{item.model}</div>
                    <div className="text-lg ">{item.brand}</div>
                  </div>
                  <div className="flex items-center gap-14 border-2 p-4 rounded-sm text-lg">
                    <button onClick={() => dispatch(decrementCount(item))}>
                      <MinusOutlined />
                    </button>
                    <div>{item.quantity}</div>
                    <button onClick={() => dispatch(incrementCount(item))}>
                      <PlusOutlined />
                    </button>
                  </div>
                  <div className="text-lg font-semibold sm: m-4">{`$${item.price}`}</div>
                  <button onClick={() => dispatch(deleteProduct(item))}>
                    <CloseOutlined />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between md: mt-8 max-w-[1230px] mx-auto text-xl">
            <div>Total cost:</div>
            <div className="font-semibold">${totalCost()}</div>
          </div>
          <div className="flex justify-center w-full mt-8 max-w-[1230px] mx-auto sm:text-center m-6">
            <button
              className="bg-red-400 px-2 py-2 rounded-sm hover:bg-red-500 text-white"
              onClick={() => dispatch(clearCart())}>
              Очистить корзину
            </button>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="flex justify-center items-center mt-40">
          <img src={CartEmpty} alt="img" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
