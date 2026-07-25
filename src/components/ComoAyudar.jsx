import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'

const INSTAGRAM_URL = 'https://www.instagram.com/elretodeclaudia'

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const CTA_CLASSES = 'inline-flex items-center gap-1.5 font-semibold text-sm text-brand-600 hover:text-brand-800 transition-colors'

function HelpCard({ card, index, isBig }) {
  const { ref, isVisible } = useScrollAnimation()
  const isInstagram = card.ctaType === 'instagram'
  const isDonate = card.ctaType === 'donate'

  const ctaContent = (
    <>
      {card.cta}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </>
  )

  return (
    <div
      ref={ref}
      className={`bg-white rounded-3xl overflow-hidden border-l-4 border-brand-500 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col ${
        isBig ? 'sm:col-span-2' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: isVisible ? `${index * 60}ms` : '0ms' }}
    >
      <div className="bg-brand-100 px-6 py-4">
        <h3 className="font-serif text-lg font-bold text-brand-800 leading-snug">{card.title}</h3>
      </div>

      <div className={`p-6 flex-1 flex flex-col ${isBig ? 'sm:flex-row sm:items-center sm:justify-between sm:gap-6' : ''}`}>
        <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>

        <div className={isBig ? 'flex sm:flex-shrink-0 mt-4 sm:mt-0' : 'mt-4'}>
          {isInstagram && (
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={CTA_CLASSES}>
              {ctaContent}
            </a>
          )}
          {isDonate && (
            <Link to="/donar" className={CTA_CLASSES}>
              {ctaContent}
            </Link>
          )}
          {!isInstagram && !isDonate && (
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); scrollTo('#contacto') }}
              className={CTA_CLASSES}
            >
              {ctaContent}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ComoAyudar() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { t } = useLanguage()
  const d = t.ayudar

  return (
    <section id="ayudar" className="py-24 bg-gray-50" aria-labelledby="ayudar-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">
            {d.sectionLabel}
          </span>
          <h2 id="ayudar-title" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
            {d.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{d.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {d.cards.map((card, i) => (
            <HelpCard key={i} card={card} index={i} isBig={i === d.cards.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
