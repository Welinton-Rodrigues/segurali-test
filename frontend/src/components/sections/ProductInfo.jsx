import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import Button from '../ui/Button'

function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(1)

  return (
    <div>
      <h1 className="text-2xl font-semibold text-text-primary">{product.name}</h1>
      <p className="text-sm text-text-secondary mt-1">{product.category}</p>
      <p className="text-xl font-semibold text-text-primary mt-3">
        R${product.price.toLocaleString('pt-BR')}
      </p>

      <div className="flex gap-2 mt-4">
        {product.colors.map((color, index) => (
          <button
            key={index}
            className="w-12 h-12 rounded-md border border-border"
            style={{ backgroundColor: color }}
            aria-label={`Cor ${index + 1}`}
          />
        ))}
      </div>

      <p className="text-sm font-medium text-text-primary mt-5 mb-2">Selecionar tamanho</p>
      <div className="grid grid-cols-3 gap-2">
        {product.sizes.map(size => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`py-2 rounded-md border text-sm transition-colors ${
              selectedSize === size
                ? 'border-primary text-primary'
                : 'border-border text-text-primary hover:border-text-primary'
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      <p className="text-sm font-medium text-text-primary mt-5 mb-2">Quantidade</p>
      <div className="inline-flex items-center border border-border rounded-md">
        <button
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
          className="px-3 py-2 text-text-secondary"
          aria-label="Diminuir quantidade"
        >
          <Minus size={16} />
        </button>
        <span className="px-4 text-sm">{quantity}</span>
        <button
          onClick={() => setQuantity(q => q + 1)}
          className="px-3 py-2 text-text-secondary"
          aria-label="Aumentar quantidade"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="flex gap-3 mt-6">
        <Button variant="outline">Adicionar à sacola</Button>
        <Button variant="primary">Comprar agora</Button>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed mt-5">
        {product.description}
      </p>
    </div>
  )
}

export default ProductInfo
