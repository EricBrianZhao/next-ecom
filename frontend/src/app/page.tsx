import Link from "next/link"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"

export default function HomePage() {
  return (
    <main className="p-6 space-y-8">

      {/* 轮播图 Banner */}
      <div className="w-full h-64 bg-cover bg-center rounded-xl shadow"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80')" }}
      >
        <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center rounded-xl">
          <h1 className="text-3xl text-white font-bold">Explore Luxury Diamonds</h1>
        </div>
      </div>

      {/* 推荐产品标题 */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">🛍️ Recommended Products</h2>
        <Link href="/products" className="text-blue-500 hover:underline">View all</Link>
      </div>

      {/* 商品网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
