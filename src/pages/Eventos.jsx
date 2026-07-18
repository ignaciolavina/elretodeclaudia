import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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

const ImagePlaceholder = ({ size = 'lg' }) => (
  <div className={`w-full h-full bg-brand-100 flex items-center justify-center ${size === 'sm' ? 'min-h-[180px]' : 'min-h-[260px]'}`}>
    <svg className={`${size === 'sm' ? 'w-10 h-10' : 'w-16 h-16'} text-brand-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  </div>
)

function formatDateRange(event, lang) {
  const locale = lang === 'es' ? 'es-ES' : 'en-GB'
  const start = new Date(event.date + 'T12:00:00')

  if (!event.dateEnd) {
    return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(start)
  }

  const end = new Date(event.dateEnd + 'T12:00:00')
  const startDay = start.getDate()
  const endDay = end.getDate()
  const monthYear = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(start)

  return lang === 'es'
    ? `${startDay} y ${endDay} de ${monthYear}`
    : `${startDay}–${endDay} ${monthYear}`
}

function UpcomingCard({ event, badgeLabel, badgeStyle = 'solidarity' }) {
  const { ref, isVisible } = useScrollAnimation()
  const { t, lang } = useLanguage()
  const d = t.eventos

  const formattedDate = formatDateRange(event, lang)

  const badge = badgeStyle === 'presence'
    ? 'bg-gray-100 text-gray-600'
    : 'bg-brand-100 text-brand-700'

  const dot = badgeStyle === 'presence'
    ? 'bg-gray-400'
    : 'bg-brand-500 animate-pulse'

  const Wrapper = event.pageHref ? Link : 'div'
  const wrapperProps = event.pageHref ? { to: event.pageHref } : {}

  return (
    <Wrapper
      {...wrapperProps}
      ref={ref}
      className={`block bg-white rounded-3xl shadow-sm border border-brand-100 overflow-hidden transition-all duration-700 ${event.pageHref ? 'hover:shadow-md cursor-pointer' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/5 flex-shrink-0 overflow-hidden">
          {event.image
            ? <img src={event.image} alt={event.title[lang]} className="w-full h-full object-cover" />
            : <ImagePlaceholder />
          }
        </div>

        <div className="flex-1 p-8 lg:p-10 flex flex-col">
          <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full self-start mb-5 ${badge}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${dot}`} aria-hidden="true" />
            {badgeLabel}
          </span>

          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-snug">
            {event.title[lang]}
          </h3>

          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <CalendarIcon />
              <span>{formattedDate}{event.time ? ` · ${event.time} h` : ''}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <LocationIcon />
              <span>{event.location}</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6 flex-1">{event.description[lang]}</p>

          {event.organizers.length > 0 && (
            <div className="flex items-center gap-4 mb-6">
              {event.organizers.map((logo, i) => (
                <img key={i} src={logo} alt="" className="h-8 w-auto object-contain" />
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {event.pageHref && (
              <span className="bg-brand-600 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm">
                {d.detailsCta}
              </span>
            )}
            {event.registerHref && event.registerHref !== '#' && (
              <a
                href={event.registerHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                {d.registerCta}
              </a>
            )}
            {event.infoHref && event.infoHref !== '#' && (
              <a
                href={event.infoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-brand-50 text-brand-700 border border-brand-200 text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                {d.infoCta}
              </a>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

function PastCard({ event, index }) {
  const { ref, isVisible } = useScrollAnimation()
  const { t, lang } = useLanguage()
  const d = t.eventos

  const formattedDate = formatDateRange(event, lang)

  const Wrapper = event.pageHref ? Link : 'div'
  const wrapperProps = event.pageHref ? { to: event.pageHref } : {}

  return (
    <Wrapper
      {...wrapperProps}
      ref={ref}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
      className={`block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-700 ${event.pageHref ? 'hover:shadow-md hover:-translate-y-1 cursor-pointer' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="h-64 overflow-hidden">
        {event.image
          ? <img src={event.image} alt={event.title[lang]} className="w-full h-full object-cover" />
          : <ImagePlaceholder size="sm" />
        }
      </div>
      <div className="p-5">
        <p className="text-xs text-brand-600 font-semibold mb-2">{formattedDate}</p>
        <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1 leading-snug">{event.title[lang]}</h3>
        <p className="text-sm text-gray-500 mb-3">{event.location}</p>
        {event.description && (
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 mb-4">{event.description[lang]}</p>
        )}
        {event.pageHref ? (
          <span className="text-sm text-brand-600 font-semibold underline underline-offset-2">
            {d.detailsCta}
          </span>
        ) : event.infoHref && (
          <a
            href={event.infoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2 transition-colors"
          >
            {d.infoCta}
          </a>
        )}
      </div>
    </Wrapper>
  )
}

export default function Eventos() {
  const [loaded, setLoaded] = useState(false)
  const { t } = useLanguage()
  const d = t.eventos

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(timer)
  }, [])

  const fade = (delay = '') =>
    `transition-all duration-700 ${delay} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`

  const upcoming   = EVENTS.filter(e => !e.hidden && e.status === 'upcoming' && e.category !== 'presence').sort((a, b) => a.date.localeCompare(b.date))
  const presence   = EVENTS.filter(e => !e.hidden && e.status === 'upcoming' && e.category === 'presence').sort((a, b) => a.date.localeCompare(b.date))
  const past       = EVENTS.filter(e => !e.hidden && e.status === 'past').sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Eventos — El Reto de Claudia</title>
        <meta name="description" content="Carreras, torneos, conciertos y mucho más. Participa en los eventos solidarios de El Reto de Claudia y ayuda a financiar la investigación de la DBP." />
        <meta property="og:url" content="https://elretodeclaudia.org/eventos" />
        <meta property="og:title" content="Eventos — El Reto de Claudia" />
        <meta property="og:description" content="Carreras, torneos, conciertos y mucho más. Participa en los eventos solidarios de El Reto de Claudia y ayuda a financiar la investigación de la DBP." />
        <meta property="og:image" content="https://elretodeclaudia.org/og-default.png" />
        <meta name="twitter:title" content="Eventos — El Reto de Claudia" />
        <meta name="twitter:description" content="Carreras, torneos, conciertos y mucho más. Participa en los eventos solidarios de El Reto de Claudia y ayuda a financiar la investigación de la DBP." />
        <meta name="twitter:image" content="https://elretodeclaudia.org/og-default.png" />
      </Helmet>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-brand-50 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <span className={`text-xs font-bold uppercase tracking-widest text-brand-600 mb-3 block ${fade()}`}>
              {d.sectionLabel}
            </span>
            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 ${fade('delay-100')}`}>
              {d.title}
            </h1>
            <p className={`text-gray-600 text-lg leading-relaxed max-w-2xl ${fade('delay-200')}`}>
              {d.subtitle}
            </p>
          </div>
        </section>

        {/* Upcoming solidarity */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8">{d.upcomingTitle}</h2>

            {upcoming.length === 0 ? (
              <p className="text-gray-500 text-lg">{d.upcomingEmpty}</p>
            ) : (
              <div className="space-y-8">
                {upcoming.map(event => (
                  <UpcomingCard key={event.slug} event={event} badgeLabel={d.upcomingBadge} badgeStyle="solidarity" />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Presence events */}
        {presence.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-gray-900">{d.presenceTitle}</h2>
                <p className="text-gray-500 text-sm mt-1">{d.presenceNote}</p>
              </div>
              <div className="space-y-8">
                {presence.map(event => (
                  <UpcomingCard key={event.slug} event={event} badgeLabel={d.presenceBadge} badgeStyle="presence" />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Past */}
        {past.length > 0 && (
          <section className="py-16 bg-brand-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8">{d.pastTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {past.map((event, i) => (
                  <PastCard key={event.slug} event={event} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </div>
  )
}
