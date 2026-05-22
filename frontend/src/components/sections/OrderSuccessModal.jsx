import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'

function OrderSuccessModal({ isOpen, onClose }) {
  const navigate = useNavigate()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      <div className="relative bg-surface rounded-2xl p-8 max-w-sm w-full text-center">
        <img src="/images/illustration.png" alt="" className="mx-auto h-40 mb-4 object-contain" />
        <h2 className="text-xl font-semibold text-text-primary mb-2">Pedido Efetuado!</h2>
        <p className="text-sm text-text-secondary mb-6">
          Seu pedido foi efetuado com sucesso. Você pode acompanhar o status na seção de "Meus Pedidos".
        </p>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => navigate('/')}>Página inicial</Button>
          <Button variant="primary" onClick={() => navigate('/orders')}>Ver meu pedido</Button>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccessModal
