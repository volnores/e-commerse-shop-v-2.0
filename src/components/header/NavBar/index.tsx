import React from "react";

import Logo from "../Elements/Logo";
import RightSide from "../Elements/RightSide";
import Navigation from "../Elements/Navigation";

const NavBar: React.FC = () => {
  return (
    <nav className=" bg-base">
      <div className="flex justify-between w-full  p-4 border-b-2 md:  max-w-[1900px] mx-auto">
        <Logo />
        <Navigation />
        <RightSide />
      </div>
    </nav>
  );
};

export default NavBar;
