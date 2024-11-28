import React from 'react';

import delivery from '../../../../public/images/advantagesImages/delivery.jpg';
import loyalty from '../../../../public/images/advantagesImages/loyalty.jpg';
import pay from '../../../../public/images/advantagesImages/pay.jpg';
import support from '../../../../public/images/advantagesImages/support.jpg';

const Index: React.FC = () => {
  return (
    <div className="py-4 bg-white text-black dark:bg-gray-800 dark:text-white">
      <ul className="flex flex-col md:flex-row justify-between px-4 md:px-16 w-full xl:max-w-[1750px] mx-auto">
        <li className="flex flex-col justify-center items-center mb-4 md:mb-0">
          <img src={delivery} alt="delivery" className="h-32 md:h-48" />
          <h1 className="text-sm md:text-md font-bold text-center">Express delivery</h1>
        </li>
        <li className="flex flex-col justify-center items-center mb-4 md:mb-0">
          <img src={pay} alt="pay" className="h-32 md:h-48" />
          <h1 className="text-sm md:text-md font-bold text-center">Payment on the spot</h1>
        </li>
        <li className="flex flex-col justify-center items-center mb-4 md:mb-0">
          <img src={support} alt="support" className="h-32 md:h-48" />
          <h1 className="text-sm md:text-md font-bold text-center">24/7 Support</h1>
        </li>
        <li className="flex flex-col justify-center items-center mb-4 md:mb-0">
          <img src={loyalty} alt="loyalty" className="h-32 md:h-48" />
          <h1 className="text-sm md:text-md font-bold text-center">Loyalty program</h1>
        </li>
      </ul>
    </div>
  );
};

export default Index;
