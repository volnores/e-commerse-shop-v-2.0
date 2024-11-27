import {
  GoogleOutlined,
  GithubOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  XOutlined,
} from '@ant-design/icons';
import React from 'react';

const Index: React.FC = () => {
  return (
    <div className="flex mt-8 flex-col md:flex-row justify-between bg-blue-400 bg-opacity-40 p-4 md:p-8 max-w-[1300px] mx-auto">
      <div className="flex flex-col w-full">
        <div className="text-xl md:text-2xl font-bold">Join us on social networks</div>
        <ul className="flex mt-2 gap-2 md:gap-4">
          <li className="bg-white rounded-full flex p-2 cursor-pointer hover:bg-gray-200">
            <GoogleOutlined />
          </li>
          <li className="bg-white rounded-full flex p-2 cursor-pointer hover:bg-gray-200">
            <GithubOutlined />
          </li>
          <li className="bg-white rounded-full flex p-2 cursor-pointer hover:bg-gray-200">
            <InstagramOutlined />
          </li>
          <li className="bg-white rounded-full flex p-2 cursor-pointer hover:bg-gray-200">
            <YoutubeOutlined />
          </li>
          <li className="bg-white rounded-full flex p-2 cursor-pointer hover:bg-gray-200">
            <XOutlined />
          </li>
        </ul>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
          <li className="text-md md:text-lg font-bold cursor-pointer">Company</li>
          <li className="text-md md:text-lg font-bold cursor-pointer">Online Shop</li>
          <li className="text-md md:text-lg font-bold cursor-pointer">Get Help</li>
          <li className="text-md md:text-lg font-bold cursor-pointer">Partners</li>
          <ul>
            <li className="pt-1 cursor-pointer">About us</li>
            <li className="pt-1 cursor-pointer">Our services</li>
            <li className="pt-1 cursor-pointer">Privacy policy</li>
            <li className="pt-1 cursor-pointer">Affiliate program</li>
          </ul>
          <ul>
            <li className="pt-1 cursor-pointer">Products</li>
            <li className="pt-1 cursor-pointer">Cart</li>
            <li className="pt-1 cursor-pointer">Payments options</li>
            <li className="pt-1 cursor-pointer">Catalog</li>
          </ul>
          <ul>
            <li className="pt-1 cursor-pointer">FAQ</li>
            <li className="pt-1 cursor-pointer">Shipping</li>
            <li className="pt-1 cursor-pointer">Returns</li>
            <li className="pt-1 cursor-pointer">Order Status</li>
          </ul>
          <ul>
            <li className="pt-1 cursor-pointer">Overview</li>
            <li className="pt-1 cursor-pointer">Become a partner</li>
            <li className="pt-1 cursor-pointer">Revenue</li>
            <li className="pt-1 cursor-pointer">Find a partner</li>
          </ul>
        </ul>
        <hr className="bg-gray-900 h-px my-2 dark:bg-gray-300" />
        <div className="mb-2 text-sm md:text-base">© All rights reserved by Volnores</div>
      </div>
    </div>
  );
};

export default Index;
