import { useContext } from 'react'
import { Product } from '../types/product'
import { CartContext } from '../context/CartContext'

interface ProductProps {
  product: Product
}

function Product({ product }: ProductProps) {
  const cart = useContext(CartContext)

  const isInCart = cart?.isInCart(product.id)

  return (
    <div className='group relative p-4 flex  flex-col justify-between gap-4 shadow border rounded'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 transition-all lg:h-80'>
        <img
          src={product.image}
          alt={product.description}
          className='h-full w-full group-hover:scale-[101%] transition-transform  object-center object-fill lg:h-full lg:w-full'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>{product.title}</h3>
          <p className='mt-1 text-sm text-gray-500'>{product.category}</p>
        </div>
        <p className='text-sm font-medium text-gray-900'>${product.price}</p>
      </div>

      <button
        className={`transition-all w-full bg-slate-600 text-white py-2  rounded-md cursor-pointer hover:bg-slate-800 hover:scale-[102%]`}
        onClick={() => cart?.addToCart(product)}>
        Add
        {isInCart && (
          <span className='text-xs text-white bg-red-500 rounded-full px-2 py-1 ml-2'>
            In cart
          </span>
        )}
      </button>
    </div>
  )
}

export default Product
