import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'

const COLORS = ['bg-brand-400', 'bg-brand-500', 'bg-brand-600', 'bg-brand-700', 'bg-warm-400']

function TimelineItem({ item, color, index }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
    >
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-1 ${color} ring-4 ring-white shadow-md`} aria-hidden="true" />
        {index < COLORS.length - 1 && (
          <div className="w-0.5 flex-1 bg-brand-200 mt-2" aria-hidden="true" />
        )}
      </div>
      <div className="pb-8">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-500 mb-1">
          {item.year}
        </span>
        <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">{item.label}</h3>
        <p className="text-gray-600 leading-relaxed">{item.text}</p>
      </div>
    </div>
  )
}

export default function HistoriaClaudia() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: photoRef, isVisible: photoVisible } = useScrollAnimation()
  const { t } = useLanguage()
  const d = t.historia

  return (
    <section id="historia" className="py-24 bg-brand-50" aria-labelledby="historia-title">
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
          <h2 id="historia-title" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
            {d.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{d.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div
              ref={photoRef}
              className={`transition-all duration-700 ${
                photoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <img
                src="/images/claudia2.jpeg"
                alt="Claudia"
                className="w-full rounded-3xl object-cover aspect-[4/3] mb-8 shadow-lg"
                style={{ objectPosition: '50% 25%' }}
              />
            </div>

            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>{d.p1}</p>
              <p>{d.p2}</p>
              <p>{d.p3}</p>
              <p className="font-medium text-gray-900">{d.p4}</p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-8">
              {d.timelineTitle}
            </h3>
            <div>
              {d.timeline.map((item, i) => (
                <TimelineItem key={i} item={item} color={COLORS[i]} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
