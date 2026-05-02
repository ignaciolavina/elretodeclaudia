import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuEsDBP from './components/QuEsDBP'
import HistoriaClaudia from './components/HistoriaClaudia'
import ComoAyudar from './components/ComoAyudar'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Donar from './pages/Donar'

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <QuEsDBP />
        <HistoriaClaudia />
        <ComoAyudar />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

function Analytics() {
  const location = useLocation()
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-06X52MG7GN', { page_path: location.pathname })
    }
  }, [location])
  return null
}

export default function App() {
  return (
    <LanguageProvider>
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donar" element={<Donar />} />
      </Routes>
    </LanguageProvider>
  )
}
