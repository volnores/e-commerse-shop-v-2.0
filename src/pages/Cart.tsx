import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { ProductItem } from '../interfaces/productItem';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { deleteProduct } from '../store/slices/CartSlice';
import { useNavigate } from 'react-router-dom';
import CartEmpty from '../../public/images/cartImages/cartEmpty.jpg';

const Cart: React.FC = () => {
  const product = useAppSelector((state) => state.cart.products);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  console.log(product);

  return (
    <div>
      {product.length > 0 ? (
        <div>
          <div
            key={product.id}
            className="flex flex-col gap-12 items-center justify-center mt-8 relative">
            {product.map((item: ProductItem) => (
              <div className="md: border-2 rounded-sm w-full flex items-center justify-between max-w-[1300px] mx-auto px-8">
                <img
                  src={item.image}
                  alt="img"
                  className="max-h-36 m-4 p-2 rounded-sm bg-gray-100 cursor-pointer"
                  onClick={() => navigate(`/products/${item.id}`)}
                />
                <div className="flex justify-between items-center basis-3/4">
                  <div className="flex flex-col items-start gap-6  basis-1/3">
                    <div className="text-xl font-semibold items-start">{item.model}</div>
                    <div className="text-lg ">{item.brand}</div>
                  </div>
                  <div className="flex items-center gap-14 border-2 p-4 rounded-sm text-lg">
                    <button>
                      <MinusOutlined />
                    </button>
                    <div>0</div>
                    <button>
                      <PlusOutlined />
                    </button>
                  </div>
                  <div className="text-lg font-semibold">{`$${item.price}`}</div>
                  <button onClick={() => dispatch(deleteProduct(item))}>
                    <CloseOutlined />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex md: mt-8 max-w-[1300px] mx-auto text-xl">Total cost</div>
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
