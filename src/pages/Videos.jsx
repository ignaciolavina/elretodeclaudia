import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import { VIDEOS } from '../data/videos'

const INITIAL_VIDEO_COUNT = 5

function InstagramEmbed({ permalink, title }) {
  return <iframe className="block w-full h-[720px] sm:h-[900px] border-0 bg-gray-950" scrolling="no" src={`${permalink}embed/`} title={title} loading="lazy" allow="encrypted-media" />
}

export default function Videos() {
  const [loaded, setLoaded] = useState(false)
  const [visibleCount, setVisibleCount] = useState(INITIAL_VIDEO_COUNT)
  const { t } = useLanguage()
  const d = t.videos
  const visibleVideos = VIDEOS.slice(0, visibleCount)
  const hasMoreVideos = visibleCount < VIDEOS.length
  const fade = (delay = '') => `transition-all duration-700 ${delay} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="bg-brand-50 pt-32 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <span className={`text-xs font-bold uppercase tracking-widest text-brand-600 mb-3 block ${fade()}`}>{d.sectionLabel}</span>
            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5 ${fade('delay-100')}`}>{d.title}</h1>
            <p className={`text-gray-600 text-lg leading-relaxed ${fade('delay-200')}`}>{d.subtitle}</p>
          </div>
        </section>
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-xl mx-auto px-4 sm:px-6">
            <div className="space-y-14">
              {visibleVideos.map((video) => (
                <article key={video.id} className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-lg">
                  <InstagramEmbed permalink={video.permalink} title={video.caption} />
                </article>
              ))}
            </div>
            {hasMoreVideos && <div className="mt-14 text-center"><button type="button" onClick={() => setVisibleCount(VIDEOS.length)} className="inline-flex items-center justify-center rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 transition-colors shadow-sm">{d.loadMore}</button></div>}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
