import React from "react";
import tv from '../../../../public/images/categoriesImages/tv.png'
import controllers from '../../../../public/images/categoriesImages/controllers.png'
import headphones from '../../../../public/images/categoriesImages/headphones.png'
import mobile from '../../../../public/images/categoriesImages/mobile.png'
import pc from '../../../../public/images/categoriesImages/pc.png'
import keyboard from '../../../../public/images/categoriesImages/keyboard.png'

const Categories: React.FC = () => {
  return (
    <ul className="grid grid-cols-3 gap-x-2 gap-y-2 grid-flow-row-dense md:mt-8 w-full xl:max-w-[1750px] mx-auto">
      <li className="bg-blue-200 col-span-1 row-span-1 min-h-[50px] px-24 py-16 rounded-sm cursor-pointer ">
    <div className="flex items-center justify-between gap-12 hover:scale-110 transition-all">
    <img src={mobile} alt="keyboard" className="h-64"/>
    <div className="text-3xl font-semibold">Mobile</div>
    </div>
      </li>
      <li className="bg-yellow-200 col-span-2 row-span-1  min-h-[50px] rounded-sm cursor-pointer flex items-center justify-center">
        <div className="flex gap-24 items-center hover:scale-110 transition-all">
        <div className="text-3xl font-semibold">Gaming</div>
        <img src={pc} alt="pc" className="h-64"/>
        </div>
      </li>
      <li className="bg-green-200 col-span-2 row-span-2 min-h-[50px] px-24 py-8 rounded-sm cursor-pointer  ">
        <div className="flex items-center justify-center gap-24 hover:scale-110 transition-all">
        <img src={keyboard} alt="mobile" className="h-64"/>
        <div className="text-3xl font-semibold">Keyboard</div>
        </div>
      </li>
      <li className="bg-red-200 row-span-3 min-h-[50px] px-16 py-12  rounded-sm cursor-pointer flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-12 mt-12 hover:scale-110 transition-all">
      <div className="text-3xl font-semibold">Headphones</div>
        <img src={headphones} alt="headphones" />
      </div>
      </li>
      <li className="bg-purple-200  min-h-[50px] px-16 py-16 rounded-sm cursor-pointer ">
       <div className="flex flex-col items-center hover:scale-110 transition-all">
       <img src={tv} alt="tv"/>
       <div className="text-3xl font-semibold">TV</div>
       </div>
      </li>
      <li className="bg-sky-200  min-h-[50px] px-16 py-16 rounded-sm cursor-pointer flex flex-col items-center justify-center">
        <div className="flex flex-col items-center hover:scale-110 transition-all">
        <img src={controllers} alt="controllers" />
        <div className="text-3xl font-semibold">Controllers</div>
        </div>
      </li>
     
    </ul>
  );
};

export default Categories;

