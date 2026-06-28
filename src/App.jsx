import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import { useLanguage } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuEsDBP from './components/QuEsDBP'
import HistoriaClaudia from './components/HistoriaClaudia'
import ComoAyudar from './components/ComoAyudar'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Donar from './pages/Donar'
import Privacidad from './pages/Privacidad'
import Prensa from './pages/Prensa'
import Eventos from './pages/Eventos'
import CarreraSolidaria from './pages/CarreraSolidaria'
import DiaEsperanza from './pages/DiaEsperanza'
import ProximosEventos from './components/ProximosEventos'

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <QuEsDBP />
        <HistoriaClaudia />
        <ComoAyudar />
        <ProximosEventos />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

function StickyDonateBar() {
  const location = useLocation()
  const { t } = useLanguage()
  if (['/donar', '/donate', '/dona'].includes(location.pathname)) return null
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2 bg-gradient-to-t from-white/95 to-transparent backdrop-blur-sm">
      <Link
        to="/donar"
        className="block w-full text-center bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-base px-4 py-3.5 rounded-2xl shadow-lg transition-colors"
      >
        {t.nav.donar} ❤️
      </Link>
    </div>
  )
}

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])
  return null
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
      <ScrollToTop />
      <Analytics />
      <StickyDonateBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donar" element={<Donar />} />
        <Route path="/donate" element={<Donar />} />
        <Route path="/dona" element={<Donar />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/prensa" element={<Prensa />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/eventos/carrera-solidaria-san-lorenzo-2026" element={<CarreraSolidaria />} />
        <Route path="/eventos/dia-de-la-esperanza-2026" element={<DiaEsperanza />} />
        <Route path="*" element={<Donar />} />
      </Routes>
    </LanguageProvider>
  )
}
