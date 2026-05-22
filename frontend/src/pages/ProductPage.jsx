import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductGallery from '../components/sections/ProductGallery'
import ProductInfo from '../components/sections/ProductInfo'
import RelatedProducts from '../components/sections/RelatedProducts'
import { getProductById } from '../services/api'

function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    getProductById(id)
      .then(data => setProduct(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="text-sm text-text-secondary text-center py-16">Carregando produto...</p>
  if (error) return <p className="text-sm text-red-500 text-center py-16">Erro ao carregar produto.</p>
  if (!product) return null

  return (
    <>
      <section className="px-11 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ProductGallery images={product.images} name={product.name} />
          <ProductInfo product={product} />
        </div>
      </section>
      <RelatedProducts excludeId={product.id} />
    </>
  )
}

export default ProductPage
