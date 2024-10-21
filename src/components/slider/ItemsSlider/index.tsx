import React from "react";
import Present from "../Elements/Present";
import Slider from "../Elements/Slider";

const index: React.FC = () => {
  return (
    <div className="flex justify-between items-center md:mt-8 w-full xl:max-w-[1750px] h-72 px-8 mx-auto rounded-sm bg-blue-100">
      <Present />
      <Slider />
    </div>
  );
};

export default index;
