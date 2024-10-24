import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useRef } from 'react';
import { Brands } from '../../fakeApi/Brands/Brands';
import { BrandsItems } from '../../../interfaces/brandsSlider';



const index: React.FC = () => {
  const refItem = useRef<HTMLInputElement | null>(null);

  const RightScroll = () => {
    refItem.current?.scrollTo({
      left: refItem.current.scrollLeft - 300,
      behavior: 'smooth'
    })
  };

  const LeftScroll = () => {
    refItem.current?.scrollTo({
      left: refItem.current.scrollLeft + 300,
behavior: 'smooth'
    })
  };
 
  return (
    <div className='relative flex items-center mt-8'>
    <button onClick={RightScroll} className="absolute flex rounded-full left-14 px-4 py-4 bg-blue-100 hover:bg-indigo-200 bg-opacity-80 ">
        {<LeftOutlined />}
      </button>
      <button onClick={LeftScroll} className="absolute flex right-14 rounded-full  px-4 py-4 bg-blue-100 hover:bg-indigo-200 bg-opacity-80">
        {<RightOutlined />}
      </button>
    <div
      ref={refItem}
      className="flex overflow-x-auto w-full md: max-w-[1750px] mx-auto gap-2 no-scroll">
      
      {Brands.map((item: BrandsItems) => (
        <img src={item.img} alt="img" className="max-h-48 rounded-sm" />
      ))}
   </div>
    </div>
  );
};

export default index;
