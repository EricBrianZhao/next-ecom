'use client'

import Link from "next/link"
import { Product } from "@/data/products"

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`} passHref>
      <div className="rounded-2xl shadow p-4 bg-white hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
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
