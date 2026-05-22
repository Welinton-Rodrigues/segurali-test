import { useState, useEffect } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { getOrders } from '../services/api'

function OrderRow({ order }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-border rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="grid grid-cols-4 gap-6 flex-1">
          <div>
            <p className="text-xs text-text-secondary">Número do Pedido</p>
            <p className="text-sm font-semibold text-text-primary">#{order.id}</p>
          </div>
          <div>
            <p className="text-xs text-text-secondary">Status</p>
            <p className="text-sm font-semibold text-success">{order.status}</p>
          </div>
          <div>
            <p className="text-xs text-text-secondary">Data</p>
            <p className="text-sm font-semibold text-text-primary">{order.date}</p>
          </div>
          <div>
            <p className="text-xs text-text-secondary">Pagamento</p>
            <p className="text-sm font-semibold text-text-primary">{order.payment}</p>
          </div>
        </div>

        <button
          onClick={() => setExpanded(e => !e)}
          className="flex items-center gap-1 text-sm text-primary shrink-0"
        >
          Detalhes do Pedido
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {expanded && (
        <div className="mt-6 pt-6 border-t border-border">
          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-alt shrink-0">
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

          <div className="mt-6 pt-6 border-t border-border space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-text-secondary">Subtotal</span>
              <span className="text-text-secondary">R${order.subtotal.toLocaleString('pt-BR')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Transporte e Manuseio</span>
              <span className="text-text-secondary">{order.shipping}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Taxa Estimada</span>
              <span className="text-text-secondary">—</span>
            </div>
            <div className="flex justify-between font-semibold text-text-primary">
              <span>Total</span>
              <span>R${order.total.toLocaleString('pt-BR')}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function OrdersPage() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getOrders()
      .then(data => setOrders(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="px-11 py-8">
      <h1 className="text-lg font-semibold text-text-primary mb-6">Meus pedidos</h1>

      {loading && <p className="text-sm text-text-secondary text-center py-8">Carregando pedidos...</p>}
      {error && <p className="text-sm text-red-500 text-center py-8">Erro ao carregar pedidos.</p>}

      {!loading && !error && (
        <div className="space-y-4">
          {orders.map(order => (
            <OrderRow key={order.id} order={order} />
          ))}
        </div>
      )}
    </section>
  )
}

export default OrdersPage
