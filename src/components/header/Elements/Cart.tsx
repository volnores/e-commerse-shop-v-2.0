import React from "react";

import cart from "../../../../public/images/headerImages/cart.png";

const Cart: React.FC = () => {
  return <img src={cart} alt="cart" className="h-12 cursor-pointer" />;
};

export default Cart;
