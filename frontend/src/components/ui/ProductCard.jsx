import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="bg-surface-alt rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-cover aspect-[3/4]"
        />
      </div>
      <div className="mt-2 px-1">
        <p className="text-sm font-medium text-text-primary">{product.name}</p>
        <p className="text-xs text-text-secondary">{product.category}</p>
        <p className="text-sm font-medium text-text-primary mt-1">
          R${product.price.toLocaleString('pt-BR')}
        </p>
      </div>
    </Link>
  )
}

export default ProductCard
