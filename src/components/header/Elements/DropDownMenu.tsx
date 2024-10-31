import React from 'react';
import { Link } from 'react-router-dom';

const DropDownMenu: React.FC = () => {
  return (
    <div className="flex absolute top-20 z-10">
      <div className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-4">
          <ul>
            <li>
              <Link to={'/products'}>
                <div className="block p-3 w-48 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">Mobile</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Mobile products</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/products'}>
                <div className="block p-3 w-48 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">Gaming</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Gaming products</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/products'}>
                <div className="block p-3 w-48 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">Keyboard</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Keyboard products
                  </span>
                </div>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={'/products'}>
                <div className="block p-3 w-48 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">TV</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">TV products</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/products'}>
                <div className="block p-3 w-48 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">Controllers</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Controllers products
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/products'}>
                <div className="block p-3 w-48 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="font-semibold">Headphones</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Headphones products
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
