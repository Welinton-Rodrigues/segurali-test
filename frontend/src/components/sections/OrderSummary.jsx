import { useCart } from '../../context/CartContext'

function OrderSummary({ editable = false, onEdit }) {
  const { cartItems, subtotal } = useCart()

  return (
    <div className="border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-text-primary">Seu pedido</h2>
        {editable && (
          <button onClick={onEdit} className="text-sm text-text-primary underline">
            Editar
          </button>
        )}
      </div>

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
        <div className="flex justify-between pt-3 font-semibold text-text-primary">
          <span>Total</span>
          <span>R${subtotal.toLocaleString('pt-BR')}</span>
        </div>
      </div>

      <div className="border-t border-border mt-5 pt-5 space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-lg overflow-hidden bg-surface-alt shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-text-primary">{item.name}</p>
              <p className="text-xs text-text-secondary">{item.category}</p>
              <p className="text-xs text-text-secondary">{item.color} | {item.size} | {item.quantity}</p>
            </div>
            <p className="text-sm font-semibold text-text-primary">
              R${item.price.toLocaleString('pt-BR')}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderSummary
