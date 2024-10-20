import React from "react";

import logo from "../../../../public/images/headerImages/logo.png";

const Logo: React.FC = () => {
  return <img src={logo} alt="logo" className="h-16 cursor-pointer" />;
};

export default Logo;
