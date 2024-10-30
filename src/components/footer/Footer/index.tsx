import {
  GoogleOutlined,
  GithubOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  XOutlined,
} from '@ant-design/icons';
import React from 'react';

const index: React.FC = () => {
  return (
    <div className="flex justify-between bg-blue-400 bg-opacity-40 md: mt-8 max-w-[1900px] mx-auto">
      <div className="md: mt-6 w-full max-w-[1750px] mx-auto ">
        <div className="text-2xl font-bold">Join us on social networks</div>
        <ul className="flex mt-4 gap-3">
          <li className=" bg-white rounded-full flex px-4 py-4 cursor-pointer hover:bg-gray-200">
            {<GoogleOutlined />}
          </li>
          <li className=" bg-white rounded-full flex px-4 py-4 cursor-pointer hover:bg-gray-200">
            {<GithubOutlined />}
          </li>
          <li className=" bg-white rounded-full flex px-4 py-4 cursor-pointer hover:bg-gray-200">
            {<InstagramOutlined />}
          </li>
          <li className=" bg-white rounded-full flex px-4 py-4 cursor-pointer hover:bg-gray-200">
            {<YoutubeOutlined />}
          </li>
          <li className=" bg-white rounded-full flex px-4 py-4 cursor-pointer hover:bg-gray-200">
            {<XOutlined />}
          </li>
        </ul>
        <ul className="grid grid-cols-4  items-center md: mt-6 w-full max-w-[1750px] mx-auto">
          <li className="text-lg font-bold cursor-pointer w-fit">Company</li>
          <li className="text-lg font-bold cursor-pointer w-fit">Online Shop</li>
          <li className="text-lg font-bold cursor-pointer w-fit">Get Help</li>
          <li className="text-lg font-bold cursor-pointer w-fit">Partners</li>
          <ul>
            <li className="pt-2 cursor-pointer w-fit">About us</li>
            <li className="pt-2 cursor-pointer w-fit">Our services</li>
            <li className="pt-2 cursor-pointer w-fit">Privacy policy</li>
            <li className="pt-2 cursor-pointer w-fit">Affiliate program</li>
          </ul>
          <ul>
            <li className="pt-2 cursor-pointer w-fit">Products</li>
            <li className="pt-2 cursor-pointer w-fit">Cart</li>
            <li className="pt-2 cursor-pointer w-fit">Payments options</li>
            <li className="pt-2 cursor-pointer w-fit">Catalog</li>
          </ul>
          <ul>
            <li className="pt-2 cursor-pointer w-fit">FAQ</li>
            <li className="pt-2 cursor-pointer w-fit">Shipping</li>
            <li className="pt-2 cursor-pointer w-fit">Returns</li>
            <li className="pt-2 cursor-pointer w-fit">Order Status</li>
          </ul>
          <ul>
            <li className="pt-2 cursor-pointer w-fit">Overview</li>
            <li className="pt-2 cursor-pointer w-fit">Become a partner</li>
            <li className="pt-2 cursor-pointer w-fit">Revenue</li>
            <li className="pt-2 cursor-pointer w-fit">Find a partner</li>
          </ul>
        </ul>
        <hr className="bg-gray-900 h-px my-2 dark:bg-gray-300" />
        <div className="mb-2">© All rights reserved by Volnores</div>
      </div>
    </div>
  );
};

export default index;
