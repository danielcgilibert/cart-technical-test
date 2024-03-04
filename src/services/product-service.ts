import { type Product } from '../types/product'
import { mapProductData } from '../utils/dataMapper'

import api from './api'

interface GetProductsOptions {
  limit?: number
  sort?: 'asc' | 'desc'
}

const productService = {
  async getProducts({
    endpoint = 'products',
    options,
  }: {
    endpoint?: string
    options?: GetProductsOptions
  }) {
    if (options) {
      const params = new URLSearchParams(options as Record<string, string>)
      endpoint += `?${params.toString()}`
    }

    const productsData = await api.get<Product[]>(endpoint)
    const mappedProducts = productsData.map((productData: Product) =>
      mapProductData(productData)
    )

    return mappedProducts
  },
  async getProductById(id: number) {
    const productsData = await api.get<Product>(`products/${id}`)
    const mappedProduct = mapProductData(productsData)

    return mappedProduct
    return
  },
}

export default productService
