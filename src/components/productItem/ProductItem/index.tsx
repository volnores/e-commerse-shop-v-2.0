
import { ProductItem } from '../../../interfaces/productItem'
import { SearchOutlined } from '@ant-design/icons'


const index = ({...item}: ProductItem) => {
    const { price, image, model, discount} = item

  return (
    <div className='border-2 px-4 py-2 rounded-sm bg-gray-50 relative'>
      <img src={image} alt="img" className='h-64 w-64 rounded-sm gap-6 mt-4 cursor-pointer'/>
      <div className='absolute right-6 top-8 p-2 rounded-full bg-slate-100 hover:bg-slate-200 flex cursor-pointer'>{<SearchOutlined/>}</div>
   <div className='flex  py-4 text-xl'>{model.slice(0, 25)}</div>
    <div className='flex items-center justify-between'>
    <div className='flex justify-center py-2 text-lg font-semibold'>{`$${price}`}</div>
    <button className='bg-gray-100 px-2 py-2 rounded-sm hover:bg-gray-200'>Add to Cart</button>
    </div>
      </div>
  )
}

export default index