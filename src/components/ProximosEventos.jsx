import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import { EVENTS } from '../data/events'

const CalendarIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const LocationIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export default function ProximosEventos() {
  const { ref, isVisible } = useScrollAnimation()
  const { t, lang } = useLanguage()
  const d = t.eventos

  const next = EVENTS
    .filter(e => e.status === 'upcoming' && e.category !== 'presence')
    .sort((a, b) => new Date(a.date) - new Date(b.date))[0]

  if (!next) return null

  const formattedDate = new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  }).format(new Date(next.date + 'T12:00:00'))

  return (
    <section id="eventos" aria-labelledby="eventos-home-title" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div
          ref={ref}
          className={`mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-3 block">
            {d.sectionLabel}
          </span>
          <h2 id="eventos-home-title" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
            {d.homeTitle}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{d.homeSubtitle}</p>
        </div>

        {/* Card */}
        <div className={`bg-white rounded-3xl shadow-sm border border-brand-100 overflow-hidden transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row">

            {/* Image */}
            <div className="lg:w-2/5 flex-shrink-0 overflow-hidden">
              {next.image
                ? <img src={next.image} alt={next.title[lang]} className="w-full h-full object-cover" />
                : (
                  <div className="w-full h-full bg-brand-100 flex items-center justify-center min-h-[240px]">
                    <svg className="w-16 h-16 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )
              }
            </div>

            {/* Content */}
            <div className="flex-1 p-8 lg:p-10 flex flex-col">
              <span className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full self-start mb-5">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" aria-hidden="true" />
                {d.upcomingBadge}
              </span>

              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                {next.title[lang]}
              </h3>

              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <CalendarIcon />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <LocationIcon />
                  <span>{next.location}</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 flex-1">{next.description[lang]}</p>

              {next.organizers?.length > 0 && (
                <div className="flex items-center gap-4 mb-6">
                  {next.organizers.map((logo, i) => (
                    <img key={i} src={logo} alt="" className="h-8 w-auto object-contain" />
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {next.registerHref && next.registerHref !== '#' && (
                  <a
                    href={next.registerHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
                  >
                    {d.registerCta}
                  </a>
                )}
                {next.infoHref && next.infoHref !== '#' && (
                  <a
                    href={next.infoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-brand-50 text-brand-700 border border-brand-200 text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    {d.infoCta}
                  </a>
                )}
                <Link
                  to="/eventos"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 text-sm font-semibold transition-colors"
                >
                  {d.homeCta}
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
