import React from 'react';
import { useGetAllProductsQuery } from '../API/getProducts';
import Footer from '../components/footer/Footer/index';
import ProductItem from '../components/productItem/ProductItem/index';
import Loader from '../components/loader/Loader/index';
import { useDispatch } from 'react-redux';
import { setSearchQuery, setSelectedCategory } from '../store/slices/FilterSlice';
import { useAppSelector } from '../store/hooks';

const Catalog: React.FC = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const { searchQuery, selectedCategory } = useAppSelector((state) => state.filter);
  const dispatch = useDispatch();
  const newData = data?.products;

  console.log(newData);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedCategory(e.target.value === 'Все' ? '' : e.target.value));
  };

  const filteredNewProducts = newData?.filter((item: any) => {
    const filteredSearch = item?.model?.toLowerCase().includes(searchQuery.toLowerCase());
    const filteredCategory = selectedCategory ? item?.category === selectedCategory : true;
    return filteredSearch && filteredCategory;
  });

  if (isLoading) return <Loader />;
  if (error) {
    if ('status' in error && 'data' in error) {
      return <h1>{`Ошибка ${error.status}: ${JSON.stringify(error.data)}`}</h1>;
    }
  }

  return (
    <div className="relative bg-white text-black dark:bg-gray-800 dark:text-white">
      <div className="mt-8 flex items-center justify-center text-3xl font-bold">Products</div>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1300px] mx-auto mb-4">
        <div className="min-w-[100%] md:min-w-[305px] mb-4 md:mb-0">
          <select
            className="h-12 w-full bg-white border border-gray-300 rounded-md p-2 relative bg-white text-black dark:bg-gray-800 dark:text-white"
            onChange={handleCategoryChange}>
            <option value="Все">All</option>
            <option value="mobile">mobile</option>
            <option value="audio">audio</option>
            <option value="tv">tv</option>
          </select>
        </div>
        <div className="min-w-[100%] md:min-w-[305px]">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="h-12 w-full  border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 relative bg-white text-black dark:bg-gray-800 dark:text-white"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-[1300px] items-center mx-auto">
        {filteredNewProducts.length ? (
          filteredNewProducts?.map((item: any) => <ProductItem key={item.id} {...item} />)
        ) : (
          <div className="flex mx-auto">
            <p className="flex text-center items-center text-xl mx-auto">Ничего не найдено</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
