import React, { useState } from 'react';
import Logo from '../Elements/Logo';
import RightSide from '../Elements/RightSide';
import Navigation from '../Elements/Navigation';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-base">
      <div className="flex justify-between w-full px-4 py-2 border-b-2 max-w-[1300px] mx-auto">
        <Logo />

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen((prev) => !prev)}>
          <span className="text-gray-900">Menu</span>
        </button>

        <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Navigation />
        </div>

        <RightSide />
      </div>
    </nav>
  );
};

export default NavBar;
