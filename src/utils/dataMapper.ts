// utils/dataMapper.js

import { type Product } from '../types/product'

const mapProductData = (product: Product): Product => {
  const newProduct: Product = {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    image: product.image,
    category: product.category,
    rating: product.rating,
  }
  return newProduct
}

export { mapProductData }
