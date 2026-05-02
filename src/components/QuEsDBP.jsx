import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'

const ICONS = [
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.536 8.464a5 5 0 010 7.072M12 18.364a9 9 0 010-12.728M8.464 15.536a5 5 0 010-7.072" /></svg>,
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM19.5 12A7.5 7.5 0 114.5 12a7.5 7.5 0 0115 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 9l6 6m0-6l-6 6" /></svg>,
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
]

function AnimatedCard({ symptom, icon, index }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 shadow-sm border border-brand-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 80}ms` : '0ms' }}
    >
      <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-600 mb-4">
        {icon}
      </div>
      <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">{symptom.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{symptom.text}</p>
    </div>
  )
}

export default function QuEsDBP() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation()
  const { ref: boxRef,   isVisible: boxVisible   } = useScrollAnimation()
  const { ref: statRef,  isVisible: statVisible  } = useScrollAnimation()
  const { t } = useLanguage()
  const d = t.dbp

  return (
    <section id="dbp" className="py-24 bg-white" aria-labelledby="dbp-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">
            {d.sectionLabel}
          </span>
          <h2 id="dbp-title" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
            {d.title}
          </h2>
          <p ref={introRef} className={`text-gray-600 text-lg leading-relaxed transition-all duration-700 delay-150 ${
            introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {d.intro.split('HSD17B4').map((part, i) =>
              i === 0 ? part : <span key={i}><strong className="text-gray-800">HSD17B4</strong>{part}</span>
            )}
          </p>
        </div>

        <div
          ref={boxRef}
          className={`bg-gradient-to-r from-brand-50 to-purple-50 rounded-3xl p-8 md:p-10 mb-16 border border-brand-100 transition-all duration-700 ${
            boxVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">{d.peroxTitle}</h3>
              <p className="text-gray-700 leading-relaxed">{d.peroxText}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {d.symptoms.map((s, i) => (
            <AnimatedCard key={i} symptom={s} icon={ICONS[i]} index={i} />
          ))}
        </div>

        <div
          ref={statRef}
          className={`text-center transition-all duration-700 ${
            statVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block bg-brand-950 text-white rounded-3xl px-10 py-8 max-w-2xl">
            <p className="font-serif text-4xl font-bold text-warm-300 mb-2">{d.statBadge}</p>
            <p className="text-purple-200 text-lg leading-relaxed">{d.statText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
