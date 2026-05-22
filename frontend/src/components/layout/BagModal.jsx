import { useNavigate } from 'react-router-dom'
import { X, ShoppingBag, Trash2, Minus, Plus } from 'lucide-react'
import Button from '../ui/Button'
import { useCart } from '../../context/CartContext'

function BagModal() {
  const { cartItems, removeFromCart, updateQuantity, subtotal, isBagOpen, closeBag } = useCart()
  const navigate = useNavigate()

  if (!isBagOpen) return null

  function handleCheckout() {
    closeBag()
    navigate('/bag')
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end" onClick={closeBag}>
      <div className="absolute inset-0 bg-black/30" />

      <div
        className="relative bg-surface w-full max-w-sm m-4 rounded-2xl p-5 flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <h2 className="font-semibold text-text-primary">Sacola</h2>
          </div>
          <button onClick={closeBag} aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-sm text-text-secondary text-center py-8">Sua sacola está vazia.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-alt shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-text-primary">{item.name}</p>
                  <p className="text-xs text-text-secondary">{item.category}</p>
                  <div className="flex items-center gap-2 border border-border rounded-md w-fit mt-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="px-2 py-1 text-text-secondary"
                      aria-label="Remover"
                    >
                      <Trash2 size={14} />
                    </button>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-1 py-1 text-text-secondary"
                      aria-label="Diminuir"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-xs w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 text-text-secondary"
                      aria-label="Aumentar"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                <p className="text-sm font-semibold text-text-primary">
                  R${(item.price * item.quantity).toLocaleString('pt-BR')}
                </p>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="pt-4 mt-4 border-t border-border">
            <div className="flex justify-between text-sm mb-4">
              <span className="text-text-secondary">Subtotal</span>
              <span className="text-text-secondary">R${subtotal.toLocaleString('pt-BR')}</span>
            </div>
            <Button variant="primary" onClick={handleCheckout}>Finalizar a compra</Button>
            <button
              onClick={closeBag}
              className="block mx-auto mt-3 text-sm text-text-primary underline"
            >
              Continuar comprando
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BagModal
