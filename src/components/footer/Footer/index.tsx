import { GoogleOutlined, GithubOutlined, InstagramOutlined, YoutubeOutlined, XOutlined } from '@ant-design/icons'
import React from 'react'


const index: React.FC = () => {
  return (
 <div className='flex justify-between bg-blue-500 bg-opacity-40 md: mt-8 max-w-[1900px] mx-auto'>
      <div className='md: mt-6 w-full max-w-[1750px] mx-auto '>
    <div className='text-2xl font-bold'>Join us on social networks</div>
    <ul className='flex mt-4 gap-3'>
      <li className=' bg-white rounded-full flex px-4 py-4 cursor-pointer'>{<GoogleOutlined/>}</li>
      <li className=' bg-white rounded-full flex px-4 py-4 cursor-pointer'>{<GithubOutlined/>}</li>
      <li className=' bg-white rounded-full flex px-4 py-4 cursor-pointer'>{<InstagramOutlined/>}</li>
      <li className=' bg-white rounded-full flex px-4 py-4 cursor-pointer'>{<YoutubeOutlined/>}</li>
      <li className=' bg-white rounded-full flex px-4 py-4 cursor-pointer'>{<XOutlined/>}</li>
      </ul>
     <ul className='grid grid-cols-4  items-center md: mt-4 w-full max-w-[1750px] mx-auto'>
    <li className='text-lg font-bold'>Company</li>
    <li className='text-lg font-bold'>Company</li>
    <li className='text-lg font-bold'>Company</li>
    <li className='text-lg font-bold'>Company</li>
    <ul>
    <li>rerere</li>
    <li>rerere</li>
    <li>rerere</li>
    <li>rerere</li>
    </ul>
    <ul>
    <li>rerere</li>
    <li>rerere</li>
    <li>rerere</li>
    <li>rerere</li>
    </ul>
    <ul>
    <li>rerere</li>
    <li>rerere</li>
    <li>rerere</li>
    <li>rerere</li>
    </ul>
    <ul>
    <li>rerere</li>
    <li>rerere</li>
    <li>rerere</li>
    <li>rerere</li>
    </ul>
    </ul>
    {/* <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/> */}
    <hr className='bg-gray-900 h-px my-2 dark:bg-gray-300'/>
    <div className='mb-2'>© All rights reserved by Volnores</div>
   </div>
 </div>
  )
}

export default index