import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'

const INSTAGRAM_URL = 'https://www.instagram.com/elretodeclaudia'

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const CARD_STYLES = [
  { badge: 'bg-brand-100 text-brand-700',   iconBg: 'bg-brand-100 text-brand-600',   border: 'border-brand-200',   cta: 'bg-brand-700 hover:bg-brand-800 text-white' },
  { badge: 'bg-warm-100 text-warm-600',     iconBg: 'bg-warm-100 text-warm-500',     border: 'border-warm-200',    cta: 'bg-warm-400 hover:bg-warm-500 text-white'   },
  { badge: 'bg-brand-50 text-brand-900',    iconBg: 'bg-brand-50 text-brand-700',    border: 'border-brand-100',   cta: '' },
  { badge: 'bg-warm-200 text-brand-800',    iconBg: 'bg-warm-200 text-warm-600',     border: 'border-warm-300',    cta: 'bg-warm-500 hover:bg-warm-600 text-white'   },
]

const ICONS = [
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
]

function HelpCard({ card, styles, icon, index }) {
  const { ref, isVisible } = useScrollAnimation()
  const isInstagram = index === 2
  const isDonate = index === 3

  return (
    <div
      ref={ref}
      className={`bg-white rounded-3xl p-8 border ${styles.border} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
    >
      <div className="mb-6">
        <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${styles.badge} mb-4`}>
          {card.badge}
        </span>
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isInstagram ? 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white' : styles.iconBg} mb-5`}>
          {icon}
        </div>
        <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
        <p className="text-gray-600 leading-relaxed">{card.text}</p>
      </div>
      <div className="mt-auto pt-4">
        {isInstagram && (
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full min-h-[3rem] items-center justify-center gap-2 font-semibold px-4 py-3 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            {card.cta}
          </a>
        )}
        {isDonate && (
          <Link
            to="/donar"
            className={`flex w-full items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.cta}`}
          >
            {card.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        )}
        {!isInstagram && !isDonate && (
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); scrollTo('#contacto') }}
            className={`flex w-full items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.cta}`}
          >
            {card.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

export default function ComoAyudar() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { t } = useLanguage()
  const d = t.ayudar
  const nav = t.nav

  return (
    <section id="ayudar" className="py-24 bg-white" aria-labelledby="ayudar-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">
            {d.sectionLabel}
          </span>
          <h2 id="ayudar-title" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
            {d.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">{d.subtitle}</p>
          <Link
            to="/donar"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold tracking-widest uppercase px-8 py-2 rounded-full transition-colors"
          >
            {nav.donar} ❤️
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {d.cards.map((card, i) => (
            <HelpCard key={i} card={card} styles={CARD_STYLES[i]} icon={ICONS[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
