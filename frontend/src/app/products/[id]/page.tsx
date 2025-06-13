import { products } from "@/data/products"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default async function ProductDetailPage(props: {
  params: { id: string }
}) {
  const { id } = await Promise.resolve(props.params)

  const product = products.find((p) => p.id.toString() === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl mb-4 w-full max-w-md"
      />
      <p className="text-gray-600">${product.price}</p>
      <p className="mt-4 text-sm text-gray-500">
        This is a beautiful diamond. Perfect for any occasion.
      </p>
    </div>
  )
}
