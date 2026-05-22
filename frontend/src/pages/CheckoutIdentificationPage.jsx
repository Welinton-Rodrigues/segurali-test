import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../components/sections/CheckoutSteps'
import OrderSummary from '../components/sections/OrderSummary'
import Button from '../components/ui/Button'

const SAVED_ADDRESS =
  'Satoshi, Rua Pitangueira, 842, Apto 15A, Jardim das Flores, 05845-230, São Paulo, SP, Brasil'

const formFields = [
  [{ name: 'email', placeholder: 'Email', full: true }],
  [
    { name: 'firstName', placeholder: 'Primeiro Nome' },
    { name: 'lastName', placeholder: 'Sobrenome' },
  ],
  [
    { name: 'document', placeholder: 'CPF/CNPJ' },
    { name: 'phone', placeholder: 'Telefone Celular' },
  ],
  [{ name: 'zip', placeholder: 'CEP', full: true }],
  [{ name: 'address', placeholder: 'Endereço', full: true }],
  [
    { name: 'number', placeholder: 'Número' },
    { name: 'complement', placeholder: 'Complemento' },
  ],
  [
    { name: 'district', placeholder: 'Bairro' },
    { name: 'city', placeholder: 'Cidade' },
    { name: 'state', placeholder: 'Estado' },
  ],
]

function CheckoutIdentificationPage() {
  const [option, setOption] = useState('saved')
  const navigate = useNavigate()

  return (
    <section className="px-4 sm:px-11 py-8">
      <CheckoutSteps current={2} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-text-primary mb-5">Identificação</h2>

            <label className="flex items-start justify-between gap-3 border border-border rounded-lg p-4 cursor-pointer">
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  name="address"
                  checked={option === 'saved'}
                  onChange={() => setOption('saved')}
                  className="mt-1 accent-primary"
                />
                <span className="text-sm text-text-primary">{SAVED_ADDRESS}</span>
              </div>
              <button className="text-sm text-text-primary underline shrink-0">Alterar</button>
            </label>

            <label className="flex items-center gap-3 border border-border rounded-lg p-4 cursor-pointer mt-3">
              <input
                type="radio"
                name="address"
                checked={option === 'new'}
                onChange={() => setOption('new')}
                className="accent-primary"
              />
              <span className="text-sm text-text-primary">Adicionar novo</span>
            </label>

            {option === 'new' && (
              <div className="mt-6">
                <h3 className="text-base font-semibold text-text-primary mb-4">Adicionar novo</h3>
                <div className="space-y-3">
                  {formFields.map((row, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-3">
                      {row.map(field => (
                        <input
                          key={field.name}
                          type="text"
                          placeholder={field.placeholder}
                          className="flex-1 border border-border rounded-md px-4 py-3 text-sm placeholder:text-text-secondary focus:outline-none focus:border-primary"
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <label className="flex items-center gap-2 mt-4 text-sm text-text-secondary cursor-pointer">
                  <input type="checkbox" className="accent-primary" />
                  Salvar minhas informações para próxima vez
                </label>
              </div>
            )}

            <div className="mt-6">
              <Button variant="primary" onClick={() => navigate('/checkout/payment')}>
                Continuar com o pagamento
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <OrderSummary editable onEdit={() => navigate('/bag')} />
        </div>
      </div>
    </section>
  )
}

export default CheckoutIdentificationPage
