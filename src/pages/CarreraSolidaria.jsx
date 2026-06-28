import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

const IMG = '/images/events/carrera-solidaria-san-lorenzo-2026'

const PHOTOS = [
  { src: `${IMG}/1.webp`, alt: { es: 'Los protagonistas en la línea de salida', en: 'The protagonists at the starting line' } },
  { src: `${IMG}/2.webp`, alt: { es: 'Los organizadores frente al photocall', en: 'The organizers in front of the photo backdrop' } },
  { src: `${IMG}/3.webp`, alt: { es: 'Photocall con los patrocinadores', en: 'Photo backdrop with sponsors' } },
]

const STATS = {
  es: [
    { value: '1.000', label: 'inscritos' },
    { value: '17.500 €', label: 'recaudados' },
    { value: '27 jun', label: '2026' },
  ],
  en: [
    { value: '1,000', label: 'registered' },
    { value: '€17,500', label: 'raised' },
    { value: '27 Jun', label: '2026' },
  ],
}

export default function CarreraSolidaria() {
  const [loaded, setLoaded] = useState(false)
  const [lightbox, setLightbox] = useState(null)
  const { lang } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % PHOTOS.length)
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + PHOTOS.length) % PHOTOS.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [lightbox])

  const fade = (delay = '') =>
    `transition-all duration-700 ${delay} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`

  const t = lang === 'es' ? {
    badge: 'Evento pasado',
    title: 'Carrera Solidaria en San Lorenzo de El Escorial',
    subtitle: 'La primera carrera solidaria de El Reto de Claudia. Un pueblo entero corriendo por una causa.',
    intro: 'El 27 de junio de 2026, San Lorenzo de El Escorial se convirtió en el escenario de algo muy especial. Lo que empezó como una idea se transformó en un evento que superó todas las expectativas: más de 1.000 personas se inscribieron para correr, caminar o simplemente estar presentes por Claudia.',
    raised: 'Se recaudaron más de 17.500 € solo en inscripciones, sin contar todo el merchandising vendido: camisetas, botellas, llaveros, imanes, bolsas de tela y mucho más.',
    highlights: 'Un día inolvidable',
    highlightsList: [
      'Stands de comida, merchandising y actividades para todos',
      'Baile con Mónica Herranz animando al público desde el escenario',
      'Evento de magia a cargo de CISMAD',
      'Motos acompañando el recorrido, cada una con una letra que juntas formaban CLAUDIA',
      'Voluntarios organizando el tráfico y cuidando cada detalle',
      'Un photocall con todos los patrocinadores y colaboradores',
    ],
    limit: 'Tuvimos que cerrar las inscripciones en 1.000 participantes por seguridad. Sabíamos que no todos acudirían, pero muchos se inscribieron como gesto solidario. Lo importante es que mucha gente quiso ayudar.',
    routeTitle: 'Recorrido',
    thanks: 'Gracias a todos los que lo hicisteis posible — corredores, voluntarios, patrocinadores y vecinos. Esto es solo el principio.',
    galleryTitle: 'Galería',
    photosCta: 'Ver todas las fotos y vídeos',
    backLink: 'Volver a eventos',
    donaCta: 'Dona ahora',
  } : {
    badge: 'Past event',
    title: 'Charity Race in San Lorenzo de El Escorial',
    subtitle: 'The first charity race of El Reto de Claudia. An entire town running for a cause.',
    intro: 'On June 27, 2026, San Lorenzo de El Escorial became the stage for something very special. What started as an idea turned into an event that exceeded all expectations: over 1,000 people signed up to run, walk or simply be there for Claudia.',
    raised: 'Over €17,500 was raised from registrations alone, not counting all the merchandise sold: t-shirts, water bottles, keychains, fridge magnets, tote bags and much more.',
    highlights: 'An unforgettable day',
    highlightsList: [
      'Food stands, merchandise and activities for everyone',
      'Dance with Mónica Herranz leading the crowd from the stage',
      'Magic show by CISMAD',
      'Motorbikes accompanying the route, each carrying a letter that together spelled CLAUDIA',
      'Volunteers managing traffic and taking care of every detail',
      'A photo backdrop with all sponsors and collaborators',
    ],
    limit: 'We had to cap registrations at 1,000 participants for safety. We knew not everyone would attend, but many signed up as a gesture of solidarity. What matters is that so many people wanted to help.',
    routeTitle: 'Route',
    thanks: 'Thank you to everyone who made it possible — runners, volunteers, sponsors and neighbours. This is just the beginning.',
    galleryTitle: 'Gallery',
    photosCta: 'See all photos and videos',
    backLink: 'Back to events',
    donaCta: 'Donate now',
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-brand-50 pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <span className={`inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 ${fade()}`}>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" aria-hidden="true" />
              {t.badge}
            </span>
            <h1 className={`font-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4 ${fade('delay-100')}`}>
              {t.title}
            </h1>
            <p className={`text-gray-600 text-lg leading-relaxed ${fade('delay-200')}`}>
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="pt-8 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className={`rounded-3xl overflow-hidden shadow-lg ${fade('delay-300')}`}>
              <img
                src={`${IMG}/1.webp`}
                alt={t.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-3 gap-4">
              {STATS[lang].map((stat, i) => (
                <div key={i} className={`text-center p-6 bg-brand-50 rounded-2xl ${fade(`delay-[${(i + 1) * 100}ms]`)}`}>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-brand-700">{stat.value}</p>
                  <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pt-8 pb-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 space-y-8">
            <p className="text-gray-700 text-lg leading-relaxed">{t.intro}</p>
            <p className="text-gray-700 text-lg leading-relaxed">{t.raised}</p>

            <div className="bg-brand-50 rounded-2xl p-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">{t.highlights}</h2>
              <ul className="space-y-3">
                {t.highlightsList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-brand-500 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">{t.limit}</p>

            {/* Route map */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">{t.routeTitle}</h2>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <img
                  src={`${IMG}/mapa.webp`}
                  alt={t.routeTitle}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <p className="text-gray-800 text-lg leading-relaxed font-semibold">{t.thanks}</p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-brand-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900">{t.galleryTitle}</h2>
              <a
                href="https://correporclaudia.com/fotos-y-videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                {t.photosCta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PHOTOS.map((photo, i) => (
                <button key={i} onClick={() => setLightbox(i)} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                  <img src={photo.src} alt={photo.alt[lang]} className="w-full h-64 object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/donar"
                className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-sm"
              >
                {t.donaCta} ❤️
              </Link>
              <Link
                to="/eventos"
                className="text-brand-600 hover:text-brand-700 text-sm font-semibold transition-colors"
              >
                ← {t.backLink}
              </Link>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightbox !== null && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center" onClick={() => setLightbox(null)}>
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors" aria-label="Close">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            {PHOTOS.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + PHOTOS.length) % PHOTOS.length) }} className="absolute left-4 text-white/70 hover:text-white transition-colors" aria-label="Previous">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % PHOTOS.length) }} className="absolute right-4 text-white/70 hover:text-white transition-colors" aria-label="Next">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </>
            )}
            <img
              src={PHOTOS[lightbox].src}
              alt={PHOTOS[lightbox].alt[lang]}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

      </main>
      <Footer />
    </div>
  )
}
