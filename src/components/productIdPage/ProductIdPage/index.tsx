import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductsIdPageQuery } from '../../../API/getProducts'
import { ItemsList } from '../../../interfaces/itemsList'
import { RightOutlined } from '@ant-design/icons'
import Footer from '../../footer/Footer/index'
import Loader from '../../loader/Loader/index'

const index: React.FC = () => {

  const params = useParams()
  const {id} = params
  const navigate = useNavigate()


const {data, error, isLoading} = useGetProductsIdPageQuery<ItemsList>(id)

if(isLoading) return <Loader/>
if(error) return <h1>{error}</h1>


  return (

    <div>
      <ul className='flex justify-start md: mt-8 w-full max-w-[1750px] mx-auto rounded-sm gap-2 text-xl '>
        <li className='flex items-center gap-1 '><div onClick={() => navigate('/')} className='cursor-pointer hover:text-blue-600'>Home</div>{<RightOutlined/>}</li>
        <li className='flex items-center gap-1 '><div onClick={() => navigate('/products')} className='cursor-pointer hover:text-blue-600'>{`products`}</div>{<RightOutlined/>}</li>
        <li className='flex items-center justify-center mt-0.5'>{data?.product.model}</li>
        
      </ul>
    <div className='flex justify-start md: mt-8 w-full max-w-[1750px] mx-auto rounded-sm gap-16'>
      <div className='border-1 p-16 rounded-sm bg-gray-50'>
      <img src={data?.product.image} alt="img" className='h-96  rounded-sm gap-6'/>
      </div>
      <div className='grid grid-rows-8 gap-4'>
      <h1 className='text-3xl font-semibold'>{data?.product.model}</h1>
      <div className='inline-flex gap-2 text-xl'>
        Brand:
       <div>{data?.product.brand}</div>
        </div>
        <div className='inline-flex gap-2 text-xl'>
        Category:
       <div>{data?.product.category}</div>
        </div>
        <div className='inline-flex gap-2 text-xl'>
        Color:
       <div>{data?.product.color}</div>
        </div>
        <div className='inline-flex gap-2 text-xl'>
        Price:
       <div>{`$${data?.product.price}`}</div>
        </div>
        <div className='flex justify-start gap-4'>
          <button className='bg-gray-100 px-8 py-2 rounded-sm hover:bg-blue-100 text-lg'>Buy now</button>
          <button className='bg-gray-100 px-8 py-2 rounded-sm hover:bg-blue-100 text-lg'>Add to cart</button>
        </div>
      </div>
    
    </div>
    <Footer/>
    </div>
  )
}

export default index