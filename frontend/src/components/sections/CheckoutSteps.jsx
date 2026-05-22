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
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 rounded-full flex items-center justify-center text-xs ${
                  isDone
                    ? 'bg-success text-white'
                    : isCurrent
                    ? 'border-2 border-success text-success'
                    : 'border border-border text-text-secondary'
                }`}
              >
                {isDone ? <Check size={12} /> : step.number}
              </div>
              <span className={`text-xs sm:text-sm whitespace-nowrap ${isCurrent || isDone ? 'text-text-primary' : 'text-text-secondary'}`}>
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div className={`w-3 sm:w-16 h-px mx-1.5 sm:mx-3 ${isDone ? 'bg-success' : 'bg-border'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default CheckoutSteps
