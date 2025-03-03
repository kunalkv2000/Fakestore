import PropTypes from 'prop-types'
import { FaHeart, FaRupeeSign, FaShoppingBag } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ addToCart, title, price, image, id, description }) => {
  const router = useNavigate()
  return (
    <div class="bg-white rounded-lg overflow-hidden shadow-lg ring-2 ring-black ring-opacity-40 max-w-sm hover:cursor-pointer drop-shadow-2xl" onClick={() => router(`/product/${id}`)}>
      <div class="relative">
          <img class="w-auto h-[250px] mx-auto" src={image} alt="Product Image"/>
          <div class="absolute top-0 right-0 bg-white text-white px-2 py-1 m-2 rounded-md text-sm font-medium"> 
            <span className="flex items-center gap-3 bg-white"> <FaHeart /> </span>
          </div>
      </div>
      <div class="p-4">
          <h3 class="text-lg font-medium mb-2">{title.slice(0, 20)}</h3>
          <p class="text-gray-600 text-sm mb-4">{description}</p>
          <div class="flex items-center justify-between">
              <span class="flex items-center font-bold text-lg"><FaRupeeSign/> {price}</span>
              <button onClick={e => {e.stopPropagation()
                  addToCart(id, { quantity: 1, title, price, image })}} variant="black" class="bg-blue-500 hover:bg-blue-600 text-white-100 font-bold py-2 px-4 rounded">
                  <span className="flex items-center gap-3"> <FaShoppingBag className='text-white' /> Add to Cart </span>
              </button>
          </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  addToCart: PropTypes.func,
  description: PropTypes.string
}

export default ProductCard
