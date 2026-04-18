import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuEsDBP from './components/QuEsDBP'
import HistoriaClaudia from './components/HistoriaClaudia'
import ComoAyudar from './components/ComoAyudar'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
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
