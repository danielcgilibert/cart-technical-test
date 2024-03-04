import { createContext, useState } from 'react'
import { Product } from '../types/product'

interface CartContextType {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  isInCart: (productId: number) => boolean
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[] | []>([])

  const addToCart = (product: Product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((product) => product.id !== id)
    setCart(newCart)
  }

  const isInCart = (productId: number) => {
    return cart.some((product) => product.id === productId)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        isInCart,
      }}>
      {children}
    </CartContext.Provider>
  )
}
