'use client'

import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 bg-white shadow p-4 flex justify-between items-center z-50">
        <Link href="/" className="text-xl font-bold">💎 Diamond Shop</Link>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </nav>
      </header>
      <main className="p-6">{children}</main>
    </div>
  )
}
