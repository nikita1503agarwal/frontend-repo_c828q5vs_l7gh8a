import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Collections from './components/Collections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Collections />
      </main>
      <Footer />
    </div>
  )
}

export default App
