import React from 'react';

import Logo from '../Elements/Logo';
import RightSide from '../Elements/RightSide';
import Navigation from '../Elements/Navigation';
import { useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className=" bg-base">
      <div className="flex justify-between w-full  px-4 py-2 border-b-2 md:  max-w-[2000px] mx-auto fix">
        <Logo navigate={navigate} />
        <Navigation navigate={navigate} />
        <RightSide navigate={navigate} />
      </div>
    </nav>
  );
};

export default NavBar;
