import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {
  const cart = useContext(CartContext)
  return (
    <div className='absolute z-10 bg-white shadow-2xl top-40 left-1/2 -translate-x-1/2  p-8 rounded-lg border'>
      <div className='flex flex-col gap-8'>
        {cart?.cart.length === 0 && (
          <h1 className='text-2xl text-center'>empty cart</h1>
        )}
        {cart?.cart.map((product) => (
          <div key={product.id} className='flex gap-4 items-center'>
            <img
              src={product.image}
              alt={product.description}
              className='h-20 w-20 object-cover rounded-md'
            />
            <div>
              <h3 className='text-sm text-gray-700'>{product.title}</h3>
              <p className='text-sm text-gray-500'>{product.category}</p>
              <p className='text-sm font-medium text-gray-900'>
                ${product.price}
              </p>
            </div>
            <button
              className='text-xs text-white bg-red-500 rounded-full px-2 py-1 ml-2'
              onClick={() => cart?.removeFromCart(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
