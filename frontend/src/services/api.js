const BASE_URL = 'http://localhost:3001/api'

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`)
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`)
  if (!res.ok) throw new Error('Product not found')
  return res.json()
}

export async function getOrders() {
  const res = await fetch(`${BASE_URL}/orders`)
  if (!res.ok) throw new Error('Failed to fetch orders')
  return res.json()
}
