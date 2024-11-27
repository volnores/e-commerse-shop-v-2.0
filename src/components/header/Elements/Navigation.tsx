import { useState } from 'react';
import downArrow from '../../../../public/images/headerImages/arrow-down.png';
import upArrow from '../../../../public/images/headerImages/arrow-up.png';
import DropDownMenu from './DropDownMenu';
import { useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-20">
      <li>
        <button className="text-md" onClick={() => navigate('/')}>
          Home
        </button>
      </li>
      <li
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}>
        <button className="text-md">Categories</button>
        <img src={isOpen ? upArrow : downArrow} alt="arrows" className="h-4" />
        {isOpen && <DropDownMenu />}
      </li>
      <li>
        <button className="text-md" onClick={() => navigate('/products')}>
          Catalog
        </button>
      </li>
      <li>
        <button className="text-md" onClick={() => navigate('/about')}>
          About Us
        </button>
      </li>
      <li>
        <button className="text-md">Help</button>
      </li>
    </ul>
  );
};

export default Navigation;
