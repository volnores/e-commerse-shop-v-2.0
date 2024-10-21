import React from "react";

import delivery from "../../../../public/images/advantagesImages/delivery.jpg";
import loyalty from "../../../../public/images/advantagesImages/loyalty.jpg";
import pay from "../../../../public/images/advantagesImages/pay.jpg";
import support from "../../../../public/images/advantagesImages/support.jpg";

const index: React.FC = () => {
  return (
    <div>
      <ul className="flex justify-between px-16 py-8">
        <li className="flex flex-col justify-center items-center">
          <img src={delivery} alt="delivery" className="h-48" />
          <h1 className="text-md font-bold">Express delivery</h1>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img src={pay} alt="pay" className="h-48" />
          <h1 className="text-md font-bold">Payment on the spot</h1>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img src={support} alt="support" className="h-48" />
          <h1 className="text-md font-bold">24/7 Support</h1>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img src={loyalty} alt="loyalty" className="h-48" />
          <h1 className="text-md font-bold">Loyalty program</h1>
        </li>
      </ul>
    </div>
  );
};

export default index;
