import { Link } from 'react-router-dom'
import { Trash2, Minus, Plus, Clock } from 'lucide-react'
import Button from '../components/ui/Button'
import RelatedProducts from '../components/sections/RelatedProducts'
import { useCart } from '../context/CartContext'

function BagPage() {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart()

  return (
    <>
      <section className="px-4 sm:px-11 py-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-text-secondary mb-4">Sua sacola está vazia.</p>
            <Link to="/" className="text-primary underline">Continuar comprando</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-lg font-semibold text-text-primary mb-6">Sacola</h1>

              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-border">
                    <div className="flex gap-4 flex-1">
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-alt shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-text-primary">{item.name}</p>
                        <p className="text-xs text-text-secondary">{item.category}</p>
                        <p className="text-xs text-text-secondary mt-1">{item.color} | {item.size}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                      <div className="flex items-center gap-2 border border-border rounded-md">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="px-2 py-2 text-text-secondary"
                          aria-label="Remover item"
                        >
                          <Trash2 size={16} />
                        </button>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-1 py-2 text-text-secondary"
                          aria-label="Diminuir"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-2 text-text-secondary"
                          aria-label="Aumentar"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <p className="text-sm font-semibold text-text-primary sm:w-20 text-right">
                        R${(item.price * item.quantity).toLocaleString('pt-BR')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-warning text-sm mt-6">
                <Clock size={16} />
                <span>Apenas algumas restantes. Compre logo.</span>
              </div>

              <Link to="/" className="inline-block text-sm text-text-primary underline mt-6">
                Continuar comprando
              </Link>
            </div>

            <div className="lg:col-span-1">
              <div className="border border-border rounded-lg p-6">
                <h2 className="text-lg font-semibold text-text-primary mb-6">Resumo</h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Subtotal</span>
                    <span className="text-text-secondary">R${subtotal.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Transporte e Manuseio</span>
                    <span className="text-text-secondary">Grátis</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Taxa Estimada</span>
                    <span className="text-text-secondary">—</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border font-semibold text-text-primary">
                    <span>Total</span>
                    <span>R${subtotal.toLocaleString('pt-BR')}</span>
                  </div>
                </div>

                <Link to="/checkout/identification" className="block mt-6">
                  <Button variant="primary">Continuar</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      {cartItems.length > 0 && <RelatedProducts />}
    </>
  )
}

export default BagPage
