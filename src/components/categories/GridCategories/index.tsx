import React from 'react';
import Categories from '../Elements/Categories';

const index: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center md: mt-8 w-full max-w-[1300px] mx-auto rounded-sm bg-white text-black dark:bg-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold">Product categories</h1>
      <Categories />
    </div>
  );
};

export default index;
