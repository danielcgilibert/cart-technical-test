import { type Product as IProduct } from '../types/product'
import Product from './product'

interface ListProductsProps {
  products: IProduct[]
}

function ListProducts({ products }: ListProductsProps) {
  return (
    <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-18'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ListProducts
