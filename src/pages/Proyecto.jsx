import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'

function SectionHeader({ label, title, subtitle }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">{label}</span>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4 leading-tight">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg leading-relaxed">{subtitle}</p>}
    </div>
  )
}

function PhaseItem({ item, index, isLast }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`relative flex gap-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1 bg-brand-500 ring-4 ring-white shadow-md" aria-hidden="true" />
        {!isLast && <div className="w-0.5 flex-1 bg-brand-200 mt-2" aria-hidden="true" />}
      </div>
      <div className="pb-10">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-500 mb-1">
          {item.phase}
        </span>
        <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
        <ul className="space-y-1">
          {item.points.map((point, i) => (
            <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-2">
              <span className="text-brand-400 flex-shrink-0">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function StatCard({ number, label, index }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl border border-brand-100 p-6 text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
      <p className="font-serif text-4xl font-bold text-brand-600 mb-2">{number}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{label}</p>
    </div>
  )
}

function MissionPoint({ point, index }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`flex gap-5 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
      <span className="font-serif text-4xl font-bold text-brand-300 flex-shrink-0 leading-none">{point.number}</span>
      <p className="text-gray-600 text-sm leading-relaxed pt-1">{point.text}</p>
    </div>
  )
}

export default function Proyecto() {
  const { t } = useLanguage()
  const d = t.proyecto

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Proyecto de investigación — El Reto de Claudia</title>
        <meta name="description" content="Terapia génica con CRISPR para la deficiencia de la proteína D-bifuncional (DBP): el enfoque científico, las fases del proyecto y la financiación necesaria." />
        <meta property="og:url" content="https://elretodeclaudia.org/proyecto" />
        <meta property="og:title" content="Proyecto de investigación — El Reto de Claudia" />
        <meta property="og:description" content="Terapia génica con CRISPR para la deficiencia de la proteína D-bifuncional (DBP): el enfoque científico, las fases del proyecto y la financiación necesaria." />
        <meta property="og:image" content="https://elretodeclaudia.org/og-default.png" />
        <meta name="twitter:title" content="Proyecto de investigación — El Reto de Claudia" />
        <meta name="twitter:description" content="Terapia génica con CRISPR para la deficiencia de la proteína D-bifuncional (DBP): el enfoque científico, las fases del proyecto y la financiación necesaria." />
        <meta name="twitter:image" content="https://elretodeclaudia.org/og-default.png" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-brand-50 pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">{d.badge}</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
              {d.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">{d.subtitle}</p>
          </div>
        </section>

        {/* Enfoque científico */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label={d.approach.sectionLabel} title={d.approach.title} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="font-serif text-xl font-semibold text-brand-800 mb-4">{d.approach.techTitle}</h3>
                <div className="space-y-4">
                  {d.approach.techParagraphs.map((p, i) => (
                    <p key={i} className="text-gray-600 text-sm leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>

              <div className="bg-brand-50 rounded-3xl p-8 border border-brand-100">
                <h3 className="font-serif text-xl font-semibold text-brand-800 mb-5">{d.approach.whyTitle}</h3>
                <ul className="space-y-4">
                  {d.approach.whyItems.map((item, i) => (
                    <li key={i}>
                      <p className="text-gray-900 font-semibold text-sm mb-0.5">{item.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed mt-8 max-w-4xl">{d.approach.references}</p>
          </div>
        </section>

        {/* Fases del proyecto */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label={d.phases.sectionLabel} title={d.phases.title} subtitle={d.phases.subtitle} />

            <div>
              {d.phases.items.map((item, i) => (
                <PhaseItem key={i} item={item} index={i} isLast={i === d.phases.items.length - 1} />
              ))}
            </div>
          </div>
        </section>

        {/* Colaboradores */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label={d.collab.sectionLabel} title={d.collab.title} subtitle={d.collab.text} />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {d.collab.stats.map((stat, i) => (
                <StatCard key={i} number={stat.number} label={stat.label} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Financiación */}
        <section className="py-20 bg-brand-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">{d.funding.sectionLabel}</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
                  {d.funding.title}
                </h2>
                <div className="space-y-4 mb-8">
                  {d.funding.paragraphs.map((p, i) => (
                    <p key={i} className="text-gray-600 text-sm leading-relaxed">{p}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/donar"
                    className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    {d.funding.ctaDonate}
                  </Link>
                  <Link
                    to="/#contacto"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-700 text-sm font-semibold px-6 py-3 rounded-xl border border-brand-200 transition-colors"
                  >
                    {d.funding.ctaContact}
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl border border-brand-100 shadow-sm p-10 text-center">
                  <p className="font-serif text-5xl font-bold text-brand-600 mb-2">{d.funding.amount}</p>
                  <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold">{d.funding.amountLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre AITEP */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label={d.aitep.sectionLabel} title={d.aitep.title} subtitle={d.aitep.intro} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {d.aitep.points.map((point, i) => (
                <MissionPoint key={i} point={point} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
