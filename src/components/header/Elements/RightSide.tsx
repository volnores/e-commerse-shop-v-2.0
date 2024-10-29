import React from "react";
import Theme from "./Theme";
import Cart from "./Cart";

const RightSide: React.FC = ({navigate}) => {
  return (
    <div className="flex justify-between items-center gap-6">
      <Theme />
      <Cart navigate={navigate}/>
    </div>
  );
};

export default RightSide;
