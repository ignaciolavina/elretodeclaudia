import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'
import prensaData from '../data/prensa.json'

// ─── Static icon helpers (no text, no translation needed) ────────────────────

const EyeIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
)
const HeartIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)
const UsersIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)
const ShareIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
)
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
const { impact: IMPACT, upcoming: UPCOMING, media: MEDIA } = prensaData

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

function StatCard({ value, label, icon, index }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm border border-rose-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-md ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 80}ms` : '0ms' }}
    >
      <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-500 flex items-center justify-center">
        {icon}
      </div>
      <p className="font-serif text-3xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500 text-center leading-snug">{label}</p>
    </div>
  )
}

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
        <span className="text-rose-400">{TYPE_ICONS[item.type]}</span>
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

function GoalCard({ title, subtitle, icon, index }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-rose-50 border border-rose-100 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
      <div className="w-16 h-16 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <div>
        <p className="font-bold text-rose-600 text-sm tracking-widest uppercase mb-1">{title}</p>
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
      <span className="inline-block bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
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

  const STATS_HERO = [
    { value: IMPACT.views,        label: p.statViews },
    { value: IMPACT.interactions, label: p.statInteractions },
    { value: IMPACT.followers,    label: p.statFollowers },
    { value: IMPACT.shared,       label: p.statShared },
  ]

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-hidden" aria-label={p.badge}>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <div className={`inline-flex items-center gap-2 bg-rose-100 text-rose-600 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 ${fade('delay-100')}`}>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
              </svg>
              {p.badge}
            </div>

            <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 ${fade('delay-150')}`}>
              El Reto de <span className="text-rose-500">Claudia</span>
            </h1>

            <p className={`text-rose-500 font-semibold text-lg mb-6 ${fade('delay-200')}`}>
              {p.tagline}
            </p>

            <p className={`text-gray-600 text-lg leading-relaxed mb-8 ${fade('delay-300')}`}>
              {p.heroDesc}
            </p>

            <div className={`flex flex-wrap gap-3 ${fade('delay-[400ms]')}`}>
              <Link to="/donar" className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm">
                {p.ctaDonate}
              </Link>
              <a href="mailto:contacto@elretodeclaudia.org" className="inline-flex items-center gap-2 border border-rose-200 text-rose-600 hover:bg-rose-50 font-semibold px-6 py-3 rounded-xl transition-colors">
                {p.ctaPress}
              </a>
            </div>
          </div>

          <div className={`${fade('delay-500')}`}>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-rose-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <UsersIcon />
                </div>
                <p className="text-gray-700 text-lg font-serif font-semibold leading-snug">
                  {p.community}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {STATS_HERO.map((s) => (
                  <div key={s.label} className="bg-rose-50 rounded-2xl p-4 text-center">
                    <p className="font-serif text-2xl font-bold text-rose-600">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
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
  const { ref: upcomingRef,   isVisible: upcomingVisible   } = useScrollAnimation()
  const { ref: ctaRef,        isVisible: ctaVisible        } = useScrollAnimation()

  const TYPE_LABELS = {
    radio: p.typeRadio,
    press: p.typePress,
    tv:    p.typeTV,
  }

  const STATS = [
    { value: IMPACT.views,        label: p.statViews,        icon: <EyeIcon /> },
    { value: IMPACT.interactions, label: p.statInteractions,  icon: <HeartIcon /> },
    { value: IMPACT.followers,    label: p.statFollowers,     icon: <UsersIcon /> },
    { value: IMPACT.shared,       label: p.statShared,        icon: <ShareIcon /> },
  ]

  const GOALS = [
    { title: p.goal1Title, subtitle: p.goal1Sub, icon: <BulbIcon /> },
    { title: p.goal2Title, subtitle: p.goal2Sub, icon: <DnaIcon /> },
    { title: p.goal3Title, subtitle: p.goal3Sub, icon: <HeartGoalIcon /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero p={p} />

        {/* ── Impacto ── */}
        <section className="py-20 bg-white" aria-labelledby="impacto-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionLabel>{p.impactLabel}</SectionLabel>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {STATS.map((s, i) => (
                <StatCard key={s.label} value={s.value} label={s.label} icon={s.icon} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── En los medios ── */}
        <section className="py-20 bg-rose-50/50" aria-labelledby="medios-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionLabel>{p.mediaLabel}</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {MEDIA.map((item, i) => (
                <MediaCard key={item.outlet} item={item} typeLabel={TYPE_LABELS[item.type]} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Nuestro objetivo + Próximamente ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              <div className="lg:col-span-2">
                <div
                  ref={goalsTitleRef}
                  className={`mb-10 transition-all duration-700 ${goalsTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                >
                  <span className="inline-block bg-rose-100 text-rose-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                    {p.goalsLabel}
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-gray-900">{p.goalsTitle}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                  {GOALS.map((g, i) => (
                    <GoalCard key={g.title} title={g.title} subtitle={g.subtitle} icon={g.icon} index={i} />
                  ))}
                </div>

                <div className={`bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl px-6 py-4 transition-all duration-700 delay-300 ${goalsTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <p className="text-white text-sm font-medium text-center">{p.goalsMotto}</p>
                </div>
              </div>

              {/* Próximamente — editar el objeto UPCOMING arriba del todo */}
              {UPCOMING.show && (
                <div
                  ref={upcomingRef}
                  className={`lg:col-span-1 transition-all duration-700 delay-200 ${upcomingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <div className="bg-rose-500 text-white rounded-3xl p-8 h-full flex flex-col justify-between shadow-lg">
                    <div>
                      <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                        {p.upcomingLabel}
                      </span>
                      <h3 className="font-serif text-3xl font-bold leading-tight mb-4">
                        {UPCOMING.title}
                      </h3>
                      <div className="flex items-center gap-2 text-rose-100 text-sm mb-2">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {UPCOMING.date}
                      </div>
                    </div>
                    <p className="font-semibold text-white/90 text-lg mt-4">{UPCOMING.cta}</p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* ── Síguenos + Cómo ayudar ── */}
        <section className="py-20 bg-rose-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <a
                ref={ctaRef}
                href={INSTAGRAM.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white rounded-3xl p-8 shadow-sm border border-rose-100 flex flex-col gap-6 transition-all duration-700 hover:shadow-md hover:-translate-y-1 group ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-gray-900">{p.socialTitle}</h3>
                    <p className="text-rose-500 font-semibold">{INSTAGRAM.handle}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-rose-50 rounded-2xl p-4 text-center">
                    <p className="font-serif text-2xl font-bold text-rose-600">{INSTAGRAM.views}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{p.socialViews}</p>
                  </div>
                  <div className="bg-rose-50 rounded-2xl p-4 text-center">
                    <p className="font-serif text-2xl font-bold text-rose-600">{INSTAGRAM.followers}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{p.socialFollowers}</p>
                  </div>
                </div>
              </a>

              <div className={`bg-white rounded-3xl p-8 shadow-sm border border-rose-100 transition-all duration-700 delay-150 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">{p.helpTitle}</h3>
                <ul className="space-y-4">
                  {p.helpItems.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-7 h-7 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/donar" className="mt-8 w-full flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-sm">
                  {p.helpCta}
                </Link>
              </div>

            </div>

            <p className="text-center text-sm text-gray-400 mt-12">www.elretodeclaudia.org</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
