import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectTimeline from '../components/ProjectTimeline'

export default function Test() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <ProjectTimeline />
      </main>
      <Footer />
    </div>
  )
}
