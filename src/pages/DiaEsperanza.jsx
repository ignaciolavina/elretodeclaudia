import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

const SCHEDULE = {
  es: [
    { time: '08:00', title: 'XVI Abantos Trekking', desc: 'Salida: Convento Carmelitas Descalzas. Llegada: Bar Rincón Andaluz.' },
    { time: '13:00', title: 'Mural de la Esperanza', desc: 'Con la colaboración de la Escuela Infantil Trébol. Aperitivo Musical a cargo de Charanga Jóvenes Brillantes.' },
    { time: '14:30', title: 'Paella Solidaria', desc: 'Concierto de The Greentones. Rifa benéfica durante el concierto.' },
    { time: '17:30', title: 'Juegos infantiles y tardeo', desc: 'Juegos infantiles con la colaboración de la Asociación Kairas. Tardeo con DJ.' },
    { time: '19:00', title: 'Danza Oriental — Grupo Ayla', desc: 'Rifa benéfica al finalizar la actuación.' },
    { time: '20:00', title: 'Baile Español — Silvia Reaño', desc: 'Rifa benéfica al finalizar la actuación.' },
    { time: '', title: 'Conciertos de cierre', desc: 'Break Times y Los Que Quedamos.' },
  ],
  en: [
    { time: '08:00', title: 'XVI Abantos Trekking', desc: 'Start: Convento Carmelitas Descalzas. Finish: Bar Rincón Andaluz.' },
    { time: '13:00', title: 'Mural of Hope', desc: 'With the collaboration of Escuela Infantil Trébol. Musical appetiser by Charanga Jóvenes Brillantes.' },
    { time: '14:30', title: 'Charity Paella', desc: 'Concert by The Greentones. Charity raffle during the concert.' },
    { time: '17:30', title: 'Kids\' games & afternoon party', desc: 'Children\'s games with Asociación Kairas. Afternoon party with DJ.' },
    { time: '19:00', title: 'Oriental Dance — Grupo Ayla', desc: 'Charity raffle after the performance.' },
    { time: '20:00', title: 'Spanish Dance — Silvia Reaño', desc: 'Charity raffle after the performance.' },
    { time: '', title: 'Closing concerts', desc: 'Break Times and Los Que Quedamos.' },
  ],
}

const COLLABORATORS = [
  'M.I. Ayuntamiento de San Lorenzo de El Escorial',
  'Asociación Kairas',
  'Escuela Infantil Trébol',
]

export default function DiaEsperanza() {
  const [loaded, setLoaded] = useState(false)
  const { lang } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(timer)
  }, [])

  const fade = (delay = '') =>
    `transition-all duration-700 ${delay} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`

  const t = lang === 'es' ? {
    badge: 'Próximo',
    title: 'Día de la Esperanza — Hdad. Ntra. Sra. del Carmen',
    subtitle: 'Un día para compartir, disfrutar y sumar esperanza.',
    organizer: 'Organiza: Hermandad de Nuestra Señora del Carmen',
    beneficiary: 'En beneficio de El Reto de Claudia — Más investigación, más esperanza.',
    date: 'Domingo 12 de julio de 2026',
    location: 'Calle María Cristina y Plaza de Santa Teresa, San Lorenzo de El Escorial',
    scheduleTitle: 'Programa',
    collaboratorsTitle: 'Colaboran',
    backLink: 'Volver a eventos',
    donaCta: 'Dona ahora',
  } : {
    badge: 'Upcoming',
    title: 'Day of Hope — Hdad. Ntra. Sra. del Carmen',
    subtitle: 'A day to share, enjoy and add hope.',
    organizer: 'Organised by: Hermandad de Nuestra Señora del Carmen',
    beneficiary: 'In benefit of El Reto de Claudia — More research, more hope.',
    date: 'Sunday 12 July 2026',
    location: 'Calle María Cristina and Plaza de Santa Teresa, San Lorenzo de El Escorial',
    scheduleTitle: 'Programme',
    collaboratorsTitle: 'Collaborators',
    backLink: 'Back to events',
    donaCta: 'Donate now',
  }

  const schedule = SCHEDULE[lang]

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-brand-50 pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <span className={`inline-flex items-center gap-1.5 bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 ${fade()}`}>
              <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" aria-hidden="true" />
              {t.badge}
            </span>
            <h1 className={`font-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4 ${fade('delay-100')}`}>
              {t.title}
            </h1>
            <p className={`text-gray-600 text-lg leading-relaxed mb-3 ${fade('delay-200')}`}>
              {t.subtitle}
            </p>
            <p className={`text-brand-700 font-semibold ${fade('delay-200')}`}>
              {t.organizer}
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="pt-8 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className={`rounded-3xl overflow-hidden shadow-lg ${fade('delay-300')}`}>
              <img
                src="/images/events/hdad-ntra-sra-carmen-2026.webp"
                alt={t.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Info cards */}
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-brand-50 rounded-2xl p-6 text-center">
                <svg className="w-6 h-6 text-brand-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-semibold text-gray-900">{t.date}</p>
              </div>
              <div className="bg-brand-50 rounded-2xl p-6 text-center">
                <svg className="w-6 h-6 text-brand-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-semibold text-gray-900">{t.location}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficiary */}
        <section className="pb-8 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="bg-brand-950 text-white rounded-2xl p-8 text-center">
              <p className="font-serif text-xl font-bold text-warm-300 mb-1">El Reto de Claudia</p>
              <p className="text-brand-200">{t.beneficiary}</p>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8">{t.scheduleTitle}</h2>
            <div className="space-y-6">
              {schedule.map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className={`text-sm font-bold ${item.time ? 'text-brand-600' : 'text-gray-400'} w-14 text-right`}>
                      {item.time || '—'}
                    </span>
                  </div>
                  <div className="flex-1 pb-6 border-b border-gray-100 last:border-0">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaborators */}
        <section className="py-16 bg-brand-50">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">{t.collaboratorsTitle}</h2>
            <ul className="space-y-3">
              {COLLABORATORS.map((name, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-brand-500 rounded-full flex-shrink-0" aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
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

      </main>
      <Footer />
    </div>
  )
}
