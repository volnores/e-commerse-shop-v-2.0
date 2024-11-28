import React, { useState, useEffect } from 'react';
import moon from '../../../../public/images/headerImages/moon.png';
import sun from '../../../../public/images/headerImages/sun.png';

const Theme: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('isDarkTheme');
    return savedTheme === 'true';
  });

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark');
      localStorage.setItem('isDarkTheme', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('isDarkTheme', 'false');
    }
  }, [isDarkTheme]);

  return (
    <div onClick={toggleTheme} className="cursor-pointer">
      <img src={isDarkTheme ? sun : moon} alt="theme" className="h-12" />
    </div>
  );
};

export default Theme;
