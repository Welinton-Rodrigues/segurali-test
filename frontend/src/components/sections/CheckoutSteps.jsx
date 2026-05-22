import { Check } from 'lucide-react'

const steps = [
  { number: 1, label: 'Sacola' },
  { number: 2, label: 'Identificação' },
  { number: 3, label: 'Pagamento' },
]

function CheckoutSteps({ current }) {
  return (
    <div className="flex items-center justify-center mb-10">
      {steps.map((step, index) => {
        const isDone = step.number < current
        const isCurrent = step.number === current

        return (
          <div key={step.number} className="flex items-center">
            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  isDone
                    ? 'bg-success text-white'
                    : isCurrent
                    ? 'border-2 border-success text-success'
                    : 'border border-border text-text-secondary'
                }`}
              >
                {isDone ? <Check size={14} /> : step.number}
              </div>
              <span className={`text-sm ${isCurrent || isDone ? 'text-text-primary' : 'text-text-secondary'}`}>
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div className={`w-16 h-px mx-3 ${isDone ? 'bg-success' : 'bg-border'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default CheckoutSteps
