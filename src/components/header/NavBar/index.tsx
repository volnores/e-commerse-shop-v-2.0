import React from "react";

import Logo from "../Elements/Logo";
import RightSide from "../Elements/RightSide";
import Navigation from "../Elements/Navigation";

const NavBar: React.FC = () => {
  return (
    <nav className=" bg-base">
      <div className="flex justify-between items-center p-4">
        <Logo />
        <Navigation />
        <RightSide />
      </div>
    </nav>
  );
};

export default NavBar;
