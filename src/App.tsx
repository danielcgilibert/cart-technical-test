import { useEffect, useState } from 'react'
import { type Product as IProduct } from './types/product'
import ListProducts from './components/list-product'
import productService from './services/product-service'
import Cart from './components/cart'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setLoading(true)
    productService
      .getProducts({
        options: {
          limit: 5,
          sort: 'desc',
        },
      })
      .then((data) => {
        setProducts(data)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className='bg-white max-w-6xl mx-auto h-full rounded-md p-6'>
      <h1 className='text-4xl'>Ecommerce</h1>
      <button
        onClick={() => setShowModal(!showModal)}
        className='mt-8 bg-slate-900 text-white rounded-full px-6 py-2'>
        Show cart
      </button>

      {showModal && <Cart />}

      {loading ? <Loading /> : <ListProducts products={products} />}
    </main>
  )
}

export default App

function Loading() {
  return <h1 className='text-2xl'>loading</h1>
}
