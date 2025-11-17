import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

const mockProducts = [
  {
    id: 1,
    name: 'Minimalist Card Holder',
    price: 29,
    image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6
  },
  {
    id: 2,
    name: 'Canvas Shopper Tote',
    price: 45,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Wireless Earbuds',
    price: 59,
    image: 'https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXaXJlbGVzcyUyMEVhcmJ1ZHN8ZW58MHwwfHx8MTc2MzM1ODIzNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.5
  },
  {
    id: 4,
    name: 'Smartwatch Series',
    price: 129,
    image: 'https://images.unsplash.com/photo-1617043593449-c881f876a4b4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbWFydHdhdGNoJTIwU2VyaWVzfGVufDB8MHx8fDE3NjMzNTgyMzZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.7
  }
]

export default function Collections() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // In a real app, fetch from backend. Using mock for landing.
    setProducts(mockProducts)
  }, [])

  return (
    <section id="collections" className="py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Trending picks</h2>
            <p className="mt-2 text-gray-600">Hand‑selected items customers love right now.</p>
          </div>
          <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <div key={p.id} className="group rounded-2xl overflow-hidden bg-white border border-black/10 shadow-sm hover:shadow-md transition">
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 truncate">{p.name}</h3>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-gray-900 font-semibold">${p.price}</span>
                  <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                    <Star size={14} className="text-yellow-500 fill-yellow-400" />
                    {p.rating}
                  </span>
                </div>
                <button className="mt-3 w-full py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black transition">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
