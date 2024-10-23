import React from "react";

const Categories: React.FC = () => {
  return (
    <ul className="grid grid-cols-3 gap-x-2 gap-y-2 grid-flow-row-dense md:mt-8 w-full xl:max-w-[1750px] mx-auto">
      <li className="bg-blue-200 col-span-1 row-span-1 min-h-[50px] px-16 py-16 rounded-sm">rererere</li>
      <li className="bg-yellow-200 col-span-2 row-span-1  min-h-[50px] px-16 py-16 rounded-sm">rererere</li>
      <li className="bg-green-200 col-span-2 row-span-2 min-h-[50px] px-16 py-16 rounded-sm">rererere</li>
      <li className="bg-red-200 row-span-3 min-h-[50px] px-16 py-16 rounded-sm">rererere</li>
      <li className="bg-purple-200  min-h-[50px] px-16 py-16 rounded-sm">rererere</li>
      <li className="bg-sky-200  min-h-[50px] px-16 py-16 rounded-sm">rererere</li>
     
    </ul>
  );
};

export default Categories;

