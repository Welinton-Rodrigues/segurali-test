import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isBagOpen, setIsBagOpen] = useState(false)

  const openBag = () => setIsBagOpen(true)
  const closeBag = () => setIsBagOpen(false)

  function addToCart(product, size = 'M') {
    setCartItems(prev => {
      const existing = prev.find(
        item => item.productId === product.id && item.size === size
      )
      if (existing) {
        return prev.map(item =>
          item.productId === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [
        ...prev,
        {
          id: `${product.id}-${size}`,
          productId: product.id,
          name: product.name,
          category: product.category,
          color: 'Grafite',
          size,
          quantity: 1,
          price: product.price,
          image: product.image,
        },
      ]
    })
  }

  function removeFromCart(id) {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  function updateQuantity(id, quantity) {
    if (quantity < 1) return
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    )
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        subtotal,
        isBagOpen,
        openBag,
        closeBag,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
