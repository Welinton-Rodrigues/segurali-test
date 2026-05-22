import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../components/sections/CheckoutSteps'
import OrderSummary from '../components/sections/OrderSummary'
import OrderSuccessModal from '../components/sections/OrderSuccessModal'
import Button from '../components/ui/Button'

const SAVED_ADDRESS =
  'Satoshi, Rua Pitangueira, 842, Apto 15A, Jardim das Flores, 05845-230, São Paulo, SP, Brasil'

function CheckoutPaymentPage() {
  const [showSuccess, setShowSuccess] = useState(false)
  const navigate = useNavigate()

  return (
    <section className="px-11 py-8">
      <CheckoutSteps current={3} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-text-primary mb-5">Pagamento</h2>

            <div className="flex items-start justify-between gap-3 border border-border rounded-lg p-4">
              <div className="flex gap-3">
                <span className="text-sm font-medium text-text-primary shrink-0">Identificação</span>
                <span className="text-sm text-text-secondary">{SAVED_ADDRESS}</span>
              </div>
              <button
                onClick={() => navigate('/checkout/identification')}
                className="text-sm text-text-primary underline shrink-0"
              >
                Alterar
              </button>
            </div>

            <div className="mt-6">
              <Button variant="primary" onClick={() => setShowSuccess(true)}>
                Finalizar a compra
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <OrderSummary editable onEdit={() => navigate('/bag')} />
        </div>
      </div>

      <OrderSuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </section>
  )
}

export default CheckoutPaymentPage
