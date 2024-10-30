import React from 'react';

import logo from '../../../../public/images/headerImages/logo.png';

const Logo: React.FC = ({ navigate }) => {
  return (
    <>
      <img onClick={() => navigate('/')} src={logo} alt="logo" className="h-12 cursor-pointer" />
    </>
  );
};

export default Logo;
