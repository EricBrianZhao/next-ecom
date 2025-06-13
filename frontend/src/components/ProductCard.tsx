'use client'

import Link from "next/link"
import { Product } from "@/data/products"

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="rounded-2xl shadow p-4 bg-white hover:shadow-lg transition cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl object-cover h-48 w-full mb-4"
        />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </Link>
  )
}
