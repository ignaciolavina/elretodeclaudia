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
  const { t } = useLanguage()
  const p = t.prensa

  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation()

  const TYPE_LABELS = {
    radio: p.typeRadio,
    press: p.typePress,
    tv:    p.typeTV,
  }

  const STATS = [
    { value: IMPACT.views,        label: p.statViews },
    { value: IMPACT.interactions, label: p.statInteractions },
    { value: IMPACT.followers,    label: p.statFollowers },
    { value: IMPACT.shared,       label: p.statShared },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24">
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
                <Link to="/donar" className="mt-8 hidden md:flex w-full items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-sm">
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
