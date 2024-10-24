
import { ProductItem } from '../../../interfaces/productItem'


const index = ({...item}: ProductItem) => {
    const {brand, price, image, title, category, description, color, id, model, popular, discount} = item

  return (
    <div className='border-2'>
      <h1>{brand}</h1>
      <img src={image} alt="img" className='h-64'/>
      </div>
  )
}

export default index