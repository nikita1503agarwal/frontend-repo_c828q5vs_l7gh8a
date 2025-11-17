import { ShieldCheck, CreditCard, Truck, Sparkles } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Secure payments',
    desc: 'Bank‑level encryption and protection for every purchase.'
  },
  {
    icon: CreditCard,
    title: 'Multiple methods',
    desc: 'Cards, wallets, and pay‑later options supported globally.'
  },
  {
    icon: Truck,
    title: 'Fast delivery',
    desc: 'Real‑time tracking with trusted shipping partners.'
  },
  {
    icon: Sparkles,
    title: 'Curated picks',
    desc: 'Smart recommendations tailored to your taste.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Built for effortless shopping</h2>
          <p className="mt-3 text-gray-600">Everything you need to browse, buy, and love your orders.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 p-6 bg-white shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center shadow">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
