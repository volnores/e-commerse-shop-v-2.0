import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useRef } from 'react';
import { Brands } from '../../../Brands/Brands';
import { BrandsItems } from '../../../interfaces/brandsSlider';

const index: React.FC = () => {
  const refItem = useRef<HTMLInputElement | null>(null);

  const RightScroll = () => {
    refItem.current?.scrollTo({
      left: refItem.current.scrollLeft - 300,
      behavior: 'smooth',
    });
  };

  const LeftScroll = () => {
    refItem.current?.scrollTo({
      left: refItem.current.scrollLeft + 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative flex items-center mt-8 bg-white text-black dark:bg-gray-800 dark:text-white">
      <button
        onClick={RightScroll}
        className="absolute flex rounded-full left-14 max-w-[1300] px-4 py-4 bg-blue-100 hover:bg-indigo-200 bg-opacity-80 ">
        {<LeftOutlined />}
      </button>
      <button
        onClick={LeftScroll}
        className="absolute flex right-14 rounded-full max-w-[1300]  px-4 py-4 bg-blue-100 hover:bg-indigo-200 bg-opacity-80">
        {<RightOutlined />}
      </button>
      <div
        ref={refItem}
        className="flex overflow-x-auto w-full md: max-w-[1300px] mx-auto gap-2 no-scroll">
        {Brands.map((item: BrandsItems, i) => (
          <img key={i} src={item.img} alt="img" className="max-h-40 rounded-sm" />
        ))}
      </div>
    </div>
  );
};

export default index;
