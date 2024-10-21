import React from "react";
import Theme from "./Theme";
import Cart from "./Cart";

const RightSide: React.FC = () => {
  return (
    <div className="flex justify-between items-center gap-6">
      <Theme />
      <Cart />
    </div>
  );
};

export default RightSide;
