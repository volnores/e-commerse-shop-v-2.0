import React from "react";

import moon from "../../../../public/images/headerImages/moon.png";
// import sun from "../../../../public/images/headerImages/sun.png";

const Theme: React.FC = () => {
  return <img src={moon} alt="theme" className="h-12 cursor-pointer" />;
};

export default Theme;
