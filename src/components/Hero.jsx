import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 text-xs font-medium text-gray-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Your modern shopping marketplace
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            Shop smarter with Marketly
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Discover curated collections, secure checkout, and delightful deals. Simple, fast, and designed for modern e‑commerce.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#collections" className="px-5 py-3 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black transition shadow-sm">
              Start shopping
            </a>
            <a href="#features" className="px-5 py-3 rounded-lg bg-white/80 backdrop-blur border border-black/10 text-sm font-medium hover:bg-white transition shadow-sm">
              See features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
