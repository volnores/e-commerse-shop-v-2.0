import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { ProductItem } from '../interfaces/productItem';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { deleteProduct } from '../store/slices/CartSlice';

const Cart: React.FC = () => {
  const product = useAppSelector((state) => state.cart.products);

  const dispatch = useAppDispatch();

  console.log(product);

  return (
    <div className="flex flex-col gap-12 items-center justify-center mt-8 ">
      {product.map((item: ProductItem) => (
        <div className="md: border-2 rounded-sm w-full flex items-center justify-between max-w-[1300px] px-8">
          <img
            src={item.image}
            alt="img"
            className="h-48 flex justify-start m-4 p-4 rounded-sm bg-gray-100"
          />
          <div className="flex justify-between items-center basis-3/4">
            <div className="flex flex-col items-start gap-6  basis-1/3">
              <div className="text-xl font-semibold items-start">{item.model}</div>
              <div className="text-lg ">{item.brand}</div>
            </div>
            <div className="flex items-center gap-14 border-2 p-4 rounded-sm text-lg">
              <button onClick={() => dispatch(deleteProduct(item.id))}>
                <MinusOutlined />
              </button>
              <div>0</div>
              <button>
                <PlusOutlined />
              </button>
            </div>
            <div className="text-lg font-semibold">{`$${item.price}`}</div>
            <button>
              <CloseOutlined />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
