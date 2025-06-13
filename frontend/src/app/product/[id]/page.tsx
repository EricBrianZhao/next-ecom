'use client'

import { useParams } from 'next/navigation'
import { products } from '@/data/products'

export default function ProductDetailPage() {
  const params = useParams()
  const productId = Number(params.id)
  const product = products.find(p => p.id === productId)

  if (!product) return <p className="text-center mt-10">Product not found</p>

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-gray-700 mb-4">${product.price}</p>
      <p className="text-gray-600">
        This stunning diamond is perfect for those unforgettable moments. Crafted with precision and elegance.
      </p>
    </div>
  )
}
