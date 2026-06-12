import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import prensaData from '../data/prensa.json'

// ─── Static icon helpers (no text, no translation needed) ────────────────────

const MicIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
)
const NewspaperIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
  </svg>
)
const GlobeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)
// ─── Editable content ─────────────────────────────────────────────────────────
// El contenido editable (métricas, próximamente, apariciones en medios) vive en
// src/data/prensa.json — único punto de edición, también escrito por el bot de Telegram.
const { media: MEDIA } = prensaData

// "upcoming" can be a single object (legacy) or an array — normalize to a list.
const UPCOMING = (Array.isArray(prensaData.upcoming) ? prensaData.upcoming : [prensaData.upcoming]).filter(Boolean)

const TYPE_ICONS = {
  radio: <MicIcon />,
  press: <NewspaperIcon />,
  tv: <NewspaperIcon />,
  web: <GlobeIcon />,
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function MediaCard({ item, typeLabel, index }) {
  const { ref, isVisible } = useScrollAnimation()
  const Tag = item.url ? 'a' : 'article'
  const linkProps = item.url
    ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Tag
      ref={ref}
      {...linkProps}
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 transition-all duration-300 ${
        item.url ? 'hover:shadow-md hover:-translate-y-1 cursor-pointer group' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
      <div className="h-12 flex items-center justify-between">
        {item.logoImage ? (
          <img
            src={item.logoImage}
            alt={item.outlet}
            className="h-10 max-w-[150px] object-contain"
            loading="lazy"
          />
        ) : (
          <span className="text-2xl font-black tracking-tight" style={{ color: item.logoColor }}>
            {item.logo}
          </span>
        )}
        {item.url && (
          <svg className="w-4 h-4 text-gray-300 group-hover:text-brand-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed flex-1">{item.quote}</p>
      <div className="flex items-center gap-2 pt-2 border-t border-gray-100 flex-wrap">
        <span className="text-brand-400">{TYPE_ICONS[item.type]}</span>
        <span className="text-xs font-semibold text-gray-800">{item.outlet}</span>
        <span className="text-xs text-gray-400">·</span>
        <span className="text-xs text-gray-400">{typeLabel}</span>
        {item.date && (
          <>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">{item.date}</span>
          </>
        )}
      </div>
    </Tag>
  )
}

function UpcomingCard({ item, label, index }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`bg-brand-500 text-white rounded-2xl p-6 shadow-md flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
      <span className="inline-flex self-start items-center bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
        {label}
      </span>
      <h3 className="font-serif text-2xl font-bold leading-tight flex-1">{item.title}</h3>
      <div className="flex items-center gap-2 text-brand-100 text-sm">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {item.date}
      </div>
      <p className="font-semibold text-white/90 pt-3 border-t border-white/20">{item.cta}</p>
    </div>
  )
}

function SectionLabel({ children }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <span className="inline-block bg-brand-100 text-brand-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
        {children}
      </span>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Prensa() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(timer)
  }, [])

  const { t } = useLanguage()
  const p = t.prensa

  const fade = (delay = '') =>
    `transition-all duration-700 ${delay} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`

  const TYPE_LABELS = {
    radio: p.typeRadio,
    press: p.typePress,
    tv:    p.typeTV,
    web:   p.typeWeb,
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="bg-brand-50 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <span className={`text-xs font-bold uppercase tracking-widest text-brand-600 mb-3 block ${fade()}`}>
              {p.sectionLabel}
            </span>
            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 ${fade('delay-100')}`}>
              {p.title}
            </h1>
            <p className={`text-gray-600 text-lg leading-relaxed max-w-2xl ${fade('delay-200')}`}>
              {p.subtitle}
            </p>
          </div>
        </section>

        {/* ── En los medios ── */}
        <section className="pt-8 pb-20 bg-brand-50/50" aria-labelledby="medios-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {UPCOMING.filter((u) => u.show).map((u, i) => (
                <UpcomingCard key={`upcoming-${i}`} item={u} label={p.upcomingLabel} index={i} />
              ))}
              {MEDIA.map((item, i) => (
                <MediaCard key={item.outlet} item={item} typeLabel={TYPE_LABELS[item.type]} index={i} />
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
