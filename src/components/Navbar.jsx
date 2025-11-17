import { useState } from 'react'
import { ShoppingCart, Menu, Search, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white shadow-md">
              <ShoppingCart size={18} />
            </div>
            <span className="text-xl font-semibold tracking-tight">Marketly</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#collections" className="hover:text-gray-900 transition">Collections</a>
            <a href="#deals" className="hover:text-gray-900 transition">Deals</a>
            <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products"
                className="pl-10 pr-3 py-2 rounded-lg bg-white/80 border border-black/10 text-sm outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 shadow-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <button className="p-2 rounded-lg hover:bg-black/5 transition" aria-label="Account">
              <User size={18} />
            </button>
            <button className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
              View Cart
            </button>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-black/5" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products"
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/80 border border-black/10 text-sm outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 shadow-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#features" className="px-3 py-2 rounded-lg bg-black/5">Features</a>
              <a href="#collections" className="px-3 py-2 rounded-lg bg-black/5">Collections</a>
              <a href="#deals" className="px-3 py-2 rounded-lg bg-black/5">Deals</a>
              <a href="#contact" className="px-3 py-2 rounded-lg bg-black/5">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
