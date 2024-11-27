import React from 'react';
import tv from '../../../../public/images/categoriesImages/tv.png';
import controllers from '../../../../public/images/categoriesImages/controllers.png';
import headphones from '../../../../public/images/categoriesImages/headphones.png';
import mobile from '../../../../public/images/categoriesImages/mobile.png';
import pc from '../../../../public/images/categoriesImages/pc.png';
import keyboard from '../../../../public/images/categoriesImages/keyboard.png';
import { useNavigate } from 'react-router-dom';

const Categories: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-4 w-full xl:max-w-[1300px] mx-auto mt-4">
      <li className="bg-blue-200 col-span-2 md:col-span-1 min-h-[100px] px-4 py-6 rounded-sm cursor-pointer">
        <div
          className="flex items-center justify-center gap-4 hover:scale-105 transition-transform"
          onClick={() => navigate('/products')}>
          <img src={mobile} alt="Mobile" className="h-32 md:h-44" />
          <div className="text-xl md:text-2xl font-semibold">Mobile</div>
        </div>
      </li>

      <li className="bg-yellow-200 col-span-2 md:col-span-2 min-h-[100px] rounded-sm cursor-pointer flex items-center justify-center">
        <div
          className="flex gap-6 items-center hover:scale-105 transition-transform"
          onClick={() => navigate('/products')}>
          <div className="text-xl md:text-2xl font-semibold">Gaming</div>
          <img src={pc} alt="PC" className="h-32 md:h-44" />
        </div>
      </li>

      <li className="bg-green-200 col-span-2 md:col-span-2 min-h-[100px] px-4 py-4 rounded-sm cursor-pointer">
        <div
          className="flex items-center justify-center gap-4 hover:scale-105 transition-transform"
          onClick={() => navigate('/products')}>
          <img src={keyboard} alt="Keyboard" className="h-32 md:h-44" />
          <div className="text-xl md:text-2xl font-semibold">Keyboard</div>
        </div>
      </li>

      <li className="bg-red-200 row-span-2 min-h-[100px] px-4 py-4 rounded-sm cursor-pointer flex flex-col items-center justify-center">
        <div
          className="flex flex-col items-center gap-4 mt-4 hover:scale-105 transition-transform"
          onClick={() => navigate('/products')}>
          <div className="text-xl md:text-2xl font-semibold">Headphones</div>
          <img src={headphones} alt="Headphones" className="h-32 md:h-44" />
        </div>
      </li>

      <li className="bg-purple-200 min-h-[100px] px-4 py-6 rounded-sm cursor-pointer flex flex-col items-center">
        <div
          className="flex flex-col items-center hover:scale-105 transition-transform"
          onClick={() => navigate('/products')}>
          <img src={tv} alt="TV" className="h-32 md:h-44" />
          <div className="text-xl md:text-2xl font-semibold">TV</div>
        </div>
      </li>

      <li className="bg-sky-200 min-h-[100px] px-4 py-6 rounded-sm cursor-pointer flex flex-col items-center justify-center">
        <div
          className="flex flex-col items-center hover:scale-105 transition-transform"
          onClick={() => navigate('/products')}>
          <img src={controllers} alt="Controllers" className="h-32 md:h-44" />
          <div className="text-xl md:text-2xl font-semibold">Controllers</div>
        </div>
      </li>
    </ul>
  );
};

export default Categories;
