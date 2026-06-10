import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
const BulbIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)
const DnaIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
)
const HeartGoalIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

// ─── Editable content ─────────────────────────────────────────────────────────
// El contenido editable (métricas, próximamente, apariciones en medios) vive en
// src/data/prensa.json — único punto de edición, también escrito por el bot de Telegram.
const { impact: IMPACT, media: MEDIA } = prensaData

// "upcoming" can be a single object (legacy) or an array — normalize to a list.
const UPCOMING = (Array.isArray(prensaData.upcoming) ? prensaData.upcoming : [prensaData.upcoming]).filter(Boolean)

// Instagram comparte cifras con IMPACT (single source of truth).
const INSTAGRAM = {
  ...prensaData.instagram,
  views: IMPACT.views,
  followers: IMPACT.followers,
}

const TYPE_ICONS = {
  radio: <MicIcon />,
  press: <NewspaperIcon />,
  tv: <NewspaperIcon />,
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

function GoalCard({ title, subtitle, icon, index }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-brand-50 border border-brand-100 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
      <div className="w-16 h-16 rounded-2xl bg-brand-500 text-white flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <div>
        <p className="font-bold text-brand-600 text-sm tracking-widest uppercase mb-1">{title}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{subtitle}</p>
      </div>
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

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero({ p }) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  const fade = (delay) =>
    `transition-all duration-700 ${delay} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-brand-50 via-white to-brand-50 relative overflow-hidden" aria-label={p.badge}>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand-200/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <div className={`inline-flex items-center gap-2 bg-brand-100 text-brand-600 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 ${fade('delay-100')}`}>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
              </svg>
              {p.badge}
            </div>

            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 ${fade('delay-150')}`}>
              El Reto de <span className="text-brand-500">Claudia</span>
            </h1>

            <p className={`text-brand-500 font-semibold text-lg mb-6 ${fade('delay-200')}`}>
              {p.tagline}
            </p>

            <p className={`text-gray-600 text-lg leading-relaxed mb-8 ${fade('delay-300')}`}>
              {p.heroDesc}
            </p>

            <div className={`flex flex-wrap gap-3 ${fade('delay-[400ms]')}`}>
              <Link to="/donar" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm">
                {p.ctaDonate}
              </Link>
              <a href="mailto:contacto@elretodeclaudia.org" className="inline-flex items-center gap-2 border border-brand-200 text-brand-600 hover:bg-brand-50 font-semibold px-6 py-3 rounded-xl transition-colors">
                {p.ctaPress}
              </a>
            </div>
          </div>

          <div className={`${fade('delay-500')}`}>
            <div className="rounded-3xl overflow-hidden shadow-lg h-[420px] sm:h-[480px]">
              <img
                src="/images/claudia.jpeg"
                alt="Claudia"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Prensa() {
  const { t } = useLanguage()
  const p = t.prensa

  const { ref: goalsTitleRef, isVisible: goalsTitleVisible } = useScrollAnimation()
  const { ref: ctaRef,        isVisible: ctaVisible        } = useScrollAnimation()

  const TYPE_LABELS = {
    radio: p.typeRadio,
    press: p.typePress,
    tv:    p.typeTV,
  }

  const GOALS = [
    { title: p.goal1Title, subtitle: p.goal1Sub, icon: <BulbIcon /> },
    { title: p.goal2Title, subtitle: p.goal2Sub, icon: <DnaIcon /> },
    { title: p.goal3Title, subtitle: p.goal3Sub, icon: <HeartGoalIcon /> },
  ]

  const STATS = [
    { value: IMPACT.views,        label: p.statViews },
    { value: IMPACT.interactions, label: p.statInteractions },
    { value: IMPACT.followers,    label: p.statFollowers },
    { value: IMPACT.shared,       label: p.statShared },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero p={p} />

        {/* ── En los medios ── */}
        <section className="pt-8 pb-20 bg-brand-50/50" aria-labelledby="medios-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionLabel>{p.mediaLabel}</SectionLabel>
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

        {/* ── Nuestro objetivo ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={goalsTitleRef}
              className={`mb-10 transition-all duration-700 ${goalsTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <span className="inline-block bg-brand-100 text-brand-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                {p.goalsLabel}
              </span>
              <h2 className="font-serif text-3xl font-bold text-gray-900">{p.goalsTitle}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {GOALS.map((g, i) => (
                <GoalCard key={g.title} title={g.title} subtitle={g.subtitle} icon={g.icon} index={i} />
              ))}
            </div>

            <div className={`bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl px-6 py-4 transition-all duration-700 delay-300 ${goalsTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-white text-sm font-medium text-center">{p.goalsMotto}</p>
            </div>
          </div>
        </section>

        {/* ── Síguenos + Cómo ayudar ── */}
        <section className="py-20 bg-brand-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <a
                ref={ctaRef}
                href={INSTAGRAM.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white rounded-3xl p-8 shadow-sm border border-brand-100 flex flex-col gap-6 transition-all duration-700 hover:shadow-md hover:-translate-y-1 group ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-gray-900">{p.socialTitle}</h3>
                    <p className="text-brand-500 font-semibold">{INSTAGRAM.handle}</p>
                  </div>
                </div>
                <p className="text-gray-700 font-serif font-semibold leading-snug">
                  {p.community}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {STATS.map((s) => (
                    <div key={s.label} className="bg-brand-50 rounded-2xl p-4 text-center">
                      <p className="font-serif text-2xl font-bold text-brand-600">{s.value}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </a>

              <div className={`bg-white rounded-3xl p-8 shadow-sm border border-brand-100 transition-all duration-700 delay-150 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">{p.helpTitle}</h3>
                <ul className="space-y-4">
                  {p.helpItems.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-7 h-7 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/donar" className="mt-8 w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-sm">
                  {p.helpCta}
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
