import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/header/NavBar';

const index: React.FC = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default index;
