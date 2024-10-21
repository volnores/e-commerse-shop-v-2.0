import React from "react";

const Categories: React.FC = () => {
  return (
    <ul className="grid gap-16 grid-rows-4 grid-cols-2 w-full xl:max-w-[1750px] mx-auto mt-6">
      <li className="bg-blue-200 row-span-2">rererere</li>
      <li className="bg-yellow-200 col-span-2">rererere</li>
      <li className="bg-green-200 col-span-2">rererere</li>
      <li className="bg-red-200 col-span-3">rererere</li>
      <li className="bg-purple-200 col-span-2">rererere</li>
      <li className="bg-sky-200 row-span-1">rererere</li>
    </ul>
  );
};

export default Categories;
// hidden lg:grid  gap-4 grid-rows-9 grid-cols-2 md:grid-cols-9 w-full xl:max-w-[2100px] mx-auto
