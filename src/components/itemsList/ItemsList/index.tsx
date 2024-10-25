import React from 'react'
import { useGetProductsQuery } from '../../../API/getProducts'
import ProductItem from '../../productItem/ProductItem/index'
import { ItemsList } from '../../../interfaces/itemsList'

const index: React.FC = () => {
    const {data, error, isLoading} = useGetProductsQuery<ItemsList>(null)
   

    if(isLoading) return <div>Loading...</div>
    if(error) return <h1>{error}</h1>
   
  return (
    <div className='grid grid-cols-6 gap-2 place-items-center md: mt-8 w-full max-w-[1750px] mx-auto '>
      {data?.products.map((item) => <ProductItem key={item.id} {...item}/>)}
      </div>
  )
}

export default index