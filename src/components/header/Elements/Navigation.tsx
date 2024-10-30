import { useState } from 'react';
import downArrow from '../../../../public/images/headerImages/arrow-down.png';
import upArrow from '../../../../public/images/headerImages/arrow-up.png';
import DropDownMenu from './DropDownMenu';

const Navigation: React.FC = ({ navigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul className="flex items-center gap-24 ">
      <li className=" text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
        <button className="text-lg" onClick={() => navigate('/')}>
          Home
        </button>
      </li>
      <li
        className="flex justify-between items-center gap-2 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
        onClick={() => setIsOpen((prev) => !prev)}>
        <button className="text-lg">Categories</button>
        <img
          src={isOpen ? upArrow : downArrow}
          alt="arrows"
          className="h-4 text-lg  text-gray-900 rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
        />
        {isOpen && <DropDownMenu />}
      </li>
      <li className=" text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
        <button className="text-lg" onClick={() => navigate('/products')}>
          Catalog
        </button>
      </li>
      <li className=" text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
        <button className="text-lg" onClick={() => navigate('/about')}>
          About Us
        </button>
      </li>
      <li className=" text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
        <button className="text-lg ">Help</button>
      </li>
    </ul>
  );
};

export default Navigation;
