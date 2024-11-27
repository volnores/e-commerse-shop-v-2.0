import React from 'react';

import cart from '../../../../public/images/headerImages/cart.png';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  return (
    <img onClick={() => navigate('/cart')} src={cart} alt="cart" className="h-12 cursor-pointer" />
  );
};

export default Cart;
