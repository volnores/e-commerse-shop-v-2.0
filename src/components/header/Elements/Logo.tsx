import React from 'react';

import logo from '../../../../public/images/headerImages/logo.png';
import { useNavigate } from 'react-router-dom';

const Logo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <img onClick={() => navigate('/')} src={logo} alt="logo" className="h-12 cursor-pointer" />
    </>
  );
};

export default Logo;
