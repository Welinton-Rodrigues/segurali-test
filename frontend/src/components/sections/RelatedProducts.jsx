import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '../ui/ProductCard'
import { getProducts } from '../../services/api'

function RelatedProducts({ title = 'Você também pode gostar', excludeId }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProducts()
      .then(data => {
        const filtered = data.filter(p => p.id !== Number(excludeId))
        setProducts(filtered.slice(0, 4))
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [excludeId])

  return (
    <section className="px-11 pb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-text-primary">{title}</h2>
        <div className="flex items-center gap-2 text-sm text-text-primary">
          <button aria-label="Anterior"><ChevronLeft size={16} /></button>
          <button className="flex items-center gap-1">
            Ver todos <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {loading && (
        <p className="text-sm text-text-secondary text-center py-8">Carregando produtos...</p>
      )}

      {error && (
        <p className="text-sm text-red-500 text-center py-8">Erro ao carregar produtos.</p>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}

export default RelatedProducts
