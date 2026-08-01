import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Team from '../components/Team'

export default function Test() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Team />
      </main>
      <Footer />
    </div>
  )
}
