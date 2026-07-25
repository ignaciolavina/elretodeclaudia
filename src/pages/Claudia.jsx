import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HistoriaClaudia from '../components/HistoriaClaudia'
import { useLanguage } from '../context/LanguageContext'
import { VIDEOS } from '../data/videos'

const INITIAL_VIDEO_COUNT = 6

function InstagramEmbed({ permalink, title }) {
  return (
    <div className="relative w-full aspect-[9/16]">
      <iframe
        className="absolute inset-0 w-full h-full border-0 bg-gray-950"
        scrolling="no"
        src={`${permalink}embed/`}
        title={title}
        loading="lazy"
        allow="encrypted-media"
      />
    </div>
  )
}

export default function Claudia() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VIDEO_COUNT)
  const { t } = useLanguage()
  const d = t.videos
  const visibleVideos = VIDEOS.slice(0, visibleCount)
  const hasMoreVideos = visibleCount < VIDEOS.length

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>La historia de Claudia — El Reto de Claudia</title>
        <meta name="description" content="Conoce la historia de Claudia y su diagnóstico de deficiencia de la proteína D-bifuncional (DBP), y sigue su día a día en vídeo." />
        <meta property="og:url" content="https://elretodeclaudia.org/claudia" />
        <meta property="og:title" content="La historia de Claudia — El Reto de Claudia" />
        <meta property="og:description" content="Conoce la historia de Claudia y su diagnóstico de deficiencia de la proteína D-bifuncional (DBP), y sigue su día a día en vídeo." />
        <meta property="og:image" content="https://elretodeclaudia.org/og-default.png" />
        <meta name="twitter:title" content="La historia de Claudia — El Reto de Claudia" />
        <meta name="twitter:description" content="Conoce la historia de Claudia y su diagnóstico de deficiencia de la proteína D-bifuncional (DBP), y sigue su día a día en vídeo." />
        <meta name="twitter:image" content="https://elretodeclaudia.org/og-default.png" />
      </Helmet>

      <Navbar />

      <main>
        <HistoriaClaudia />

        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
            <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">{d.sectionLabel}</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-5 leading-tight">{d.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{d.subtitle}</p>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleVideos.map((video) => (
                <article key={video.id} className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-lg">
                  <InstagramEmbed permalink={video.permalink} title={video.caption} />
                </article>
              ))}
            </div>
            {hasMoreVideos && (
              <div className="mt-14 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount(VIDEOS.length)}
                  className="inline-flex items-center justify-center rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 transition-colors shadow-sm"
                >
                  {d.loadMore}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
