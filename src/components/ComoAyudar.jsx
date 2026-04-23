import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const CARD_STYLES = [
  { badge: 'bg-brand-100 text-brand-700', iconBg: 'bg-brand-100 text-brand-600', border: 'border-brand-200', cta: 'bg-brand-700 hover:bg-brand-800 text-white' },
  { badge: 'bg-warm-100 text-warm-600',   iconBg: 'bg-warm-100 text-warm-500',   border: 'border-warm-200',  cta: 'bg-warm-400 hover:bg-warm-500 text-white'   },
  { badge: 'bg-indigo-100 text-indigo-700', iconBg: 'bg-indigo-100 text-indigo-600', border: 'border-indigo-200', cta: 'bg-indigo-600 hover:bg-indigo-700 text-white' },
]

const ICONS = [
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>,
]

function HelpCard({ card, styles, icon, index }) {
  const { ref, isVisible } = useScrollAnimation()

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
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${styles.iconBg} mb-5`}>
          {icon}
        </div>
        <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
        <p className="text-gray-600 leading-relaxed">{card.text}</p>
      </div>
      <div className="mt-auto pt-4">
        <a
          href="#contacto"
          onClick={(e) => { e.preventDefault(); scrollTo('#contacto') }}
          className={`inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.cta}`}
        >
          {card.cta}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default function ComoAyudar() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { t } = useLanguage()
  const d = t.ayudar

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
          <p className="text-gray-600 text-lg leading-relaxed">{d.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {d.cards.map((card, i) => (
            <HelpCard key={i} card={card} styles={CARD_STYLES[i]} icon={ICONS[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
